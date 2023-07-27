//1. 모바일 메뉴 숨기기
//객체=모바일 메뉴 m_nav_menu
//객체.속성 style.display=none
//2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
//객체=햄버거 메뉴 m_nav, 모바일 메뉴  m_nav_menu
//속성 = 보이기
//이벤트 = 클릭
//메서드  = 클릭, 보이기
//3. X버튼 클릭 시 모바일 메뉴 숨기기
//객체=X버튼 close, 모바일 메뉴  m_nav_menu
//객체=모바일 메뉴 m_nav_menu, 햄버거 메뉴 m_nav, X버튼 close
//변수 생성
const m_nav_menu = document.querySelector('.m_nav_menu');
const m_nav = document.querySelector('.m_nav');
const close = document.querySelector('#close')
//정상출력확인 == 에러메세지, null, unfinded 주의!!
console.log(m_nav_menu, m_nav, close);
//1. 모바일 메뉴 숨기기
m_nav_menu.style.display ='none';  //css디자인에서 자바스크립트 css명령이 우선순위
//2-1. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기 ==객체.이벤트
m_nav.addEventListener('click',function(){
    //2-2. 모바일 메뉴 보이기
    m_nav_menu.style.display = 'block'
})
///3. X버튼 클릭 시 모바일 메뉴 숨기기
close.addEventListener('click',function(){
    m_nav_menu.style.display = 'none'
})