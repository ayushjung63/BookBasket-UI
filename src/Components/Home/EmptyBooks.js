import React, { Component } from 'react';
import NewReleasesIcon from '@material-ui/icons/NewReleases';

export class EmptyBooks extends Component {
	render() {
	const mystyle = {
      color: "red"
    };
    const divStyle={
    	margin:"80px"
    };

		return (
			<div>
			<div style={divStyle}>
					<NewReleasesIcon style={{fontSize:100}}/>
				<h3 style={mystyle}>Books will be available soon.</h3>
			 </div>
			</div>
		);
	}
}
export default EmptyBooks;
