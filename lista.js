document.querySelectorAll('#lista-itens li'). forEach(function(item)
{item.addEventListener('click', function() {
    document.getElementById('mensagem-item'). textContent.Content = this. getAttribute('data-mensagem');});
});