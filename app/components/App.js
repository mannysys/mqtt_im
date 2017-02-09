'use strict'
import React, {Component} from 'react';
import mqtt from 'mqtt';
import '../assets/css/app.css';
import Topic from './Topic';
import Chat from './Chat';
import ChatForm from './ChatForm';
import User from './User';


const client = mqtt.connect('mqtt://localhost:7410');
//监听连接服务器成功
client.on('connect', function () {

});
client.subscribe('sys/pub/now');  //订阅

client.on('reconnect', () => { //重新连接时触发
  console.log('正在重新连接服务器...');
});
client.on('close', () => {  //连接关闭时触发
  console.log('连接关闭...');
});
client.on('error', (err) => { //连接错误时触发
  console.log('连接有错误...', err);
});
client.on('offline', () => {
  console.log('Event：offline');
});


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentWillMount(){
    this._client()
  }
  _client() {

  }
  //接收输入框消息数据
  _onHandleMsg(objData){
    let comments = this.state.data;

    client.publish('sys/pub/now', objData.message); //发布
    client.on('message', (topic, message) => { //监听处理订阅数据

      let newComments = comments.concat(objData); // concat是连接两个或多个数组
      this.setState({data: newComments});
    });

  }

  render() {
    return (
      <div className="main">
        <Topic/>
        <div className="chat-wrapper">
          <Chat data={this.state.data}/>
          <ChatForm
            onHandleMsg={this._onHandleMsg.bind(this)}/>
        </div>
        <User/>
      </div>
    )

  }


}