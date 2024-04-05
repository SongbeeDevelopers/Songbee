import React from "react";
import { Link } from "react-router-dom";

function PerrinBioPage() {
    return (
        <>
        <div className="imgBox">
           <div className="content">
            <img src="perrin_photo.jpeg" alt="Perrin Xthona" /> 
           <div className="nameHeader">
               <h2>Perrin Xthona</h2>
               <h4 className="location">Portland, Oregon</h4>
               <p className="subHeader">Pop, Singer songwriter</p> 
               <div className="socialLinks">
                <div className="instagram">
                   <a href="https://www.instagram.com/perrinxthona/" >
                    <img src="/Social-images/instagram-link.png" alt="Perrin instagram" />
                   </a>
                </div>
                <div className="spotify">
                <a href="https://open.spotify.com/artist/1bNx6UhsCYSNuoIeL9LcnD?si=MLyNUmi6RJm2qLdyip1vMA&nd=1&dlsi=27bc328009f646c5/">
                   <img src="/Social-images/spotify-img.png" alt="Perrin spotify" />
                </a>
                </div>
                <div className="website">
                <a href="https://www.tiktok.com/@perrinxthona?_t=8hjAn9c36du&_r=1/">
                   <img src="/Social-images/artist-website.png" alt="Perrin Website" />
                </a>
                </div>
               <div className="community-button">
                   <Link to="/artist-process">Start a song with me</Link>
               </div>
            </div> 
           </div>
           
           <p className="bio">Perrin Xthona is a pop songwriter from Portland, Oregon. She recently graduated from the Berklee College of Music, and her influences are Julia Michaels, 
                        Lennon Stella, Halsey, Jeremy Zucker, Lauv, and Harry Styles. 
                        She's always loved writing songs, and the only thing she loves more is getting to hear other peoples stories. 
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
                           <source src="/" type="audio/mpeg" />
                       </audio>
                       <p>Singer songwriter</p>
                   </div>
                   <div className="audioFiles">
                       <audio controls>
                           <source src="/" type="audio/mpeg" />
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

export default PerrinBioPage;