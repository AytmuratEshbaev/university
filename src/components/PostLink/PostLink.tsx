import './PostLink.scss';


const PostLink = () => {

    return (
        <div className='post-link'>
            <h4 className="post-link__title">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam nulla similique, error accusantium ab repellendus. Laudantium harum ducimus dignissimos impedit iure ea necessitatibus placeat, odio architecto et quos nemo!</h4>
            <img src="./images/poster.jpg" alt="post link" className="post-link__img" />
            <p className="post-link__date">2023-05-27</p>
        </div>
    )
}

export default PostLink;