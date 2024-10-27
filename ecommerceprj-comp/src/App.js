import './App.css';
import NavBar from './component/navbar';
import Route from './config/router';
import { store , persistor}  from './store'
import { Provider } from 'react-redux'
import { useEffect, useState } from 'react';
import { onAuthStateChanged, auth } from './config/firebase';
import { PersistGate } from 'redux-persist/integration/react'

function App() {

const [user, setUser] = useState()

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if(user) {
setUser(user)
const uid = user.uid
    }else {

    }
  })
})
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
  <div className="App">
    <NavBar />
    <p className='email'>{user?.email}
    <hr className='hr2'/>
    </p>

<Route />

  </div>
  </PersistGate>
  </Provider>
  );
}

export default App;
