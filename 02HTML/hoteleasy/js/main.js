const btn3El = document.querySelector('.btn3');
const btn2El = document.querySelector('.btn2');
const btn1El = document.querySelector('.btn1');
const signUpEl = document.querySelector('.signUp');


signUpEl.addEventListener('click',function(){
  alert("가입완료");
})
btn1El.addEventListener('click',function(){
  alert("사용가능");
})

btn2El.addEventListener('click',function(){
  alert("사용가능");
})
btn3El.addEventListener('click',function(){
  alert("인증확인");
})