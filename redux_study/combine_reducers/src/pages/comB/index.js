import React from 'react';
import { connect } from 'react-redux';

class ComB extends React.Component {
  handleClick = () => {
    this.props.getProList();
  }

  renderList = () => {
    if (!this.props.proList) {
      return null;
    }
    return this.props.proList.map(item => {
      return (
        <div key={item.name}>
          <div>名称：{item.name}</div>
          <div>价格：{item.price}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>发送action获取商品列表</button>
        <br />
        商品列表
        {this.renderList()}
      </>
    );
  };
}

const mapStateToProps = (state) => {
  console.log('ComB:', state);
  return { ...state.pro };
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