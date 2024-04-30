"use client";

import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const Signin = () => {
  return (
    <main className="min-h-dvh flex items-center justify-center">
      <Form
        className="shadow-md rounded-md p-10 w-[70%] sm:w-[400px] space-y-3.5"
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <div className="space-y-1 mb-2">
          <h2 className="text-center font-bold text-2xl">Sign In</h2>
          <p className="text-center text-gray-600">
            Enter your credentials to access the system.
          </p>
        </div>

        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full rounded-full"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
};

export default Signin;
