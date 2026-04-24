// -------------------------------Start: 41_3 ---------------------------------------
// (6)st
// (11)
'use client'
import React, { useState } from 'react';

const Counter = () => {
    // (10)state declaration
    const [count, setCount] = useState(0);

    // (7) then in page.jsx file in app folder
    // console.log('counter value in counter component');
    // (14)commit previous.then (start: 40_4) create page.jsx file creating Todos folder in app folder
    console.log('counter value in counter component', count);
    
    return (
        <div>
            {/* <h2 className="text-5xl">Counter:</h2> */}
            {/* (12)commit previous */}
            <h2 className="text-5xl">Counter:{count}</h2>
            {/* (9) */}
            {/* <button>Increment</button> */}
            {/* (13) commit previous*/}
            <button onClick ={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Counter;
// (6)en
// ---------------------End:41_3-(1) to (13) --------------------------------
