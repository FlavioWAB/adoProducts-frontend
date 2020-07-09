import React, { useState } from 'react';
import {
    DefaultFormContainer,
    DefaultFormHeader,
    DefaultFormSubtitle
} from '../../components/DefaultForm/styles';
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
        <DefaultFormContainer>
            <DefaultFormHeader>New Product</DefaultFormHeader>
            <DefaultFormSubtitle>Fields with the <span>*</span> can't be empty</DefaultFormSubtitle>
            <ProductForm loading={loading} showFormAlert={showFormAlert} onFinish={(product) => saveProduct(product)}/>
        </DefaultFormContainer>
    )
}

export default NewProduct;