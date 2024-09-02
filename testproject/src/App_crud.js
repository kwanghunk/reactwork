import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Badge } from 'react-bootstrap';

function Article(props) {
  return (
  <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
)}

function Header(props) {
  return (
  <header>
    <h1>국내최초 대탈출&emsp;<a href='./' onClick={(event) => {
      event.preventDefault();
      props.onChangMode();
    }}><Badge bg="secondary">{props.title}</Badge></a></h1>
  </header>
)}

function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={(event) => {
        event.preventDefault();
        props.onChangMode(event.target.id);
    }}>{t.title}</a>
    </li>);
  }
  return (
  <nav>
    <ol>
      {lis}
    </ol>
  </nav>
)}

function Create(props) {
  return(
    <article>
      <h2>Create</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        
        <p><input name='title' placeholder='title' /></p>
        <p><textarea name='body' placeholder='body' /></p>
        <p><input type='submit' value='Create' /></p>
      </form>
    </article>
  )
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>

      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p><input name='title' placeholder='title' value={title} onChange={event=>{
          setTitle(event.target.value);
        }}></input></p>
        <p><textarea name='body' placeholder='body' value={body} onChange={event=>{
          setBody(event.target.value);
        }}></textarea></p>
        <p><input type='submit' value='Update'></input></p>
      </form>
    </article>
  )
}



// 메인 App
function App() {
  const [mode, setMode] = useState('WELCOME');                            // 페이지 이동
  const [id, setId] = useState(null);
  const [nextId, SetNextId] = useState(5);
  const[topics, setTopics] = useState([
    {id:1, title:"홈페이지 소개", body:"홈페이지는..."},
    {id:2, title:"테마&장르", body:"테마&장르는..."},
    {id:3, title:"예약하기", body:"예약하기는..."},
    {id:4, title:"게시판", body:"게시판은..."}
  ])

  let content = null;
  let contextControll = null;

  if(mode == 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>         // 메인페이지
  } else if(mode == 'READ') {                                               // 상세보기
      let title, body = null;
      for(let i=0; i<topics.length; i++) {
        if(topics[i].id == id) {
          title=topics[i].title;
          body=topics[i].body;
        }
      }
      content = <Article title={title} body={body}></Article>
      contextControll = <>                                              {/*Update Delete 버튼*/}
        <li><a href={'/update/'+id} onClick={event=>{
          event.preventDefault();
          setMode('UPDATE');
        }}>Update</a></li>
        <li><input type='button' value="Delete" onClick={()=>{
          const newTopics = []
          for(let i=0; i<topics.length; i++) {
            if(topics[i].id != id) {
              newTopics.push(topics[i]);
            }
          }
          setTopics(newTopics);
          setMode('WELCOME');
        }}></input></li>
      </>
  } else if(mode == 'CREATE') {                                             // Create
      content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      SetNextId(nextId+1);
    }}></Create>
  } else if(mode == 'UPDATE') {                                             // Update
      let title, body = null;
      for(let i=0; i<topics.length; i++) {
        if(topics[i].id == id) {
          title=topics[i].title;
          body=topics[i].body;
        } 
      }
      content = <Update title={title} body={body} onUpdate={(title, body)=>{
        const newTopics=[...topics]
        const updatedTopic= {id:id, title:title, body:body}
        for(let i=0; i<newTopics.length; i++) {
          if(newTopics[i].id == id) {
            newTopics[i] = updatedTopic;
            break;
          }
        }
        setTopics(newTopics);
        setMode('READ');
      }}></Update>
  }

    return (                                                                // App return 구문
      <div className="App">    
        <Header title="ECR" onChangMode={() => {                            // 헤더
          setMode('WELCOME');
        }}></Header>

        <Nav topics={topics} onChangMode={(_id) => {                        // 리스트
          setMode('READ');
          setId(_id);
        }}></Nav>

        {content}                                                           {/*본문내용태그*/}
        <ul>
          <li><a href='/create' onClick={(event) => {                       // Create 버튼
            event.preventDefault();
            setMode('CREATE');
          }}>Create</a></li>

          {contextControll}                                          {/* // Update, Delete 버튼 */}
          
        </ul>
      </div>
  );
}


export default App;
