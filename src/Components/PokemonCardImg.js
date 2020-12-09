import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import Translator from './Translator';

const PokemonCardImg = ({ pokeId }) => {
  const [error, setError] = useState(false);

  // Bu işlemin kodu yavaslattığıunı düşünüyorum.
  //Fakat resmi olmayan pokemonların bilgisini
  // kullanıcıya göstermek istediğim için bu yönetimi kullandım
  useEffect(() => {
    axios
      .get(`https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`)
      .then((res) => {
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {error ? (
        <h4 className='text-center text-white '>
          <Translator
            turkish={'Resim yüklenemedi. Lütfen daha sonra tekrar deneyiniz'}
            english={'Picture couldnt upload. Please try again later.'}
          />
        </h4>
      ) : (
        <Card.Img
          variant='top'
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`}
        />
      )}
    </>
  );
};

export default PokemonCardImg;
