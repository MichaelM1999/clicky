import React, { Component, Fragment } from 'react';
import './css/app.css'
import Food from './components/images';
import pics from './components/pics';

class App extends Component {
	initialState = {
		totalPoints: 0,
		gameOver: false,
		winner: false,
		goal: 100,
	};

	state = {
		...this.initialState
  }
  handleClick = (nameOfFood, points) => {
		const addpoints = this.state.totalCandy + Food.amount;
		this.setState({
			totalPoints: addpoints
		});
	}
	compareTotals = () => {
		if(this.state.goal && this.state.totalPoints) {
			const { totalPoints, goal } = this.state;
			this.setState({
				gameOver: true,
				winner: goal === totalPoints
			});
		}
	}
	resetGame = () => {
		this.setState(this.initialState);
	}
	render() {

		return (
			<div className="App">
				<h1 className="text">Clicky Game</h1>

				<h3 className="text2">can you get to the goal score of: {this.initialState.goal}</h3>
				<h3 className="text2">youre score is: {this.initialState.totalPoints}</h3>
				{this.state.gameOver && (
					<Fragment>
						<h1>YOU {this.state.winner ? 'WIN' : 'LOSE'}!!!</h1>
					</Fragment>
				)}
				{!this.state.gameOver && !!this.state.totalPoints && !!this.state.goal && <button onClick={this.compareTotals}>LOCK IT IN!!!</button>}
				{this.state.gameOver && <button onClick={this.resetGame}>Play Again?</button>}

				<div className="selections">
					<div className="foods">
						<h2>Select Your Candy</h2>
						{pics.map(({src, amount, alt, key}) => (
								<Food key={key} src={src} alt={alt} onClick={this.handleClick} amount={amount} />
							)
						)}
					</div>
				</div>
			</div>
		);
	}
}
export default App;
