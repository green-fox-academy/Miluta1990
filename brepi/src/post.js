import React from 'react';

const Posts = ({posts, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }


return <ul className='list-group mb-4'>
    {posts.map(post => (
        <li key={posts.name} className="list-group-item">
           Beer name: {post.name}//// Description: {post.description} 
        </li>
    ))}
</ul> 
};
export default Posts;