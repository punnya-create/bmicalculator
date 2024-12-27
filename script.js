const url="https://jsonplaceholder.typicode.com/users"



const result=fetch(url)
result.then((item)=>{
    return item.json()
}).then((item)=>{
    console.log(item)
    cards=''
 item.forEach(pro=> {
    cards+=`
     <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${pro.id}</h5>
                <p class="card-text">${pro.name}</p>
                <p class="card-text">${pro.username}</p>
                <p class="card-text">${pro.email}</p>
                <p class="card-text">${pro.address}</p>
                <p class="card-text">${pro.geo}</p>
                <p class="card-text">${pro.phone}</p>
                <p class="card-text">${pro.website}</p>
              
                
            </div>
        </div>
    
    `
 })
 tb1.innerHTML=cards

}).catch((err)=>{
    console.log(err)
})