import React, { useEffect, useState } from 'react';
import "./pokemon.css";
import { Detail } from '../../interface';

interface Props {
  viewDetail: Detail
  setDetail: React.Dispatch<React.SetStateAction<Detail>>
  abilites:
    | {
        ability: string;
        name: string;
      }[] 
    | undefined;
  name: string;
  id: number;
  image: string
}
const PokenmonList: React.FC<Props> = (props) => {
  const { 
          name, 
          id, 
          image, 
          abilites, 
          viewDetail, 
          setDetail 
        } = props;
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(id === viewDetail?.id);
  }, [viewDetail]);
  
  const closeDetail = () => {
    setDetail({
      id: 0,
      isOpen: false
    })
  }
  return (
    <div className=''>
      {isSelected ? (
        <section className='pokemon-list-detailed'>
          <div className="detail-container">
            <p className='detail-close' onClick={closeDetail}>
              X
            </p>
            <div className='detail-info'>
              <img src={image} alt="pokemon" className='detail-img' />
              <p className='detail-name'> {name} </p>
            </div>
            <div className='detail-skill'>
              <p className='detail-ability'> Abilities: </p>
                {abilites?.map((ab: any) => {
                  return <div className=''> {ab.ability.name}</div>
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className='pokemon-list-container'>
         <p className='pokemon-name'> {name} </p>
          <img src={image} alt="pokemon" />
        </section>
      )}
    </div>
  )
}

export default PokenmonList