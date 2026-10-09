import {useEffect,useState} from 'react'
import {Menu as Bars,X} from 'lucide-react'
const links=['Home','Menu','About','Gallery','Contact']
export default function Navbar(){
 const [s,setS]=useState(false),[o,setO]=useState(false)
 useEffect(()=>{const f=()=>setS(scrollY>40);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[])
 return <header className={'nav'+(s?' solid':'')+(o?' open':'')}>
  <a href="#home" className="logo">Ember <i>&amp;</i> Plate</a>
  <nav id="links" aria-label="Main">{links.map(l=><a key={l} href={`#${l.toLowerCase()}`} onClick={()=>setO(false)} className="ul">{l}</a>)}
   <a href="#reserve" onClick={()=>setO(false)} className="btn sm">Reserve a Table</a></nav>
  <button className="burger" aria-label={o?'Close menu':'Open menu'} aria-expanded={o} aria-controls="links" onClick={()=>setO(!o)}>{o?<X/>:<Bars/>}</button>
 </header>
}
