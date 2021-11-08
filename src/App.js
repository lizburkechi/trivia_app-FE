import React, { useState, useEffect, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import TriviaCardList from "./TriviaCardList";
import "./app.css";
import axios from "axios";
import Timer from "./Timer";
import Signup from "./Signup";
import Login from "./Login";
import Navbar from "./Navbar";
import Profile from "./Profile"

function App() {
  const [user, setUser] = useState(null);
  const [triviaCards, setTriviaCards] = useState([]);
  const [categories, setCategories] = useState([]);

  const categoryEl = useRef();
  const amountEl = useRef();

  useEffect(() => {
    axios.get("https://opentdb.com/api_category.php").then((r) => {
      setCategories(r.data.trivia_categories);
    });
  }, []);

  useEffect(() => {
    // GET /me
    fetch("http://localhost:3000/me")
      .then((r) => r.json())
      .then((user) => {
        // response => set user in state
        setUser(user);
      });
  }, []);

  // filter out HTML characters in API questions
  function decodeHtml(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get("https://opentdb.com/api.php", {
        params: {
          amount: amountEl.current.value,
          category: categoryEl.current.value,
        },
      })
      .then((response) => {
        setTriviaCards(
          response.data.results.map((questionItem, index) => {
            const answer = decodeHtml(questionItem.correct_answer);
            const options = [
              ...questionItem.incorrect_answers.map((a) => decodeHtml(a)),
              answer,
            ];
            return {
              id: `${index}-${Date.now()}`,
              question: decodeHtml(questionItem.question),
              answer: questionItem.correct_answer,
              options: options.sort(() => Math.random() - 0.5),
            };
          })
        );
      });
  }

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route exact path="/profile">
            {user ? (
              <Profile user={user} setUser={setUser} />
            ) : (
              <h1>Please log in to see this page.</h1>
            )}
          </Route>
      <Route exact path="/gameboard">
        <form className="header" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="category">Select Category</label>
              <select id="category" ref={categoryEl}>
              {categories.map((category) => {
                return (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="amount">Number of Questions</label>
            <input
              type="number"
              id="amount"
              min="1"
              max="12"
              step="1"
              defaultValue={8}
              ref={amountEl}
            />
          </div>
          <div className="form-group">
            <button className="btn">Deal Cards</button>
          </div>
        </form>
        <div className="card-container">
          <TriviaCardList triviaCards={triviaCards} />
        </div>
        <div className="timer-div">
          <Timer />
        </div>
        </Route>
      </Switch>    
    </main>
    </>
  );
}
export default App;
