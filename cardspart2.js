import React from "react";
import "./index.css";
import { Card } from 'react-bootstrap';
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import {MoreOutlined} from '@ant-design/icons'

export default function Card2() {
  return (
    <>
      <div className="kard-first-row">
      <Card className="kard" style={{ width: '24rem' }}>
      <Card.Body>
    <div className="col1">
    <Card.Title className="card-Title">Works </Card.Title>
    <div className="symbol"> <MoreOutlined /></div>
    </div>
   
   <div className="col2">
    <Progress className="circle" strokeColor={'yellow'} type="circle" percent={50} width={70} />
    <div className="text-for-card">
    <div className="text-for-card-1">75</div>
    <div className="text-forocard2">Works Today</div>
    </div>
 </div>
</Card.Body>
</Card>

<Card className="kard" style={{ width: '24rem' }}>
      <Card.Body>
    <div className="col1">
    <Card.Title className="card-Title">Analytics   </Card.Title>
    <div className="symbol"> <MoreOutlined /></div>
    </div>
   
   <div className="col2">
    <Progress className="circle" type="circle" percent={25} strokeColor={'orange'} width={70} />
    <div className="text-for-card">
    <div className="text-for-card-1">310</div>
    <div className="text-forocard2">Analytics Today</div>
    </div>
 </div>
</Card.Body>
</Card>

</div>

<div className="kard-second-row">
<Card className="kard" style={{ width: '24rem' }}>
      <Card.Body>
    <div className="col1">
    <Card.Title className="card-Title">Statistics  </Card.Title>
    <div className="symbol"> <MoreOutlined /></div>
    </div>
   
   <div className="col2">
    <Progress className="circle" type="circle" percent={59} strokeColor={'purple'} width={70} />
    <div className="text-for-card">
    <div className="text-for-card-1">75</div>
    <div className="text-forocard2">Works Today</div>
    </div>
 </div>
</Card.Body>
</Card>

<Card className="kard" style={{ width: '24rem' }}>
      <Card.Body>
    <div className="col1">
    <Card.Title className="card-Title">Tasks </Card.Title>
    <div className="symbol"> <MoreOutlined /></div>
    </div>
   
   <div className="col2">
    <Progress className="circle" type="circle" percent={75} width={70} />
    <div className="text-for-card">
    <div className="text-for-card-1">15</div>
    <div className="text-forocard2">Task Today</div>
    </div>
 </div>
</Card.Body>
</Card>





</div>



    </>
  );
}
ReactDOM.render(<Card2 />, document.getElementById('container'));