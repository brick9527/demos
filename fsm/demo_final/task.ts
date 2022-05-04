import Pending from "./state/pending";
import State from "./state/state";

class Task {
  private _curState: State;

  constructor() {
    this._curState = new Pending();
  }

  get curState(): String {
    return this._curState.stateName;
  }

  start() {
    this._curState = this._curState.start();
    console.log(`当前状态 ${this._curState.stateName}`);
  }

  stop() {
    this._curState = this._curState.stop();
    console.log(`当前状态 ${this._curState.stateName}`);
  }
}

const task = new Task();

task.start();

task.start();

task.stop();