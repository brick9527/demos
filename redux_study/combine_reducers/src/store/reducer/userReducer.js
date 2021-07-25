const userData = {
  username: 'zhangsan',
  age: 18
};

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case 'get_users':
      return { ...userData };
    default:
      return state;
  }
};

export default userReducer;