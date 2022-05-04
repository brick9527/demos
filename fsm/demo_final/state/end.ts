import State from './state';

class End extends State {
  stateName: string = '结束';

  start(): State {
    console.log('已完成任务无法进入run状态');
    return this;
  }

  stop(): State {
    console.log('已完成任务无法进入end状态');
    return this;
  }
}

export default End;