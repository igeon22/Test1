import logo from './logo.svg';
import './App.css';
import React from 'react';
import { HashRouter,BrowserRouter,Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './component/Home';
import About from './component/Services';
import Nav from './component/Nav';

function App(props){
	return(
		<HashRouter>
				<Nav></Nav>
				<Routes>
					<Route path='/' element={<Home></Home>}></Route>
					<Route path='/about' element={<About></About>}></Route>
				</Routes>
		</HashRouter>

	)
}


export default App