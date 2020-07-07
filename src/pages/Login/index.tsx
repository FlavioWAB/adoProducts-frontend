import React, { useState } from 'react';
import { LoginContainer, LoginLogo, LoginFormWrapper } from './styles';
import PageContentWrapper from '../../components/PageContentWrapper';
import { Form, Input, Button, Checkbox } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import companyLogo from '../../img/company-logo.png'
import { useAuth } from '../../hooks/auth';
import { ISignInCredentials } from '../../models/User';
const Login: React.FC = () => {

    const [loginLoading, setLoginLoading] = useState<boolean>(false);
    const authentication = useAuth();

    const onFinish = (values: ISignInCredentials) => {
        authentication.signIn(values)
    };

    return (
        <PageContentWrapper>
            <LoginContainer>
                <LoginLogo src={companyLogo} />
                <LoginFormWrapper>
                    <Form name="normal_login" onFinish={onFinish} >
                        <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Please input your Email!' }]} >
                            <Input prefix={<MailOutlined />} placeholder="Email" />
                        </Form.Item>

                        <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]} >
                            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                        </Form.Item>

                        <Form.Item>
                            <Button block type="primary" loading={loginLoading} htmlType="submit">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </LoginFormWrapper>
            </LoginContainer>
        </PageContentWrapper>
    );
};

export default Login;
