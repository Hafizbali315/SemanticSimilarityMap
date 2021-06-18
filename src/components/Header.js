import { useState } from 'react'
import Header_Icon from '../assets/menu-icon.svg'
import CloseImg from '../assets/close.svg'

const Header = () => {
	const [showNavigationSidebar, setShowNavigationSidebar] = useState(false)
	const [hideClass, setHideClass] = useState('')

	const renderNavigationMenu = () => {
		return (
			<div className="navigation_sidebar">
				<div className="row" style={{ justifyContent: 'space-between' }}>
					<div className="col-8">
						<h1>Semantic Similarity Map</h1>
					</div>
					<div className="col-2">
						<button
							onClick={() => {
								setShowNavigationSidebar(false)
								setHideClass('')
							}}
						>
							<img src={CloseImg} alt="" />
						</button>
					</div>
				</div>

				<label className="navigation_label">Datensatz</label>

				<select className="form-select" id="inputGroupSelect01">
					<option value="Weiterbildungsmarkt Schweiz">Weiterbildungsmarkt Schweiz</option>
					<option value="FoodTech">FoodTech</option>
					<option value="Quantum Computing">Quantum Computing</option>
					<option value="S&P 500">S&P 500</option>
				</select>

				<h4>How It Works</h4>

				<span>
					Wir gleichen die Modulbeschreibungen von 2’700 Weiterbildungen von Schweizer Fachhochschulen und Universitäten ab und bilden so
					den gesamten Weiterbildungsmarkt der Schweiz ab. Dies erlaubt ähnliche Angebote und unerschlossene Märkte zu erkennen.
				</span>
				<br />
				<br />

				<label className="navigation_label">Machine Learning Model</label>

				<select class="form-select" id="inputGroupSelect01" style={{ outline: 'none' }}>
					<option value="t-SNE">t-SNE</option>
					<option value="t-SNE">t-SNE</option>
					<option value="t-SNE">t-SNE</option>
				</select>

				<h4>Contact</h4>
				<span>Kevin Kuhn</span>
				<br />
				<span>hello@kevinkuhn.ch</span>

				<p>
					(c) 2021 Kevin Kuhn – <span>kevinkuhn.ch</span>
				</p>
			</div>
		)
	}

	return (
		<>
			<div className="navbar">
				<div className="container-fluid">
					<div className="menu_left">
						<h1>Semantic Similarity Map</h1>
					</div>

					<div className={`d-flex menu_right ${hideClass}`}>
						<span>Weiterbildungsmarkt</span>
						<button
							className="menu_btn"
							onClick={() => {
								setShowNavigationSidebar(true)
								setHideClass('hideRightMenu')
							}}
						>
							<img src={Header_Icon} alt="header icon" />
						</button>
					</div>
				</div>
			</div>

			{showNavigationSidebar && renderNavigationMenu()}
		</>
	)
}

export default Header
