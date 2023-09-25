
let random = Math.floor(Math.random() * 12 + 1)
document.querySelector('.posts').innerHTML=random;
document.querySelector('.followers').innerHTML=Math.floor(Math.random() *1000 + 1)

fetch('https://randomuser.me/api/').then(res=>{
    res.json().then(data=>{
       let user = data.results[0];
        document.querySelector('.hname').innerHTML=user.name.first
        document.querySelector('.myname').innerHTML=user.name.first+ " " + user.name.last
        document.querySelector('.profilepic').src=user.picture.medium
        
       for(let i=0;i<random;i++){
        
           let photoo = document.createElement('img')
           photoo.src="https://picsum.photos/209"+ i;
    
           document.querySelector('.fieldpost').append(photoo)
       }
    })
})