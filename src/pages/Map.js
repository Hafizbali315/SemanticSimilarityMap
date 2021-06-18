import { useState } from 'react'
import map from '../assets/map.png'
import SearchIcon from '../assets/seach-icon.svg'
import check from '../assets/check.svg'
import SearchResultCard from '../components/SearchResultCard'

import LocationDetailsCard from '../components/LocationDetailsCard'

const Map = () => {
	const [showInstitutionDropdown, setShowInstitutionDropdown] = useState(false)
	const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false)
	const [showTrainingDropdown, setShowTrainingDropdown] = useState(false)

	const [showResult, setShowResult] = useState(false)

	const [showLocationDetails, setShowLocationDetails] = useState(false)

	const [institution, setInstitution] = useState('')
	const [departments, setDepartments] = useState('')
	const [training, setTraining] = useState([])

	const handleInstitutionDropDown = (e) => {
		setInstitution(e.target.value)
		setShowInstitutionDropdown(!showInstitutionDropdown)
	}

	const handleDepartmentDropDown = (e) => {
		setDepartments(e.target.value)
		setShowDepartmentDropdown(!showDepartmentDropdown)
	}

	const handleTrainingDropdown = (e) => {
		setTraining([...training, e.target.value])
	}

	const hideDropDowns = () => {
		setShowInstitutionDropdown(false)
		setShowDepartmentDropdown(false)
		setShowTrainingDropdown(false)
		setShowResult(false)
	}

	const InstitutionDropdown = () => {
		return (
			<div className="institution_dropdown_card">
				<ul>
					<li>
						<input type="button" value="Hochschule Luzern" onClick={handleInstitutionDropDown} />
						<img src={check} alt="check" />
					</li>
					<li>
						<input type="button" value="BFH" onClick={handleInstitutionDropDown} />
						<img src={check} alt="check" />
					</li>
					<li>
						<input type="button" value="ZHAW" onClick={handleInstitutionDropDown} />
						<img src={check} alt="check" />
					</li>
					<li>
						<input type="button" value="Universität St. Gallen" onClick={handleInstitutionDropDown} />
						<img src={check} alt="check" />
					</li>
					<li>
						<input type="button" value="Hochschule Luzern" onClick={handleInstitutionDropDown} />
						<img src={check} alt="check" />
					</li>
					<li>
						<input type="button" value="BFH" onClick={handleInstitutionDropDown} />
						<img src={check} alt="check" />
					</li>
					<li>
						<input type="button" value="ZHAW" onClick={handleInstitutionDropDown} />
						<img src={check} alt="check" />
					</li>
					<li>
						<input type="button" value="Universität St. Gallen" onClick={handleInstitutionDropDown} />
						<img src={check} alt="check" />
					</li>
				</ul>
			</div>
		)
	}

	const DepartmentsDropdownCard = () => {
		return (
			<div className="departments_dropdown_card">
				<ul>
					<li>
						<input type="button" value="Wirtschaft" onClick={handleDepartmentDropDown} />
						<img src={check} alt="check" />
					</li>
					<li>
						<input type="button" value="Informatik" onClick={handleDepartmentDropDown} />
						<img src={check} alt="check" />
					</li>
					<li>
						<input type="button" value="Design & Kunst" onClick={handleDepartmentDropDown} />
						<img src={check} alt="check" />
					</li>
					<li>
						<input type="button" value="Technik & Architektur" onClick={handleDepartmentDropDown} />
						<img src={check} alt="check" />
					</li>
				</ul>
			</div>
		)
	}

	const TrainingDropdownCard = () => {
		return (
			<div className="training_dropdown_card">
				<ul>
					<li>
						<input type="button" value="CAS" onClick={handleTrainingDropdown} />
						<img src={check} alt="check" />
					</li>
					<li>
						<input type="button" value="MAS" onClick={handleTrainingDropdown} />
						<img src={check} alt="check" />
					</li>
					<li>
						<input type="button" value="DAS" onClick={handleTrainingDropdown} />
						<img src={check} alt="check" />
					</li>
					<li>
						<input type="button" value="EMBA" onClick={handleTrainingDropdown} />
						<img src={check} alt="check" />
					</li>
				</ul>
			</div>
		)
	}

	const ShowHoverCard = () => {
		return (
			<div className="hover_card">
				<div className="hover_card_tags">
					<span>Hochschule Luzern</span>
					<span>Wirtschaft</span>
				</div>
				<h3>CAS Digital Customer Experience</h3>
			</div>
		)
	}

	return (
		<div className="map_img_container">
			<img className="map_background" src={map} alt="map" onClick={hideDropDowns} />

			<div className="map_content">
				<div className="search_card">
					<div className="search_input">
						<label>Wonach suchst Du?</label>
						<input type="text" placeholder="Wonach suchst Du?" />
					</div>

					<div className="institution_dropdown">
						<label>Institutions</label>
						<input required type="text" value={institution} readOnly onClick={() => setShowInstitutionDropdown(true)} />
					</div>

					<div className="institution_dropdown">
						<label>Departments</label>
						<input required type="text" value={departments} readOnly onClick={() => setShowDepartmentDropdown(true)} />
					</div>

					{/* Training Type */}
					<div className="training_dropdown">
						<label>Weiterbildungstyp</label>

						<input type="text" value={training} onClick={() => setShowTrainingDropdown(true)} />
					</div>
					<button className="search_btn" onClick={() => setShowResult(true)}>
						<img src={SearchIcon} alt="search-icon" />
					</button>
				</div>

				<div className="map_location_circles">
					<div className="circle_1" onClick={() => setShowLocationDetails(true)}>
						<ShowHoverCard />
					</div>
				</div>

				{showInstitutionDropdown && <InstitutionDropdown />}
				{showDepartmentDropdown && <DepartmentsDropdownCard />}
				{showTrainingDropdown && <TrainingDropdownCard />}

				{showResult && <SearchResultCard />}
			</div>
			{showLocationDetails && <LocationDetailsCard setShowLocationDetails={setShowLocationDetails} />}
		</div>
	)
}

export default Map
