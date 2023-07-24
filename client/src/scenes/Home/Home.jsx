import React from "react";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import Navbar from "../../components/Navbar/Navbar";
import { Card, Col, Row,Button, Checkbox, Form, Input } from 'antd';

const Home = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
      const items = [{key: '1', label: 'FORMS'},{ key: '2', label: 'Sections' }, { key: '3', label: 'Questions' }, { key: '4', label: 'Account information' }];
    
    
      const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      return (
        <>

        <Layout className="layout">
              <Navbar />
              <Content
                style={{
                  padding: '0 50px',
                  minHeight: 'calc(100vh - 64px - 70px)',
                }}
              >
                <Breadcrumb
                  style={{
                    margin: '16px 0',
                  }}
                >
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-content"
                  style={{
                    background: colorBgContainer,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '20px',
                  }}
                >
    <Card title="Log in as an administrator" headStyle={{backgroundColor:"#82CD47"}} style={{ border: "2px solid black",width:"19rem" }}>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button  style={{backgroundColor:"#82CD47"}} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Card>
    <Card title="Answer a form"  headStyle={{backgroundColor:"#82CD47"}} style={{ border: "2px solid black",width:"19rem" }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>

                </div>
              </Content>
              <Footer
                style={{
                  textAlign: 'center',
                }}
              >
                Forms ©2023 Created by Marcos Silva
              </Footer>
            </Layout>
        
            </>
    )
};

export default Home;