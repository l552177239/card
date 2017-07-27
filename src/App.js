import React from 'react'
import './App.css'
import Card from './Card'

class App extends React.Component{
	titleInput = (children) => alert(children)
	render(){
		return (
			<div className='app'>
				<Card title='Card title' more={<a href="http://baidu.com">More</a>} onClick={this.titleInput}>
					<p>每个人心中都有一团火， 路过的人只看到烟。</p>
					<p style={{textAlign:'right'}}>——文森特·梵高</p>
				</Card>
			</div>
		)
	}
}

export default App
