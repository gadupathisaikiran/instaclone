import "../styles/homePage.css";
import { Link } from "react-router-dom";

const HomeTop = () => {
    return (
        <div className="top-part">
            <section className="header">
                <article className="logo-section">
                    <img src="../../images/icon@2x.png" alt="instaclone-logo" className="instaclone-logo" />
                    <h3 className="logo-text">Instaclone</h3>
                </article>
                <article>
                    <Link to="/home/createpost">
                        <img src="../../images/camera@2x.png" alt="camera-logo" className="camera-logo" />
                    </Link>
                </article>
            </section>
        </div>
    )
}

export default HomeTop;