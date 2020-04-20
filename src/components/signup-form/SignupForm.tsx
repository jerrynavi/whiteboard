import React, { FC } from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { State } from '../../interfaces/state.interface';
import { defaultFormProps } from '../../utils';

const { Item } = Form;
const { Password } = Input;

interface Props {
    loading: boolean;
}

interface SignupData {
    username: string;
    password: string;
    email?: string;
}

const SignupForm: FC<Props> = (props) => {

    const { loading } = props;
    const [form] = Form.useForm();

    const handleSubmit = (): void => {
        // 
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
