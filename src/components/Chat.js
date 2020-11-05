import React from 'react';
import './Chat.scss';

class Chat extends React.Component {
  state = {
    refer: '',
    msg: '아무래도 영화API는 개인이 쓰기에 장벽들이 많네요. 소켓을 통한 채팅서비스를 넣겠습니다! '
  };

 clickMsg = () => {
    alert(this.state.msg);
  }

  render () {
    return (
      <div className="chat" onClick={this.clickMsg}>
        <img src="/chat-icon.png" alt='chat'/>
      </div>
    )
  }
}

export default Chat;