
import { Layout, Button, Pagination } from 'antd';
import styled from 'styled-components';
import colors from '../../styles/colors';
import DefaultContainer from '../../components/DefaultContainer';
import Search from 'antd/lib/input/Search';

const { Header, Content } = Layout;

export const HomeLayout = styled(Layout)`
    height: 100%;
`;

export const HomeHeader = styled(Header)`
    @media (max-width: 767px){
        padding: 0 20px;
    }
`;

export const HomeContainer = styled(DefaultContainer)`
    display: flex;
    height: 100%;
    justify-content: space-between;
    color: ${colors.primaryTextColor};
`;

export const HomeContent = styled(Content)`
    padding: 50px;
    overflow: auto;
    @media (max-width: 767px){
        padding: 20px;
    }
`;

export const HeaderLogo = styled.img`
    height: 100%;
    padding: 0.7rem;
`;

export const HeaderAvatarWraper = styled.div``;

export const HeaderAvatarDropdownWrapper = styled.div`
    cursor: pointer;
`;

export const HomeNewProductButton = styled(Button)`
    margin-bottom: 1rem;
`;

export const HomeSearch = styled(Search)`
    margin-bottom: 1rem;
`;

export const HomePagination = styled(Pagination)`
    display: flex;
    justify-content: center;
`