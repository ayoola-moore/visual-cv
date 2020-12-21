import { Form, Select } from "antd";
import React from "react";

const { Option } = Select;

interface ISelectFieldProps {
  name: string;
  label: string;
  type?: string;
  options: string[] | undefined;
}

const SelectField = ({ name, label, options }: ISelectFieldProps) => {
  return (
    <Form.Item name={name} label={label} rules={[{ required: true }]}>
      <Select
        placeholder="Select a option and change input text above"
        onChange={() => {}}
        allowClear
      >
        {options?.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default SelectField;
