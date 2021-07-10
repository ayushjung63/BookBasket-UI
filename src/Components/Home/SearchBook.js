import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';

export class SearchBook extends Component {
	render() {

	const mystyle = {
      color: "red",
    };
    const divStyle={
    	margin:"40px"
    }

		return (
			<div>
			<div style={divStyle}>
			<SearchIcon style={{ fontSize: 60 }} />		
				<h3>Search No Result</h3>
				<h4 style={mystyle}>We're sorry. We cannot find any matches for your search term.
				</h4>

				
					</div>
			</div>
		);
	}
}
export default SearchBook;
