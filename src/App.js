import Pages from './Pages/Pages';
import './App.css';
import Category from './Components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './Components/Search';
import styled from 'styled-components';
import {GiKnifeFork} from "react-icons/gi"
import { Link } from 'react-router-dom';
import { useState } from 'react';







function App() {
  const [theme,setTheme] =useState(false)
  return (
    <div className={theme ? "App"  : "dark" }>
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo to={"/"}>mamakitchen</Logo>
      </Nav>
      <Search/> <button onClick={() => setTheme(!theme)}>mod</button>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}











const Logo = styled(Link)`
text-decoration:none;
font-size:1.8rem;
font-weight:400;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const Nav =styled.div`
padding:4rem;
display:flex;
justify-content:flex-start;
align-items:center;
svg{
  font-size:2rem;
}`

export default App;
