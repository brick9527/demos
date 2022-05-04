abstract class State {
  abstract stateName: string;
  protected _state: any;

  abstract start(): State;

  abstract stop(): State;
}

export default State;