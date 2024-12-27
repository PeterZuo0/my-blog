export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">
                        Hey, I&#39;m <span className="section--title--name" style={{marginLeft: "7px"}}>Peter Zuo</span>
                    </p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Full Stack</span>{" "}
                        <br/>
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        Hahaha Hello there, I am Peter
                        <br />graduated from UNSW and currently looking for jobs.
                        <br />Please Hire me
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/my_img/A7300054.JPG" alt="hero section"/>
            </div>
        </section>
    );
}