import "../styles/posts.css"

const Posts = (props) => {

    const { author, location, description, image, date } = props.data;

    return (
        <div className="outer-container">
            <section className="post-container">
                <article className="header-post">
                    <article>
                        <h2 className="author">{author}</h2>
                        <h4 className="location">{location}</h4>
                    </article>
                    <article className="dot-icon">
                        <img src="../../images/more_icon.svg" alt="dot-icon" className="icons" />
                    </article>
                </article>
                <img src={image} alt="user-post" className="post-img" />
                <article className="icons-row">
                    <article>
                        <img src="../../images/heart@2x.png" alt="heart-icon" className="icons" />
                        <img src="../../images/share@2x.png" alt="heart-icon" className="icons" />
                    </article>
                    <article>
                        <h4 className="date">{date}</h4>
                    </article>
                </article> 
                <article>
                    <h4 className="likes-count">0 likes</h4>
                    <h3 className="description">{description}</h3>
                </article>
            </section>
        </div>
    )
}

export default Posts;