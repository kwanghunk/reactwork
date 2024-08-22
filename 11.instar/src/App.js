import './App.css';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState([0,0,0]);
  let [title, setTitle] = useState(["한솥","치킨타운", "역전우동"]);
  let [modal, setModal] = useState(false);
  let [modalIndex, setModalIndex] = useState(); // div의 index번호를 변경
  let [inputValue, setInputValue] = useState("");
  
  return (
    <div className="App">
      <h2 className="title">인생맛집INSTAR</h2>
      {/*원본이 바뀜(비추천)*/}
      {/*<button onClick={() => {setTitle(["초밥","코리아 치킨타운", "역전우동"])}}>글수정</button>*/}
      
      {/* copy가 title의 주소를 가져오는 것이므로 두 값의 주소가 같아 useState의 재렌더링 조건에 부합하지 않음
      <button onClick={() => {
        let copy = title;
        copy[0] = "초밥";
        setTitle(copy);
      }}>글수정</button>
      */}

      {/* 아래와 같이 title을 풀어서 복사하면 copy의 주소가 title과는 다른 주소를 갖기 때문에 재렌더링이 가능 
      <button onClick={() => {
        let copy = [...title];
        copy[0] = "초밥";
        setTitle(copy);
      }}>글수정</button>
      */}
      
      {
        title.map(function(t,i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {setModal(!modal); setModalIndex(i)}}>{t}</h4>
              <p>8월 22일 
                <span onClick={() => {
                  let copy = [...count];
                  copy[i] = copy[i] + 1;
                  setCount(copy)
                }}>🥇
                </span>{count[i]}
              </p>
              <button onClick={(e) => {
                let copy=[...title];
                copy.splice(i,1);
                setTitle(copy);
              }}>삭제하기</button>
            </div>
          )
        })
      }  

      <input onChange={(e) => {
        setInputValue(e.target.value);
      }} />
      <button  onClick={(e) => {
        let copy = [...title];
        copy.unshift(inputValue);
        setTitle(copy);
        console.log(title);
      }}>글추가</button>

      {modal ? <Modal title={title} modalIndex={modalIndex} setTitle={setTitle}/> : null}
    </div>
  );
}

function Modal(props) {
  return ( 
    <div className="modal">
      <h4>{props.title[props.modalIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      
      <button onClick={() => {
        let copy = [...props.title];
        copy[props.modalIndex] = "초밥";
        props.setTitle(copy);
      }}>글수정</button>
    </div>
  )
}

export default App;
