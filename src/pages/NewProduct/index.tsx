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
import { Redirect } from 'react-router-dom';

const NewProduct: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [showFormAlert, setShowFormAlert] = useState<boolean>(false);
    const [newProductSuccess, setNewProductSuccess] = useState<boolean>(false);

    const saveProduct = async (product:IProduct) => {
        setLoading(true);
        setShowFormAlert(false);
        try{
            const productRegistrationResponse = await api.registerProduct(product);
            console.log(productRegistrationResponse);
            setNewProductSuccess(true);
        } catch (e) {
            setShowFormAlert(true);
        }
        setLoading(false);
    }

    return (
        <NewProductContainer>
            {newProductSuccess && <Redirect exact from="/products" to="/home" />}
            <NewProductHeader>New Product</NewProductHeader>
            <NewProductSubtitle>Fields with the <span>*</span> can't be empty</NewProductSubtitle>
            <ProductForm loading={loading} showFormAlert={showFormAlert} onFinish={(product) => saveProduct(product)}/>
        </NewProductContainer>
    )
}

export default NewProduct;