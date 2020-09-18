import React from 'react';
import HellowWorld from './Components/HelloWorld'
//import Counter from './Components/Counter'
import Header from './Components/Header'


function App() {
  return (
    <div>
      <Header />

      <HellowWorld name= "Luis"/>
      {/* < Counter /> */}
    </div>
  );
}

export default App;
