import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Post from './components/Post.jsx';
import PostForm from './components/PostForm.jsx';
import CoursesPage from './pages/CoursesPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, author: 'Admin', content: 'Bem-vindos ao nosso site com React!', likes: 5},
        { id: 2, author: 'Usuário Teste', content: 'Primeiro post nessa rede!', likes: 2}
    ]);

    const handleAddPost = (newText) => {
        const newPost = {
            id: Date.now(),
            author: 'Meu Usuário',
            content: newText,
            likes: 0
        };
        setPosts([newPost, ...posts]);
    };

    const [currentPage, setCurrentPage] = useState('feed');
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <div className="app-container">
            <Header />

            <div className="main-layout">
                <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

                <main className="feed-content">
                    {currentPage === 'feed' && (
                        <>
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
                        </>
                    )}

                    {currentPage === 'cursos' && <CoursesPage />}
                    {currentPage === 'config' && (
                        <SettingsPage 
                            isDarkMode={isDarkMode} 
                            setIsDarkMode={setIsDarkMode} 
                        />
                    )}
                </main>
            </div>
        </div>
    );
}

export default App;