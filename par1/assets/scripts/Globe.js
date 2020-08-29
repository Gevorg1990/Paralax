window.onload = function () {
   
   document.addEventListener('scroll', gara)

   function gara(event) {
      let Y = window.scrollY;
      let d = document.querySelector('.parlax__fog')

      let dd = document.querySelectorAll('.paralax__montain').forEach(layer => {
         layer.style.transform = `scale(${Y / 1150 * 1 + 1})`

      })
      d.style.transform = `scale(${Y / 150 * 1 + 1})`
      if (Y > 500) {
         d.style.opacity = '.5'
      } else {
         d.style.opacity = '1'
      }

   }

   

}

