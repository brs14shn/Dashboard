const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");


menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
})

closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
})

data.forEach(item=>{
    const tr = document.createElement('tr')
    const tdContent = `
         <td><img class="avatar"  src="./${item.images} "></td>
        <td>${item.fullName}</td>
        <td>${item.message}</td>
        <td>${item.time}</td>
    
    `
    tr.innerHTML= tdContent;
    document.querySelector('table tbody').appendChild(tr)
    
})


   


console.log(data);
