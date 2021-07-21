import { connect } from 'react-redux';

function Button(props) {
  // 计数+1事件
  const addHandler = () => {
    props.add();
  };

  // 计数-1事件
  const decreseHandler = () => {
    props.decrese();
  };

  return (
    <>
      <button onClick={addHandler}> + </button>
      <br />
      <button onClick={decreseHandler}> - </button>
    </>
  );
}

// 定义mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  
  // 返回一个对象，该对象每个方法就是一个action，所有的这些action都将绑定到组件的props参数上
  return {
    add: () => {
      dispatch({ type: 'add' });
    },
    decrese: () => {
      dispatch({ type: 'decrese' });
    }
  };
};

// 使用connect包裹/增强组件
// 这里不需要该组件获取store中的值，故第一个参数mapstateToProps就无需定义
export default connect(null, mapDispatchToProps)(Button);