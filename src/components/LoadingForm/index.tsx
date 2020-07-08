import React from 'react';
import { LoadingSkeleton, LoadingLabel } from './styles';
import { ILoadingForm } from '../../models/Components';

const LoadingForm: React.FC<ILoadingForm> = ({ rowCount }) => {
    const rows = Array(rowCount).fill(<>
        <LoadingLabel active size="small" /> 
        <LoadingSkeleton active size="large" />
    </>); 
    return <div>{rows}</div>;
};

export default LoadingForm;
