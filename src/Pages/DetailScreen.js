import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DetailScreen = (props) => {
  const { pokeId } = props.match.params;
  const [pokeDetail, setPokeDetail] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>hello</div>;
};

export default DetailScreen;
