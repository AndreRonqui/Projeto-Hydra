const links = document.getElementsByClassName('link');

Array.from(links).forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        document.getElementById('loading').style.display = 'flex'; // Mostra a animação

        // Redireciona após um pequeno atraso (simulando carregamento)
        setTimeout(() => {
            window.location.href = link.href; // Redireciona para a outra página
        }, 1000); // Tempo de espera de 1 segundo
    });
});