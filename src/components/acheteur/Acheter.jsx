import React from 'react';
import './acheter.css';
import logo2 from './logo2.png';
import vendeur from './vendeur.png';

function Acheter() {
  return (
    <section className="container">
      <section id="unea">
        <img src={logo2} id="logoa" alt="Logo" />
        <section id="barre-hautea">
          <h5 id='cta'>Vous avez déjà un compte ?</h5>
          <a href="" id='cnxa'>Connexion</a>
        </section>
      </section>
      <section id="deuxa">
        <h2 id='titrea'>Créer un compte client</h2>
        <p id="phrasea">Chercher des produits ? s'inscrire comme un client</p>
      </section>
      <section id="troisa">
        <section id="onea">
          <input type="text" placeholder="Nom et prénom" />
          <input type="text" placeholder="adresse" />
          <div id="inder1a">
            <input type="text" placeholder="Adresse mail" style={{ width: '250px' }} />
            <input type="text" placeholder="numéro tel" style={{ width: '250px' }} />
          </div>
          <div id="two">
            <input type="text" placeholder="mot de passe" />
            <input type="text" placeholder="confirmer le mot de passe" />
            <input type="button" value="Commencer" id="bt-start" />
          </div>
        </section>
        <section id="threea">
          <img src={vendeur} id="backa" alt="Image" />
        </section>
      </section>
    </section>
  );
}

export default Acheter;
