
// lodash를 모듈로 가져오는 방법 : CommonJS 스펙
// var_ = require('lodash');
// lodash를 _를 붙여 가져오겠다는 의미
// 기존은 require을 사용, es6는 import 사용
// 버전에 따라 다름

// es6 방식의 모듈 가져오는 방법 :import
import _ from 'lodash';
import "./style.css";
import  "./hello.scss";

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log('hello webpack');