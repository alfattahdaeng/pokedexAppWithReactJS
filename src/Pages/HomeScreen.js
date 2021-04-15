import React, {useState, useEffect} from 'react'
import CardDeck from '../Components/CardDex'
import SearchBar from '../Components/SearchBar'
import axios from 'axios'
import ErrorPage from '../Components/ErrorPage'
import ScreenLayout from '../Components/ScreenLayout';
import { Image, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import '../Styles/app.css';

const NUM_OF_POKEDEX_TO_DISPLAY = 50

const HomeScreen = () => {
  const pokemonRandomMonsterUrl = `https://pokeapi.co/api/v2/pokemon?limit=${NUM_OF_POKEDEX_TO_DISPLAY}`
  const [pokemonNames, setPokemonNames] = useState(null)
  const [pokemonNameToSearch, setPokemonNameToSearch] = useState([])
  const [pokemonNameToSearchFound, setPokemonNameToSearchFound] = useState(false)


  useEffect(()=>{
    axios(pokemonRandomMonsterUrl)
      .catch(err => console.err(err))
      .then(res => {  
        let names = []
        let urls = []

        for(let i=0; i< res.data.results.length; ++i){
          names.push(res.data.results[i].name)
          urls.push(res.data.results[i].url)
        }

        setPokemonNames(names)
      })
  },[pokemonRandomMonsterUrl])

 return(
    <div>
      <ScreenLayout>
          <div className='navi home'>
            <LinkContainer to='/'>
              <Nav.Link>
                <Image
                  src={`../Images/pokeball.png`}
                />
              </Nav.Link>
            </LinkContainer>
            <div className='ml-auto'>
              <LinkContainer to='/favorites'>
                <Nav.Link>
                  <i className="fas fa-list"></i>
                </Nav.Link>
              </LinkContainer>
            </div>
          </div>
        <h3 className="mb-4 mt-4 px-3 font-weight-bold">Pokedex</h3>

        <SearchBar 
          pokemonNames = {pokemonNames}
          pokemonNameToSearch = {pokemonNameToSearch}
          setPokemonNameToSearch = {setPokemonNameToSearch}
          setPokemonNameToSearchFound = {setPokemonNameToSearchFound}
        />
        {/* Default */}
        {pokemonNameToSearch && pokemonNames && pokemonNameToSearchFound &&
          typeof pokemonNameToSearch === "object" && <CardDeck pokemonNameToSearch ={pokemonNames} pokemonNameToSearchFound = {pokemonNameToSearchFound}/>
        }

        {/* Reset Button Clicked */}
        {pokemonNameToSearch && pokemonNames && !pokemonNameToSearchFound &&
          typeof pokemonNameToSearch === "object" && <CardDeck pokemonNameToSearch ={pokemonNames} pokemonNameToSearchFound = {pokemonNameToSearchFound}/>
        }
        
        {/* Valid Submission */}
        {pokemonNameToSearch && pokemonNames && pokemonNameToSearchFound &&
          typeof pokemonNameToSearch === "string"
          && <CardDeck pokemonNameToSearch ={pokemonNameToSearch} pokemonNameToSearchFound = {pokemonNameToSearchFound}/>
        }

        {/* Invalid Submission */}
        {pokemonNameToSearch && pokemonNames && !pokemonNameToSearchFound &&
          typeof pokemonNameToSearch === "string" && <ErrorPage />
        }
      </ScreenLayout>
    </div>
  );
};
export default HomeScreen;