import {img} from '../data/images'
export default function Hero(){
 return <section id="home" className="hero">
  <div className="hero-bg" style={{backgroundImage:`url(${img.hero})`}}/><div className="hero-ov"/>
  <div className="hero-in">
   <p className="h-logo">EMBER &amp; PLATE</p>
   <h1>Where Every Bite<br/>Tells a Story.</h1>
   <p className="lead h-p">Experience handcrafted cuisine, unforgettable flavors, and an atmosphere designed for moments worth remembering.</p>
   <div className="row h-b"><a href="#menu" className="btn">Explore Menu</a><a href="#reserve" className="btn ghost">Reserve a Table</a></div>
  </div>
  <p className="hours h-p">Open today · 5pm – 11pm · 12 Fire Lane, Downtown</p>
  <span className="scroll" aria-hidden="true"/>
 </section>
}
