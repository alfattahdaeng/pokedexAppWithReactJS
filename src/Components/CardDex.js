import React, {} from 'react';
import Card from './Card';
import { Row } from 'react-bootstrap';

// Received an array of pokemon names and urls
const CardDex = props => {
    return (
      <Row className='mx-0 px-2'>
            {typeof props.pokemonNameToSearch === "object" && props.pokemonNameToSearch.map(name => { return (<Card key = {name} name = {name}/> )})}
            {typeof props.pokemonNameToSearch === "string" && <Card key = {props.pokemonNameToSearch} name = {props.pokemonNameToSearch}/>}
      </Row>
    );
}

export default CardDex;