import './App.css';

import { RedocStandalone } from 'redoc';

function App() {
  return (
    <div className="App">
      
      <RedocStandalone specUrl="./specification.json"/>

    </div>
  );
}

export default App;
