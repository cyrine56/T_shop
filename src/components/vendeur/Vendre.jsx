import React from 'react';
import './vendre.css';
import logo2 from './logo2.png';
import vendeur from './vendeur.png';
function Vendre() {
return (
<>
<head>
<title>T-shop</title>

</head>
<body id='bodv'>
<section className="container">
<section id="unev">
<img src={logo2} id="logov" alt="" />
<section id="barre-haute">
<h5 id="vv">Vous avez déjà un compte ?</h5>
<a href="" id="cnx">Connexion</a>
</section>
</section>
<section id="deuxv">
<h2 id='crv'>Créer un compte vendeur</h2>
<p id="phrasev">
Chercher des clients ? s'inscrire comme un vendeur
</p>
</section>
<section id="troisv">
<section id="one">
<input id
 type="text" placeholder="Nom de l'entreprise" />
<input type="text" placeholder="Adresse de l'entreprise" />
<div id="inder1">
            <input
              type="text"
              placeholder="Adresse mail"
              style={{ width: '250px' }}
            />
            <input
              type="text"
              placeholder="numéro tel"
              style={{ width: '250px' }}
            />
          </div>

          <div id="two">
            <select>
              <option>Sélectionner le type de l'entreprise</option>
              <option>véhicule</option>
              <option>immobilier</option>
              <option>pour la maison et jardin</option>
              <option>informatique</option>
              <option>élctronique</option>
              <option>mécanique</option>
              <option>mode</option>
              <option>autre</option>
            </select>
            <input type="text" placeholder="RIB" />
            <input type="text" placeholder="mot de passe" />
            <input
              type="text"
              placeholder="confirmer le mot de passe"
            />
            <input type="button" value="Commencer" id="bt-start" />
          </div>
        </section>

        <section id="three">
          <img src={vendeur} id="back" alt="" />
        </section>
      </section>
    </section>
  </body>
  
</>
);
}

export default Vendre;