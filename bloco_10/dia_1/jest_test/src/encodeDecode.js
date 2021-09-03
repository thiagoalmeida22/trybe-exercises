const encode = (string) => {
    return string.replace(/a/ig, '1').replace(/e/ig, '2').replace(/i/ig, '3').replace(/o/ig, '4')
      .replace(/u/ig, '5');
  }
  
const decode = (string) => {
    return string.replace(/1/ig, 'a').replace(/2/ig, 'e').replace(/3/ig, 'i').replace(/4/ig, 'o')
      .replace(/5/ig, 'u');
  }

  module.exports = { encode, decode, };