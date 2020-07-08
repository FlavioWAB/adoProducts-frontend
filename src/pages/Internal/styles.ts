import { Layout } from "antd";
import styled from "styled-components";

const { Content } = Layout;

export const InternalLayout = styled(Layout)`
    height: 100%;
`;

export const InternalContent = styled(Content)`
    padding: 50px;
    overflow: auto;
    @media (max-width: 767px){
        padding: 20px;
    }
`;