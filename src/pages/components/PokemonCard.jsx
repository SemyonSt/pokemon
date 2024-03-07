/* eslint-disable jsx-a11y/alt-text */
import { List, Typography, CardMedia, Card } from '@mui/material';

const PokemonCard = ({ infoPokemon, selectedPokemon }) => {

    return (
        <>
            <Card sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexDirection: 'column',
                padding: '44px 44px 16px 44px',
                width: '396px',
                height: '440px',
                background: '#000',
            }}>
                <Typography sx={{
                    fontWeight: '700',
                    fontSize: '48px',
                    lineHeight: '100%',
                    color: '#a0a0a0',
                }}
                    gutterBottom variant="h4" component="div">
                    {selectedPokemon.name[0].toUpperCase() + selectedPokemon.name.slice(1)}
                </Typography>
                <div className='img'>
                    <CardMedia
                
                        component="img"
                        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon.url.split('/')[6]}.png`}
                    />
                </div>

                <List
                    sx={{
                        padding: '0',
                        margin: '0',
                    }}
                >
                    <ul className='info-card'>
                        <li>Снялся в {infoPokemon.moves.length} сериях </li>
                        <li>Id: {infoPokemon.id}</li>
                        <li>height: {infoPokemon.height}</li>
                        <li>attack: {infoPokemon?.stats?.find(stat => stat.stat.name === 'attack')?.base_stat}</li>
                    </ul>

                </List>

            </Card >
        </>

    )
}

export default PokemonCard;