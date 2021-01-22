import React from 'react'
import './Kanban.css'
import KanbanHeader from './KanbanHeader'
import KanbanTable from './Kanban'
import TaskModal from '../TaskModal.js';

class Kanban extends React.Component {
constructor(props){
    super(props);
    this.state = {targetobj: {}}
    this.handleOpenModal = this.handleOpenModal.bind(this);
}

handleOpenModal(e){
    this.setState({targetobj : e})
    console.log("state change", this.state.targetobj)
}
    render() {
        return (
            <div className='kanban'>
                <TaskModal obj={this.state.targetobj} />
                <KanbanHeader />
                <KanbanTable handeOpenModal={this.handleOpenModal}/>
            </div>
        )
    }
}
export default Kanban;