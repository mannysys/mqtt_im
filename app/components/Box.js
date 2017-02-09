'use strict'
import  React, {Component} from 'react'
import {Row, Col} from 'antd';
import '../assets/css/box.css';

/*
* 聊天内容框
* */
export default class Box extends Component {

  render() {
    return (
      <div className="app-msg-panel">
        <Row gutter={1}>
          <Col push={2} span={24}>
            <span>@Manny</span>
            <span>{this.props.date}</span>
          </Col>
        </Row>
        <Row gutter={2}>
          <Col span={2}>
            <img className="avatar-img" src="https://avatars2.githubusercontent.com/u/9432873?v=3&s=60"/>
          </Col>
          <Col span={22}>
            <div className="app-msg-body">
              {this.props.children}
            </div>
          </Col>
        </Row>
      </div>
    )
  }


}