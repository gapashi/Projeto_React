import './Post.css';

function Post({ author, content, likes }) {
    return (
        <article className='post'>
            <div className="post-header">
                <div className="post-avatar"></div>
                <h2 className="post-author">{author}</h2>
            </div>

            <div className="post-body">
                <p>{content}</p>
            </div>

            <div className="post-footer">
                <button className="like-button">
                    Curtir ({likes})
                </button>
            </div>
        </article>
    );
}

export default Post;
