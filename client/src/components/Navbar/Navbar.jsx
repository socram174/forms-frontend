import { useState } from "react";
import { Layout } from 'antd';
const { Header } = Layout;

const Navbar = () => {
    return (
        
        <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="demo-logo" />
        <h1 key = {1} style={{color: "#82CD47", fontSize:"35px"}}>FORMS</h1>




      </Header>
    )
};

export default Navbar;