const projects = [
  {title:'AI Resume Analyzer', desc:'AI-powered tool that analyzes resumes and provides feedback.', tech:['Python','OpenAI SDK','RAG'], img:'🤖'},
  {title:'AI Todo Evolution', desc:'Smart todo app with AI-assisted task management.', tech:['Next.js','TypeScript','OpenAI SDK'], img:'✅'},
  {title:'Quran Audio Player', desc:'Audio player for Quran recitations with clean UI.', tech:['React.js','HTML5','CSS3'], img:'🕌'},
  {title:'RAG Chatbot', desc:'Retrieval-augmented chatbot for document Q&A.', tech:['Python','RAG','OpenAI SDK'], img:'💬'},
  {title:'Pakistan Legal Rights Agent', desc:'AI agent providing legal rights information.', tech:['Python','AI Agents','Prompt Engineering'], img:'⚖️'},
  {title:'Face Vitals AI', desc:'AI-based facial vitals detection application.', tech:['Python','Generative AI'], img:'👤'}
];

const grid = document.getElementById('projectsGrid');
projects.forEach((p,i)=>{
  const card = document.createElement('div');
  card.className='project-card';
  card.innerHTML = `<div class="project-img">${p.img}</div><div class="project-body"><h3>${p.title}</h3><p>${p.desc}</p><div class="tech-badges">${p.tech.map(t=>`<span class="tech-badge">${t}</span>`).join('')}</div></div>`;
  card.addEventListener('click',()=>openModal(i));
  grid.appendChild(card);
});

const modal = document.getElementById('modal');
function openModal(i){
  const p=projects[i];
  document.getElementById('modalTitle').textContent=p.title;
  document.getElementById('modalDesc').textContent=p.desc;
  document.getElementById('modalTech').innerHTML=p.tech.map(t=>`<span class="tech-badge">${t}</span>`).join('');
  const img=document.getElementById('modalImg');
  img.alt=p.title; img.src='';
  img.style.display='flex'; img.textContent=p.img;
  const gh=document.getElementById('modalGithub'); const live=document.getElementById('modalLive');
  gh.href='#'; live.href='#';
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
}
document.getElementById('modalClose').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{ if(e.target===modal) closeModal(); });
function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }

// Theme
const themeToggle=document.getElementById('themeToggle');
function applyTheme(t){ document.documentElement.classList.toggle('light', t==='light'); themeToggle.innerHTML = t==='light'?'<i class="fas fa-sun"></i>':'<i class="fas fa-moon"></i>'; }
const saved=localStorage.getItem('theme')||'dark';
applyTheme(saved);
themeToggle.addEventListener('click',()=>{ const next=document.documentElement.classList.contains('light')?'dark':'light'; localStorage.setItem('theme',next); applyTheme(next); });

// Hamburger
const hamburger=document.getElementById('hamburger');
const navLinks=document.getElementById('navLinks');
hamburger.addEventListener('click',()=>navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

// Smooth scroll (native via css) + back to top
const backToTop=document.getElementById('backToTop');
window.addEventListener('scroll',()=>{ backToTop.classList.toggle('show', window.scrollY>400); });
backToTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// Contact form
const form=document.getElementById('contactForm');
function setError(id,msg){ document.getElementById(id).textContent=msg; }
form.addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const subject=document.getElementById('subject').value.trim();
  const message=document.getElementById('message').value.trim();
  let ok=true;
  setError('nameError',''); setError('emailError',''); setError('subjectError',''); setError('messageError','');
  if(!name){ setError('nameError','Name is required'); ok=false; }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ setError('emailError','Valid email required'); ok=false; }
  if(!subject){ setError('subjectError','Subject is required'); ok=false; }
  if(!message){ setError('messageError','Message is required'); ok=false; }
  if(ok){ alert('Form validated successfully. Connect an external service to send messages.'); form.reset(); }
});

// Typing effect
const typedEl=document.getElementById('typedName');
const typedText='Aisha A. Siddiqui';
let ti=0;
function typeLoop(){ if(ti<typedText.length){ typedEl.textContent+=typedText.charAt(ti); ti++; setTimeout(typeLoop,120);} }
typeLoop();

// 4D look via perspective
document.querySelector('.hero-text').style.transform='perspective(800px) rotateX(2deg)';
