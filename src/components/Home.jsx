import React from 'react'
import vg from "../assets/2c.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>Home
    <main>
        <h1>Techystar</h1>
        <p>~ Solution to all your bugs</p>
    </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are your one and only solution of any tech problem you face every day.
                We are leading tech company whose aim is to increase the problem solving ability
                in chilren.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
       <div>
         <h1>Who We Are 🤔?</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident ullam amet deleniti asperiores fuga exercitationem
             dolores adipisci accusamus deserunt officiis tenetur maiores laborum porro est vero eligendi excepturi, 
             repellat saepe placeat commodi. Saepe ipsum dolore perspiciatis tempore recusandae, 
             officiis fugiat! Aperiam fugit sint doloremque ducimus ipsum. Libero dolore modi laudantium?</p>
        </div>
    </div>
    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>

            <div style={{animationDelay:"0.3s"}}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
            <div style={{animationDelay:"0.5s"}}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.7s"}}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>
            <div style={{animationDelay:"1s"}}>
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