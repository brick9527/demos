const StateMachine = require('javascript-state-machine');

(function main() {
  const fsm = new StateMachine({
    init: 'pending',
    transitions: [
      { name: 'start', from: 'pending', to: 'running' },
      { name: 'end', from: 'running', to: 'end' },
    ],
    methods: {
      onStart: function() { console.log('on start') },
      onEnd: function() { console.log('on end') },
    }
  });

  console.log(fsm.state);
  fsm.start();
  console.log(fsm.state);
  fsm.start();
})()