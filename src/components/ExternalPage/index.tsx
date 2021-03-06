
import styled from 'styled-components';
import { Alert } from 'antd';
import companyLogo from '../../img/company-logo.png';
import React from 'react';
import colors from '../../styles/colors';

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
    background-color: ${colors.externalFormBackground};
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    label {
        display: none;
    }
`

export const ExternalPageFormAlert = styled(Alert)`
    margin-bottom: 1rem;
`;

const ExternalLogoElement = styled.img`
    object-fit: contain;
    margin-bottom: 1rem;
`;

export const ExternalLogo: React.FC = () => <ExternalLogoElement alt="adoProduct logo" src={companyLogo} />;