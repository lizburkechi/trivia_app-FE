import React from "react";

class TeamsForm extends React.Component {
  state = {
    team1: "",
    team2: "",
    player1: "",
    player2: "",
    player3: "",
    player4: "",
    player5: "",
    player6: "",
    player7: "",
    player8: "",
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <div className="forms-page-div">
        <div className="teams-header">
        <h1 className="choose-teams-title">Choose Your
       Teams</h1>
       </div>
        <br />
        <form className="team1-form">
          <h2 className="team-title">Team 1</h2>
          <input
            name="team1"
            placeholder="Team Name"
            value={this.state.team1}
            onChange={(e) => this.change(e)}
          />
          <br />
          <input
            name="player1"
            placeholder="player 1"
            value={this.state.player1}
            onChange={(e) => this.change(e)}
          />
          <br />
          <input
            name="player2"
            placeholder="player 2"
            value={this.state.player2}
            onChange={(e) => this.change(e)}
          />
          <br />
          <input
            name="player3"
            placeholder="player 3"
            value={this.state.player3}
            onChange={(e) => this.change(e)}
          />
          <br />
          <input
            name="player4"
            placeholder="player 4"
            value={this.state.player4}
            onChange={(e) => this.change(e)}
          />
          <br />
          <br />
          <button className="btn btn-info" onClick={(e) => this.onSubmit(e)}>Submit</button>
        </form>
        <br />
        <br />
        <form classname="team2-form">
          <h2 className="team-title">Team 2</h2>
          <input
            name="team2"
            placeholder="Team Name"
            value={this.state.team2}
            onChange={(e) => this.change(e)}
          />
          <br />
          <input
            name="player5"
            placeholder="player 1"
            value={this.state.player5}
            onChange={(e) => this.change(e)}
          />
          <br />
          <input
            name="player6"
            placeholder="player 2"
            value={this.state.player6}
            onChange={(e) => this.change(e)}
          />
          <br />
          <input
            name="player7"
            placeholder="player 3"
            value={this.state.player7}
            onChange={(e) => this.change(e)}
          />
          <br />
          <input
            name="player8"
            placeholder="player 4"
            value={this.state.player8}
            onChange={(e) => this.change(e)}
          />
          <br />
          <br />
          <button className="btn btn-info" onClick={(e) => this.onSubmit(e)}>Submit</button>
        </form>
        <br />
        <br />
        <div className="teams-footer">
          <br />
          <br />
          <a id="play-game-btn" className="btn btn-danger" href="/trivia">
            Let's Play!
          </a>
          </div>
      </div>
    );
  }
}

export default TeamsForm;
