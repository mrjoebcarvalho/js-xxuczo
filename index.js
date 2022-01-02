 import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Image } from 'antd';
import { Card } from 'react-bootstrap';
import './style.css';
import Avatar from 'react-avatar';
import { Layout, Menu,Button,size } from 'antd';
import {
  
  TeamOutlined,
  UserOutlined,
  SettingOutlined,
  MoreOutlined ,
  CarryOutOutlined,
  ExportOutlined,
  UploadOutlined,
  LineChartOutlined,
  VideoCameraOutlined,
  SearchOutlined,
  BellOutlined,
  CalendarOutlined,
  DownOutlined, 
  LoginOutlined,
  HomeOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SpaceVertical from "./card.js"
import Line from "./Linegraph.js"
import Bar from "./Bargraph.js"
import Bala from "./Members.js"
import Card2 from "./cardspart2.js"

const { Header, Content, Footer, Sider } = Layout;

ReactDOM.render(
  <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '200vh',
        position: 'fixed',
        left: 0,
      }}
    >
     <h1>B.</h1>
     <div className="increasedhi">
      <Menu theme="dar" mode="inline" defaultSelectedKeys={['4']} className="height-increase">
       
        

        <Menu.Item key="1" icon={<HomeOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<TeamOutlined />}>
          My Team
        </Menu.Item>
        <Menu.Item key="3" icon={<CarryOutOutlined />}>
          Task
        </Menu.Item>
        <Menu.Item key="4" icon={<CalendarOutlined />}>
         Calander
        </Menu.Item>
        <Menu.Item key="5" icon={<LineChartOutlined />}>
          Report
        </Menu.Item>
        <Menu.Item key="6" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
        <div className="log-out-b-u-tt-o-n"><Button type="primary" shape="" icon={<ExportOutlined />} size={size}>
          Logout
        </Button></div>
      </Menu>
      </div>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} >
      <section className="header-bbui">
     <nav>
       <h3>DashBoard</h3>
   <div className="nav-links">
     <ul>
       <li><SearchOutlined/></li>
       <li><BellOutlined /></li>
       <li> <Avatar className="avatar-1234" size={54} src="https://joeschmoe.io/api/v1/random" /> </li>
       <li><DownOutlined /></li>


     </ul>
   </div>
   </nav>
   </section>
        

        
        
        </Header>
      <Content style={{ margin: 'px 1px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          <div className="content1">

          <div className="firstrow">
            <div className="percent-card">
            <Card>
  
           <Card.Body>
            <Card2/>
   
           </Card.Body>
            </Card>

          
          </div>
        
          
          <div className="bargraph">
          <Card border="light"  className="thoda-upper" style={{ width: '37em' }}>
    
    <Card.Body>
     <div className="title-for-bar-graph">
       <p>Task Activitis</p>
       <div className="middle-content">
         <div className="doct1"></div>
         <div className="text1">Recived</div>

         <div className="doct2"></div>
         <div className="text2">Completed</div>
       </div>
       <div className="corner-content">
         <div className="underline">6 month <div className="downwardarr"> <DownOutlined /></div></div>
         
       </div>
       <div className="new-icon-for-it"><MoreOutlined /></div>
     </div>


     < Bar/>

    </Card.Body>
  </Card>
           
            </div>
          </div>


          <div className="secondrow">
          <div className="linegraph">

          <Card border="light" style={{ width: '50rem' }}>
    
    <Card.Body> 
      <div className="line-text-main">
     <div className="line-text-21">
       <p>Task Activitis</p>
       </div>
       <div className="line-text-22">
         <div className="line-text-23">6 month <div className="icons-24"> <DownOutlined /> </div> <div className="icon25"><MoreOutlined /></div></div>
       </div>
     
     </div>
     <Line/>

    </Card.Body>
  </Card>
             
             
             
             
             
             
             </div>






          <div className="memberlist">
          <Card style={{ width: '23rem' ,height:'22rem'}}>
  
  <Card.Body >
    <Card.Title>Team Member Performance</Card.Title>
    <Bala/>
    
  </Card.Body>
</Card>
            
            </div>
          </div>

         
        
         
          <br />
         
        </div>
        </div>
      </Content>
      
    </Layout>
  </Layout>,
  document.getElementById('container'),
);