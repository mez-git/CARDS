import React, { useEffect, useState } from "react";

import Cards from "./components/Cards";
const App = () => {
  const [cards, setCards] = useState([]);
  const [cardCount, setCardCount] = useState("4");
  const [show, setShow] = useState(Array(cardCount).fill(false));
  const [clicked, setClicked] = useState([]);
const [gameResult,setGameResult]=useState("")
const[loading,setLoading]=useState(false)
  console.log("show", show);

  const handleSelectChange = (val) => {
    setCardCount(val);
  };

  const generateRandomNumCards = () => {
    // const nums = Array.from({ length: 99 }, (_, i) => i + 1);
    const nums = [];
    for (let i = 1; i <= 99; i++) {
      nums.push(i);
    }
    console.log(nums);
    const newAaray = [];
    for (let i = 0; i < cardCount; i++) {
      const randomIndex = Math.floor(Math.random() * nums.length);
      const selectedNumber = nums[randomIndex];
      newAaray.push(selectedNumber);
      nums.splice(randomIndex, 1);
    }
    setCards(newAaray);
    setShow(Array(newAaray.length).fill(false));
    setClicked([]);
    setGameResult("")

  };
  useEffect(() => {
    generateRandomNumCards();
  }, []);
  console.log("cards", cards);

  const handleShow = (index) => {
    setShow((prevShow) => {
      const newShow = [...prevShow];
      newShow[index] = !newShow[index];
      return newShow;
    });
  };

  const handleClicked = (index) => {
    setLoading(true)
    setClicked((prev) => {
      if (prev.length < 2 && !prev.includes(index)) {
        return [...prev, index];
      }
      return prev;
    });
  };

  const sorted = [...cards].sort((a, b) => a - b);
  const selected = clicked.map((index) => cards[index]);
  console.log("sorted", sorted);

  console.log("clicked", clicked);
  console.log("selected", selected);

  const result = () => {
    setLoading(false)
    const cardOne = sorted.indexOf(selected[0]);
    const cardTwo = sorted.indexOf(selected[1]);
    console.log("sotedvala index", cardOne, cardTwo);
    const diff = cardTwo - cardOne;
    console.log("difference", diff);
    if (clicked.length == 2) {
      if (diff == 1) {
        setGameResult("winner");
      } else {
        setGameResult("better luck next time !");
      }
    }
  };

  return (
    <div>
      <Cards
        cards={cards}
        generateRandomNumCards={generateRandomNumCards}
        cardCount={cardCount}
        handleSelectChange={handleSelectChange}
        show={show}
        handleShow={handleShow}
        clicked={clicked}
        handleClicked={handleClicked}
        result={result}
        gameResult={gameResult}
        loading={loading}
      />
    </div>
  );
};

export default App;
