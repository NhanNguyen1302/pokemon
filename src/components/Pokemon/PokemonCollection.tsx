import React from 'react'
import { Detail, PokemonDetail } from '../../interface';
import PokenmonList from './PokenmonList';
import "./pokemon.css";
interface Props {
    pokemons: PokemonDetail[],
    viewDetail: Detail,
    setDetail: React.Dispatch<React.SetStateAction<Detail>>
}
const PokemonCollection: React.FC<Props> = (props) => {
    const { pokemons, viewDetail, setDetail } = props;
    const selectPokemon = (id: number) => {
        if (!viewDetail.isOpen)
            setDetail({
                id: id,
                isOpen: true
            })
    };
    return (
        <>
            <section 
                className={
                    viewDetail.isOpen 
                        ? "collection-container-active" 
                        : "collection-container"
                }
            >
                {viewDetail.isOpen ? (
                    <div className='overlay'> </div>
                ) : (
                    <div className=''></div>
                )}
                {pokemons.map((pokemon) => {
                    return (
                        <div onClick={() => selectPokemon(pokemon.id)}>
                            <PokenmonList
                                viewDetail={viewDetail}
                                setDetail={setDetail}
                                key={pokemon.id}
                                name={pokemon.name}
                                abilites={pokemon.abilities}
                                id={pokemon.id}
                                image={pokemon.sprites.front_default}
                            />
                        </div>
                    );
                })}
            </section>
        </>
    )
}

export default PokemonCollection