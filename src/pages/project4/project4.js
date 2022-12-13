import './project4.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import sketch1p1 from '../../images/project4/sketch1p1.jpeg';
import sketch1p2 from '../../images/project4/sketch1p2.jpeg';
import sketch1p3 from '../../images/project4/sketch1p3.jpeg';
import sketch2p1 from '../../images/project4/sketch2p1.jpeg';
import sketch2p2 from '../../images/project4/sketch2p2.jpeg';
import sketch2p3 from '../../images/project4/sketch2p3.jpeg';
import sketch3p1 from '../../images/project4/3p1.jpeg';
import sketch3p2 from '../../images/project4/3p2.jpeg';
import sketch3p3 from '../../images/project4/3p3.jpeg';
import sketch4p1 from '../../images/project4/4p1.jpeg';
import sketch4p2 from '../../images/project4/4p2.jpeg';
import wireframe1 from '../../images/project4/wf1.png';
import wireframe2 from '../../images/project4/wf2.png';
import wireframe3 from '../../images/project4/wf3.png';
import wireframe4 from '../../images/project4/wf4.png';

export default function Project4() {

    return (
      <div className="box">
        <div className="head">
            <Navbar />
        </div>
        <div className="content">
        <div className="main">
            <div className="projectsTitle" >
                Iterative Design for Chowdeck
            </div>
            <div className="sectionTitle">
                Context
            </div>
            <div className="section">
            &emsp;For this project, we want to design an interactive interface for an emerging startup. The main goal of the design will focus on the problem that the startup is working on. My group chose Chowdeck as the company to deisgn an interface for. Chowdeck is is an on-demand food delivery mobile App like Uber Eats, but only for Africa. Chowdeck is on a mission to empower restaurants in Africa to deliver meals to customers anywhere and anytime, and customers can buy food in a few short steps and have it delivered to their doorstep in under 30 minutes.
            </div>
            <div className="sectionTitle">
                Research
            </div>
            <div className="section">
            &emsp; Chowdeck is a food delievery company. According to our research and feedback from our friends, most people order food delivery on phone since it is the most accessible device for most. Therefore we decide to design interface for Chowdeck App on phone. The main goal of Chowdeck is to deliever food in 30 minutes, so we want to make sure the App only has essentail steps to operate. We want to make sure that users can achieve their goals in shortest time. We also want to filter out restaurants which can be delievered in 30 minutes so that users would not waste time on far restaurants.
            </div>
            <div className="sectionTitle">
                Design Iterations
            </div>
            <div className="section">
                We start the design from low-fi prototypes. These design only includes frames. All members in our group make their own design. We will then discuss about these designs.<br></br><br></br>
                Member1:<br></br>
                <div className="memberDesign">
                <img src={sketch1p1} class="design"></img>
                <img src={sketch1p2} class="design"></img>
                <img src={sketch1p3} class="design"></img>
                </div>
                Member2:<br></br>
                <div className="memberDesign">
                <img src={sketch2p1} class="design"></img>
                <img src={sketch2p2} class="design"></img>
                <img src={sketch2p3} class="design"></img>
                </div>
                Member3:<br></br>
                <div className="memberDesign">
                <img src={sketch3p1} class="design"></img>
                <img src={sketch3p2} class="design"></img>
                <img src={sketch3p3} class="design"></img>
                </div>
                Member4:<br></br>
                <div className="memberDesign">
                <img src={sketch4p1} class="design"></img>
                <img src={sketch4p2} class="design"></img>
                </div>
                <br></br>&emsp; After dicussion, we make improvements based on the original designs and start to build low-fi wireframes. We designed four pages at first, including homepage, restaurant page, profile page and checkout page.<br></br><br></br>
                <div className="wireframe">
                <img src={wireframe1} class="design"></img>
                <img src={wireframe2} class="design"></img>
                <img src={wireframe3} class="design"></img>
                <img src={wireframe4} class="design"></img>
                </div>
                &emsp; The above wireframes are our sketches of the low-fi prototype. We then build hi-fi prototypes based on the above design. Our first hifi prototype design can be accessed below.<br></br><br></br>
                <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXGZ0CXxWq2tKfjf44pl8n4%2Fchowdeck%3Fnode-id%3D1%253A3%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A3" />
            <br></br>&emsp; We then present the above hi-fi design in discussion section and received some critiques about our visual design and functions. We summarize the critiques and reviews and make improvements based on that. Finally we end with the following design. <br></br><br></br>
            <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FsMqvuIOhkLEHZEsPDoZwub%2Fchowdeck-(Copy)%3Fscaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A3%26node-id%3D1%253A3" />
            <br></br>&emsp;After finishing the final design, we update it to a testing website so that anonymous people can use our prototype according to our instructions. They gave us some feedback. We concluded some useful things from the testing results.
            </div>
            <div className="sectionTitle">
                Conclusion
            </div>
            <div className="section">
            &emsp;To have a good interface design we need to get rid of extraneous steps. We should always keep in mind that we want to enable users to have the best use experience.
            </div>
            </div>
            <Footer/>
            </div>
      </div>
    );
  }