let sidebar  = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn= document.querySelector(".bx-search");

// toggle sidebar
closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});
// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
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
