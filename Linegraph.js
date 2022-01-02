import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ReactDOM from 'react-dom';
import { Avatar, Divider, Tooltip } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import Demo from './avatar.js';

import "./style.css";
const data = [
  {
    name: 'Jan ',
    uv: 4000,
    pv: 2400,
    amt: 2400,
    title:"w",
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
    title:"w",
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
    title:"w",
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
    title:"w",
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
    title:"w",
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
    title:"w",
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
    title:"w",
  },
];
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + "https://yt3.ggpht.com/QPhHD5WdP0uQbozfPKu0eXcaNGpJaI8p_fzFo5V7bkrGsdfUm9qjctnBDLWrtjg_uqm9KwxQwg=s88-c-k-c0x00ffffff-no-rj"+ ')',
};
export default function Line() {
  return (
    <div>
       <ResponsiveContainer width="105%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3"  vertical=""/>
          <XAxis dataKey="name" />
          
         
          
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={{fill:"#2e4355",stroke:"#8884d8"}}activeDot={{ r: 6 }} />
          <Tooltip contentStyle={divStyle}/>
          
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
ReactDOM.render(<Line />, document.getElementById('container'));