import State from './state';
import Run from './run';

class Pending extends State {
  stateName: string = '等待中';

  start(): State {
    this._state = new Run();
    return this._state;
  }

  stop(): State {
    console.log('等待任务无法进入end状态');
    return this;
  }
}

export default Pending;