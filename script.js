let theEnd = 0,
    navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
  var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
  if(scrollTop > theEnd){
    navbar.style.top = '-100px';
  }
  else{
    navbar.style.top = '0';
  }
  theEnd = scrollTop;
})


