import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



function App() {
    const [showAddTask, setShowAddTask] = useState(false)
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
    //add task
    const addTask = (task) => {
        const id  = Math.floor(Math.random() *
            10000) + 1
            const newTask = {id, ...task}
            setTasks([...tasks, newTask])
    }

    // delete task
    const deleteTask = (id) =>{
        setTasks(tasks.filter((task)=> task.id !== id))
    }
    //toggle reminder
    const toggleReminder = (id) =>{
        setTasks(
            tasks.map((task) =>
               task.id === id ? { ...task, reminder: !task.reminder} : task
            )
        )
    }

    return (
        <div className = "container" >
        <Header onAdd={() => setShowAddTask(!showAddTask)}
         showAdd = {showAddTask}
        />
            {showAddTask && <AddTask onAdd={addTask}/>}S
            { tasks.length> 0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Task Added!'}
        </div>
    )
}

export default App;