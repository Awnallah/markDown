import React , { Component } from 'react';


class BinsShare extends Component {
	render() {
		return (
			<footer className='bins-share'>
				<div className='input-group'>
					<input className='form-control' />
					<div className='input-group-btn'>
						<button  className="btn btn-default">
							Share Bin
						</button>
					</div>
				</div>
			</footer>
			);
	}
}

export default BinsShare;