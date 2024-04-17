import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar'
import { useSelector } from "react-redux"
import "./App.css"
import Feed from './Feed'
import { selectUser } from "./features/userSlice"
import Login from './Login'

function App()
{
  const user = useSelector(selectUser);
  return (
    <div className="app">

      <Header/>
    
      {!user ? (<Login />) : (
        
          <div className="app-body">
            <Sidebar/>
            <Feed/>
            <div className="widgets">
              <h1>this is widgets</h1>
            </div>
          {/* Widgets */}
          </div>

      )}
    </div>
  );
}

export default App;
