import React from 'react'

const Card = ({name, email, id}) => {
  return (

    <div className='tc bg-light-blue dib br3 pa3 ma4 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?100x100`} alt='Robot'/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>

    </div>
  );
}

export default Card;