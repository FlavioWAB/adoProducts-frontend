import React, { useState } from 'react';
import PageContentWrapper from '../../components/PageContentWrapper';
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import companyLogo from '../../img/company-logo.png'
import { IUser, IAuthData } from '../../models/User';

import api from '../../services/api';

import { useAuth } from '../../hooks/auth';

import { ExternalPageContainer, ExternalPageFormWrapper, ExternalPageFormAlert, ExternalLogo } from '../../components/ExternalPage';
import { AlertProps } from 'antd/lib/alert';
import { HTTPResponseCodes } from '../../models/Constants';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
    const authentication = useAuth();

    const [signUpLoading, setSignUpLoading] = useState<boolean>(false);
    const [signUpAlert, setSignUpAlert] = useState<boolean>(false);
    const [signUpAlertText, setSignUpAlertText] = useState<String>('');
    const [signUpAlertType, setSignUpAlertType] = useState<AlertProps["type"]>('warning');

    const onFinish = async (userData: IUser) => {
        setSignUpLoading(true);
        setSignUpAlert(false);
        
        try{
            const userRegistrationResponse = await api.registerUser(userData);
            authentication.setLoggedIn(userRegistrationResponse.data as IAuthData);
        } catch (e) {

            const responseStatus: Number = e.response?.status as Number || 0;
            setSignUpAlert(true);

            if(responseStatus === HTTPResponseCodes.CONFLICT){
                setSignUpAlertText('This e-mail is already registered');
                setSignUpAlertType('error');
            } else {
                setSignUpAlertText('Something went wrong, please try again');
                setSignUpAlertType('warning');
            }
            setSignUpLoading(false);
        }
    };

    return (
        <PageContentWrapper>
            <ExternalPageContainer>
                <ExternalLogo />
                <ExternalPageFormWrapper>
                    <Form name="user_signup" onFinish={onFinish} >
                        {signUpAlert && <ExternalPageFormAlert showIcon message={signUpAlertText} type={signUpAlertType} />}
                        <Form.Item label="Full name" name="name" rules={[{ required: true, message: 'Please input your Name!' }]} >
                            <Input size="large" prefix={<UserOutlined />} placeholder="Full name" />
                        </Form.Item>

                        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please input your Email!' }]} >
                            <Input size="large" prefix={<MailOutlined />} placeholder="Email" />
                        </Form.Item>

                        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your Password!' }]} >
                            <Input size="large" prefix={<LockOutlined />} type="password" placeholder="Password" />
                        </Form.Item>

                        <Form.Item>
                            <Button block type="primary" loading={signUpLoading} htmlType="submit">
                                Sign up
                            </Button>Or <Link to="/">login now!</Link>
                        </Form.Item>
                    </Form>
                </ExternalPageFormWrapper>
            </ExternalPageContainer>
        </PageContentWrapper>
    );
};

export default SignUp;
