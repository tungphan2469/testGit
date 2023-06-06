import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FunctionComponent from './components/FunctionComponent';
import Modal from './components/Modal';
function App() {
  const [info, setInfo] = useState({
    'name': 'Trần Việt Tùng',
    'position': 'Developer',
    'birth': '24-06-1999',
    'gender': 'Nam',
    'email': 'nyanedm@gmail.com',
    'address': 'Việt Trì',
    'desc': 'Hello World'
  })
  var a = 1;
  const [display, setDisplay] = useState(false)

  const openModal = () => {
    setDisplay(true)
  }
  const closeModal = () => {
    setDisplay(false)
  }
  return (
    <div className="App">
      <FunctionComponent info={info} openModal={openModal} />
      {display && <Modal closeModal={closeModal} info={info} setInfo={setInfo} />}
    </div>
  );
}

export default App;
