'use strict'
import  React, {Component} from 'react'
import '../assets/css/chat.css';
import Box from './Box'

/*
 * 显示聊天内容框列表
 */
export default class Chat extends Component {


  render() {
    let keyid = 0;
    let chatNodes = this.props.data.map((item) => {
      return (
        <Box key={keyid++} date={item.date} >
          {item.message}
        </Box>
      );
    });
    return(
      <div className="chat-content">
        {chatNodes}
      </div>
    )
  }


}
