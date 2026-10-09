import {ArrowUpRight} from 'lucide-react'
import {dishes} from '../data/dishes'
export default function FeaturedDishes(){
 return <section className="sec" id="signature"><h2 data-r>Signature Experiences</h2>
  <div className="grid4">{dishes.map((d,i)=><a href="#menu" key={d.name} className="dish" data-r data-hover style={{'--d':i*.12+'s'}}>
   <img src={d.img} alt={d.name} loading="lazy"/><div className="dish-ov"><p className="muted">{d.cat}</p><h3>{d.name}</h3><p className="dd">{d.desc}</p>
   <div className="row between"><b>{d.price}</b><ArrowUpRight className="arr"/></div></div></a>)}</div></section>
}
