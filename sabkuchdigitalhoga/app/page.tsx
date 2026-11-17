import Link from "next/link";
import { ArrowRight, ArrowUpRight, AudioLines, BadgeCheck, BatteryCharging, CalendarCheck, CheckCircle2, ChevronRight, CircuitBoard, Clock3, Headphones, Laptop, MapPin, Menu, Monitor, PackageCheck, ShieldCheck, Smartphone, Wrench, Zap } from "lucide-react";

const laptopBrands=["Dell","HP","Lenovo","Acer","ASUS","Apple","MSI","Samsung"];
const audioBrands=["Bose","Marshall","JBL","Sony","Sonos","Harman Kardon"];
const services=[
 {icon:Laptop,title:"Laptop & Desktop",desc:"Screen, keyboard, battery, motherboard and performance repairs."},
 {icon:Headphones,title:"Premium Audio",desc:"Speaker, soundbar, home theatre and Bluetooth audio diagnostics."},
 {icon:CircuitBoard,title:"Parts & Upgrades",desc:"Screens, batteries, adapters, RAM, SSDs and essential components."},
 {icon:BatteryCharging,title:"Power & Charging",desc:"Charging ports, power issues, adapters and battery replacement."}
];
const reasons=[
 {icon:BadgeCheck,title:"Clear diagnosis",desc:"Understand the issue and recommended repair before proceeding."},
 {icon:ShieldCheck,title:"Customer-first service",desc:"Transparent communication at every step of your service request."},
 {icon:CalendarCheck,title:"Convenient booking",desc:"Share your request online and choose a suitable service option."},
 {icon:PackageCheck,title:"Multiple device categories",desc:"Laptop, desktop and audio support in one place."}
];
export default function Home(){
 return <main>
  <div className="top"><div className="wrap topin"><span><i/> Repair support for laptops, desktops & audio devices</span><span><MapPin size={14}/> Mumbai & surrounding areas · <a href="mailto:bapu44@gmail.com">Contact us</a></span></div></div>
  <header><div className="wrap nav">
   <Link className="logo" href="/"><b><Zap size={22} fill="currentColor"/></b><span><strong>sabkuch<span>digital</span>hoga</strong><small>REPAIR. RESTORE. RECONNECT.</small></span></Link>
   <nav><a href="#services">Services</a><a href="#brands">Brands</a><a href="#steps">How it works</a><a href="#about">About</a></nav>
   <a className="btn dark small" href="#book">Book a repair <ArrowUpRight size={16}/></a><button className="hamb" aria-label="Menu"><Menu/></button>
  </div></header>
  <section className="hero"><div className="gridbg"/><div className="wrap heroGrid">
   <div className="heroText"><div className="eyebrow"><i/> YOUR ONE-STOP REPAIR DESTINATION</div><h1>Technology breaks.<br/><em>We bring it back</em><br/>to life.</h1><p>Expert repair support for laptops, desktops and premium audio devices. One simple place to get your everyday technology working again.</p><div className="actions"><a className="btn lime" href="#book">Book a repair <ArrowRight size={18}/></a><a className="link" href="#services">Explore services <ArrowUpRight size={17}/></a></div><div className="proof"><CheckCircle2 size={17}/> Easy online booking <span/> Multiple device brands</div></div>
   <div className="art"><div className="halo"/><div className="orbit o1"/><div className="orbit o2"/>
    <div className="mock laptopMock"><div className="micro">COMPUTING <span>● READY FOR CARE</span></div><div className="screen"><Zap size={38} fill="currentColor"/><div><i/><i/><i/></div></div><div className="base"/><div className="deviceLine"><Laptop size={17}/> Laptops & desktops <ArrowUpRight size={16}/></div></div>
    <div className="mock audioMock"><div className="micro">AUDIO <span className="waves">▂ ▅ ▇ ▅ ▂</span></div><div className="speakers"><i/><i/></div><div className="deviceLine"><AudioLines size={17}/> Speakers & soundbars <ArrowUpRight size={16}/></div></div>
    <div className="tag t1"><CheckCircle2 size={15}/> Repair made simple</div><div className="tag t2"><Wrench size={16}/> One booking. Many solutions.</div>
   </div>
  </div><div className="wrap brandbar"><small>BUILT AROUND YOUR DEVICES</small><div><b>DELL</b><b>hp</b><b>Lenovo</b><b>ASUS</b><b>BOSE</b><b>Marshall</b><b>JBL</b></div></div></section>
  <section className="section white" id="services"><div className="wrap"><div className="sectionHead"><div><div className="eyebrow green"><i/> WHAT CAN WE FIX?</div><h2>All your devices.<br/><em>One trusted destination.</em></h2></div><p>From a laptop that will not start to a speaker that has gone silent, find the repair support you need.</p></div><div className="serviceGrid">{services.map((s,i)=>{const I=s.icon;return <article className="service" key={s.title}><div className="serviceIcon"><I size={23}/><small>0{i+1}</small></div><h3>{s.title}</h3><p>{s.desc}</p><a href="#book">Explore service <ArrowUpRight size={15}/></a></article>})}</div></div></section>
  <section className="section darkSection" id="brands"><div className="wrap brandsLayout"><div><div className="eyebrow"><i/> DEVICE COMPATIBILITY</div><h2>Many brands.<br/><em>One booking.</em></h2><p>Choose your device brand to explore relevant repair services and support.</p><a className="btn lime" href="#book">Find your repair <ArrowRight size={17}/></a></div><div className="brandPanels">
   {[{title:"Laptop & desktop brands",sub:"Repair and upgrade support",brands:laptopBrands,icon:Monitor},{title:"Audio brands",sub:"Speakers, soundbars & more",brands:audioBrands,icon:Headphones}].map((group)=><div className="brandPanel" key={group.title}><div className="panelHead"><group.icon size={20}/><div><b>{group.title}</b><small>{group.sub}</small></div></div><div className="chips">{group.brands.map(b=><a key={b} href="#book">{b}<ChevronRight size={13}/></a>)}</div></div>)}
   <div className="brandNote"><Zap size={16}/> Can’t find your brand? Choose Other when booking and tell us about your device.</div>
  </div></div></section>
  <section className="section pale" id="steps"><div className="wrap"><div className="center"><div className="eyebrow green"><i/> SIMPLE FROM THE START</div><h2>Repair support in <em>3 easy steps.</em></h2><p>No complicated process. Just tell us what you need.</p></div><div className="steps">{[{icon:Smartphone,title:"Tell us about your device",desc:"Choose category, brand, model and issue."},{icon:CalendarCheck,title:"Send a booking request",desc:"Share your details and preferred service option."},{icon:Wrench,title:"We’ll get in touch",desc:"Our team follows up to discuss diagnosis and next steps."}].map((s,i)=>{const I=s.icon;return <article key={s.title}><small>0{i+1}</small><I size={25}/><h3>{s.title}</h3><p>{s.desc}</p></article>})}</div></div></section>
  <section className="section white" id="about"><div className="wrap about"><div className="aboutArt"><div><Zap size={72} fill="currentColor"/></div><b>SDH</b><small>CARE FOR THE<br/>TECH YOU LOVE.</small></div><div><div className="eyebrow green"><i/> WHY SABKUCH DIGITAL HOGA</div><h2>Good service starts<br/>with <em>good care.</em></h2><p className="lead">We make it easier to request repair support for the devices you rely on every day.</p><div className="reasons">{reasons.map(r=>{const I=r.icon;return <div key={r.title}><I size={20}/><span><b>{r.title}</b><small>{r.desc}</small></span></div>})}</div></div></div></section>
  <section className="cta" id="book"><div className="wrap ctaIn"><div><div className="eyebrow"><i/> READY WHEN YOU ARE</div><h2>Let’s get your device<br/><em>back in action.</em></h2><p>Tell us what’s wrong. We’ll help you figure out the next step.</p></div><div><a className="btn lime large" href="mailto:bapu44@gmail.com?subject=Repair%20booking%20enquiry">Start a booking enquiry <ArrowUpRight size={18}/></a><small><Clock3 size={14}/> Booking form will be integrated in Stage 3.</small></div></div></section>
  <footer><div className="wrap footTop"><Link className="logo" href="/"><b><Zap size={22} fill="currentColor"/></b><span><strong>sabkuch<span>digital</span>hoga</strong><small>REPAIR. RESTORE. RECONNECT.</small></span></Link><p>One destination for laptop, desktop and audio repair support.</p><div><a href="#services">Services</a><a href="#brands">Brands</a><a href="#about">About</a><a href="mailto:bapu44@gmail.com">Contact</a></div></div><div className="wrap footBottom">© {new Date().getFullYear()} Sabkuch Digital Hoga. All rights reserved.<span>Independent repair service provider.</span></div></footer>
 </main>
}
