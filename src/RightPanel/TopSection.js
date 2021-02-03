import React from 'react'
import {Link} from 'react-router-dom';

export default function TopSection() {
    return (
        <div className='top-section'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/kanban'>Kanban</Link></li>
                <li><Link to='/weeklyscheduale'>This Week</Link></li>
                <li><Link to='/monthlysheduale'>Month</Link></li>
            </ul>
        </div>
    )
}