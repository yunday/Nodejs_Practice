var name = 'k8805';
var letter = 'Dear '+name+'\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit '+name+', sed do eiusmod tempor incididunt ut labore et '+name+' dolore magna aliqua. Ut enim '+name+' minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non '+name+' proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

var a = '1';  // 문자 1이라는 데이터 타입을 표현하는 리터
// 리터럴은 정보를 표현하는 기호
// ` 가 template literal의 시작과 끝을 나타냄

var letter = `Dear ${name}

Lorem ipsum dolor sit amet, consectetur adipisicing elit ${1+1}, sed do eiusmod tempor incididunt ut labore et ${name} dolore magna aliqua. Ut enim ${name} minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ${name} proident, sunt in culpa qui officia deserunt mollit anim id`

console.log(letter);
