
async function load(){
    // return (await fetch("data.json")).json();
    const response = await fetch("data.json");
    const users = await response.json();
    return users;
  }
document.addEventListener("DOMContentLoaded" , async()=> {
    let users = [];
    try{
        users = await load();
    }catch(e){
        console.log(e);
    }

    // Menu bar
    const dail=document.querySelector('.dai');
    const weekl=document.querySelector('.week');
    const monthl=document.querySelector('.mon');

    //Description
    const week=document.querySelectorAll('.description');
    const input=document.querySelectorAll('.hours');

    // function desc(info , rate){
    //     let i=0;
    //     for (const item of week) {
    //         const name = `${users[i].timeframes.daily.previous}`;
    //         item.innerHTML=`Last ${info} - ${name}hrs `;
    //         i+=1;
    //     }
    // }
    
    dail.addEventListener('click', function(){
        dail.style.color='white';
        weekl.style.color='hsl(236, 100%, 87%)';
        monthl.style.color='hsl(236, 100%, 87%)';
        let i=0;
        for (const item of week) {
            item.innerHTML=`Last Day - ${users[i].timeframes.daily.previous}hrs `;
            i+=1;
        }
        let j=0;
        for (const items of input) {
            items.innerHTML=`${users[j].timeframes.daily.current}hrs`;
            j+=1;
        }
    })
    weekl.addEventListener('click', function(){
        weekl.style.color='white';
        monthl.style.color='hsl(236, 100%, 87%)';
        dail.style.color='hsl(236, 100%, 87%)';
        for (const item of week) {
            item.innerHTML='Last Week - ';
        }
        let i=0;
        for (const item of week) {
            item.innerHTML=`Last Week - ${users[i].timeframes.weekly.previous}hrs `;
            i+=1;
        }
        let j=0;
        for (const items of input) {
            items.innerHTML=`${users[j].timeframes.weekly.current}hrs`;
            j+=1;
        }
    })
    monthl.addEventListener('click', function(){
        weekl.style.color='hsl(236,100%,87%)';
        dail.style.color='hsl(236 , 100% , 87%)';
        monthl.style.color='white';
        let i=0;
        for (const item of week) {
            item.innerHTML=`Last Month - ${users[i].timeframes.monthly.previous}hrs `;
            i+=1;
        }
        let j=0;
        for (const items of input) {
            items.innerHTML=`${users[j].timeframes.monthly.current}hrs`;
            j+=1;
        }
    })
    // console.log(users);
    // console.log(users[0].timeframes.daily.previous);
})