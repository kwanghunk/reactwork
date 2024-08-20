import logo from './logo.svg';
import './App.css';

function App() {
  /* 여러줄 주석 */
  // 주석
  //return <h1>React 처음 시작 또 시작</h1>

  // return 안이 여러줄 일 때 소괄호()를 사용
  /*
    1. 소괄호를 반드시 넣어준다
    2. 루트 태그를 반드시 넣어준다
    
    tip. return 안에서의 주석 단축키 Ctrl + '/'
  */
  return(
    <div>{/* 여러줄 일때는 반드시 최상위 태그가 존재해야 된다. */}
      <h1>React</h1>
      <h2>여러줄 리턴</h2>
      {/* 주석 */}
    </div>
  )
}

export default App;
