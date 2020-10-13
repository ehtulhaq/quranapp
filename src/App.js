import React, { Component } from "react"
import "./App.css"
import LeftPanel from "./components/LeftPanel/LeftPanel"
import RightPanel from "./components/RightPanel/RightPanel"
import { connect } from "react-redux"

import {
	fetchSurahs,
	fetchRecitations,
	fetchTextEditions,
	fetchTranslations,
} from "./scripts/scripts"

class App extends Component {
	styles = {
		marginLeft: 0,
		marginRight: 0,
	}

	componentWillMount() {
		fetchSurahs(this.props)
		fetchTranslations(this.props)
		fetchTextEditions(this.props)
		fetchRecitations(this.props)
	}

	render() {
		return (
			<div className="row" style={this.styles}>
				<link
					href="https://fonts.googleapis.com/css?family=Roboto"
					rel="stylesheet"
					type="text/css"
				/>
				<LeftPanel />
				<RightPanel />
			</div>
		)
	}
}

export default connect()(App)
