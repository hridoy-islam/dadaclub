import React from 'react';
import Header from '../Header/Header';
import './Tasks.css'
import Task from '../Task/Task'
import Blog from '../Blog/Blog';

const Tasks = ({tasks, addTask}) => {

    return (
        <div className='col-md-9 tasks'>
            <Header></Header>
            <div className='row g-2'>
            
            {
                tasks.map(task => <Task
                    key={task.id}
                    addTask={addTask} 
                    task={task}></Task>)
            }
            </div>
            <Blog></Blog>
        </div>
    );
};

export default Tasks;