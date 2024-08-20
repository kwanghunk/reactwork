import './App.css';

function App() {
  const isStudent = false;


  // 직접적으로 if문을 작성하면 실행이 되지 않음. 따라서 삼항 연산자를 이용하여 if문 효과를 봄
  // return 값이 삼항연산자 한줄이라도 소괄호()와 태그<>를 붙여야 오류가 발생하지 않음
  return ( 
  <span>
    {isStudent == true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다</h1>}
  </span>
  );
}

export default App;
