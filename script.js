let sidebar  = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn= document.querySelector(".bx-search");

// toggle sidebar
closeBtn.addEventListener("click", toggleSidebar);
searchBtn.addEventListener("click", toggleSidebar);

function toggleSidebar(){
  sidebar.classList.toggle("open");
  menuBtnChange();
}

function menuBtnChange(){
  if(sidebar.classList.contains("open")){
    closeBtn.classList.replace("bx-menu","bx-menu-alt-right");
  }else{
    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
  }
}

/* ----------  ROUTER SEDERHANA  ---------- */
const container = document.getElementById('content');           // <–– ganti selector
document.querySelectorAll('.nav-list a').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    const page = link.dataset.page;
    loadPage(page);
    sidebar.classList.remove('open');      // tutup sidebar versi mobile
    menuBtnChange();
  });
});

async function loadPage(page){
  try{
    const res  = await fetch(`pages/${page}.html`);
    const html = await res.text();
    container.innerHTML = html;
  }catch(err){
    container.innerHTML = `<p style="padding:2rem">Halaman <b>${page}</b> tidak ditemukan.</p>`;
  }
}

// muat halaman awal
loadPage('dashboard');
