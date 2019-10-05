import React, { Component, Fragment } from 'react';
import Food from './components/images';


class App extends Component {
	initialState = {
		totalPoints: 0,
		gameOver: false,
		winner: false,
		goal: 100
	};

	state = {
		...this.initialState
  }
  handleClick = (nameOfFood, points) => {
		const addpoints = this.state.totalCandy + amount;
		this.setState({
			totalPoints: this.state[nameOfFood].addpoints
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
		const Food = [
			{
				name: 'apple',
				amount: 12
			},
			{
				name: 'burger',
				amount: 8
			},
			{
				name: 'fries',
				amount: 2
			},
		];
		return (
			<div className="App">
				<h1>Clicky Game</h1>

				<h3>can you get to the goal score</h3>
				{this.state.gameOver && (
					<Fragment>
						<h1>YOU {this.state.winner ? 'WIN' : 'LOSE'}!!!</h1>
					</Fragment>
				)}

				{!this.state.gameOver && !!this.state.totalPoints && !!this.state.goal && <button onClick={this.compareTotals}>LOCK IT IN!!!</button>}
				{this.state.gameOver && <button onClick={this.resetGame}>Play Again?</button>}

				<div className="selections">
					<div className="unselected candy sel">
						<h2>Select Your Candy</h2>
						{Food.map(Food => (
							!this.state[Food.name] && (
								<Food key={Food.name} src={`/${Food.name}.jpg`} alt={Food.name} onClick={this.handleClick} amount={Food.amount} />
							)
						))}
					</div>
				</div>
			</div>
		);
	}
}
export default App;
