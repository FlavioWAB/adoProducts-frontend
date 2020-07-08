import React from 'react';
import Home from '../Home';
import PageContentWrapper from '../../components/PageContentWrapper';
import Header from '../../components/Header';
import { InternalLayout, InternalContent } from './styles';
import { Switch, Route } from 'react-router-dom';
import NewProduct from '../NewProduct';
import EditProduct from '../EditProduct';

const Internal: React.FC = () => {
    return (
        <PageContentWrapper>
            <InternalLayout>
                <Header />
                <InternalContent>
                    <Switch>
                        <Route path='/home' exact component={Home} />
                        <Route path='/products/' exact component={NewProduct} />
                        <Route path='/products/:id' component={EditProduct} />
                    </Switch>
                </InternalContent>
            </InternalLayout>
        </PageContentWrapper>
    )
}

export default Internal;