const XLSX = require('xlsx');
const _ = require('lodash');
const dayjs = require('dayjs');

function parseContent(data, header) {
  return data.reduce((total, item) => {
    const row = [];
    for (let i = 0; i < header.length; i++) {
      const headerItem = header[i];
      const value = _.get(item, headerItem.field);
      if (headerItem.type === 'date') {
        row.push(dayjs(value).format('YYYY-MM-DD HH:mm:ss'));
        continue;
      }
      row.push(value);
    }
    console.log(row);
    total = total.concat(row);
    return total;
  }, []);
}

function createXlsxFile(sheet, fileName) {
  // 实例化XLSX
  const workbench = XLSX.utils.book_new();

  // 依次生成每个sheet
  for (let i = 0; i < sheet.length; i++) {
    const sheetItem = sheet[i];
    const sheetDContent = [];
    // 生成表格头
    const headerRow = _.get(sheetItem, 'header', []).map(item => item.label);
    sheetDContent.push(headerRow);

    const data = parseContent(_.get(sheetItem, 'data', []), sheetItem.header);
    sheetDContent.push(data);
    const workSheet = XLSX.utils.aoa_to_sheet(sheetDContent);
    XLSX.utils.book_append_sheet(workbench, workSheet, sheetItem.sheetName);
  }
  XLSX.writeFile(workbench, fileName + '.xlsx');
}

async function main() {
  const data = [
    {
      sheetName: 'my_sheet',
      header: [
        { label: '姓名', type: 'string', field: 'name' },
        { label: '年龄', type: 'string', field: 'age' },
        { label: '班级', type: 'string', field: 'class' },
        { label: '爱好', type: 'string', field: 'hobby' },
        { label: '入学时间', type: 'date', field: 'time' },
      ],
      data: [
        { name: '张三',  age: 18, class: 5, hobby: '打游戏', time: new Date()}
      ]
    }
  ];
  createXlsxFile(data, Date.now() + 'parsed');
}

main();