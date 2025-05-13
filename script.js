let list = document.querySelector(".to-do-list");
let searchInput = document.querySelector(".search-id input");
let addBtn = document.querySelector(".add-id button")
let addInput = document.querySelector(".add-id input");

list.addEventListener("click" , (e)=>{
    if(e.target.nodeName == "SPAN" && e.target.classList.contains("delete-btn")){
        e.target.parentNode.remove();
        if(list.children.length == 0){
            let listEmptyMessage = document.createElement("div");
            listEmptyMessage.style.textAlign = "center";
            listEmptyMessage.style.color = "#333";
            listEmptyMessage.innerText = "Your list is empty";
            listEmptyMessage.id = "emptyMsg";
            list.appendChild(listEmptyMessage);
        }
    }
})

addBtn.addEventListener("click" , (e)=>{
     e.preventDefault();
     if(!addInput.value){
        return;
     }if(document.querySelector("#emptyMsg")){
        document.querySelector("#emptyMsg").remove();
     }
     list.appendChild(creatListItem(addInput.value));
     addInput.value = "";
})

function creatListItem(itemValue){
    let item = document.createElement("li");
    item.className = "to-do-item";
    let title = document.createElement("span");
    title.innerText = itemValue;
    title.className = "title";
    let btn = document.createElement("span");
    btn.className = "delete-btn";
    btn.innerText = "delete";

    item.appendChild(title);
    item.appendChild(btn);
    
    return item;
}

searchInput.addEventListener("input" , (e)=>{
    Array.from(list.children).forEach(element => {
        if(document.querySelector("#emptyMsg")){
            return;
        }

        if(element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())){
               element.style.display = "flex"
        }else{
            element.style.display = "none"
        }
    })
})
