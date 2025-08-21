// Inicialização das partículas
document.addEventListener('DOMContentLoaded', function() {
    // Configuração das partículas
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#00AAFF"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#6a11cb",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // Inicializar contadores
    iniciarContadores();
    
    // Inicializar FAQ
    inicializarFAQ();
    
    // Inicializar formulário
    inicializarFormulario();
    
    // Mostrar modal após 5 segundos
    setTimeout(abrirModal, 5000);
    
    // Inicializar animações de aparição
    inicializarAnimacoes();
});

// Contador regressivo principal
function iniciarContadores() {
    // Configurar a data de expiração (24 horas a partir de agora)
    const agora = new Date();
    const expiracao = new Date(agora.getTime() + 24 * 60 * 60 * 1000);
    
    // Atualizar todos os contadores
    atualizarContador(expiracao, 'hours', 'minutes', 'seconds');
    atualizarContador(expiracao, 'featured-hours', 'featured-minutes', 'featured-seconds');
    atualizarContador(expiracao, 'modal-hours', 'modal-minutes', 'modal-seconds');
    
    // Atualizar a cada segundo
    setInterval(function() {
        atualizarContador(expiracao, 'hours', 'minutes', 'seconds');
        atualizarContador(expiracao, 'featured-hours', 'featured-minutes', 'featured-seconds');
        atualizarContador(expiracao, 'modal-hours', 'modal-minutes', 'modal-seconds');
    }, 1000);
}

function atualizarContador(dataExpiracao, idHoras, idMinutos, idSegundos) {
    const agora = new Date();
    const diferenca = dataExpiracao - agora;
    
    if (diferenca <= 0) {
        document.getElementById(idHoras).textContent = '00';
        document.getElementById(idMinutos).textContent = '00';
        if (idSegundos) document.getElementById(idSegundos).textContent = '00';
        return;
    }
    
    const horas = Math.floor(diferenca / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
    document.getElementById(idHoras).textContent = horas.toString().padStart(2, '0');
    document.getElementById(idMinutos).textContent = minutos.toString().padStart(2, '0');
    if (idSegundos) document.getElementById(idSegundos).textContent = segundos.toString().padStart(2, '0');
}

// Sistema de FAQ
function inicializarFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Fechar outros itens abertos
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alternar item atual
            item.classList.toggle('active');
        });
    });
}

// Sistema do formulário
function inicializarFormulario() {
    const form = document.getElementById('survey-form');
    const successMessage = document.getElementById('success-message');
    const reasonGroup = document.getElementById('reason-group');
    const radioOptions = document.querySelectorAll('input[name="entry.1465811703"]');
    
    // Mostrar/ocultar motivo baseado na seleção
    radioOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.value === 'não vou comprar desta vez') {
                reasonGroup.style.display = 'block';
            } else {
                reasonGroup.style.display = 'none';
            }
        });
    });
    
    // Manipular envio do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simular envio (substituir com código real de envio)
        setTimeout(function() {
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Incrementar contador de downloads
            const downloadCount = document.getElementById('download-count');
            let count = parseInt(downloadCount.textContent);
            downloadCount.textContent = count + 1;
            
            // Rolar para a mensagem de sucesso
            successMessage.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
    });
}

// Modal de oferta especial
function abrirModal() {
    const modal = document.getElementById('modalOferta');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    const modal = document.getElementById('modalOferta');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora
document.getElementById('modalOferta').addEventListener('click', function(e) {
    if (e.target === this) {
        fecharModal();
    }
});

// Animação de aparição dos elementos ao rolar
function inicializarAnimacoes() {
    const elementos = document.querySelectorAll('.instrument-card, .testimonial, .featured-instrument, .centered-container, .faq-item, .countdown-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elementos.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// Contador de downloads aleatório (apenas para demonstração)
function atualizarContadorDownloads() {
    const downloadCount = document.getElementById('download-count');
    let count = parseInt(downloadCount.textContent);
    
    // Adicionar um número aleatório entre 1-5 a cada 30 segundos
    setInterval(() => {
        count += Math.floor(Math.random() * 5) + 1;
        downloadCount.textContent = count;
    }, 30000);
}

// Iniciar contador de downloads
atualizarContadorDownloads();

// Botão de WhatsApp com efeito
document.querySelectorAll('.whatsapp-button').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Rolar suavemente para as âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// Otimização para dispositivos móveis
function otimizarMobile() {
    if (window.innerWidth <= 768) {
        // Reduzir animações em mobile para melhor performance
        document.querySelectorAll('.note').forEach(note => {
            note.style.animationDuration = '30s';
            note.style.opacity = '0.15';
        });
        
        // Ajustar altura do header dinamicamente
        const headerSection = document.querySelector('.header-section');
        const contentHeight = document.querySelector('.header-content').scrollHeight;
        const windowHeight = window.innerHeight;
        
        if (contentHeight > windowHeight * 0.8) {
            headerSection.style.minHeight = 'auto';
            headerSection.style.padding = '2rem 0';
        }
    }
}

// Executar ao carregar e redimensionar
document.addEventListener('DOMContentLoaded', otimizarMobile);
window.addEventListener('resize', otimizarMobile);

// Adicione este script para funcionalidades extras do botão flutuante
document.addEventListener('DOMContentLoaded', function() {
    const floatButton = document.querySelector('.whatsapp-float-button');
    const notificationBubble = document.querySelector('.notification-bubble');
    
    // Efeito de digitação no balão de notificação
    function typeWriterEffect() {
        const text = "🎵 Oferta especial!";
        let i = 0;
        notificationBubble.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                notificationBubble.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        }
        type();
    }
    
    // Iniciar efeito de digitação após 2 segundos
    setTimeout(typeWriterEffect, 2000);
    
    // Contador de cliques (para analytics)
    floatButton.addEventListener('click', function() {
        console.log('Botão do WhatsApp clicado - Redirecionando para Mateus');
        // Aqui você pode adicionar Google Analytics ou outro tracking
    });
    
    // Esconder balão após 10 segundos
    setTimeout(() => {
        notificationBubble.style.opacity = '0';
        notificationBubble.style.transform = 'scale(0.8)';
        setTimeout(() => {
            notificationBubble.style.display = 'none';
        }, 300);
    }, 10000);
    
    // Mostrar balão ao passar o mouse no botão principal
    floatButton.addEventListener('mouseenter', () => {
        if (notificationBubble.style.display === 'none') {
            notificationBubble.style.display = 'block';
            setTimeout(() => {
                notificationBubble.style.opacity = '1';
                notificationBubble.style.transform = 'scale(1)';
            }, 10);
        }
    });
});