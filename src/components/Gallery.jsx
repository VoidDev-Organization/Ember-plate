import {useEffect,useState} from 'react'
import {Eye,X} from 'lucide-react'
import {img} from '../data/images'
const pics=[[img.grill,'Grilled over open flame','tall'],[img.food,'Plated starter',''],[img.pasta,'Fresh pasta','wide'],[img.salmon,'Smoked salmon',''],[img.steak,'Ribeye','tall'],[img.dessert,'Dessert','']]
export default function Gallery(){
 const [o,setO]=useState(null)
 useEffect(()=>{if(o===null)return;const k=e=>e.key==='Escape'&&setO(null);addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[o])
 return <section className="sec" id="gallery"><h2 data-r>From Our Kitchen</h2>
  <div className="masonry">{pics.map((p,i)=><button key={i} className={'g '+p[2]} data-r data-hover aria-label={`View: ${p[1]}`} onClick={()=>setO(i)}><img src={p[0]} alt={p[1]} loading="lazy"/><span><Eye/></span></button>)}</div>
  {o!==null&&<div className="lb" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={()=>setO(null)}>
   <button className="x" aria-label="Close" autoFocus><X/></button><img src={pics[o][0].replace('w=900','w=1800')} alt={pics[o][1]}/></div>}</section>
}
