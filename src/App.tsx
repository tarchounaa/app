import React, { useState } from 'react';
import './App.css';
import CategoryDisplayMethodButton from './components/categories/category-display-method/CategoryDisplayMethodButton';
import Categories from './pages/categories/Categories';

function App() {

  const [switcher, setSwitcher] = useState<boolean>(false);

  return (
    <div className="App">
      <div className='app-header'>
        <h1>Catégories</h1>
        <CategoryDisplayMethodButton setSwitcher={setSwitcher} switcher={switcher} />
      </div>
      <div className='app-main-container'>
        <Categories switcher={switcher} />
      </div>
      <div className='app-footer'>
      </div>
    </div>
  );
}

export default App;
