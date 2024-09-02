import { useState } from 'react';
import './App.css';

function Header(props){
  return(
    <header>
      <h1><a href='/' onClick={event=>{
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  )
}

function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
    }}>{t.title}</a></li>)
  }
  return(
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props){
  return(
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}
// 메인 App
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    {id:1, title:"홈페이지 소개", body:"홈페이지는..."},
    {id:2, title:"테마,장르", body:"테마,장르는..."},
    {id:3, title:"예약하기", body:"예약하기는..."},
  ]
  let content = null;
  if(mode == 'WELCOME') {
    content = <Article title="Welcome" body="Hello, ECR"></Article>
  } else if(mode == 'READ') {
    let title, body = null;
    for(let i=0; i<topics.length; i++) {
      if(topics[i].id == id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
    return (                                                                // App return 구문
      <div className="App">    
        <Header title="ECR" onChangeMode={()=>{
          setMode('WELCOME');
        }}></Header>

        <Nav topics={topics} onChangeMode={(_id)=>{
          setMode('READ');
          setId(_id);
        }}></Nav>

        {content}


      </div>
  );
}


export default App;
