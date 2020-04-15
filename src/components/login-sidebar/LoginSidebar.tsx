import React, { FC } from 'react';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const LoginSidebar: FC = () => {

    return (
        <div className="text-center">
            <Title level={2}>
                Collaborate and Create
            </Title>

            <Text className="text-xl" type="secondary">
                &quot;If [you] could say it in words, there would be no reason to paint.&quot;
            </Text>

            <div className="m-4">
                <img
                    alt="creativity"
                    src="/assets/creativity.svg"
                    style={{
                        width: 'auto',
                        maxHeight: '300px',
                    }}
                />
            </div>
        </div>
    );
};

export default LoginSidebar;
