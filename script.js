let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

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
function showPage(page){
  // sembunyikan semua
  document.querySelectorAll('.page').forEach(sec=>sec.style.display='none');
  // tampilkan yg dipilih
  document.getElementById(page).style.display='block';
  // ubah judul tengah
  document.querySelector('.home-section .text').innerText = page.charAt(0).toUpperCase()+page.slice(1);
  // tutup sidebar (opsional)
  sidebar.classList.remove('open');
  menuBtnChange();
}
const container = document.querySelector('.home-section');
document.querySelectorAll('.nav-list a').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    loadPage(link.dataset.page);
    closeMenu();
  });
});

async function loadPage(page){
  const res = await fetch(`pages/${page}.html`);
  const html = await res.text();
  container.innerHTML = html;
}

// muat halaman awal
loadPage('dashboard');
