import React from 'react'

const Sample = () => {
const numbers=[1,2,3,4,5,6,7,8,9,10];
const numberList=numbers.map((_,index)=>index);
  return (
    <div>

      <h1>{numberList.join(',')}</h1>
        
    </div>
  )
}

export default Sample