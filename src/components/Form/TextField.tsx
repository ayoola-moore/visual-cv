import { Form, Input } from "antd";
import React from "react";

interface ITextField {
  name: string;
  label: string;
  rules?: object[];
}

const TextField = ({ name, label, rules }: ITextField) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <Input />
    </Form.Item>
  );
};

export default TextField;
