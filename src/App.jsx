import React, { useState } from 'react'
import Todos from './components/Todos'

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Mengikuti pelatihan react progate dengan maksimal',
            completed: false,
        },
        {
            id: 2,
            title: 'Mengerjakan tugas tepat waktu',
            completed: false,
        },
        {
            id: 3,
            title: 'Mempelajari framework pendukung lain',
            completed: false,
        },
    ])

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>My Todo List</h1>
            <Todos todos={todos} />
        </div>
    )
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '12px',
    },
    title: {
        fontSize: '36px',
    },
}

export default App