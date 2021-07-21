import { connect } from 'react-redux';

function Counter(props) {
  return (
    <div>{props.value}</div>
  );
}

// 定义mapstateToProps，直接将state进行返回
const mapstateToProps = (state) => {
  return state;
};

// 使用connect包裹/增强组件
// 该组件不需要发送action，所以无需传入mapDispatchToProps参数
export default connect(mapstateToProps)(Counter);