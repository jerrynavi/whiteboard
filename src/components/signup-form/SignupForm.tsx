import React, { FC } from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { State } from '../../interfaces/state.interface';
import { defaultFormProps, toggleLoading, actions, showNotification } from '../../utils';
import { UserService } from '../../services/user';
import { User } from '../../interfaces/user.interface';
import { AnyAction } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';

const { Item } = Form;
const { Password } = Input;

interface Props {
    loading: boolean;
    dispatch(action: AnyAction): void;
}

const SignupForm: FC<Props> = (props) => {

    const { loading } = props;
    const userService = new UserService();
    const [form] = Form.useForm();
    const history = useHistory();

    const handleSubmit = (): void => {
        try {
            toggleLoading();
            const data = form.getFieldsValue();
            userService.signup(data as User).then((user: User) => {
                if (user) {
                    props.dispatch({
                        type: actions.SAVE_USER_DATA,
                        payload: user,
                    });
                    props.dispatch({
                        type: actions.TOGGLE_AUTH_STATE,
                    });
                    showNotification('success', 'Account created successfully');
                    history.push('/dashboard');
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Form
            {...defaultFormProps}
            onFinish={handleSubmit}
            form={form}
        >
            <Item
                name="username"
                rules={
                    [
                        {
                            required: true,
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
                        },
                    ]
                }
            >
                <Password placeholder="Password" />
            </Item>
            <Item
                name="email"
                rules={
                    [
                        {
                            type: 'email',
                        },
                    ]
                }
            >
                <Input placeholder="Email (Optional, but some features require it)" type="email" />
            </Item>
            <Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                >
                    Register
                </Button>
            </Item>
        </Form>
    );
};

const mappedProps = (state: State): { loading: boolean } => {
    return {
        loading: state.app.isLoading,
    };
};

export default connect(mappedProps)(SignupForm);
