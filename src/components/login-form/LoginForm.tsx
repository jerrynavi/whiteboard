import React, { FC } from 'react';
import { Form, message, Input, Button } from 'antd';
import { messages } from '../../utils';

const { Item } = Form;
const { Password } = Input;

interface LoginData {
    username: string;
    password: string;
}

const LoginForm: FC = () => {

    const [form] = Form.useForm();

    const handleSubmit = async (): Promise<void> => {
        try {
            const user = await form.validateFields() as LoginData;
            console.log(user);
        } catch (error) {
            return message.warning(messages.FORM_VALIDATION_FAILED);
        }
    };

    return (
        <Form
            onFinish={handleSubmit}
            layout="vertical"
            hideRequiredMark
            colon={false}
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

            <Button
                htmlType="submit"
                type="primary"
            >
                Login
            </Button>
        </Form>
    );
};

export default LoginForm;
