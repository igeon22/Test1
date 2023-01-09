import { HashRouter,BrowserRouter,Routes,Route,Link} from 'react-router-dom';


function Nav(props){
	return(
		<div>
			<Link to={'/'}><p>Home</p></Link>
			<Link to={'/about'}><p>About</p></Link>
		</div>
	)
}

export default Nav