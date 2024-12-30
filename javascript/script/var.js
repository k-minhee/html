//bowl, a, b, c 변수명 금지(start.js 파일에 연결되어 있으므로)
var box1 = 1;
var box2;
box2 = 5;
var box3 = 10;
console.log(box1, box2, box3);
// 결과 출력 : 1, 5, 10
console.log('box3 =', box3);
// 결과 출력 : box3=10
console.log('box1=',box1, 'box2=',box2, 'box3=',box3);
// 결과 출력 : box1=1, box2=5, box3=10
console.log('box1+box2 = ', box1+box2);
// 결과 출력 : box1+box2 = 6
console.log('box2+box3 = ', box2+box3);
// 결과 출력 : box2+box3 = 15