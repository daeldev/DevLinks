function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const img = html.querySelector("#profile img")

    if(html.classList.contains('light')){
        img.setAttribute('src', '/assets/FotoPerfilLight.jpg')
        img.setAttribute('alt', 'Imagem Perfil Claro')
    }else{
        img.setAttribute('src', '/assets/FotoPerfil.jpeg')
        img.setAttribute('alt', 'Imagem Perfil Escuro')
    }
}