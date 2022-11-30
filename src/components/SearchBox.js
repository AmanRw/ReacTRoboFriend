import React from 'react'

const SearchBox = ({serachfield,searchChange}) => {
  return (
    <div className='pa2 '>
        <input 
        className='pa3 ba b--greeen bg-lightest-blue br3' 
        type="search" 
        placeholder='Search robots' 
        onChange={searchChange}
        />
    </div>
  )
}

export default SearchBox