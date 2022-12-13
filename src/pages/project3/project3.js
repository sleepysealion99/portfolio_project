import './project3.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import project3 from '../../images/project3.png';

export default function Project3() {

    return (
      <div className="box">
        <div className="head">
            <Navbar />
        </div>
        <div className="content">
            <div className="main">
                <div className="projectsTitle" >
                    Milktea Shop Website Design
                </div>
                <div className="websitePic" >
                    <img src={project3} style={{width: "100%", height: "100%"}} class="center" onClick={event =>  window.open("https://sleepysealion99.github.io/milktea_shop/")}></img>
                </div>
                <div className="sectionTitle">
                    Context
                </div>
                <div className="section">
                &emsp; For this project, we want to build a web application with any content for any uses. The requirements of the application include sort, filter, aggregator and a list of items. It should be able to sort and filter based on properties of the items. There needs to be an aggregator that can summarize things added to cart or collections. Users should be able to add to or remove items from the aggregator.<br></br>
                &emsp; I personally think the requirements very much match a shopping website for any shops. Milktea is one of my favorites so I decide to write a web application for a milktea shop. The main functions include sorting by price, filtering by iced-only and gulten-free. The aggregator is a shopping cart and users can add milk tea to or remove from the shopping cart. The shopping cart shows the total amount in the cart. 
                </div>
                <div className="sectionTitle">
                Goal and Value of the Application
                </div>
                <div className="section">
                &emsp; Goal: Providing customers a website with filter and sort and shopping cart for the milk tea shop. <br></br>
                &emsp; Value: This application can work for all kinds of milk tea shops. It lists the menu of the shop. Customers can filter the teas according to gluten-free and iced-only. Some customers may only want to drink hot teas so the filter will do a lot of help. Customers can also sort the teas by their prices so that can quickly choose based on thier budget. Customers can add to shopping cart and remove from shopping cart. They can view amount in the cart shown.
                </div>
                <div className="sectionTitle">
                Usability Principles Considered
                </div>
                <div className="section">
                &emsp;The aggregator is placed on the right so that it is clearer to view than being place on the top or the bottom. The filters have multiple choices so is set as dropdowm menus. The sort option only consists of yes or no so it is a switch.
                </div>
                <div className="sectionTitle">
                Organization of Components
                </div>
                <div className="section">
                &emsp;The components mainly include two filters, one sort and one aggregator. The filters and sort components are placed in a filter class. They are implemented using ant design. Shop includes methods like add and reduce. It returns the list of cart items.
                </div>
                <div className="sectionTitle">
                How the User Triggers State Changes
                </div>
                <div className="section">
                &emsp;User clicks on the sort swicth, the sort option will change. User choose filter from drop down menu, the menu list will be filtered. When user clicks on reset, all change will be removed. The website will change back to the original state. When user clicks on add to shopping cart button, the aggregator on the right will change. User clicks on the plus or minus button in the cart list, the amount of money and number will change. When the amount of an item becomes zero, the item will be removed from the cart.
                </div>
                <div className="sectionTitle">
                Conclusion
                </div>
                <div className="section">
                &emsp;In this project, I design the whole website by myself. I choose my favorite theme. And the project is built in react which really takes my a lot of time to learn. I feel that I acquired a bunch of new knowledge after finishing this project. I get a deeper understanding not only in react js, but also in the hierachies of a web application. The relationship between components, props, and data. And I really love this website and I hope people will love to use it for their milktea shops.
                </div>
            </div>
            <Footer/>
            </div>
      </div>
    );
  }