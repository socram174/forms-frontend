import { useState } from "react";
import { Layout, Button } from 'antd';
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
          justifyContent: 'space-between',
        }}
      >
        


        <div>
          <h1 key = {1} style={{color: "#82CD47", fontSize:"35px"}}>FORMS</h1>
        </div>
        <div style={{display:"flex", alignItems:'center', gap:'10%'}}>
          <h1 onClick={()=>{
            navigate('/admin/profile');
          }} style={{color:'white'}}>Profile</h1>
        <Button type="primary" danger onClick={()=>{
          dispatch(setLogout());
          navigate('/');
        }}>Log out
        </Button>
        </div>

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