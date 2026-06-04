import React from 'react';
import SearchBar from './SearchBar.js';
import BusinessList from './BusinessList.js';
import Business from './Business.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList />
    </div>
  );
}


