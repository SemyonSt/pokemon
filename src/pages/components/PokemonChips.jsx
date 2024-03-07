import * as React from 'react';

import { Button, Stack } from '@mui/material';

const PokemonChips = ({ pokemons, setSelectedPokemon, setClick }) => {
    const click = (pokemon) => {
        setClick(true)
        setSelectedPokemon(pokemon)
    }
    return (
        <Stack direction="row" useFlexGap flexWrap="wrap" sx={{ width: '484px', marginRight: '6px' }}>
            {pokemons.map((pokemon, index) => (
               
                <Button variant="contained"
                    sx={{
                        cursor: 'pointer',
                        borderRadius: '44px',
                        padding: '20px',
                        background: '#1986ec',
                        marginRight: '6px',
                        marginBottom: '10px',
                        fontWeight: '500',
                        fontSize: '20px',
                        lineHeight: '100%',
                        color: '##fff',
                        textTransform: 'none' 
                    }}
                    key={index}
                    onClick={() => click(pokemon)} >{pokemon.name}
                </Button>

            ))}
        </Stack>
    );
};

export default PokemonChips;
