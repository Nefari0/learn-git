import logo from './logo.svg';
import Display from './Components/Display'
import './App.css';
import NotePad from './Components/NotePad'
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
    {/* <h1> THIS.IS.REACT </h1> */}
        {/* <NotePad/> */}
        <Display/>
    </div>
  );
}

export default App;
