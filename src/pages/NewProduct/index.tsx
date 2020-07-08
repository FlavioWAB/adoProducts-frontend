import React, { useState } from 'react';
import PageContentWrapper from '../../components/PageContentWrapper';
import {
    NewProductContent,
    NewProductContainer,
    NewProductHeader,
    NewProductSubtitle
} from './styles';
import ProductForm from '../../components/ProductForm';
import { IProduct } from '../../models/Product';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

const NewProduct: React.FC = () => {

    const history = useHistory();
    const [loading, setLoading] = useState<boolean>(false);
    const [showFormAlert, setShowFormAlert] = useState<boolean>(false);

    const saveProduct = async (product:IProduct) => {
        setLoading(true);
        setShowFormAlert(false);
        try{
            const productRegistrationResponse = await api.registerProduct(product);
            history.push('/home');
            
        } catch (e) {
            setShowFormAlert(true);
        }
        setLoading(false);
    }

    return (
        <NewProductContainer>
            <NewProductHeader>New Product</NewProductHeader>
            <NewProductSubtitle>Fields with the <span>*</span> can't be empty</NewProductSubtitle>
            <ProductForm loading={loading} showFormAlert={showFormAlert} onFinish={(product) => saveProduct(product)}/>
        </NewProductContainer>
    )
}

export default NewProduct;