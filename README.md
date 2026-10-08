[Shingwedzi Lifestyle – concept site.html](https://github.com/user-attachments/files/33197011/Shingwedzi.Lifestyle.concept.site.html)
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Shingwedzi Lifestyle</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;800;900&family=Fraunces:ital,wght@1,600&display=swap" rel="stylesheet">
<style>
:root{--navy:#07163a;--navy2:#0c2257;--royal:#1f4fd8;--gold:#f2b705;--white:#fff;--mute:#a9b7d6;
--sans:'Archivo',system-ui,'Segoe UI',Arial,sans-serif;--serif:'Fraunces',Georgia,serif;
box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
html{scroll-behavior:smooth;scroll-padding-top:70px}
*,*::before,*::after{box-sizing:inherit}
body{margin:0;background:var(--navy);color:var(--white);font-family:var(--sans);font-weight:500;line-height:1.55}
a{color:inherit;text-decoration:none}
:focus-visible{outline:3px solid var(--gold);outline-offset:3px}
.wrap{max-width:1080px;margin:0 auto;padding:0 20px}
nav{position:sticky;top:0;z-index:20;background:rgba(7,22,58,.92);backdrop-filter:blur(8px);border-bottom:1px solid rgba(255,255,255,.08)}
nav .wrap{display:flex;align-items:center;justify-content:space-between;height:60px;gap:12px}
.logo{display:flex;align-items:center;gap:10px;font-weight:900;font-size:17px}
.logo svg{width:34px;height:34px}
nav ul{display:flex;gap:22px;list-style:none;margin:0;padding:0;font-size:14px}
nav ul a:hover{color:var(--gold)}
.btn{display:inline-block;border:0;cursor:pointer;font:800 15px var(--sans);padding:14px 24px;border-radius:999px;background:var(--gold);color:var(--navy);transition:transform .15s}
.btn:hover{transform:translateY(-2px)}
.btn.ghost{background:transparent;color:var(--white);box-shadow:inset 0 0 0 2px var(--white)}
.hero{position:relative;overflow:hidden;padding:90px 0 110px;background:radial-gradient(circle at 80% 20%,var(--royal) 0,transparent 45%),linear-gradient(160deg,var(--navy2),var(--navy))}
.hero h1{font-weight:900;font-size:clamp(44px,9vw,104px);line-height:.95;margin:0 0 26px;letter-spacing:-.03em}
.hero h1 span{display:block}
.hero h1 span:nth-child(2){color:var(--gold)}
.hero h1 span:nth-child(3){font-family:var(--serif);font-style:italic;font-weight:600;letter-spacing:-.01em}
.hero p{max-width:46ch;color:var(--mute);font-size:18px;margin:0 0 30px}
.cta{display:flex;flex-wrap:wrap;gap:12px}
.sun{position:absolute;right:-90px;bottom:-110px;width:420px;height:420px;border-radius:50%;border:2px solid var(--gold);opacity:.5}
.sun::after{content:"";position:absolute;inset:40px;border-radius:50%;border:2px dashed var(--gold);opacity:.6}
section{padding:80px 0}
h2{font-size:clamp(30px,5vw,48px);font-weight:900;margin:0 0 8px;letter-spacing:-.02em}
.sub{color:var(--mute);margin:0 0 36px;max-width:52ch}
.events{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:18px}
.ev{background:var(--navy2);border-radius:14px;overflow:hidden;display:flex;flex-direction:column}
.poster{aspect-ratio:4/5;padding:18px;display:flex;flex-direction:column;justify-content:flex-end;position:relative}
.poster b{font-family:var(--serif);font-style:italic;font-size:30px;line-height:1.05}
.poster small{font-weight:800;font-size:13px;margin-bottom:6px}
.p1{background:linear-gradient(180deg,#0f5b3a,#07163a 85%)}
.p2{background:linear-gradient(180deg,var(--gold),#07163a 90%);color:var(--white)}
.p3{background:linear-gradient(180deg,#6b2cb8,#07163a 85%)}
.p4{background:linear-gradient(180deg,#000,#fff 140%);}
.ev .info{padding:16px;display:flex;flex-direction:column;gap:6px;flex:1}
.ev .info span{color:var(--mute);font-size:14px}
.ev .info .btn{margin-top:auto;text-align:center;padding:11px 16px;font-size:14px}
.menuwrap{background:var(--navy2)}
.tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:26px}
.tabs button{font:800 14px var(--sans);color:var(--white);background:transparent;border:2px solid rgba(255,255,255,.25);padding:10px 18px;border-radius:999px;cursor:pointer}
.tabs button[aria-selected=true]{background:var(--gold);border-color:var(--gold);color:var(--navy)}
.items{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:4px 40px}
.item{display:flex;justify-content:space-between;gap:16px;padding:16px 0;border-bottom:1px dashed rgba(255,255,255,.2)}
.item p{margin:2px 0 0;color:var(--mute);font-size:14px}
.item em{font-style:normal;color:var(--gold);font-weight:800;white-space:nowrap}
[hidden]{display:none!important}
.game{background:var(--royal);border-radius:20px;padding:44px 32px;display:flex;flex-wrap:wrap;gap:24px;align-items:center;justify-content:space-between}
.game h2{margin:0}
.game p{margin:6px 0 0;max-width:44ch}
.info-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:28px}
.map{min-height:260px;border-radius:14px;background:repeating-linear-gradient(45deg,var(--navy2) 0 14px,#0a1d4d 14px 28px);display:grid;place-items:center;text-align:center;padding:20px;color:var(--mute)}
.hours{list-style:none;padding:0;margin:0 0 18px}
.hours li{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.12)}
footer{padding:30px 0 90px;color:var(--mute);font-size:13px;border-top:1px solid rgba(255,255,255,.08)}
.wa{position:fixed;right:18px;bottom:calc(18px + env(safe-area-inset-bottom,0px));z-index:30;background:#25d366;color:#04301a;font-weight:800;border-radius:999px;padding:14px 20px;box-shadow:0 6px 20px rgba(0,0,0,.4);display:flex;gap:8px;align-items:center}
@media(max-width:700px){nav ul{display:none}.hero{padding:60px 0 90px}}
@media(prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}
</style>
</head>
<body>
<nav><div class="wrap">
 <a class="logo" href="#top" aria-label="Shingwedzi Lifestyle home">
  <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="#0c2257" stroke="#f2b705" stroke-width="2.5"/><path d="M8 24c4-1 6-6 11-6 6 0 7 3 13 3l-3 3c-4 0-6-1-9-1-4 0-6 3-10 3z" fill="#f2b705"/></svg>
  Shingwedzi Lifestyle</a>
 <ul><li><a href="#events">Events</a></li><li><a href="#menu">Menu</a></li><li><a href="#game">Game day</a></li><li><a href="#visit">Find us</a></li></ul>
 <a class="btn" href="#book" style="padding:10px 18px;font-size:14px">Book a table</a>
</div></nav>

<header class="hero" id="top"><div class="wrap">
 <h1><span>Great food.</span><span>Cool beers.</span><span>Wild nights.</span></h1>
 <p>Garden vibes, live DJs, big-screen sport and a table with your name on it.</p>
 <div class="cta"><a class="btn" href="#events">View events</a><a class="btn ghost" href="#book">Reserve a table or VIP booking</a></div>
</div><div class="sun" aria-hidden="true"></div></header>

<section id="events"><div class="wrap">
 <h2>Upcoming events</h2>
 <p class="sub">Pick your night, then reserve in two taps. Sample listings below &mdash; swap in real dates and line-ups.</p>
 <div class="events">
  <article class="ev"><div class="poster p1"><small>Date to be confirmed</small><b>Garden Experience</b></div><div class="info"><strong>Garden Experience</strong><span>Outdoor lounge, DJs on the decks</span><a class="btn" data-book="Garden Experience" href="#book">Reserve VIP table</a></div></article>
  <article class="ev"><div class="poster p2"><small>Fridays</small><b>Friday After Work</b></div><div class="info"><strong>Friday After Work</strong><span>Cold beers, good food, early start</span><a class="btn" data-book="Friday After Work" href="#book">Reserve a table</a></div></article>
  <article class="ev"><div class="poster p3"><small>Date to be confirmed</small><b>Soul &amp; RnB</b></div><div class="info"><strong>Soul &amp; RnB</strong><span>Live music and slow-jam sets</span><a class="btn" data-book="Soul &amp; RnB" href="#book">Get tickets</a></div></article>
  <article class="ev"><div class="poster p4"><small>Date to be confirmed</small><b>Black &amp; White</b></div><div class="info"><strong>Black &amp; White</strong><span>Dress code night</span><a class="btn" data-book="Black &amp; White" href="#book">Reserve VIP table</a></div></article>
 </div>
</div></section>

<section id="menu" class="menuwrap"><div class="wrap">
 <h2>Menu</h2>
 <p class="sub">Sample items and prices for the mockup.</p>
 <div class="tabs" role="tablist">
  <button role="tab" aria-selected="true" data-tab="food">Food</button>
  <button role="tab" aria-selected="false" data-tab="drinks">Drinks &amp; cocktails</button>
  <button role="tab" aria-selected="false" data-tab="vip">Bottle service &amp; VIP</button>
 </div>
 <div class="items" id="food">
  <div class="item"><div><strong>Flame-grilled boerewors</strong><p>Pap, chakalaka, tomato relish</p></div><em>R95</em></div>
  <div class="item"><div><strong>Chicken wings</strong><p>Lemon pepper or peri-peri</p></div><em>R110</em></div>
  <div class="item"><div><strong>Beef burger</strong><p>Cheddar, onion, chips</p></div><em>R120</em></div>
  <div class="item"><div><strong>Braai platter for four</strong><p>Chops, wors, wings, sides</p></div><em>R480</em></div>
 </div>
 <div class="items" id="drinks" hidden>
  <div class="item"><div><strong>Draught beer</strong><p>Ice-cold, 440 ml</p></div><em>R35</em></div>
  <div class="item"><div><strong>Mojito</strong><p>Mint, lime, white rum</p></div><em>R75</em></div>
  <div class="item"><div><strong>Garden spritz</strong><p>Sparkling wine, citrus, soda</p></div><em>R70</em></div>
  <div class="item"><div><strong>Craft cider</strong><p>Apple or pear</p></div><em>R40</em></div>
 </div>
 <div class="items" id="vip" hidden>
  <div class="item"><div><strong>Gold table</strong><p>Reserved table, one bottle, mixers</p></div><em>R1 500</em></div>
  <div class="item"><div><strong>Royal table</strong><p>Reserved table, two bottles, snack platter</p></div><em>R2 800</em></div>
  <div class="item"><div><strong>Crocodile package</strong><p>Prime spot, three bottles, host service</p></div><em>R4 500</em></div>
 </div>
</div></section>

<section id="game"><div class="wrap"><div class="game">
 <div><h2>Game day on the big screen</h2><p>Every big match, live and loud. Grab a table early and bring the whole squad.</p></div>
 <a class="btn" data-book="Game day" href="#book">Book a game-day table</a>
</div></div></section>

<section id="visit" style="padding-top:0"><div class="wrap">
 <h2>Find us</h2>
 <p class="sub">Add the real address and trading hours before sending.</p>
 <div class="info-grid">
  <div class="map"><div><strong style="color:var(--white)">Google Maps goes here</strong><br>Paste the venue embed link when you have it.</div></div>
  <div>
   <ul class="hours"><li><span>Mon &ndash; Thu</span><span>Hours to confirm</span></li><li><span>Fri &ndash; Sat</span><span>Hours to confirm</span></li><li><span>Sun &amp; holidays</span><span>Hours to confirm</span></li></ul>
   <div id="book"><h2 style="font-size:28px">Book in two taps</h2>
   <p class="sub" style="margin-bottom:18px">Tell us the night and group size on WhatsApp. We'll confirm your table.</p>
   <a class="btn" id="bookbtn" href="https://wa.me/27768354171?text=Hi%20Shingwedzi%2C%20I%27d%20like%20to%20reserve%20a%20table." target="_blank" rel="noopener">Message us on WhatsApp</a></div>
  </div>
 </div>
</div></section>

<footer><div class="wrap">Shingwedzi Lifestyle &middot; WhatsApp 076 835 4171 &middot; Concept mockup with sample content</div></footer>

<a class="wa" id="wafloat" href="https://wa.me/27768354171?text=Hi%20Shingwedzi%2C%20I%27d%20like%20to%20reserve%20a%20table." target="_blank" rel="noopener">
 Book on WhatsApp</a>

<script>
document.querySelectorAll('.tabs button').forEach(function(b){
 b.addEventListener('click',function(){
  document.querySelectorAll('.tabs button').forEach(function(x){x.setAttribute('aria-selected',x===b)});
  ['food','drinks','vip'].forEach(function(id){document.getElementById(id).hidden=(id!==b.dataset.tab)});
 });
});
document.querySelectorAll('[data-book]').forEach(function(a){
 a.addEventListener('click',function(e){
  e.preventDefault();
  var t=encodeURIComponent("Hi Shingwedzi, I'd like to book for: "+a.dataset.book.replace(/&amp;/g,'&'));
  window.open('https://wa.me/27768354171?text='+t,'_blank','noopener');
 });
});
</script>
</body>
</html>
