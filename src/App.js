import './App.css';
import Main from './components/screens/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
 <div className='no-scrollbar'>
 <BrowserRouter>
    <Main />
  </BrowserRouter>
 </div>
  );
}

export default App;
