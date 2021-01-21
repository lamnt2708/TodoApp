import React from 'react'
import './Kanban.css'
import KanbanHeader from './KanbanHeader'
import KanbanTable from './Kanban'

class Kanban extends React.Component {
constructor(props){
    super(props);
    this.state = {targetobj: {}}
    this.handleOpenModal = this.handleOpenModal.bind(this);
}

handleOpenModal(e){
    this.setState({targetobj: e.target.value})
}
    render() {
        return (
            <div className='kanban'>
   
                <KanbanHeader />
                <KanbanTable handeOpenModal={this.handleOpenModal}/>
            </div>
        )
    }
}
export default Kanban;