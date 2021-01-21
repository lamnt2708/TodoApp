import React from 'react'

export default function KanbanFirstRow(){
    return(
        <tr className='statusrow'>
            <td className='status-column'></td>
            <td className='kanban-column backlog'>Backlog</td>
            <td className='kanban-column todo'>ToDo</td>
            <td className='kanban-column inprogress'>InProgress</td>
            <td className='kanban-column staging'>Stagging</td>
            <td className='kanban-column dong'>Done</td>
        </tr>
    )
} 