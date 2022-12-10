import React from 'react';
import './Task.css'

const Task = ({task, addTask}) => {
    return (
        <div className='col-md-4'>
            <div className='card p-3'>
            <img className='rounded mb-1' src={task.picture} alt='' />
            <h3>{task.name}</h3>
            <p>{task.about}</p>
            <p>For Age: {task.age}</p>
            <p>Time :{task.time}s</p>
            <button onClick={()=>addTask(task.id)} className='rounded btn-sm btn-block taskbtn py-2'>Add to list</button>
            </div>
        </div>
    );
};

export default Task;