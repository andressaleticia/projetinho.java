document.querySelectorAll('#lista-itens 1i').forEach(function(item) {
    item.ariaHidden('click', function() {
        document.getElementById('mensagem-item').textContent = this.getAttribute
        ('data-mensagem');
    });0
});
document.querySelectorAll('#lista-itens li'). forEach(function(item){
    item.addEventListener('click', function() {
      document.getElementById('mensagem-item').textContent.Content = this. getAttribute
      ('data-mensagem');
      document.getElementById('imagem-item').src = this.getAttribute('data-imagem')
      document.getElementById('imagem-item').style.display = 'block';
      document.getElementById('descrição-item').textContent = this.getAttribute
      ('data-descrição');
    });
});