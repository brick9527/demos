const { createMachine, interpret } = require('xstate');

// Stateless machine definition
// machine.transition(...) is a pure function used by the interpreter.
const toggleMachine = createMachine({
  id: 'task',
  initial: 'pengding',
  states: {
    pengding: { on: { start: 'running' } },
    running: { on: { end: 'end' } },
    end: {},
  }
});

// Machine instance with internal state
const toggleService = interpret(toggleMachine)
  .onTransition((state) => console.log('1111', state.value))
  .start();
// => 'inactive'

toggleService.send('start');
// => 'active'

toggleService.send('end');
// => 'inactive'