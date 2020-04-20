import React, { FC } from 'react';
import { Form, message, Input, Button, Checkbox, Typography } from 'antd';
import { messages, toggleLoading, defaultFormProps } from '../../utils';
import { connect } from 'react-redux';
import { State } from '../../interfaces/state.interface';

const { Item } = Form;
const { Password } = Input;
const { Text } = Typography;

interface LoginData {
    username: string;
    password: string;
}

interface Props {
    loading: boolean;
}

const LoginForm: FC<Props> = (props) => {

    const { loading } = props;
    const [form] = Form.useForm();

    const handleSubmit = async (): Promise<void> => {
        try {
            toggleLoading();
            const user = form.getFieldsValue();
            console.log(user);
        } catch (error) {
            toggleLoading();
            return message.warning(messages.REQUEST_FAILED_DEFAULT);
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
