import { Layout } from "antd";
import styled from "styled-components";

const { Content } = Layout;

export const InternalLayout = styled(Layout)`
    min-height: 100%;
`;

export const InternalContent = styled(Content)`
    padding: 50px;
    @media (max-width: 767px){
        padding: 20px;
    }
`;