import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';

export default class Wellcome extends Component {
  render() {
    return (
      <Row>
        <Col>
          <h1 className="header_title">{this.props.title}</h1>
          <p className="header_discription">lore ere r  ererer erererer e xlksd' fdsfsd jfdsf </p>
          <Button type="primary">
            Hello
            </Button>
        </Col>
      </Row>
    );
  }
}