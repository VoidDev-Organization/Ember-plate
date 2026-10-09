import {useEffect} from 'react'
export default function useScrollAnimation(){
 useEffect(()=>{
  const els=document.querySelectorAll('[data-r]')
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15})
  els.forEach(e=>io.observe(e));return()=>io.disconnect()},[])
}
