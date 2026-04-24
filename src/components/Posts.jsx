// -------------------------------Start: 41_4 ---------------------------------------
// (10)
'use client';
// (6)st
import React, { use } from 'react';

// const Posts = () => {
    // (8)st
    const Posts = ({postsPromise}) => {
       const posts = use(postsPromise);
       console.log('posts in posts component', posts);   
    // (8)en

    return (
        <div>
            {/* (9) then (start: 40_5) create page.jsx file creating foods folder in app folder*/}
            <h2 className="text-4xl">Posts: {posts.length}</h2>
            
        </div>
    );
};

export default Posts;
// (6)en then in page.jsx file in posts folder
// ---------------------End:41_4-(1) to (13) --------------------------------
