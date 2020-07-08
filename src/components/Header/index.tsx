import React, { useState, useEffect } from 'react';
import {
	Avatar,
	Menu,
	Dropdown,
} from 'antd';
import {
	UserOutlined,
	DownOutlined
} from '@ant-design/icons';
import { useAuth } from '../../hooks/auth';
import {
	HeaderWrapper,
	HeaderLogo,
	HeaderAvatarWraper,
	HeaderAvatarDropdownWrapper,
	HeaderContainer
} from './styles';
import { Link } from 'react-router-dom';
import headerLogo from '../../img/company-header-logo.png';
import headerLogoMini from '../../img/company-header-logo-mini.png';

const Header: React.FC = () => {

	const authentication = useAuth();
	const firstName = authentication.user.name.split(' ')[0];

	const LogoutDropdownContent = (
		<Menu>
			<Menu.Item onClick={() => authentication.signOut()} key="0">
				Logout
			</Menu.Item>
		</Menu>
	);
	return (
		<HeaderWrapper>
			<HeaderContainer>
				<Link to='/home'>
					<picture>
						<source media="(max-width: 767px)" srcSet={headerLogoMini} />
						<source media="(min-width: 768px)" srcSet={headerLogo} />
						<HeaderLogo src={headerLogoMini} alt="Company logo" />
					</picture>
				</Link>
				<HeaderAvatarDropdownWrapper>
					<Dropdown overlay={LogoutDropdownContent} trigger={['click']}>
						<HeaderAvatarWraper>
							<Avatar icon={<UserOutlined />} /> Hello, {firstName} <DownOutlined />
						</HeaderAvatarWraper>
					</Dropdown>
				</HeaderAvatarDropdownWrapper>
			</HeaderContainer>
		</HeaderWrapper>
	);
};

export default Header;
