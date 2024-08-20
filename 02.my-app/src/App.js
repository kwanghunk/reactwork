/*
import './App.css';

// 1. 별도의 파일로 사용
function App() {
  return (
    <>
      <h1>더조은에 오신것을 환영합니다</h1>
      <h3>의료용 디지털 영상 표준활용 실무 프로젝트 과정</h3>
      <p className="class1">react style적용하기</p>
      <p id="id1">id로 style적용하기</p>
  </>
  );
}
*/

/*
// 2. style을 변수에 객체로 저장하여 사용
function App() {
  const style = {
    App : { 
      backgroundColor : 'navy',
      color : 'white',
      padding : '50px',
      textAlign : 'center',
      fontSize : '30px' 
      },
    h1 : { color : "lightgreen" },
    class1 : { color : "skyblue" },
    id1 : { border : "10px dotted orange" }
  }
  return (
    <div style = { style.App }>
      <h1 style = { style.h1 }>더조은에 오신것을 환영합니다</h1>
      <h3>의료용 디지털 영상 표준활용 실무 프로젝트 과정</h3>
      <p style = { style.class1 }>react style적용하기</p>
      <p style = { style.id1 }>id로 style적용하기</p>
  </div>
  );
}
*/

// 3. inline방식으로 style주기
function App() {
  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{color : 'yellow', backgroundColor:'brown'}}>더조은에 오신것을 환영합니다</h1>
      <h3>의료용 디지털 영상 표준활용 실무 프로젝트 과정</h3>
      <p>react style적용하기</p>
      <p>id로 style적용하기</p>
  </div>
  );
}

export default App;
