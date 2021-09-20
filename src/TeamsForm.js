import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function TeamsForm() {
  
    const [team1, setTeam1] = useState('');
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [player3, setPlayer3] = useState('');
    const [player4, setPlayer4] = useState('');
    const [team2, setTeam2] = useState('');
    const [player5, setPlayer5] = useState('');
    const [player6, setPlayer6] = useState('');
    const [player7, setPlayer7] = useState('');
    const [player8, setPlayer8] = useState('');
    const history = useHistory();

    function handleSubmit(e){
      e.preventDefault();

      const teamData = {
        team1,
        player1,
        player2,
        player3,
        player4,
        team2,
        player5,
        player6,
        player7,
        player8
      };

      fetch(`http://localhost:3000/teams`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(teamData)
      })
      .then((resp) => resp.JSON())
      .then((teamData) => {
        console.log(teamData);
        history.push(`/trivia`)
      });
    }

    return (
      <main>
      <div className="teams-header">
        <h1 className="choose-teams-title">Choose Your Teams</h1>
      </div>
      <form className="team1-form" onSubmit={handleSubmit}>
        <h2 className="team-title">Team 1</h2>
        <label htmlFor="team1-name"/>
          <input
            type="text"
            placeholder="Team 1 Name"
            id="team1"
            value={team1}
            onChange={(e) => setTeam1(e.target.value)}
          />
          <input
            type="text"
            placeholder="player 1"
            id="player1"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
          />
          <input
            type="text"
            placeholder="player 2"
            id="player2"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
          />
          <input
             type="text"
             placeholder="player 3"
             id="player3"
             value={player3}
             onChange={(e) => setPlayer3(e.target.value)}
          />
          <input
            type="text"
            placeholder="player 4"
            id="player4"
            value={player4}
            onChange={(e) => setPlayer4(e.target.value)}
          />
          <br />
        <h2 className="team-title">Team 2</h2>
          <input
            type="text"
            placeholder="Team 2 Name"
            id="team2"
            value={team2}
            onChange={(e) => setTeam2(e.target.value)}
          />
          <input
             type="text"
             id="player5"
             placeholder="player 5"
             value={player5}
             onChange={(e) => setPlayer5(e.target.value)}
          />
          <input
             type="text"
             id="player6"
             placeholder="player 6"
             value={player6}
             onChange={(e) => setPlayer6(e.target.value)}
          />
          <input
             type="text"
             id="player7"
             placeholder="player 7"
             value={player7}
             onChange={(e) => setPlayer7(e.target.value)}
          />
          <input
             type="text"
             placeholder="player 8"
             id="player8"
             value={player8}
             onChange={(e) => setPlayer8(e.target.value)}
          />
      <input type="submit" value="Add Teams" />
      </form>
        <div className="teams-footer">
          <a id="play-game-btn" className="btn btn-danger" href="/trivia">
            Let's Play!
          </a>
        </div>
      </main>
    );
  }


export default TeamsForm;
