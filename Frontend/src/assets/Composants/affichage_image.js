import React, {useState, useEffect} from "react";
import axios from "axios";
import Comments from '../Composants/getComment';

function AffichageImage(){
    const [Images, setImages] = useState([]);
    let i = 0;
    useEffect(() => {
        axios
            .get("http://localhost:8080/Image")
            .then(res => setImages(res.data.data));
     }, []);

     return(
        Images.map(Image => <div class='Contenu'>
                <h3>Pseudo id {Image.idUser}</h3>
                <img id='image' src={Image.File} className="image-logo" alt="image" />
                <div id='commentaires'>
                    <h5>Commentaires</h5>
                    <fieldset>
                     <legend>Pseudo utilisateur</legend>
                        <Comments/>
                    </fieldset>
                </div>
            </div>)
    );  
}

export default AffichageImage;