import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/residentCard.css'
const ResidentCard = ({url}) => {

  const [resident, getApiResident]=useFetch(url)

  useEffect(()=>{
    getApiResident()

  },[])
  return (
    <div className='space'>
    <article className='resident'>
      <header className='resident__header'>
        <img className="resindet__img"src={resident?.image} alt=""/>

        <div className='resident__status'>
          <span className={`resident__circle ${resident?.status}`}></span>
          <span className='resident__status-value'>{resident?.status}</span>
        </div>
      </header>
      <section className='resident__body'>
        <h3 className='resident__name'>{resident?.name}</h3>
        <hr className='resident__hr'/>
        <ul className='resident__list'>
          <li className='resident__item'><span className='resident__label'>specie: </span>
            <span className='resident__value'></span>{resident?.species}</li>
          <li className='resident__item'><span className='resident__label'>origin: </span>
            <span className='resident__value'></span>{resident?.origin.name}</li>
          <li className='resident__item'><span className='resident__label'>episode where appear: </span>
            <span className='resident__value'>{resident?.episode.length}</span></li>
        </ul>
      </section>

    
    </article>
    </div>
    
    
  )
}

export default ResidentCard