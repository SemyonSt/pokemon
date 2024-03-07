import React, { useEffect, useState } from "react";
import axios from 'axios';

import PokemonCard from "./PokemonCard";
import PokemonChips from "./PokemonChips";

const ChipsContainer = () => {
    const [pokemons, setPokemons] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState(pokemons[0])
    const [infoPokemon, setInfoPokemon] = useState()
    const [click, setClick] = useState(false)

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(response => {
                setPokemons(response.data.results);
                setSelectedPokemon(response.data.results[0]);
                axios.get(response.data.results[0].url)
                    .then(response => {
                        setInfoPokemon(response.data);
                    })
                    .catch(error => {
                        console.error('Error fetching pokemons:', error);
                    });
            });
    }, []);

    useEffect(() => {
        if (click) {
            axios.get(selectedPokemon.url)
                .then(response => {
                    setInfoPokemon(prevState => ({
                        ...prevState,
                        ...response.data
                    }));
                })
                .catch(error => {
                    console.error('Ошибка при получении деталей покемона:', error);
                });
        }

    }, [selectedPokemon, click])

    if (!infoPokemon) {
        return <div>Loading...</div>;
    }

    return (

        <div className="chips-container">
            <PokemonChips pokemons={pokemons} setSelectedPokemon={setSelectedPokemon} setClick={setClick} />
            <PokemonCard infoPokemon={infoPokemon} selectedPokemon={selectedPokemon} />
        </div>
    )
}

export default ChipsContainer;