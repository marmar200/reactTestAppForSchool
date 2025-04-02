import './styles/App.css';
import React from 'react';
import { useState } from 'react';
import PostList from './components/PostList';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'Python', body: 'Description'},
    {id: 3, title: 'Go', body: 'Description'},
  ])

  return (
    <div className="App">
        <PostList posts={posts}/>
    </div>
  );
}

export default App;
