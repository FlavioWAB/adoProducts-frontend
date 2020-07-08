import React, { useState, useEffect } from 'react';
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
import { useParams, useHistory } from 'react-router-dom';
import LoadingForm from '../../components/LoadingForm';

const EditProduct: React.FC = () => {

    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState<boolean>(false);
    const [fetching, setFetching] = useState<boolean>(true);
    const [product, setProduct] = useState<IProduct>();
    const [updatedProduct, setUpdatedProduct] = useState<Partial<IProduct>>();
    const [showFormAlert, setShowFormAlert] = useState<boolean>(false);

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

        setUpdatedProduct(getObjectDifference(updateData, product));

        setLoading(true);
        setShowFormAlert(false);

        try {
            const productRegistrationResponse = await api.editProduct(id, updateData);
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
        <NewProductContainer>
            <NewProductHeader>Edit Product - </NewProductHeader>
            <NewProductSubtitle>Fields with the <span>*</span> can't be empty</NewProductSubtitle>
            {fetching ?
                <LoadingForm rowCount={5} /> :
                <ProductForm product={product} loading={loading} showFormAlert={showFormAlert} onFinish={(product) => saveProduct(product)} />
            }
        </NewProductContainer>
    )
}

export default EditProduct;