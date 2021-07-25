const proList = [
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
];

const proReducer = (state = {}, action) => {
  console.log(action);
  switch(action.type) {
    case 'get_proList':
      return { proList };
    default:
      return state;
  }
}

export default proReducer;