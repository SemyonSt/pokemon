const PokemonChips = ({ pokemons, setSelectedPokemon, setClick }) => {
    console.log('INNN', pokemons);
    const click =(pokemon) => {
        setClick(true)
        setSelectedPokemon(pokemon)
    }
    return (
        <div className='btn-chips'>
            {pokemons.map((pokemon, index) => (
                <button className='btn' key={index} onClick={() => click(pokemon)}>
                    {pokemon.name}

                </button>
            ))}
        </div>
    );
};

export default PokemonChips;
