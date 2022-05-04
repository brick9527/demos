/**
 * @description 根据action调整任务状态
 * @param {String} originState - 原状态
 * @param {String} action - 行为
 * @returns {String|Error} - 目标状态
 */
function changeState(originState, action) {
  // 等待 -> 运行中
  if (originState === 'PENDING' && action === 'run') {
    console.log(`任务状态由 ${originState} -> RUNNING`);
    return 'RUNNING';
  }

  // 运行中 -> 完成
  if (originState === 'RUNNING' && action === 'end') {
    console.log(`任务状态由 ${originState} -> END`);
    return 'END';
  }

  throw new Error('Invalid action');
}

if (require.main === module) {
  changeState();
}

module.exports = changeState;
