import React from 'react';
import { connect } from 'react-redux';

class ComB extends React.Component {
  handleClick = () => {
    this.props.getProList();
  }

  render() {
    return (
      <button onClick={this.handleClick}>发送action获取商品列表</button>
    );
  };
}

const mapStateToProps = (state) => {
  console.log('ComB:', state);
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProList: () => {
      dispatch({
        type: 'get_proList',
      })
    }
  }
}

// 第一个参数接受
// 第二个参数发送
export default connect(mapStateToProps, mapDispatchToProps)(ComB);