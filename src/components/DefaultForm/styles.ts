import styled from "styled-components";
import DefaultContainer from '../../components/DefaultContainer';
import colors from '../../styles/colors';

export const DefaultFormContainer = styled(DefaultContainer)`
    max-width: 780px;
`

export const DefaultFormHeader = styled.h1`
    font-size: 2.9rem;
    margin: 0;
`;

export const DefaultFormSubtitle = styled.h1`
    font-size: 1rem;
    color: ${colors.defaultFormSubtitle};
    span {
        color: ${colors.defaultFormSubtitleRequired};
    }
`;