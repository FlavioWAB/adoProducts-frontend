import React, { useState } from 'react';
import PageContentWrapper from '../../components/PageContentWrapper';
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { useAuth } from '../../hooks/auth';
import { ISignInCredentials } from '../../models/User';
import { Link } from 'react-router-dom';
import { ExternalPageContainer, ExternalPageFormWrapper, ExternalPageFormAlert, ExternalLogo } from '../../components/ExternalPage';
import { HTTPResponseCodes } from '../../models/Constants';
import { AlertProps } from 'antd/lib/alert';

const Login: React.FC = () => {

    const [loginLoading, setLoginLoading] = useState<boolean>(false);
    const [signUpAlert, setSignUpAlert] = useState<boolean>(false);
    const [signUpAlertText, setSignUpAlertText] = useState<String>('');
    const [signUpAlertType, setSignUpAlertType] = useState<AlertProps["type"]>('warning');

    const authentication = useAuth();

    const onFinish = async (values: ISignInCredentials) => {
        setLoginLoading(true);
        setSignUpAlert(false);
        try {
            await authentication.signIn(values);
        } catch (e) {
            const responseStatus: Number = e.response?.status as Number || 0;
            setSignUpAlert(true);

            if (responseStatus === HTTPResponseCodes.UNAUTHORIZED) {
                setSignUpAlertText('E-mail and password do not match.');
                setSignUpAlertType('error');
            } else {
                setSignUpAlertText('Something went wrong, please try again.');
                setSignUpAlertType('warning');
            }
            setLoginLoading(false);
        }
    };

    return (
        <PageContentWrapper>
            <ExternalPageContainer>
                <ExternalLogo />
                <ExternalPageFormWrapper>

                    {signUpAlert && <ExternalPageFormAlert showIcon message={signUpAlertText} type={signUpAlertType} />}

                    <Form name="normal_login" onFinish={onFinish} >
                        <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Please input your Email!' }]} >
                            <Input size="large" prefix={<MailOutlined />} placeholder="Email" />
                        </Form.Item>

                        <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]} >
                            <Input size="large" prefix={<LockOutlined />} type="password" placeholder="Password" />
                        </Form.Item>

                        <Form.Item>
                            <Button block type="primary" loading={loginLoading} htmlType="submit">
                                Log in
                            </Button>Or <Link to="/signup">register now!</Link>
                        </Form.Item>
                    </Form>
                </ExternalPageFormWrapper>
            </ExternalPageContainer>
        </PageContentWrapper>
    );
};

export default Login;
