import { useState } from "react";
import { Layout } from 'antd';
const { Header } = Layout;
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../state";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const admin = useSelector((state) => state.admin);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    


    if(admin){
      return (
        
        <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 key = {1} style={{color: "#82CD47", fontSize:"35px"}}>FORMS</h1>
        <button onClick={()=>{
          dispatch(setLogout());
          navigate('/');
        }}>Log out</button>

      </Header>
    )
    }

    if(!admin){
      return (
        
        <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 key = {1} style={{color: "#82CD47", fontSize:"35px"}}>FORMS</h1>

      </Header>
    )
    }



};

export default Navbar;