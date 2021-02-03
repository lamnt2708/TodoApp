import React, {useState} from 'react'



export default function SearchBar(){

    function handleSearch(str) {
        console.log(search)
        setSearch('')
    }   

const [search, setSearch] = useState('');
    return(
        <div className='search-bar'>
            <input type='text' onChange={e => setSearch(e.target.value)}>

            </input>
            <button onClick={e => handleSearch(search)}>Search</button>
        </div>
    )
}