import React from 'react';
import { LoadingSkeleton, LoadingLabel } from './styles';
import { ILoadingForm } from '../../models/Components';

const LoadingForm: React.FC<ILoadingForm> = ({ rowCount }) => {
    const rows = [];
    for (let i = 0; i < rowCount; i++) {
        rows.push(<div key={i}>
            <LoadingLabel active size="small" />
            <LoadingSkeleton active size="large" />
        </div>)
    }

    return <div>{rows}</div>;
};

export default LoadingForm;
