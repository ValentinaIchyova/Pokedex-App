import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import axios from 'axios';


export default class PokemonList extends Component {

    state={
        url: "https://pokeapi.co/api/v2/pokemon/",
        pokemon: null,
        count: 248,
        pageSize: 20,
        previous: null,
        next: "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20/",
        pages: []
    }


    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results'] })
        console.log({ pokemon: res.data['results'] })

        let pagesCount = Math.ceil(this.state.count / this.state.pageSize);
        let arr = [];
        for (let i=1; i<= pagesCount; i++) {
            arr.push(i);
            this.setState({
                pages: arr
            })
        }
    }

   
    async onPageChange() {
        const res = await axios.get(this.state.next);
        console.log(res);
        this.setState({ pokemon: res.data['results'] })
    }


    render() {
        return (
            <>
            {/* <div>
                {this.state.pokemon.map(pokemon => {
                    <a>{pokemon.name}</a>
                })}
            </div> */}
                <div> 
                    {this.state.pages.map(p => {
                        return <a onClick={this.onPageChange} className='ml-2'>{p}</a>
                    })}
                </div>
                {this.state.pokemon ? (
                    <div className='container'>
                    <div className='row'>
                        {this.state.pokemon.map(pokemon => (
                            <PokemonCard 
                                key={pokemon.name}
                                name={pokemon.name}
                                url={pokemon.url}/>
                        ))}
                    </div>
                    </div>
                ) : (<h1>Loading Pokemon</h1>)}
            </>
        );
    }
}
