import React, { FC } from 'react';
import { Form, message, Input, Button, Checkbox, Typography } from 'antd';
import { messages, toggleLoading, defaultFormProps, actions, showNotification } from '../../utils';
import { connect } from 'react-redux';
import { State } from '../../interfaces/state.interface';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user';
import { AnyAction } from '@reduxjs/toolkit';

const { Item } = Form;
const { Password } = Input;
const { Text } = Typography;

interface Props {
    loading: boolean;
    dispatch(action: AnyAction): void;
}

const LoginForm: FC<Props> = (props) => {

    const { loading } = props;
    const userService = new UserService();
    const [form] = Form.useForm();

    const handleSubmit = (): void => {
        try {
            toggleLoading();
            const user = form.getFieldsValue() as Pick<User, 'username' | 'password'>;
            userService.login(user).then((res) => {
                if (res) {
                    props.dispatch({
                        type: actions.SAVE_USER_DATA,
                        payload: res,
                    });
                    props.dispatch({
                        type: actions.TOGGLE_AUTH_STATE,
                    });
                    showNotification('success', 'Logged in successfully.');
                }
            });
        } catch (error) {
            toggleLoading();
            message.warning(messages.REQUEST_FAILED_DEFAULT);
        }
    };
    
    const handleSubmitFailed = (): void => {
        message.warning(messages.FORM_VALIDATION_FAILED);
    };

    return (
        <Form
            {...defaultFormProps}
            onFinish={handleSubmit}
            onFinishFailed={handleSubmitFailed}
            form={form}
        >
            <Item
                name="username"
                rules={
                    [
                        {
                            required: true,
                            message: 'Username is required',
                        },
                    ]
                }
            >
                <Input placeholder="Username" />
            </Item>
            <Item
                name="password"
                rules={
                    [
                        {
                            required: true,
                            message: 'Password is required',
                        },
                    ]
                }
            >
                <Password placeholder="Password" />
            </Item>

            <Item
                style={{
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                }}
            >
                <Button
                    htmlType="submit"
                    type="primary"
                    block
                    loading={loading}
                >
                    Login
                </Button>
                <div className="flex flex-row justify-between py-4">
                    <div>
                        <Checkbox>
                            Remember me
                        </Checkbox>
                    </div>
                    <div>
                        <Text
                            type="secondary"
                            className="cursor-pointer"
                        >
                            Forgot Password?
                        </Text>
                    </div>
                </div>
            </Item>

        </Form>
    );
};

const mappedProps = (state: State): { loading: boolean } => {
    return {
        loading: state.app.isLoading,
    };
};

export default connect(mappedProps)(LoginForm);
