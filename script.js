// Efeito de animação nos números da seção "Impacto"
document.addEventListener("DOMContentLoaded", () => {
    const numeros = document.querySelectorAll(".numero");
    const velocidade = 50; // Quanto maior, mais lenta a animação

    const animarContadores = () => {
        numeros.forEach(numero => {
            const atualizarContagem = () => {
                const alvo = +numero.getAttribute("data-alvo");
                const contagemAtual = +numero.innerText;

                // Calcula o incremento necessário por passo
                const incremento = Math.ceil(alvo / velocidade);

                if (contagemAtual < alvo) {
                    // Adiciona o incremento e agenda o próximo passo
                    numero.innerText = contagemAtual + incremento;
                    setTimeout(atualizarContagem, 30);
                } else {
                    // Garante que o valor final seja exatamente o alvo
                    numero.innerText = alvo;
                }
            };
            
            atualizarContagem();
        });
    };

    // Ativa a animação quando o usuário rolar a tela até a seção
    const secaoImpacto = document.querySelector("#impacto");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animarContadores();
                // Desativa o observer para rodar a animação apenas uma vez
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Ativa quando 50% da seção estiver visível

    observer.observe(secaoImpacto);
});