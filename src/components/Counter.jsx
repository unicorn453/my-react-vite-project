import React, { useState, useEffect } from "react";
import Card from "./Card";
import Header from "./Header";

// Function to fetch images from Giphy API
async function fetchCatGifs() {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/search?q=cats&api_key=tBq3j8z1U3hxd865oUdkldHvdr1AHxA4&limit=6"
    );
    const data = await response.json();
    return data.data.map((gif) => gif.images.original.url);
  } catch (error) {
    console.error("Error fetching cat gifs:", error);
    return [];
  }
}

function Counter() {
  const [gifs, setGifs] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const fetchedGifs = await fetchCatGifs();
      setGifs(fetchedGifs);
    }
    fetchData();
  }, []);

  const handleGifClick = async () => {
    // Fetch new GIFs from the API
    const newGifs = await fetchCatGifs();
    // Shuffle the newGifs array
    const shuffledGifs = shuffle(newGifs);
    setGifs(shuffledGifs); // Update the gifs state with shuffled data
    setCount((prevCount) => prevCount + 1); // Increment the count using previous state
  };

  // Function to shuffle an array
  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  return (
    <>
      <Header count={count} />
      <div className="card text-center">
        <div className="card-header bg-primary text-white">Click Counter!</div>
        <Card gifs={gifs} handleClick={handleGifClick} />
      </div>
    </>
  );
}

export default Counter;
