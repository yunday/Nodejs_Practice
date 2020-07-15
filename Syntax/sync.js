var fs = require('fs');

/*
//readFileSync
console.log('A');
var result = fs.readFileSync('./sample.txt', 'utf8');
console.log(result);
console.log('C');
*/

console.log('A');
fs.readFile('./sample.txt', 'utf8', function (err, result) {
  // result는 읽은 파일의 내용
  console.log(result);
}); //비동기적인것을 선호
//return이 안되고 함수를 세번째 인자로 주어야함
console.log('C');

//결과는 ACB 왜냐면 함수의 결과가 나오기 전에 c가 실행이 되어 더 빨리 출력됨

//nodejs는 반드시 비동기적인 방식으로 해야함
