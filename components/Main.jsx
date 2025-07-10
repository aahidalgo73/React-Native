
import { ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { getPersonajes } from '../lib/rickyMorty';
import { CharacterCard } from './CharacterCard';


export function Main() {
   
 const [personajes,setPersonajes] = useState([]);

  useEffect(() => {
      getPersonajes().then((data) => {
        setPersonajes(data);
        console.log("personajes", data) ;


    })

  },[]);
   

    return (
<ScrollView>
      { personajes.map((character) => (        
      <CharacterCard character = {character} 
      key = {character.id}/>
      )) }
    </ScrollView>            
    ); 
}