const StateMachine = require('javascript-state-machine');
var visualize = require('javascript-state-machine/lib/visualize');
const fs = require('fs');
const path = require('path');

(function main() {
  var Wizard = StateMachine.factory({
    init: '等待',
    transitions: [
      // { name: '开始',  from: '等待', to: '运行中', dot: { headport: 'w',  tailport: 'ne' } },
      // { name: '运行成功',  from: '运行中', to: '成功', dot: { headport: 'w',  tailport: 'e' } },
      // { name: '运行失败',  from: '运行中', to: '失败', dot: { headport: 'w',  tailport: 'e' } },
      // { name: '暂停',  from: '运行中', to: '暂停', dot: { headport: 'w',  tailport: 'e' } },
      // { name: '恢复',  from: '暂停', to: '运行中', dot: { headport: 'w',  tailport: 'e' } },
      // { name: '终止',  from: '运行中', to: '终止', dot: { headport: 'w',  tailport: 'e' } },
      // { name: '复测',  from: '终止', to: '等待', dot: { headport: 'w',  tailport: 'e' } },
      // { name: '复测',  from: '成功', to: '等待', dot: { headport: 'w',  tailport: 'e' } },
      // { name: '复测',  from: '失败', to: '等待', dot: { headport: 'w',  tailport: 'e' } },
      { name: '开始',  from: '等待', to: '运行中', },
      { name: '运行成功',  from: '运行中', to: '成功', },
      { name: '运行失败',  from: '运行中', to: '失败', },
      { name: '暂停',  from: '运行中', to: '暂停', },
      { name: '恢复',  from: '暂停', to: '运行中', },
      { name: '终止',  from: '运行中', to: '终止',},
      { name: '终止',  from: '暂停', to: '终止',},
      { name: '复测',  from: '终止', to: '等待', },
      { name: '复测',  from: '成功', to: '等待',  },
      { name: '复测',  from: '失败', to: '等待',},
    ]
  });
  
  const result = visualize(Wizard, { name: 'door',orientation: 'horizontal' })

  fs.writeFileSync(path.join(__dirname, '1.dot'), result);
})()
