import {useEffect,useRef,useState} from 'react'
import useScrollAnimation from './hooks/useScrollAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedDishes from './components/FeaturedDishes'
import Menu from './components/Menu'
import About from './components/About'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Reservation from './components/Reservation'
import Contact from './components/Contact'
import Footer from './components/Footer'
function Cursor(){
 const el=useRef(null)
 useEffect(()=>{
  if(!matchMedia('(hover:hover) and (pointer:fine)').matches)return
  const mv=e=>{el.current.style.transform=`translate(${e.clientX}px,${e.clientY}px)`}
  const ov=e=>el.current.classList.toggle('big',!!e.target.closest('a,button,[data-hover],input,textarea'))
  addEventListener('mousemove',mv);addEventListener('mouseover',ov)
  return()=>{removeEventListener('mousemove',mv);removeEventListener('mouseover',ov)}},[])
 return <div ref={el} className="cursor" aria-hidden="true"><span/></div>
}
export default function App(){
 const [ld,setLd]=useState(true)
 useEffect(()=>{const t=setTimeout(()=>setLd(false),1600);return()=>clearTimeout(t)},[])
 useScrollAnimation()
 return <>
  <div className={'loader'+(ld?'':' gone')} aria-hidden={!ld}><span>Ember &amp; Plate</span></div>
  <Cursor/><Navbar/>
  <main><Hero/><FeaturedDishes/><Menu/><About/><Experience/><Gallery/><Testimonials/><Reservation/><Contact/></main>
  <Footer/></>
}
