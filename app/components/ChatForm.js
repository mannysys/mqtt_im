'use strict'
import  React, {Component} from 'react'
import {Input} from 'antd';
import '../assets/css/chatform.css';

/*
* 聊天输入表单
* */
export default class ChatForm extends Component {
  constructor(props){
    super(props)
  }

  _handleOnKeyPress(e){
    // e.preventDefault(); //去掉这个事件默认要做的事
    var press = e.which || e.keyCode;
    if(press === 13){
      let msg = e.target.value
      this.props.onHandleMsg({message: msg, date: '刚刚'});
      e.target.value = ''
    }

  }
  render() {
    return (
      <div className="chat-input">
        <Input
          type="textarea"
          placeholder="send message"
          autosize={{minRows: 3, maxRows: 6}}
          style={{resize: 'none'}}
          onKeyPress={this._handleOnKeyPress.bind(this)} />
      </div>
    )
  }


}
