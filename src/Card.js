import React from 'react'
import PropTypes from 'prop-types'

class Card extends React.Component{
	handleClick(){
		this.props.onClick('a')
	}
	render(){

		return (
			<div className='card'>
				<div className='header'>
					<h4 onClick={this.handleClick.bind(this)}>{this.props.title}</h4>
					<div className='more'>{this.props.more}</div>
				</div>
				<div className='main'>
					{this.props.children}
				</div>
			</div>
			)
	}
}

Card.defaultProps = {
	title:'请输入标题',
	more:<a href="#"></a>,
	children:'请传入内容'
}
Card.propTypes = {
	title:PropTypes.string,
	more:PropTypes.element,
	children:PropTypes.oneOfType([
	    PropTypes.object,
	    PropTypes.array,
	  ])
}
export default Card
