import React from 'react';
import './home.css';
import logo2 from'./logo2.png';
import login from './login.png';
import backg3 from './backg3.png';
import localisation from './localisation.png'
function Home() {
return (
<>
<head>
<title>T-shop</title>
</head>
<body id="bodh">
<section className="container">
<section id="uneh">
<img src={logo2} id="logoh" alt="" />
<section id="ach-vend-livh">
<a  id="aa" href="/acheter">Acheter</a>
<a id="aa" href="/vendre">Vendre</a>
<a id="aa" href="/livrer">livrer</a>
</section>
<a id="aa" href="connecter.html">
<img src={login} id="login-imgh" alt="login" />
</a>
</section>
<table id="deuxh">
<tbody>
<tr>
<td>
<img src={backg3} id="backgh" alt="" />
</td>
<td>
<div>
<img
src={localisation}
style={{ width: '20px', marginLeft: '60px' }}
alt=""
/>
tunisie
</div>
<h1 id="hh">Online shopping</h1>
<div id="texth">
il y a des choses que l'argent ne peut pas acheter. pour tout le reste il y'a T-shop .
</div>
</td>
</tr>
</tbody>
</table>
</section>
</body>
</>
);
}

export default Home;