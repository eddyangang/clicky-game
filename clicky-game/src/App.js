import React, { Component } from "react";
import friends from "./friends.json";
import Tile from "./components/Tile";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav"

class App extends Component {

  state = {
    friends,
    score: 0,
    clicked: []
  }

  suffleFriends = () => {
    friends.sort(() => Math.random() - 0.5);
    this.setState({friends : friends})
  }


  check = (id) => {

    if (this.state.score === 12) {
      alert("Congratulations! You Won!!!")
      this.reset()
    }
    
    if (!this.state.clicked.includes(id)) {
      this.state.clicked.push(id)
      this.setState({score: this.state.score + 1})
      this.suffleFriends()
    } else {
      this.reset();
      alert("You lose. Try Again")
    }
  }

  reset = () => {
    this.suffleFriends()
    this.setState({score: 0});
    this.setState({clicked: []});
  }

  render() {

    return (

    <div>
        <Nav score = {this.state.score}/>
        <Wrapper> 
          {
            this.state.friends.map(friend => {
              return (
                <Tile
                id = {friend.id}
                name={friend.name}
                image={friend.image}
                check={this.check}
              />
              );
        })}
        </Wrapper>
    </div>
    );
  }

}
export default App;
