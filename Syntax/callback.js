/*function a(){
  console.log('A');
}*/
var a = function(){ // 이름이 없는 익명함수
  console.log('A');
}

//자바 스크립트에서는 함수가 값이 될 수 있음 (함수가 객체가 될 수 있단 말..?)

function slowfunc(callback){
  callback(); //함수가 할 일이 끝났으니까 그 다음일을 하세요!
  //a를 호출하게 됨
}

slowfunc(a);
