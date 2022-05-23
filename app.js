const kostebekler = document.querySelectorAll(".köstebek");
const sureText = document.getElementById("süre");
const skorText = document.getElementById("skor");
const baslatBtn = document.getElementById("baslat");

let süreDurumu = false;
let sure = 15;
let skor = 0;



baslatBtn.addEventListener("click", startGame);

kostebekler.forEach(kostebek =>{
    kostebek.addEventListener("click",vur);
})


function rastgeleKostebek(){
    const rastgele = Math.floor(Math.random()*kostebekler.length);
    const secilen = kostebekler[rastgele];
    return secilen ;
}

function rastgelesure(min,max){
    const time = Math.round(Math.random() * (max-min)) + min;
    return time;
}



function yukari(){
    const kostebek = rastgeleKostebek();
    const kostebeksuresi = rastgelesure(750,1250);
    kostebek.classList.add("secilen");
    setTimeout(() => {
        kostebek.classList.remove("secilen");
        if(!süreDurumu){
            yukari();
        }
    },kostebeksuresi);
}




function sureyibaslat(){
    if(!süreDurumu){
        sure--;
        sureText.textContent=sure;
    }else{
        sureText.textContent="Oyun Bitti";
    }
}

function setTime(){
    süreDurumu = true;
}

function startGame(){

     sure = 15;
     skor = 0;
     süreDurumu = false;
    const interval = setInterval(() => {
        sureyibaslat();
        if (süreDurumu) clearInterval(interval);
}, 1000);

yukari();

setTimeout(() => {
        setTime();
    }, sure*1000);

}

function vur(e) {
    if (e.target.classList.contains("secilen")) {
    skor++;
    e.target.classList.remove("secilen");
    }
    skorText.textContent = skor;
}