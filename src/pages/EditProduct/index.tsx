import React, { useState, useEffect } from 'react';
import ProductForm from '../../components/ProductForm';
import { IProduct } from '../../models/Product';
import api from '../../services/api';
import { useParams, useHistory } from 'react-router-dom';
import LoadingForm from '../../components/LoadingForm';
import {
    DefaultFormContainer,
    DefaultFormHeader,
    DefaultFormSubtitle
} from '../../components/DefaultForm/styles';
import { Alert } from 'antd';

const EditProduct: React.FC = () => {

    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState<boolean>(false);
    const [fetching, setFetching] = useState<boolean>(true);
    const [product, setProduct] = useState<IProduct>();
    const [showFormAlert, setShowFormAlert] = useState<boolean>(false);
    const [showEmptyRequest, setShowEmptyRequest] = useState<boolean>(false);

    // Gets only the changed data between obj1 and obj2, with the exception of the meta keys.
    const getObjectDifference = (obj1: object, obj2: object) => {
        const getKeyValue = <T extends object, U extends keyof T>(key: U) => (obj: T) => obj[key];

        return Object.keys(product).reduce((diff, key) => {
            if (getKeyValue(key as never)(obj1) === getKeyValue(key as never)(obj2) ||
                ['createdAt', 'id', 'isActive', 'updatedAt'].indexOf(key) !== -1) {
                return diff
            }
            return {
                ...diff,
                [key]: getKeyValue(key as never)(obj2)
            }
        }, {})
    }

    const saveProduct = async (updateData: Partial<IProduct>) => {

        const updatedProduct = getObjectDifference(product, updateData);
        setLoading(true);
        setShowFormAlert(false);

        console.log(updatedProduct);

        if(Object.keys(updatedProduct).length === 0){
            setShowEmptyRequest(true);
            setLoading(false);
            return;
        }

        try {
            const productRegistrationResponse = await api.editProduct(id, updatedProduct);
            history.push('/home');
        } catch (e) {
            setShowFormAlert(true);
        }
        setLoading(false);
    }

    const getProduct = async () => {
        try {
            const response = await api.getProductData(id);
            setProduct(response.data.product);
        } catch (e) {
            setShowFormAlert(true);
        }
        setFetching(false);
    }

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <DefaultFormContainer>
            <DefaultFormHeader>Edit Product {product && ` - ${product.name}`}</DefaultFormHeader>
            <DefaultFormSubtitle>Fields with the <span>*</span> can't be empty</DefaultFormSubtitle>
            {showEmptyRequest && <Alert message="There are no changes to submit." type="warning" showIcon />}
            {fetching ?
                <LoadingForm rowCount={5} /> :
                <ProductForm product={product} loading={loading} showFormAlert={showFormAlert} onFinish={(product) => saveProduct(product)} />
            }
        </DefaultFormContainer>
    )
}

export default EditProduct;