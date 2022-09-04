const search = () => {
  const searchBox = document.getElementById("search-bar").value.toUpperCase(),
        itemsList = document.getElementById("items-list"),
        items = document.querySelectorAll(".items"),
        itemsName = document.getElementsByTagName("h2")
        
  
  for(let i=0; i < itemsName.length; i++){
    let match = items[i].getElementsByTagName('h2')[0]
    
    if (match) {
        let textValue = match.textContent || match.innerHTML
        
        if (textValue.toUpperCase().indexOf(searchBox) > -1){
            items[i].style.display = ""
        }else {
            items[i].style.display = "none"
        }
            
        }
    }
     
  }
        
