import {useEffect,useState} from 'react'
import {Star} from 'lucide-react'
import {reviews} from '../data/testimonials'
export default function Testimonials(){
 const [i,setI]=useState(0)
 useEffect(()=>{const t=setInterval(()=>setI(x=>(x+1)%reviews.length),6000);return()=>clearInterval(t)},[i])
 const r=reviews[i]
 return <section className="sec center" aria-label="Reviews"><div key={i} className="quote" aria-live="polite">
  <div className="stars" aria-label={`${r.r} out of 5 stars`}>{[...Array(5)].map((_,s)=><Star key={s} size={18} fill={s<r.r?'currentColor':'none'}/>)}</div>
  <blockquote>“{r.q}”</blockquote><p className="who"><span className="av">{r.n[0]}</span>{r.n}</p></div>
  <div className="dots">{reviews.map((_,d)=><button key={d} aria-label={`Review ${d+1}`} className={d===i?'on':''} onClick={()=>setI(d)}/>)}</div></section>
}
