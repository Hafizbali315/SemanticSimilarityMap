import Close from '../assets/close.svg'
import externallinkicon from '../assets/externallinkicon.svg'

const LocationDetailsCard = ({ setShowLocationDetails }) => {
	return (
		<div className="location_details_card">
			<div className="row" style={{ justifyContent: 'space-between' }}>
				<div className="col-10 loaction_card_tags">
					<span>Hochschule Luzern</span>
				</div>
				<div className="col-2 loaction_card_tags" onClick={() => setShowLocationDetails(false)}>
					<img src={Close} alt="close" />
				</div>
			</div>

			<h3>CAS Digital Customer Experience</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at tincidunt eros. Vestibulum pharetra nisi eu pharetra volutpat.
				Etiam lacus lectus, hendrerit sit amet ullamcorper eleifend, interdum ac purus.
			</p>

			<img src={externallinkicon} alt="externallinkicon" />

			<h3>Aehnlichste Eintraege</h3>

			<a href="#a">CAS AI Management, HWZ (89%)</a>
			<br />

			<a href="#a">CAS Verwaltungsrat, Hochschule Luzern (87%)</a>
			<br />

			<a href="#a">CAS Data Management, FHNW (82%)</a>
			<br />

			<a href="#a">CAS Customer Experience, BFH</a>

			<br />
			<a href="#a"> BFH CAS Baumanagement, ZHAW</a>
		</div>
	)
}

export default LocationDetailsCard
