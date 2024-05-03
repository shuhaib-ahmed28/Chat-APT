
import './App.css';
import Navigation from './components/Navigation';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Chat from './components/Chat';

function App() {
   const [user]=useAuthState(auth)

  return ( 
    <div >
      <div className="container">
      <Navigation/>
      {user ? <Chat/>:null}
      </div>
      
    </div>
  );
}

export default App;
