import React, { PureComponent } from 'react';
import { LineChart,BarChart,Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ReactDOM from 'react-dom';

import "./style.css";

const data = [
  {
    "name": "jan ",
    "completed": 4000,
    "Recived": 2400
  },
  {
    "name": "Feb ",
    "completed": 3000,
    "Recived": 1398
  },
  {
    "name": "March",
    "completed": 2000,
    "Recived": 9800
  },
  {
    "name": "April",
    "completed": 2780,
    "Recived": 3908
  },
  {
    "name": "May",
    "completed": 1890,
    "Recived": 4800
  },
  {
    "name": "June",
    "completed": 2390,
    "Recived": 3800
  },
  
]


export default function Bar() {
  return (
    <div>
       <BarChart width={450} height={370} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  
  <Legend />
  <Bar dataKey="Recived" fill="#3954FF" />
  <Bar dataKey="completed" fill="#FFD339" />
</BarChart>
    </div>
  );
}
ReactDOM.render(<Bar />, document.getElementById('container'));