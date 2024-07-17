/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Form, Input, Select } from 'antd';

const UpdateUser = ({ user, onUpdateUser }) => {
  const [form] = Form.useForm();

  const handleFormSubmit = (values) => {
    const updatedUser = { ...user, ...values };
    onUpdateUser(updatedUser);
  };

  return (
    <Form form={form} initialValues={user} onFinish={handleFormSubmit} layout="vertical" style={{ maxWidth: 600 }}>
      <Form.Item label="ID" name="id">
        <Input disabled />
      </Form.Item>
      <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input the name!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Phone Number" name="phonenumber" rules={[{ required: true, message: 'Please input the name!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Gender" name="gender" rules={[{ required: true, message: 'Please select a gender!' }]}>
        <Select>
          <Select.Option value="black">Male</Select.Option>
          <Select.Option value="black">Female</Select.Option>
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

export default UpdateUser;
