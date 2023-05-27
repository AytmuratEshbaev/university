import Post from "../../components/Post";
import PostLink from "../../components/PostLink";
import './PostSection.scss';


const PostSection = () => {

    return (
        <section className="post-section container">
            <Post />
            <div className="last-posts">
                <PostLink />
                <PostLink />
                <PostLink />
            </div>

            <ul className="social__links">
                <li>
                    <a href='#'><span className="icon-twitter"></span></a>
                </li>
                <li>
                    <a href="#"><span className="icon-telegram"></span></a>
                </li>
                <li>
                    <a href='#'><span className="icon-youtube-play"></span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <span className="icon-instagram"></span>
                    </a>
                </li>
                <li>
                    <a href="#"><span className="icon-facebook"></span></a>
                </li>
            </ul>
        </section>
    )
}

export default PostSection;