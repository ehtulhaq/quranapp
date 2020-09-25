import React, { Component } from "react"
import { connect } from "react-redux"
import ReactLoading from "react-loading"
import Select from "react-select"
import "./Surah.css"

const customStyles = {
	option: (provided, state) => ({
		...provided,
		padding: 20,
		textAlign: "center",
		backgroundColor: state.isSelected ? "#FFE8B1" : "#FFF4D9",
		color: "#000",
		"&:active": {
			backgroundColor: "#FFE8B1",
		},
	}),
	control: (provided, state) => ({
		...provided,
		backgroundColor: "#FFE8B1",
		padding: "14px",
		color: "#000",
		border: "none",
		boxShadow: "0px 5px 25px #b5b5b5",
		textAlign: "center",
	}),
	dropdownIndicator: (provided, state) => ({
		...provided,
		color: "#000",
	}),
}
class Surah extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {}

	onSurahChangeHandler = (event) => {
		//console.log(event);
		let selectedSurah = this.props.surahList.surahList.find(
			(element) => element.value === event.value,
		)
		this.props.dispatch({
			type: "SELECTEDSURAH",
			selectedSurah: selectedSurah,
		})
		this.props.dispatch({ type: "SURAH", surah: selectedSurah.value })
		this.props.dispatch({ type: "AYAHRANGE", verseRange: [0, 0] })
	}

	render() {
		if (!this.props.surahList.surahList)
			return (
				<ReactLoading
					color="black"
					type="spin"
					className="loader"
					height={50}
					width={50}
				/>
			)
		return (
			<div className="Surah">
				<Select
					options={this.props.surahList.surahList}
					onChange={this.onSurahChangeHandler}
					className="surahName text-right"
					placeholder="Select Surah"
					isRtl={true}
					defaultValue={this.props.surahList.surahList[0]}
					value={this.props.surahList.surahList.find(
						(element) => element.value === this.props.surah.surah,
					)}
					styles={customStyles}
				/>
			</div>
		)
	}
}
const mapStatesToProps = (state) => {
	return {
		surahList: state.surahList,
		surah: state.surah,
		selectedSurah: state.selectedSurah,
		verseRange: state.verseRange,
	}
}
export default connect(mapStatesToProps)(Surah)
