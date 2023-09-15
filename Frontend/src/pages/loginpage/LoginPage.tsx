import React from "react";
import image from "../../assets/CK-Marching-Photo.jpg";
import { CKLogo } from "../../assets";
import { Divider, Button, Checkbox, Form, Input } from "antd";

const LoginPage = () => {
  return (
    <div className="relative bg-ck-photo bg-no-repeat bg-cover bg-center h-full w-full items-center overflow-hidden">
      <div className="absolute h-full w-full top-0 left-0 bg-overlay flex justify-center items-center">
        <div className=" bg-white h-[55%] w-2/5 rounded-lg min-w-min min-h-[25rem] p-4 opacity-98">
          <div className=" w-full h-[25%] min-w-min flex justify-center items-center">
            <img
              className=" h-4/5 w-[28%] min-w-[90px] max-h-[127px] min-h-[60px]"
              src={CKLogo}
            />
          </div>
          <div className="w-full h-[2%] flex justify-center items-center">
            <Divider
              dashed
              style={{
                margin: "0px",
                borderWidth: "4px 0 0",
                borderColor: "#D3D3D3",
              }}
            />
          </div>
          <div className=" w-full h-[73%] min-w-fit">
            <div className="w-full h-[15%] flex justify-center items-center text-3xl">
              Login Admin
            </div>
            <div className="w-full h-[85%] min-w-[300px] flex justify-center items-start mt-1">
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 0 }}
                layout="vertical"
                initialValues={{ remember: true }}
                autoComplete="off"
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                  labelCol={{ span: 12 }}
                >
                  <Input style={{ border: "1px solid black" }} />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password style={{ border: "1px black solid" }} />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 0 }}>
                  <Button type="primary">Submit</Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
