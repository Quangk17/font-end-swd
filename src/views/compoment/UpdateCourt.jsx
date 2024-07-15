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
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Please input the description!' }]}
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item
                label="Status Color"
                name="statusColor"
                rules={[{ required: true, message: 'Please select a status color!' }]}
            >
                <Select>
                    <Select.Option value="red">Red</Select.Option>
                    <Select.Option value="green">Green</Select.Option>
                    <Select.Option value="blue">Blue</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Date"
                name="date"
                rules={[{ required: true, message: 'Please select a date!' }]}
            >
                <DatePicker />
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
