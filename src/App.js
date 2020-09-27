import React from 'react';
import HellowWorld from './Components/HelloWorld'
//import Counter from './Components/Counter'
import Header from './Components/Header'



function App() {
  return (
    <div>
      <Header />
      <Alert dismissible variant="danger">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
                Change this and that and try again.
            </p>
        </Alert>
      <HellowWorld name= "Luis"/>
      {/* < Counter /> */}
    </div>
  );
}

export default App;
