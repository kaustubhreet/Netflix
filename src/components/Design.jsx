import React,{useState} from 'react'
import "./design.css";
import FAQs from './FAQs';
import { Link } from "react-router-dom";

const Design = () => {
  const [language,setLanguage]=useState("English");


  const clickLanguage=()=>{
    if(language==="English")
    setLanguage("Hindi");
     
    if(language==="Hindi")
    setLanguage("English");
   
  }

  
  

  return (
   <>
   <section className='de'>
   <div class="jumbotron jumbotron-fluid myStyle ">
    <div className="container-fluid" style={{marginTop:"-5%"}}>
   <nav class="navbar navbar-light">
  <Link to="/" >
  <img class="navbar-brand" width="130" height="130" src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt="logo"/>
  </Link>
  <form class="form-inline">
    <div class="dropdown">
  <button class="btn btn-outline dropdown-toggle mr-sm-2"  style={{backgroundColor:"black",color:"white"}}  type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   { language }
  </button>

  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button" value="English" onClick={clickLanguage}>English</button>
    <button class="dropdown-item" type="button" value="Hindi" onClick={clickLanguage}>Hindi</button>
    
  </div>
</div>
<Link to="/signup"><button class="btn my-2 my-sm-0" style={{backgroundColor:"red",color:"white"}} type="submit">Sign In</button></Link>
  </form>
</nav>
</div>

  <div class="container text-center ">
    <h1 style={{fontSize:"46px",textAlign: "center",
    fontWeight: "800;"}}>Unlimited movies, TV <br/>shows and more.</h1>
    <p className="lead" >Watch anywhere. Cancel anytime.</p><br/>
    <p className='lead'>Ready to watch? Enter your email to create or restart your membership.</p><br/>
    <div class="input-group container mb-5 mx-3">
  <input type="text" class="form-control" placeholder="Email Address" />
 <Link to="/signup"> <button class="btn " style={{backgroundColor:"red",color:"white"}} type="button"> <h3>Get Started  </h3></button>
 </Link>
</div>
  </div>
</div>
</section>

<section>
    <div className="container-fluid de mt-n5">
        <div className="row">
            <div className="col sec">
<h1>Enjoy on your TV.</h1>
<h5>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h5>
            </div>
            <div className="col mb-5 mt-5">
            <img width="80%" height="100%" src="https://s3.eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2015/06/Jaw_EN.gif" data-uia="our-story-card-img" alt="design"/>

            </div>
        </div>
    </div>
</section>

<section>
    <div className="container-fluid de">
        <div className="row">
            <div className="col ">
            <img width="80%" height="100%" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png" data-uia="our-story-card-img" alt="design"/>

            </div>
            <div className="col mb-5 sect">

            <h1>Create profiles for children.</h1>
<h5>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h5>
           
            </div>
        </div>
    </div>
</section>

<section className='de'>
    <div className="container text-center ">
        <h1>Frequently Asked Questions </h1>
      <FAQs/>
    </div>
    <div className="container mt-5 text-center">
   <h4> Ready to watch? Enter your email to create or restart your membership.</h4>
    </div>
    <div class="input-group container  sub">
  <input type="text" class="form-control" placeholder="Email Address" />
  <Link to="/signup"><button class="btn" style={{backgroundColor:"red",color:"white"}} type="button"> <h3>Get Started  </h3></button>
  </Link>
</div>
</section>
<section>
<div className="container-fluid" style={{padding:"30px 100px", backgroundColor:"black"}}>
                <center>
                    <h3 style={{color:"#fff"}}>
                        Developed By <br/></h3><h1 style={{height:"100%",color:"#fff"}}>
                        Kaustubh Reet
                    </h1>
                </center>
            </div>
</section>
   </>
  )
}

export default Design