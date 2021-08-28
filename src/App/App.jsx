//Components
import Header from '../components/Header/Header';
import Filter from '../components/Filter/Filter';
import Results from '../components/Results/Results';
//Others
import { useState } from 'react';
//Styles
import './App.css';
//BD
import {listaGifs}  from '../utils/mockBD' ;


function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={`App ${isDark? 'dark':'ligth'}`}>
      <Header
        isDark={isDark}
        onClick={()=> setIsDark(!isDark)}
      />
      <Filter className={`${isDark? 'dark':''}`}></Filter>
      <Results className={`${isDark? 'dark':''}`} data={listaGifs} />
    </div>
  );
}

export default App;
