const initState = {};

const mockData = {
  userData: {
    username: 'zhangsan',
    age: 18
  },
  proList: [
    {
      name: '衣服',
      price: 399
    },
    {
      name: '裤子',
      price: 199,
    },
    {
      name: '帽子',
      price: 99
    },
    {
      name: '鞋子',
      price: 129
    }
  ]
}

const rootReducer = (state = initState, action) => {
  console.log(action);
  switch(action.type) {
    case 'get_users':
      return { ...mockData.userData };
    case 'get_proList':
      return { proList: mockData.proList };
    default:
      return state;
  }
}

export default rootReducer;