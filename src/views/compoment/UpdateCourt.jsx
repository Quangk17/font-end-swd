import React from 'react';
import { Button, Form, Input, InputNumber, Mentions, Select, Cascader, TreeSelect, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const UpdateCourt = ({ court, onUpdateCourt }) => {
    const [form] = Form.useForm();

    const handleFormSubmit = (values) => {
        const updatedCourt = { ...court, ...values };
        onUpdateCourt(updatedCourt);
    };

    return (
        <Form
            form={form}
            initialValues={court}
            onFinish={handleFormSubmit}
            layout="vertical"
            style={{ maxWidth: 600 }}
        >
            <Form.Item label="ID" name="id">
                <Input disabled />
            </Form.Item>
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input the name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="StoreID"
                name="storeid"
                rules={[{ required: true, message: 'Please input the name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Slot"
                name="slot"
                rules={[{ required: true, message: 'Please select a slot for court!' }]}
              >
                <Select>
                  <Select.Option value="black">1</Select.Option>
                  <Select.Option value="black">2</Select.Option>
                  <Select.Option value="black">3</Select.Option>
                  <Select.Option value="black">4</Select.Option>
                  <Select.Option value="black">5</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UpdateCourt;
