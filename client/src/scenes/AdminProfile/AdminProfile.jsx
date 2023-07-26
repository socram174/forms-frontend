import { useState } from "react";
import { useSelector } from "react-redux";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
import Navbar from "../../components/Navbar/Navbar";
import {
  Card,
  Col,
  Row,
  Button,
  Checkbox,
  Form,
  Input,
  Alert,
  Descriptions,
  Modal,
} from "antd";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";

const AdminProfile = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);
  const token = useSelector((state) => state.token);

  const onFinishCall = async (values) => {
    console.log("Success:", values);
    setModalText("Sending your changes...");
    setConfirmLoading(true);
    const updated = {
      name: values.name,
      email: values.email,
      token: token,
    };
    console.log("Updated: ", updated);
    const response = await fetch(
      `${import.meta.env.VITE_BASE_APP_URL}api/admins/edit/${admin._id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updated),
      }
    );
    const updatedAdmin = await response.json();
    console.log(updatedAdmin);
    dispatch(
      setLogin({ admin: updatedAdmin.admin, token: updatedAdmin.token })
    );
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //Modal
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <Layout className="layout">
        <Navbar />
        <Content
          style={{
            padding: "0 50px",
            minHeight: "calc(100vh - 64px - 70px)",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Admin profile</Breadcrumb.Item>
          </Breadcrumb>
          <Descriptions
            title="User information"
            extra={
              <Button
                onClick={showModal}
                style={{ backgroundColor: "#82CD47" }}
                type="primary"
                htmlType="submit"
              >
                Edit
              </Button>
            }
            bordered
            column={{
              xxl: 2,
              xl: 1,
              lg: 1,
              md: 1,
              sm: 1,
              xs: 1,
            }}
          >
            <Descriptions.Item
              labelStyle={{ backgroundColor: "green" }}
              label="Name"
            >
              {admin.name}
            </Descriptions.Item>
            <Descriptions.Item label="Email">{admin.email}</Descriptions.Item>
            <Descriptions.Item label="Registered">{admin.createdAt}</Descriptions.Item>
            <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
            <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
            <Descriptions.Item label="Official">$60.00</Descriptions.Item>
            <Descriptions.Item label="Config Info">
              Data disk type: MongoDB
              <br />
              Database version: 3.4
              <br />
              Package: dds.mongo.mid
              <br />
              Storage space: 10 GB
              <br />
              Replication factor: 3
              <br />
              Region: East China 1
            </Descriptions.Item>
          </Descriptions>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Forms ©2023 Created by Marcos Silva
        </Footer>
      </Layout>
      <Modal
        title="Edit your information"
        open={open}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
            name: admin.name,
            email: admin.email,
          }}
          onFinish={(values) => {
            onFinishCall(values).then(() => {
              setOpen(false);
              setConfirmLoading(false);
            });
          }}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          ></Form.Item>
          <Button
            style={{ backgroundColor: "#82CD47" }}
            type="primary"
            htmlType="submit"
            loading={confirmLoading}
          >
            Confirm
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default AdminProfile;
