const PokemonCard = ({infoPokemon, selectedPokemon}) => {
    console.log('INFOOOOOO', infoPokemon)
    if (!infoPokemon) {
        return <div>Loading...</div>;
    }
    console.log('lalalala', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon.url.split('/')[6]}.png`)
    return (
        <div className='card-pokemon'>
            <div className='head-card'>
            {infoPokemon.name[0].toUpperCase() + infoPokemon.name.slice(1)}
            </div>
            <div className='photo-card'>
            <img className='img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon.url.split('/')[6]}.png`} />


            </div>

            <ul className='info-card'>
                <li>Снялся в {infoPokemon.moves.length} сериях </li>
                <li>Id: {infoPokemon.id}</li>
                <li>height: {infoPokemon.height}</li>
                <li>attack: {infoPokemon?.stats?.find(stat => stat.stat.name === 'attack')?.base_stat}</li>
            </ul>



        </div>
    )
}

export default PokemonCard;