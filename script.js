function toogleleMode() {
  const html = document.documentElement

  //Pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    html.classList.remove("light")
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    // se tiver sem lightmode, manter a imagem normal
    html.classList.add("light")
    img.setAttribute("src", "./assets/avatar-light.png")
  }

  //Simplificando a função toogle, deveria funcionar
  //mas não funcionou.
  //html.classList.toogle("light")
}
