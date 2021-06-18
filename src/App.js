import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Password from './pages/Password'
import Header from './components/Header'
import Map from './pages/Map'

function App() {
	return (
		<div className="app">
			<Header />
			<Router>
				<Switch>
					<Route exact path="/" component={Map} />
					<Route exact path="/password" component={Password} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
