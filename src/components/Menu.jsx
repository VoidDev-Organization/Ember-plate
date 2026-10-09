import {useState} from 'react'
import {menu} from '../data/menu'
export default function Menu(){
 const cats=Object.keys(menu),[c,setC]=useState(cats[0])
 return <section className="sec dark2" id="menu"><h2 data-r>The Menu</h2>
  <div className="tabs" role="tablist" data-r>{cats.map(k=><button key={k} role="tab" aria-selected={k===c} className={k===c?'on':''} onClick={()=>setC(k)}>{k}</button>)}</div>
  <ul className="items" key={c} role="tabpanel">{menu[c].map((m,i)=><li key={m.name} style={{'--d':i*.08+'s'}}>
   <div className="row between"><h3>{m.name}{m.tag&&<em className="tag">{m.tag==='veg'?'Vegetarian':'Spicy'}</em>}</h3><b>${m.price}</b></div>
   <p>{m.desc}</p><small className="muted">{m.ing}</small></li>)}</ul></section>
}
