import React from 'react';
import { connect } from 'react-redux';

class ComA extends React.Component {
  handleClick = () => {
    this.props.getUsers();
  }

  render() {
    return (
      <button onClick={this.handleClick}>发送action获取用户信息</button>
    );
  };
}

const mapStateToProps = (state) => {
  console.log('ComA:', state);
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch({
        type: 'get_users',
      })
    }
  }
}

// 第一个参数接受
// 第二个参数发送
export default connect(mapStateToProps, mapDispatchToProps)(ComA);