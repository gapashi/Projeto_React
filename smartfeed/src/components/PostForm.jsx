import {useState} from 'react';
import './PostForm.css';

function PostForm({onAddPost}) {
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (text.trim() === '') return;

        onAddPost(text);
        setText('');
    }

    return (
        <div className="post-form-container">
            <form onSubmit={handleSubmit} className="post-form">
                <textarea
                className="post-input"
                placeholder='Compartilhe seus pensamentos...'
                value={text}
                rows="3"
                onChange={(event) => setText(event.target.value)}
                ></textarea>

                <div className="post-form-actions">
                    <button type='submit' className="post-submit-button">
                        Publicar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PostForm;

