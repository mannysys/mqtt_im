'use strict'
import React, {Component} from 'react'
import '../assets/css/user.css';

/*
* 右边显示在线用户
* */
export default class User extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="chat-user">
        <button>用户</button>
      </div>
    )

  }

}