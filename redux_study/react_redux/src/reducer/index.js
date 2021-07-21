// 设置一个默认的state
const initState = {
  value: 0
};

const reducer = (state = initState, action) => {
  switch(action.type) {
    case 'add':
      return { value: state.value + 1 };
    case 'decrese':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

export default reducer;
