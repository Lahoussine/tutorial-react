import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';
import MasterForm from './MasterForm';
import MyTable from './MyTable';
import MyTabs from './MyTabs';

class  App extends React.Component {
  componentDidMount(){
    const script = document.createElement("script");
    script.src = "/__/firebase/6.5.0/firebase-app.js";
    script.async = true;
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "/__/firebase/init.js";
    script2.async = true;
    document.body.appendChild(script2);
  }
  render(){
    return (
      <div className="App">
        <MyTabs></MyTabs>
      </div>
    );
  }

}

export default App;
