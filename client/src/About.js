import LeafCall from "./components/leaf";
import Navbar from "./components/navbar"
import './css/about.css'
import star_3 from "./img/stars/star_3.svg";

const description = `
It is said that everyone marches to the beat of a drum. There is a soundtrack that individuals live their lives too. For teenagers, the music is often extremely intense. You may dance to the angry sound of heavy metal, the passion of a love song, or the empty sounding chords of depression. The sound changes from day to day, and even from moment to moment. Do not underestimate the power of music.
`;

const About = () => {
    return (
        <div className="about">
            <nav className="nav">
                <Navbar />
            </nav>
            <div className="about-wrap">
                <section className="about-sec">
                    <h2>Power of Music</h2>
                    <p>{ description }</p>
                </section>
            </div>
            <div className="about-star">
                <img src={star_3} alt="orange-star"/>
            </div>
            <LeafCall />
        </div>
    );
}
 
export default About;