import React from 'react'

const InfoCards = ({cardNumer, cardTitle, cardText}) => {
  return (
    <div className='flex flex-col w-full justify-center items-center max-w-[450px]'>
      <img src={`./card${cardNumer}.svg`}/>
      <h3 className='text-3xl font-bold text-center mb-2'>{cardTitle}</h3>
      <p className='text-grey text-center'>{cardText}</p>
    </div>
  )
}

export default InfoCards
