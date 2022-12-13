import './project2.css';
import react,  { useEffect, useState } from 'react';
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
// import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function Project2() {

    return (
      <div className="box">
        <div className="head">
            <Navbar />
        </div>
        <div className="content">
        <div className="main">
            <div className="projectsTitle" >
                Persona for Station Kiosk
            </div>
            <div className="sectionTitle">
                Context
            </div>
            <div className="section">
            &emsp;As one of my course projects, this project wants us to write a persona for an interface of our own choice. We want to learn about and start to draw storyboards during this assignment. I decide to write a persona for the station kiosk. It is a machine that should be known by almost everyone in the world. Some may not notice about the details of the machine. But it is still a commonly used and well-known interface. I can easily reach anyone to discuss about this interface. And that is one of the reasons I chose it. The station kiosk is a machine on which people can buy tickets or print bought tickets and receipts. In this persona, I will more closely review the functions it provide and the advanatges and disadvantages of this interface. I want to learn about how exactly does this interface work and what different situations may occur when human are interactng with it.
            </div>
            <div className="sectionTitle">
                Research & Feedback
            </div>
            <div className="section">
            &emsp;To closely examine the interface, I decided to go to the station to record some actual events happened around the interface. I am also interested in the attitudes and opinions from uses of the interface. I prepared a series of interview questions and interviewed several people with different age, gender and background. I summarize the interview answers below. I stayed in the station for several hours and record many observations, as listed in the following paragraphs.<br></br><br></br>
            <div className="problemTitle">Observations</div>
            <div className="problemContent">
            &emsp;Most of the users use the function scan.<br></br>
            &emsp;They buy tickets online and scan for a paper ticket.<br></br>
            &emsp;They are familiar with the functions.<br></br>
            &emsp;They directly put the barcode under the scan camera.<br></br>
            &emsp;A few users don't know where to start at first.<br></br>
            </div>
            <div className="problemTitle">Interview summaries:</div>
            <div className="problemContent">
            &emsp;Most users are between 20 years old to 35 years old.<br></br>
            &emsp;Most users use the machine to print the paper ticker and receipt.<br></br>
            &emsp;People believe using kiosks are more convenient than going to the customer service desk.<br></br>
            &emsp;People arrive around 10 minutes ahead to print tickets.<br></br>
            &emsp;People think kiosk is fast.<br></br>
            </div>
            <figure>
                <img src='/project2/sketch.png' class="design"></img>
                <figcaption>Sketch of the station kiosk interface</figcaption>
            </figure>
            </div>
            <div className="sectionTitle">
                Empathy Maps
            </div>
            <div className="section">
            &emsp;We can draw some conclusions from the observations and interview answers. According to my analysis, there are basically two personas for this interface.<br></br><br></br>
            &emsp;The first persona descripts someone named Mary. She has bought a ticket online and wants to use the station kiosk to print the ticket and the receipt.<br></br><br></br>
            <figure>
                <img src='/project2/EMPATHY1.png' class="design"></img>
                <figcaption>Empathy Map for Mary</figcaption>
            </figure>
                <div className="problemTitle">Problems they met:</div>
                <div className="problemContent">
                &emsp;Can not clearly see where to start to print tickets.<br></br>
                &emsp;Do not know where to scan the ticket code.<br></br>
                &emsp;The print receipt choice is so small that she didn't notice and forget to print.<br></br>
                </div>
                &emsp;This persona represents people who use the station kiosk to print a ticket and/or a receipt of the ticket they bought online. They are not very familiar with the kiosk. I believe that it is representative because it depicts their actions and thoughts when they are using the kiosk.
                The persona lists the problems they met and the questions they ask.<br></br><br></br>
                &emsp;The second persona descripts someone named David. He just decides to take the train so he comes to the station to buy the ticket. He doesn't want to interact with people or think the line to the travel agents is too line. So he comes to the station kiosk to buy a ticket.<br></br><br></br>
            <figure>
                <img src='/project2/EMPATHY2.png' class="design"></img>
                <figcaption>Empathy Map for David</figcaption>
            </figure>
                <div className="problemTitle">Problems they met:</div>
                <div className="problemContent">
                &emsp;Cannot find the destination station on the screen.<br></br>
                &emsp;Not able to understand the differences between different types of tickets.<br></br>
                &emsp;Did not find where to insert the card.<br></br>
                </div>
                &emsp;This persona represents people who want to buy tickets at the station kiosk. I believe that the persona is representative because it summarizes the problems people met when they are buying tickets.
            </div>
            <div className="sectionTitle">
                Storyboards
            </div>
            <div className="section">
                <div className="storyboard">
                &emsp;I draw a series of storyboards based on the empathy map of David. These storyboards help me narrate the story happened on people like David's persona.<br></br>
            <figure>
                    <img src='/project2/frame-0001.jpg' class="design"></img>
                    <figcaption>1. The weather is so great. Why not going to Boston to eat something delicious and take a shopping?
                  David decides to go to the Amtrak station now!</figcaption>
                </figure>
                <figure>
                <img src='/project2/frame-0002.jpg' class="design"></img>
                    <figcaption>2. There are so many people in line. David doesn't want to waste time to buy a ticket through the travel agents. David decides to go to the kiosk to buy the ticket.</figcaption>
                </figure>
                <figure>
                <img src='/project2/frame-0003.jpg' class="design"></img>
                    <figcaption>3. It is the first time for David to use a kiosk. He is prompted to tap the "touch to begin" button to start buying.</figcaption>
                </figure>
                <figure>
                    <img src='/project2/frame-0004.jpg' class="design"></img>
                    <figcaption>4. There are many different types of tickets provided. David needs to decide which type of ticket to choose. He wants to come back to providence at night so he chooses the round trip ticket.</figcaption>
                </figure>
                <figure>
                <img src='/project2/frame-0005.jpg' class="design"></img>
                    <figcaption>5. David is trying to find his destination station in the list. There are so many stations to choose. He wants to find the right one as soon as possible since there are people waiting for him in the line. Finally he finds it in a rush.</figcaption>
                </figure>
                <figure>
                <img src='/project2/frame-0006.jpg' class="design"></img>
                    <figcaption>6. There are still choices to make. David is not sure about the differences betweeen these types of seats. He asked the man behind him for suggestions. He chooses the cheapest one at last.</figcaption>
                </figure>
                <figure>
                <img src='/project2/frame-0007.jpg' class="design"></img>
                    <figcaption>7. David chooses to pay with a card. But he did not find the position to insert the card since it is his first time using the kiosk. He feels a little bit awkward looking for somewhere to insert his card in.</figcaption>
                </figure>
                <figure>
                <img src='/project2/frame-0008.jpg' class="design"></img>
                    <figcaption>8. After the payment is made, David gets his ticket from the kiosk successfully.</figcaption>
                </figure>
                </div>
            </div>
            <div className="sectionTitle">
                Conclusion
            </div>
            <div className="section">
            &emsp;For this project, I closely examine an interface. I observe people using it and communicate with the users to learn about more opinions and attitudes. I then draw conclusions on my record and design personas for the interface. Finally I design storyboards for the interface which are pretty important for the design of any interface. The project gives my good basis for further study and practice in UIUX.
            </div>
            </div>
            <Footer/>
            </div>
      </div>
    );
  }