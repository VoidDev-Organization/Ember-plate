import {Instagram,Facebook,Twitter} from 'lucide-react'
export default function Footer(){
 return <footer><div className="line" aria-hidden="true"/><div className="fgrid">
  <div><a href="#home" className="logo">Ember <i>&amp;</i> Plate</a><p className="muted">Fire-led modern cuisine, cooked slowly and served warm.</p>
   <div className="row soc">{[[Instagram,'Instagram'],[Facebook,'Facebook'],[Twitter,'Twitter']].map(([I,n])=><a key={n} href="#" aria-label={n}><I size={18}/></a>)}</div></div>
  <div><h4>Explore</h4>{['Menu','About','Gallery','Contact'].map(l=><a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}</div>
  <div><h4>Hours</h4><p>Tue–Thu 5–10pm</p><p>Fri–Sat 5pm–midnight</p><p>Sun 4–9pm</p></div>
  <div><h4>Contact</h4><p>12 Fire Lane, Downtown</p><p>+1 (555) 014-2323</p><p>hello@emberandplate.com</p></div></div>
  <p className="copy muted">© {new Date().getFullYear()} Ember &amp; Plate. All rights reserved.</p></footer>
}
