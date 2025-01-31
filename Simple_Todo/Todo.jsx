import React, { useState } from 'react';
import "../style.css";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        if (input.trim() === "") return; 

        setTodos((todos) => {
            return todos.concat({
                text: input,
                id: Math.floor(Math.random() * 1000), 
            });
        });
        setInput("");
    };

    const removeTodo = (id) => setTodos((todos) => todos.filter((t) => t.id !== id));

    return (
        <div className='container'>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder='Add New Todo'
            />
            <button onClick={handleSubmit}>Submit</button>
            <ul className="todos-list">
                {todos.map(({ text, id }) => (
                    <li className='todo' key={id}>
                        <span>
                            {text} 
                            <button className='close' onClick={() => removeTodo(id)}>x</button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
