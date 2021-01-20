import React from 'react'
import SearchBar from './SearchBar'
import ToolSection from './ToolSection'
import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <SearchBar />
            <ToolSection />
        </div>
    )
}