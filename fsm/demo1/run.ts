import State from './state';
import End from './end';

class Run extends State {
  stateName: string = '运行中';

  start(): State {
    console.log('运行任务无法进入start状态');
    return this;
  }

  stop(): State {
    this._state = new End();
    return this._state;
  }
}

export default Run;