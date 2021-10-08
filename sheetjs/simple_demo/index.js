const XLSX = require('xlsx');
const dayjs = require('dayjs');

async function main() {
  // 创建一个空的工作台
  const wb = XLSX.utils.book_new();

  const ws_data = [
    [ "S", "h", "e", "e", "t", "J", "S" ],
    [  1 ,  2 ,  3 ,  4 ,  5 , { v: dayjs().format('YYYY-MM-DD HH:mm:ss'), t: 's' }]
  ];

  const ws = XLSX.utils.aoa_to_sheet(ws_data);

  var ws_name = "SheetJS";

  XLSX.utils.book_append_sheet(wb, ws, ws_name);

  XLSX.writeFile(wb, Date.now() + 'out.xlsx');
}

main();