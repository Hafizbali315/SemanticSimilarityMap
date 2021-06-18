import Padlock_Img from '../assets/padlock-icon.svg'
import { Link } from 'react-router-dom'

const Password = () => {
	return (
		<div className="password_page">
			<img src={Padlock_Img} alt="PadlockImg" />

			<h1>Der Datensatz Quantum Computing ist geschützt.</h1>

			<p>
				Bitte geben Sie das Passwort ein um den <br />
				Datensatz anzuzeigen.
			</p>

			<form className="password_page_form">
				<div>
					<label>Password</label>
				</div>

				<input type="password" />
			</form>

			<Link to="/">
				<button className="login_btn">Login</button>
			</Link>
		</div>
	)
}

export default Password
