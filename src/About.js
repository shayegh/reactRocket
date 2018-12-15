import React, { Component } from 'react';
import { Row, Col } from 'antd';
import MyHeader from './sections/MyHeader';
import Wellcome from './sections/Wellcome';

export default class About extends Component {
    render() {
        return (
            <Row type="flex" justify="center" >
                <Col span={23}>
                    <MyHeader selectedMenu="morepage:about" />
                    <Wellcome title="About Page" />
                </Col>
            </Row>)
    }
}