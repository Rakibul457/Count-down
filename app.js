const endtime = '04 December 2024'
document.getElementById('endDate').innerText = endtime;
const inputs = document.querySelectorAll('input')

function colok(){
    const end = new Date(endtime)
    const now = new Date();
    const diff = (end - now )/ 1000;

    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}
colok()

setInterval(()=>{
    colok()
},1000)

// const endDate = '04 December 2024 6:00 PM'
// document.getElementById('endDate').innerText = endDate;
// const inputs = document.querySelectorAll('input')

// const colok = ()=>{
//     const end = new Date(endDate);
//     const now = new Date();
//     const diff =(end - now)/1000;

//     inputs[0].value = Math.floor(diff / 3600 / 24);
//     inputs[1].value = Math.floor(diff / 3600) % 24;
//     inputs[2].value = Math.floor(diff / 60) % 60;
//     inputs[3].value = Math.floor(diff) % 60;
// }

// colok();

// setInterval(()=>{
//     colok()
// },1000)


// const endDate = '05 December 2024'
// document.getElementById('endDate').innerText = endDate;
// let inputs = document.querySelectorAll('input');

// const clock = ()=>{
//     let end = new Date(endDate);
//     let now = new Date();
//     let diff = (end - now)/1000;

//     inputs[0].value = Math.floor(diff / 3600 / 12)
//     inputs[1].value = Math.floor(diff / 3600) % 24;
//     inputs[2].value = Math.floor(diff / 60) % 60;
//     inputs[3].value = Math.floor(diff) % 60;

// }
// clock();

// setInterval(()=>{
//     clock()
// },1000)