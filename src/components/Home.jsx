import React from 'react';
import "../styles/home.scss";
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,
    AiFillAmazonCircle,
AiFillYoutube,
AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
   <> 
     <div className="home" id="home">
    
    <main>
        <h1>Optima</h1>
        <p>Providing solutions to your Tech Problems</p>
    </main>

    </div>

    <div className="home2">

        <img src={vg} alt="Graphice" />
 
    <div>
        <p>
            We are the best and most affordable solution to 
            all your tech problems.
        </p>
    </div>
    </div>

    <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>
            <p>
            Welcome to Optima, where we are dedicated to providing effective solutions and support for all your technological challenges. Our team consists of passionate tech enthusiasts and experts who are committed to assisting individuals and businesses in overcoming their technical issues.
            </p>
        </div>
    </div>
    
    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay:"0.3s",
                }}>
               <AiFillGoogleCircle/>
               <p>Google</p>
                </div>
                <div style={{
                    animationDelay:"0.5s",
                }}>
               <AiFillAmazonCircle/>
               <p>Amazon</p>
                </div>
                <div style={{
                    animationDelay:"0.8s",
                }}>
               <AiFillYoutube/>
               <p>Youtube</p>
                </div>
                <div style={{
                    animationDelay:"1s",
                }}>
               <AiFillInstagram/>
               <p>Instagram</p>
                </div>
            </article>

        </div>
    </div>
   </>
  )
}

export default Home 