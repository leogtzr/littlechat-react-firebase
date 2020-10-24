import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './fire.js';
import ChatRoom from './ChatRoom';
import SignIn from './SignIn';
import SignOut from './SignOut';

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">

      <header>
        <h1>💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

export default App;
