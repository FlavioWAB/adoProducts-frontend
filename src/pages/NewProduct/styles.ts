import { Layout } from "antd";
import styled from "styled-components";
import DefaultContainer from '../../components/DefaultContainer';

const { Content } = Layout;

export const NewProductContent = styled(Content)`
    overflow: auto;
`;

export const NewProductContainer = styled(DefaultContainer)`
    max-width: 780px;
`

export const NewProductHeader = styled.h1`
    font-size: 2.9rem;
    margin: 0;
`;
export const NewProductSubtitle = styled.h1`
    font-size: 1rem;
    color: #808080;
    span {
        color: #ff4646;
    }
`;