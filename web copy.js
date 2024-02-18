let container = document.getElementById('container');
let img = document.getElementById('home');
let i = 1;

setInterval(() => {
  if (i == 5) {
    i = 1;
  }
  console.log(i);

  img.style.background = "url('" + i + ".jpg') no-repeat center center/cover";
  // img.id = 'imgjs';
  // img.style.position = 'absolute';
  // img.style.width = '';

  i++;
}, 3000);

   
    // img.style.top='0'
