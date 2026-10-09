import {img} from '../data/images'
export default function Experience(){
 return <section className="promo" style={{backgroundImage:`linear-gradient(#0009,#000b),url(${img.promo})`}}>
  <div data-r><h2>Weekend Tasting Experience</h2><p className="lead">5 courses. 1 unforgettable evening.</p>
  <p className="price">$85 <span className="muted">per guest</span></p><p className="muted">Fridays &amp; Saturdays · 7:00 pm seating</p>
  <a href="#reserve" className="btn">Reserve a Table</a></div></section>
}
