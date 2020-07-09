
import { Layout } from 'antd';
import styled from 'styled-components';
import colors from '../../styles/colors';
import DefaultContainer from '../../components/DefaultContainer';

const { Header } = Layout;

export const HeaderWrapper = styled(Header)`
    @media (max-width: 767px){
        padding: 0 20px;
    }
`;

export const HeaderContainer = styled(DefaultContainer)`
    display: flex;
    height: 100%;
    justify-content: space-between;
    color: ${colors.primaryTextColor};
`;

export const HeaderLogo = styled.img`
    height: 100%;
    padding: 0.7rem;
    padding-left: 0;
`;

export const HeaderAvatarWraper = styled.div``;

export const HeaderAvatarDropdownWrapper = styled.div`
    cursor: pointer;
`;