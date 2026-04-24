// -------------------------------Start: 41_4 ---------------------------------------
// (1)st
import React from 'react';

// const ToDosPage = () => {
    // (2)st commit previous
    const ToDosPage = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await res.json();
        console.log(todos);
    // (2)en
    return (
        <div>
            {/* (3) then create page.jsx file creating posts folder in app folder*/}
            <h2>To-Dos: {todos.length}</h2>
        </div>
    );
};

export default ToDosPage;
// (1)en
// ---------------------End:41_4-(1) to (13) --------------------------------
