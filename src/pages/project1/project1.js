import './project1.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import webPic from "../../images/project1.png";
import desktop from '../../images/project1/desktop.png';
import phone from '../../images/project1/phone.png';
import tablet from '../../images/project1/tablet.png';
import hifi_desktop from '../../images/project1/hifi_desktop.png';
import hifi_phone from '../../images/project1/hifi_phone.png';
import hifi_tablet from '../../images/project1/tablet.png';

export default function Project1() {

    return (
      <div className="box">
        <div className="head">
            <Navbar />
        </div>
        <div className="content">
        <div className="main">
            <div className="projectsTitle" >
                Redesign for 007 museum website
            </div>
            {/* <div className="websiteLink">
                <a href="https://sleepysealion99.github.io/007museum/" target="_blank" rel="noreferrer" style={{ color: "#78244c", fontSize: "18pt", fontStyle: "italic"}}>link to the redesiged 007 museum website</a>
            </div> */}
            <div className="websitePic" >
                <img src={webPic} style={{width: "100%", height: "100%"}} class="center" onClick={event =>  window.open("https://sleepysealion99.github.io/007museum/")}></img>
            </div>
            <div className="sectionTitle">
                Context
            </div>
            <div className="section">
            &emsp;The 007 museum website is a website for Jame Bond museum. It targets at fans of Jame Bond. Jame Bond is very famous star in the world and he has countless fans all over the world. Therefore the museum always has a lot of visitors throughout the year. However, the website for the museum is extremely unusable and has very bad hierachy and consistency. Can you imagine that all these excited fans come to the website with hopes to get information or buy tickets but can neither find useful answers to their questions nor successfully buy tickets after struggling with the website for hours. I decided to redesign this website because it has a good idea, large number of potential users, and pretty bad page design. It needs redesign to attract more users and become more accessible and usable for the users.
            </div>
            <div className="sectionTitle">
                Problems
            </div>
            <div className="problemTitle">Usability problems:</div>
            <div className="problemContent">
            &emsp;The website has bad clarity. It is hard to capture the main point from the display. There are many high contrast pictures which distract attention. Users should be able achieve their goal when entering your design. It is hard to achieve any goal in this website because it will cost much more time to find what users come for.<br></br>
            &emsp;The website is too ugly to be credible. Users would not trust the website much and if they don't trust the website is not usable. 
            </div>
            <div className="problemTitle">Learnability problems:</div>
            <div className="problemContent">
            &emsp;Users need to take a long time to learn about the website when first use it. The homepage is extremely long but there is no button to go back to the top from anywhere. The buttons and pictures are particularly confusing. It is hard to recognize the function of each button. It is also difficult to find task button.<br></br>
              </div>
            <div className="problemTitle">Memorability problems:</div>
            <div className="problemContent">
            &emsp;The memorability is also bad. The website is hard to use, hard to learn and hard to remember after a certain time.<br></br>
              </div>
            <div className="sectionTitle">
                Research & Feedback
            </div>
            <div className="section">
            &emsp;I tried to use the website from different points and used ui testing websites to check on the problem details of the website. Testing like a common user, I randomly click on buttons and links on the website and got strange reactions. The hierachies of this website do not work as people expect. There are also many redundant elements and misdirections. After doing these researches, I become more certain about the positions I should do improments on.<br></br><br></br>
            <ul>
            <li>There are many image links without alternative text, which makes links empty links. Users will see no information from the links.</li>
            <li>There are many images without alternative texts, making the content of the images unavailable.</li>
            <li>There are texts with very low contrast with the background, which are difficult to read for low vision readers.</li>
            <li>The web aim wave tool says that there are many images with too long alternative text. I think that is the reason why the pictures are listed so unclearly. The description words are so long that people do not know whether to focus on the picture or the description. As the tool indicated, if the image is not very complex, long alternative texts are usually extraneous.</li>
            <li>There are also many redundant links which direct to the same website. It will confuse users a lot since people would assume that a link should go to other target places. The redundant links make the website harder to understand.</li>
            <li>There are headings that do not use heading element. The display will be unclear for users. The information and function would be unavailable for users.</li>
          </ul>
            </div>
            <div className="sectionTitle">
                Design Iterations
            </div>
            <div className="section">
                &emsp;I first do the design with low-fi prototype. You can see my initial designs of the three devices in the following pictures. These prototypes do not include any detail, but only the general frame of my design. <br></br>
                <figure>
                    <img src={desktop} class="design"></img>
                    <figcaption>Initial design for website on desktop</figcaption>
                </figure>
                <figure>
                <img src={phone} class="design"></img>
                    <figcaption>Initial design for website on phone</figcaption>
                </figure>
                <figure>
                <img src={tablet} class="design"></img>
                    <figcaption>Initial design for website on tablet</figcaption>
                </figure>
                &emsp;I try to make the design of the three devices consistent so that users can easily recognize them as the same website. After deciding on the basic frame of the website design, I start to do the Hi-Fi prototype design.<br></br>
                <figure>
                    <img src={hifi_desktop} class="design"></img>
                    <figcaption>Final design for website on desktop</figcaption>
                </figure>
                <figure>
                <img src={hifi_phone} class="design"></img>
                    <figcaption>Final design for website on phone</figcaption>
                </figure>
                <figure>
                <img src={hifi_tablet} class="design"></img>
                    <figcaption>Final design for website on tablet</figcaption>
                </figure>
                &emsp;It was quite difficult to decide the position of each section and whether to pertain some of the components. I made hard choices and finally come to this design. I hope it is the best that I can achieve.<br></br>
            </div>
            <div className="sectionTitle">
                Conclusion
            </div>
            <div className="section">
            &emsp;The 007 museum is currently able to be used. The information are shown very clearly on my redesigned website. There are also no redundant links. The pictures are now shown in a horizontal rolling section. Users can easily access anything they want. I find that a good website must be accessible, memorizable and usable.
            </div>
            </div>
            <Footer/>
            </div>
      </div>
    );
  }