import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { List, Avatar } from 'antd';
import Avatar from 'react-avatar';

const data = [
  {
    title: 'Rahul',
    designation: "Manager",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
   
  },
  {
    title: 'Aditya',
    designation: "UI/UX designer",
    image: "https://randomuser.me/api/portraits/men/0.jpg",
   
  },
  {
    title: 'Rishi',
    designation: "Web developer",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
   
  },
  {
    title: 'Dhruv',
    designation: "HR",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
   
  },
  {
    title: 'Kathan',
    designation: "Motion designe",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
   
  },
  {
    title: 'Aryan',
    designation: "Product manager",
    image: "https://randomuser.me/api/portraits/men/37.jpg",
   
  },
  {
    title: 'Surya',
    designation: "Marketing",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
  },
  {
    title: 'John',
    designation: "Sales",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
   
  },
];

export default function Bala(){
  return (
  <>
  <div
  id="scrollableDiv"
  style={{
    height: 300,
    width:350,
    overflow: 'auto',
    padding: '0 16px',
    border: '1px solid rgba(140, 140, 140, 0.35)',
  }}
>

  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <div className="star"></div>
        <List.Item.Meta
          avatar={<Avatar shape="square" size={64}  src={item.image} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description={<p>{item.designation}</p>}
        />
        <div className="cgpa">9.8</div>
      </List.Item>
     
    )}
  />,
  </div>,
 

  </>
);
    }

ReactDOM.render(<Bala />, document.getElementById('container'));
