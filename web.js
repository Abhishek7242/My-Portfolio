let container = document.getElementById('container');
let home = document.getElementById('home');
let i = 1;
home.style.setProperty('--background-url', "url('" + 0 + ".jpg')");
home.classList.add('home');
setInterval(() => {
  if (i == 7) {
    i = 1;
  }
  
  console.log(i);
  
  home.style.setProperty('--background-url', "url('" + i + ".jpg')");
  home.classList.add('home');

  i++;
}, 7000);


let hamBtn = document.getElementById('hamBtn')
let potraitNav = document.getElementById('potraitNav')
hamBtn.addEventListener('click', () => {
  potraitNav.style.display = 'flex'
  setTimeout(() => {
    potraitNav.style.left='0px'

  }, 100);
})
let cancelHam = document.getElementById('cancelHam')
cancelHam.addEventListener('click', () => {
  potraitNav.style.left = '-400px'
  setTimeout(() => {
    
    potraitNav.style.display='none'
  }, 200);
})