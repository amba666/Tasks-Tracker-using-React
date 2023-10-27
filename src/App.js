import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
    const [tasks, setTasks] = useState(
        [
            {
                id:1,
                text:'Doctors Appointment',
                day: 'March 4th at 16:00pm',
                reminder: true,
            },

            {
                id:2,
                text:'Opensrp Work',
                day: 'Oct 4th at 16:00pm',
                reminder: true,
            },

            {
                id:3,
                text:'Church Work',
                day: 'Nov 4th at 16:00pm',
                reminder: false,
            },

        ]
    )
    // delete task
    const deleteTask = (id) =>{
        setTasks(tasks.filter((task)=> task.id !== id))
    }
    //toggle reminder
    const toggleReminder = (id) =>{
        setTasks(
            tasks.map((task) =>
               task.id === id ? {...task, reminder: !task.reminder} : task
            )
        )
    }

    return (
        <div className = "container" >
        <Header/>
            { tasks.length> 0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Task Added!'}
        </div>
    )
}

export default App;