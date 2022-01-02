import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';
import { Space, Card } from 'antd';
import { Progress } from 'antd';

export default function SpaceVertical() {
  return (
    <>
    <div>
    <Space direction="">
      <Card title="Works" style={{ width: 300,height:100 }}>
      <Progress type="circle" percent={7} />
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Analytics" style={{ width: 300 }}>
      <Progress type="circle" percent={7} />
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
    </div>

    <div>
    <Space direction="">
      <Card title="Statistics" style={{ width: 300 }}>
      <Progress type="circle" percent={7} />
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="task" style={{ width: 300 }}>
      <Progress type="circle" percent={7} />
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
    </div>
    </>
  );
}

ReactDOM.render(<SpaceVertical />, document.getElementById('container'));