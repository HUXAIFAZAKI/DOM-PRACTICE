const insert = document.getElementById('insert')
window.addEventListener('keydown',(e) => 
{ 
    console.log(e.key);
    insert.innerHTML = `<div class='key'>${e.key === ' ' ? "Space":e.key}</div>`
})