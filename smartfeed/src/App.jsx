import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Post from './components/Post';
import PostForm from './components/PostForm';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, author: 'Admin', content: 'Bem-vindos ao nosso site com React!', likes: 5},
        { id: 2, author: 'Usuário Teste', content: 'Primeiro post nessa rede!', likes: 2}
    ]);

    // FUNÇÃO PARA ADICIONAR NOVO POST
    const handleAddPost = (newText) => {
        const newPost = {
            id: Date.now(),
            author: 'Meu Usuário',
            content: newText,
            likes: 0
        };
        setPosts([newPost, ...posts]);
    };


    return (
        <div className="app-container">
            <Header />

            <div className="main-layout">
                <Sidebar />

                <main className="feed-content">
                    <PostForm onAddPost={handleAddPost} />

                    <div className="post-list">
                        {posts.map((post) => (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                likes={post.likes}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;