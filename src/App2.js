import React, { Component } from 'react';
import { Row, Col} from 'antd';
import MyHeader from './sections/MyHeader';
import Wellcome from './sections/Wellcome';
// import logo from './logo.svg';
import './styles/App.css';

class App2 extends Component {


  render() {
    return (
      <Row type="flex" justify="center" >
        <Col span={24}>
          <MyHeader selectedMenu="home"/>
          <Wellcome title="My Shop"/>
        </Col>
      </Row>


    );
  }
}

export default App2;
