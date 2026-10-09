import {useEffect,useRef,useState} from 'react'
import {img} from '../data/images'
function Count({to,suf='',dec=0}){
 const r=useRef(null),[v,setV]=useState(0)
 useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;io.disconnect()
  if(matchMedia('(prefers-reduced-motion:reduce)').matches)return setV(to)
  const t0=performance.now(),f=t=>{const p=Math.min((t-t0)/1600,1);setV(to*(1-Math.pow(1-p,3)));p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)});io.observe(r.current);return()=>io.disconnect()},[to])
 return <span ref={r}>{v.toFixed(dec)}{suf}</span>}
export default function About(){
 return <section className="sec about" id="about">
  <div className="reveal-img" data-r><img src={img.about} alt="The Ember & Plate dining room" loading="lazy"/></div>
  <div><h2 data-r>Born From Fire. Crafted With Passion.</h2>
   <p className="lead" data-r>It started with one wood-fired oven and a rule: nothing leaves the kitchen we would not serve at our own table. Twelve years on, we still cook over open flame, buy from farms we have walked, and set every plate by hand.</p>
   <dl className="stats" data-r><div><dt><Count to={12} suf="+"/></dt><dd>Years</dd></div><div><dt><Count to={35}/></dt><dd>Signature dishes</dd></div>
   <div><dt><Count to={4.9} dec={1}/>/5</dt><dd>Guest rating</dd></div><div><dt><Count to={50} suf="K+"/></dt><dd>Guests</dd></div></dl></div></section>
}
