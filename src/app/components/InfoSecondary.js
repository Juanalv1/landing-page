import React from 'react'

const InfoSecondary = ({image, number, infoType}) => {
  return (
    <div className='flex gap-2 w-full justify-center items-center'>
      <div className='flex items-center justify-center'>
        <img src={`./${image}.svg`} className=' w-12 h-12'/>
      </div>
      <div className='flex flex-col'>
        <span className='text-xl text-d-grey font-bold'>
          {number}
        </span>
        <span className='text-sm text-grey'>
          {infoType}
        </span>
      </div>
    </div>
  )
}

export default InfoSecondary
