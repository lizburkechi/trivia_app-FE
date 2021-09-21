import React, { useState, useEffect, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import TriviaCardList from "./TriviaCardList";
import "./app.css";
import axios from "axios";
import Timer from "./Timer";
import Footer from "./Footer";
import Home from "./Home";
import PointsCounter from "./PointsCounter"

function App() {
  const [triviaCards, setTriviaCards] = useState([]);
  const [categories, setCategories] = useState([]);

  const categoryEl = useRef();
  const amountEl = useRef();

  useEffect(() => {
    axios.get("https://opentdb.com/api_category.php").then((r) => {
      setCategories(r.data.trivia_categories);
    });
  }, []);
  useEffect(() => {}, []);

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
     
    <div className="App">
      <Switch>
      <Route exact path="/versus-trivia">
        <Home />
      </Route>
      <Route exact path="/play-versus-trivia">
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
              max="8"
              step="1"
              defaultValue={8}
              ref={amountEl}
            />
          </div>
          <div className="form-group">
            <button className="btn">Deal Cards</button>
          </div>
        </form>
        <div className="container">
          <TriviaCardList triviaCards={triviaCards} />
        </div>
        <div className="footer-container">
          <Footer>
            <Timer />
            <PointsCounter />
          </Footer>
        </div>
        </Route>
      </Switch>    
    </div>
  );
}
export default App;
