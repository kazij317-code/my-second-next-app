// -------------------------------Start: 41_4 ---------------------------------------
// (4)st
import Posts from '@/components/Posts';
import React, { Suspense } from 'react';

const PostsPage = () => {
    // (5)st
    const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then (res => res.json());
    // (5)en then create Posts.jsx file in components folder
    return (
        <div>
            {/* (7)st */}
            <Suspense fallback={<h2 className="text-3xl">Loading posts...</h2>}>
                <Posts postsPromise={postsPromise}></Posts>
            </Suspense>
            {/* (7)en then in Posts.jsx file   */}
        </div>
    );
};

export default PostsPage;
// (4)en
// ---------------------End:41_4-(1) to (13) --------------------------------
