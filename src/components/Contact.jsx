import {useState} from 'react'
const init={name:'',email:'',date:'',guests:'2',message:''}
export default function Contact(){
 const [f,setF]=useState(init),[e,setE]=useState({}),[ok,setOk]=useState(false)
 const set=k=>ev=>setF({...f,[k]:ev.target.value})
 const submit=ev=>{ev.preventDefault();const x={}
  if(f.name.trim().length<2)x.name='Enter your name.'
  if(!/^\S+@\S+\.\S+$/.test(f.email))x.email='Enter a valid email address.'
  if(!f.date||new Date(f.date)<new Date(new Date().toDateString()))x.date='Choose today or a future date.'
  if(!(+f.guests>=1&&+f.guests<=12))x.guests='Parties of 1 to 12 can book online.'
  setE(x);if(!Object.keys(x).length){setOk(true);setF(init)}}
 const fld=(k,l,p={})=><label>{l}<input value={f[k]} onChange={set(k)} aria-invalid={!!e[k]} {...p}/>{e[k]&&<small className="err">{e[k]}</small>}</label>
 return <section className="sec contact" id="contact"><div data-r><h2>Find Us</h2>
  <address><p>12 Fire Lane, Downtown</p><p><a href="tel:+15550142323">+1 (555) 014-2323</a></p><p><a href="mailto:hello@emberandplate.com">hello@emberandplate.com</a></p></address>
  <p className="muted">Tue–Thu 5–10pm · Fri–Sat 5pm–midnight · Sun 4–9pm</p><div className="map" role="img" aria-label="Map placeholder">Map placeholder: embed Google Maps here</div></div>
  <form onSubmit={submit} noValidate data-r>{ok&&<p className="ok" role="status">Request sent. We will confirm by email within a day.</p>}
   {fld('name','Name',{autoComplete:'name'})}{fld('email','Email',{type:'email',autoComplete:'email'})}
   <div className="two">{fld('date','Date',{type:'date'})}{fld('guests','Guests',{type:'number',min:1,max:12})}</div>
   <label>Message<textarea rows="3" value={f.message} onChange={set('message')}/></label><button className="btn">Request Reservation</button></form></section>
}
