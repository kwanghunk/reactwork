import './App.css';

const user = {
  firstName : "Hong",
  lastName : "GilDong"
}

function Student(user) {
  return user.firstName + " " + user.lastName;
}

function App() {
  const isStudent = true;
  return (
    <div className="App">
      <h1>The Joeun React 2024 </h1>
      <h3>component 실습</h3>

      {isStudent ? <h4>{Student(user)}</h4> : <h4>Get Out</h4>}

      <Com1></Com1>
      <Com1/>
    </div>
  );
}

function Com1() {
  return (
    <>
      <h2>[THIS IS COMPONENT]</h2>
      <p>K-Digital Training</p>
      <p>의료용 AI 연동 개발 어쩌구 저쩌구</p>
      <ul>
        <li>이러쿵</li>
        <li>저러쿵</li>
      </ul>

    </>
  );
}
export default App;
