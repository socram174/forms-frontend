import React from "react";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import Navbar from "../../components/Navbar/Navbar";
import { Card, Col, Row,Button, Checkbox, Form, Input, Alert} from 'antd';

const AdminPage = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();


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
                  <Breadcrumb.Item>Admin page</Breadcrumb.Item>
                </Breadcrumb>

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
    );

};

export default AdminPage;