import { useEffect, useState } from 'react';
import { ToastContainer} from 'react-toastify';
import Profile from './components/Profile/Profile';
import Tasks from './components/Tasks/Tasks';
import 'react-toastify/dist/ReactToastify.css';
import notify from './Utilies/Toast';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [exercise, setExercise] = useState(0);
  const [breaktime, setBreaktime] = useState(0);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setTasks(data))
  }, []);

  const addTask = (id) => {
    const addedTask = tasks.find(task => task.id === id)
    setExercise(exercise + addedTask.time)

  }

  useEffect(() => {
    const getBreaktime = localStorage.getItem('breaktime');
    if (getBreaktime) {
      setBreaktime(getBreaktime)
    }
  }, [])
  
  const addBreak = (count) => {
    localStorage.setItem('breaktime', count);
    setBreaktime(count)
  }
  const completed = () => {
    notify();
    setExercise(0)
    setBreaktime(0);
    localStorage.setItem('breaktime', 0);
  }

  return (
    <div className="App container">
      <div className="row">
        
        <Tasks tasks={tasks} addTask={addTask}></Tasks>
        <Profile
          exercise={exercise}
          breaktime={breaktime}
          addBreak={addBreak}
          notify={completed}
        ></Profile>
        <ToastContainer />

      </div>
    </div>
  );
}

export default App;
