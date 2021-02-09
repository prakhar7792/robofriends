import React from 'react';

const SearchBox = ({searchChnage}) =>{
    return (
        <div className = 'pa2'>
        <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search Robots' onChange={searchChnage}/>
        </div>
    );
}

export default SearchBox;