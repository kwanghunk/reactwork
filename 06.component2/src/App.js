import './App.css';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';
import Compo1 from './components/Compo';

function App() {
  return (
    <div className="App">
      <MyHeader/>
      <section>
      <Compo1/>
      </section>
      <MyFooter/>
    </div>
    
  );
}

export default App;
