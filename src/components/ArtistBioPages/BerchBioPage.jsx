import React from "react";
import { Link } from "react-router-dom";

function BerchBioPage() {
    return (
        <>
        <div className="imgBox">
           <div className="content">
            <img src="berch.jpeg" alt="Berch" /> 
           <div className="nameHeader">
               <h2>Berch</h2>
               <h4 className="location">Richond, Virginia</h4>
               <p className="subHeader">Pop, Hip hop</p> 
               <div className="socialLinks">
                <div className="instagram">
                   <a href="https://www.instagram.com/mynameisberch/?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr" >
                    <img src="/Social-images/instagram-link.png" alt="Berch instagram" />
                   </a>
                </div>
                <div className="spotify">
                <a href="https://mynameisberch.bandcamp.com/">
                   <img src="/Social-images/spotify-img.png" alt="Michael spotify" />
                </a>
                </div>
               <div className="community-button">
                   <Link to="/artist-process">Start a song with me</Link>
               </div>
            </div> 
           </div>
           
           <p className="bio">Mynameisberch, hailing from Richmond, Virginia, is a versatile artist known for his pop,
            hip-hop, and soulful vocal style. With influences ranging from John Mayer to Lenny Kravitz and Drake, he effortlessly blends catchy melodies and heartfelt lyrics into his captivating compositions. 
            As a published BMI songwriter, mynameisberch consistently delivers multiple songs and records each year, showcasing his dedication to his craft. Additionally, he has been recognized as a featured songwriter in Worship Leader magazine,
             a national publication in the contemporary Christian music scene. Combining his musical talents with his role as a worship leader at his church, mynameisberch's passion for creating unique and impactful music shines through. With a genuine 
             desire to connect with individuals going through various situations and seasons, mynameisberch is excited to bring his creativity to Songbee, crafting personalized songs that resonate with each listener. He says, "I love creating for unique people going through unique situations in unique seasons.
           </p>
         </div>
        </div>
        <div className="songListWrapper">
       <div className="songTable">
           <div className="tableHeader">
               <div class="headerItem"> 
                   <div className="title">
                       Title
                   </div>
               </div>
               <div class="headerItem"> 
                   <div className="genre">
                       Genre
                   </div>
               </div>
           </div>
           <div className="songList">
               <div className="songItems">
                   <div className="audioFiles">
                       <audio controls>
                           <source src="/Berch.mp3" type="audio/mpeg" />
                       </audio>
                       <p>Singer songwriter</p>
                   </div>
                   <div className="audioFiles">
                       <audio controls>
                           <source src="/Berch.mp3" type="audio/mpeg" />
                       </audio>
                       <p>Singer songwriter</p>
                   </div>
               </div>
           </div>
       </div>
   </div>
        
     </>
    )
}

export default BerchBioPage;