import React from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import { IProductForm } from '../../models/Product';
import { InputNumberFullWidth } from './styles';

const ProductForm: React.FC<IProductForm> = ({ onFinish, loading, showFormAlert }) => {

	return (
		<Form
			layout="vertical"
			name="basic"
			initialValues={{}}
			onFinish={onFinish}
		>
			<Form.Item
				label="Name"
				name="name"
				rules={[{ required: true, message: 'Field "name" can\'t be empty.' }]}
			>
				<Input size="large" />
			</Form.Item>

			<Form.Item
				label="Description"
				name="description"
				rules={[{ required: true, message: 'Field "description" can\'t be empty.' }]}
			>
				<Input size="large" />
			</Form.Item>

			<Form.Item
				label="Category"
				name="category"
				rules={[{ required: true, message: 'Field "category" can\'t be empty.' }]}
			>
				<Input size="large" />
			</Form.Item>

			<Form.Item
				label="Price"
				name="price"
				rules={[{ type: "number", required: true, message: 'Field "price" can\'t be empty.' }]}
			>
				<InputNumberFullWidth
					formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
					parser={value => value.replace(/\$\s?|(,*)/g, '')}
					size="large" />
			</Form.Item>

			<Form.Item
				label="Avaliable Units"
				name="avaliableUnits"
				rules={[{ type: "number", required: true, message: 'Field "avaliable units" can\'t be empty.' }]}
			>
				<InputNumberFullWidth size="large" />
			</Form.Item>


			<Form.Item>
				<Button loading={loading} block type="primary" htmlType="submit">
					Submit
        		</Button>
			</Form.Item>
		</Form>
	);
};

export default ProductForm;
