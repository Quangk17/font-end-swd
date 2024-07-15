/* eslint-disable */
import React from 'react';
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Select,
    TreeSelect,
} from 'antd';
const { RangePicker } = DatePicker;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
    },
};
const AddNewCourt = () => (
    <Form
        {...formItemLayout}
        variant="filled"
        style={{
            paddingLeft: 400
        }}
    >
        <Form.Item
            label="CourtName"
            name="CourtName"
            rules={[
                {
                    required: true,
                    message: 'Please input!',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Slot"
            name="Slot"
            rules={[
                {
                    required: true,
                    message: 'Please input!',
                },
            ]}
        >
            <InputNumber
                style={{
                    width: '100%',
                }}
            />
        </Form.Item>

        <Form.Item
            label="Discription"
            name="Discription"
            rules={[
                {
                    required: true,
                    message: 'Please input!',
                },
            ]}
        >
            <Input.TextArea />
        </Form.Item>

        <Form.Item
            label="Adress"
            name="Adress"
            rules={[
                {
                    required: true,
                    message: 'Please input!',
                },
            ]}
        >
            <Mentions />
        </Form.Item>
        <Form.Item
            label="Price"
            name="Price"
            rules={[
                {
                    required: true,
                    message: 'Please input!',
                },
            ]}
        >
            <Mentions />
        </Form.Item>

    </Form>
);
export default AddNewCourt;