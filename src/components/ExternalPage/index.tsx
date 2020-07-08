
import styled from 'styled-components';
import { Alert } from 'antd';

export const ExternalPageContainer = styled.div`
    max-width: 400px;
    width: 100%;
    padding: 4rem 1rem 1rem;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const ExternalPageFormWrapper = styled.div`
    margin: 0 -1rem;
    padding: 1rem;
    background-color: white;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
`

export const ExternalPageFormAlert = styled(Alert)`
    margin-bottom: 1rem;
`
