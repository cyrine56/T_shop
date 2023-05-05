import React from 'react';
import './livreur.css';
import logo2 from './logo2.png';
import backliv from './backliv.png';
function Livrer() {
  return (
    <div>
      <section className="container">
        <section id="unel">
          <img src={logo2} id="logol"></img>
          <section id="barre-hautel">
            <h5 id='cmtl'> Vous avez déjà un compte ? </h5>
            <a href="" id='cnxl'>Connexion</a>
          </section>
        </section>
        <section id="deuxl">
          <h2>Créer un compte Livreur</h2>
          <p id="phrasel">Chercher à s'embaucher? s'inscrire comme un livreur </p>
        </section>
        <section id="troisl">
          <section id="onel">
            <form>
              <input type="text" placeholder="Nom" required />
              <input type="text" placeholder="Adresse" required />

              <section id="inder1">
                <input
                  type="email"
                  placeholder="Adresse mail"
                  id="mail"
                  style={{ width: '250px' }}
                  required
                />
                <input
                  type="tel"
                  placeholder="numéro tel"
                  style={{ width: '250px' }}
                  required
                />
              </section>

              <div id="twol">
                <select required>
                  <option>Sélectionner les endroits Où vous pouvez livrer</option>
                  <option>Tunis</option>
                  <option>Nabeul</option>
                  <option>Sousse</option>
                  <option>Bizerte</option>
                </select>
                <br />
                <select required>
                  <option>Sélectionner le type de véhicule</option>
                  <option>Moto</option>
                  <option>Voiture</option>
                </select>
                <input
                  type="text"
                  placeholder="Numéro d'immatriculation de votre véhicule"
                  required
                />
                <input type="text" placeholder="CIN" required />
                <input
                  type="password"
                  placeholder="mot de passe"
                  required
                  max="10"
                  min="5"
                  id="MonInTxt"
                />
                <input
                  type="password"
                  placeholder="confirmer le mot de passe"
                  required
                  max="10"
                  min="5"
                />
                <input type="button" value="Commencer" id="bt-startl" />
              </div>
            </form>
          </section>

          <section id="twol">
            <img src={backliv} id="backl"></img>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Livrer;
