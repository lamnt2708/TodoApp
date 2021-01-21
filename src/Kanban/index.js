import React from 'react'
import './Kanban.css'
import KanbanHeader from './KanbanHeader'
import KanbanTable from './Kanban'

export default function Kanban(){
    return(
        <div className='kanban'>
         <KanbanHeader />
         <KanbanTable />
        </div>
    )
}