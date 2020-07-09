import styled from 'styled-components';
import { Card } from 'antd';
import colors from '../../../styles/colors';

export const ProductGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
    mark {
        padding-left: 0;
        padding-right: 0;
    }
    @media (min-width: 768px){
        grid-template-columns: 1fr 1fr;
    }
`;

export const ProductGridCard = styled(Card)`
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    .ant-card-body{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &::after,
        &::before{
            display: none;
        }
    }
`;

export const ProductGridNotFound = styled.div`
    display: none;
    flex-direction: column;  
    color: ${colors.productNotFound};
    text-align: center;
    font-size: 1.4rem;
    grid-column: 1 / span 2;
    span {
        font-size: 8rem;
        margin-bottom: 2rem;
    }
    &:first-child{
        display: flex;
    }
`;

export const ProductPrice = styled.p`
    font-size: 1.5rem;
    text-align: right;
    font-weight: bold;
    margin: 1rem 0 0;
`;

export const ProductCategory = styled.p`
    margin: .5rem 0;
`;

export const ProductStock = styled.p`
    font-size: 0.9rem;
    text-align: right;
    margin: 0;
`;
