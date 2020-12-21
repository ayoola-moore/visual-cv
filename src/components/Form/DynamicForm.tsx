import { Button, Form } from "antd";
import React, { useEffect, useState } from "react";
import SelectField from "./SelectField";
import TextField from "./TextField";

interface IFormField {
  name: string;
  label: string;
  type: string;
  options?: string[];
}

interface IQuestion {
  title: string;
  fields: IFormField[];
}

interface IFormData {
  formData: {
    questions: IQuestion[];
  };
}

interface IProps {
  data: {};
}

const DynamicForm: React.FC<IProps> = ({ data }) => {
  const [form] = Form.useForm();

  const [{ formData }, setState] = useState<IFormData>({
    formData: {
      questions: [],
    },
  });

  const onFinish = (data: any) => {
    console.log(`form value`, data);
  };

  useEffect(() => {
    setTimeout(() => {
      const formObj = JSON.parse(JSON.stringify(data));
      setState({
        formData: formObj,
      });
    }, 0);
  }, [data]);

  return (
    <div className="wrapper">
      <Form form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item>
          {formData?.questions?.map((question, i) => {
            return (
              <div key={i} className={"field-wrapper"}>
                <h3>{question.title}</h3>
                {question.fields.map(({ type, name, label, options }) => {
                  if (type === "text") {
                    return (
                      <TextField
                        name={name}
                        label={label}
                        key={name}
                        rules={[
                          {
                            required: true,
                            message: `Please input your ${label}!`,
                          },
                        ]}
                      />
                    );
                  } else {
                    return (
                      <SelectField
                        name={name}
                        label={label}
                        key={name}
                        options={options}
                      />
                    );
                  }
                })}
              </div>
            );
          })}
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DynamicForm;
