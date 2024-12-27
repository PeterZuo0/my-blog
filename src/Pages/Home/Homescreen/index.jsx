import MainSection from "../MainSection.jsx";
import MySkills from "../MySkills.jsx";
import AboutMe from "../AboutMe.jsx";
import MyPortfolio from "../MyPortfolio.jsx";
import Testimonials from "../Testimonials.jsx";
import ContactMe from "../ContactMe.jsx";
import Footer from "../Footer.jsx";

export default function Home (){
    return(
        <>
            <MainSection/>
            <MySkills/>
            <AboutMe/>
            <MyPortfolio/>
            <Testimonials />
            <ContactMe />
            <Footer />
        </>
    )
}