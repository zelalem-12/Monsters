import React from 'react';
import './search-box.style.css';


export const SearchBox=({placeholder, searchHandler})=>(
<input
className='search'
type='search'
placeholder={placeholder}
onChange={searchHandler}
/>
);