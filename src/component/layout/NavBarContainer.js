// import React, {Component} from 'react';
// import styled from 'styled-components'; 



// export default class NavBar extends Component {

//     render() {
//         return(
//             <div>
//                 <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'
                     
//                 >
//                     <a href='' className='navbar-brand col-sm-3 col-md-2 mr-0 align-items-center'>Pokedex</a>
//                 </nav>
//             </div>
//         )
//     }
// }

// import Example from './NavBar';
// import React from 'react';
// import axios from 'axios';

// const NavBarContainer = () => {

 
//     let url = "https://pokeapi.co/api/v2/pokemon/";
    
//     // pages: [],
//     // name: '',
//     // pokemonIndex: '',
//     // imageUrl: '',

//   //   const res = async () => {await axios.get(url)
//   //   .then(response => {
//   //     let pokemon = [];
//   //     pokemon.push(response.data['results']); 
//   //     // console.log(pokemon)
//   //     return pokemon;
//   //   }).then(response => {
//   //     return response;
//   //   })
//   //   return;
//   // } 
//   //   let pokemon = res;
//   //   console.log(pokemon);
//   let getInfo = async () => {
//     const res = await axios.get(url);
//     let pokemon = [];
//     pokemon.push(res.data['results']);
//     console.log(pokemon);
//   }
  
//     // console.log({ pokemon: res.data['results'] })
//     // const {pokemonIndex} = this.props.match.params;
//     //     // Url for pokemon information
//     //     const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
//     //     // Get запрос information
//     //     const pokemonRes = await axios.get(pokemonUrl);
//     //     const name = pokemonRes.data.name;



//     return (
//       <div>
//         <Example  />
//       </div>
//     );
// }

// export default NavBarContainer;
 

