
import { Layout, Button, Pagination } from 'antd';
import styled from 'styled-components';
import Search from 'antd/lib/input/Search';
// TODO: update colors
const { Header, Content } = Layout;

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