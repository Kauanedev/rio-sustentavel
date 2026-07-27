// ===========================
// Constantes e Configurações
// ===========================
const TARIFF_RJ = 0.85; // Tarifa média da Light em R$/kWh
let applianceCount = 1;
let appliances = [];

// ===========================
// Menu Mobile
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Animação do botão hamburguer
            const spans = menuToggle.querySelectorAll('span');
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Fechar menu ao clicar em um link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
    
    // Animação de scroll suave para elementos
    addScrollAnimations();
    
    // Atualizar potência quando selecionar aparelho pré-definido
    setupApplianceSelectors();
});

// ===========================
// Calculadora de Consumo
// ===========================

/**
 * Adiciona um novo aparelho ao formulário
 */
function addAppliance() {
    const container = document.getElementById('appliancesContainer');
    const newIndex = applianceCount;
    
    const applianceHTML = `
        <div class="appliance-item fade-in" data-index="${newIndex}">
            <div class="appliance-header">
                <h3>Aparelho ${newIndex + 1}</h3>
                <button type="button" class="btn-remove" onclick="removeAppliance(${newIndex})">✕</button>
            </div>
            <div class="form-grid">
                <div class="form-group">
                    <label for="name${newIndex}">Nome do Aparelho</label>
                    <select id="name${newIndex}" class="appliance-name">
                        <option value="">Selecione...</option>
                        <option value="Chuveiro" data-power="5500">Chuveiro Elétrico (5500W)</option>
                        <option value="Ar-condicionado" data-power="1500">Ar-condicionado (1500W)</option>
                        <option value="Geladeira" data-power="150">Geladeira (150W)</option>
                        <option value="TV" data-power="100">TV LED (100W)</option>
                        <option value="Notebook" data-power="65">Notebook (65W)</option>
                        <option value="Ferro de passar" data-power="1000">Ferro de Passar (1000W)</option>
                        <option value="Micro-ondas" data-power="1200">Micro-ondas (1200W)</option>
                        <option value="Máquina de lavar" data-power="500">Máquina de Lavar (500W)</option>
                        <option value="Ventilador" data-power="100">Ventilador (100W)</option>
                        <option value="Computador" data-power="300">Computador Desktop (300W)</option>
                        <option value="Lâmpada LED" data-power="10">Lâmpada LED (10W)</option>
                        <option value="Outro" data-power="0">Outro (personalizado)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="power${newIndex}">Potência (Watts)</label>
                    <input type="number" id="power${newIndex}" class="appliance-power" placeholder="Ex: 1500" min="1">
                </div>
                <div class="form-group">
                    <label for="hours${newIndex}">Horas por Dia</label>
                    <input type="number" id="hours${newIndex}" class="appliance-hours" placeholder="Ex: 4" min="0" max="24" step="0.5">
                </div>
                <div class="form-group">
                    <label for="days${newIndex}">Dias por Mês</label>
                    <input type="number" id="days${newIndex}" class="appliance-days" placeholder="Ex: 30" min="1" max="31" value="30">
                </div>
            </div>
        </div>
    `;
    
    container.insertAdjacentHTML('beforeend', applianceHTML);
    applianceCount++;
    
    // Mostrar botão de remover no primeiro item se houver mais de um
    updateRemoveButtons();
    
    // Configurar o selector do novo aparelho
    setupApplianceSelectors();
}

/**
 * Remove um aparelho do formulário
 */
function removeAppliance(index) {
    const appliance = document.querySelector(`[data-index="${index}"]`);
    if (appliance) {
        appliance.remove();
        updateRemoveButtons();
    }
}

/**
 * Atualiza a visibilidade dos botões de remover
 */
function updateRemoveButtons() {
    const items = document.querySelectorAll('.appliance-item');
    items.forEach((item, idx) => {
        const removeBtn = item.querySelector('.btn-remove');
        if (removeBtn) {
            removeBtn.style.display = items.length > 1 ? 'block' : 'none';
        }
    });
}

/**
 * Configura os seletores de aparelhos para atualizar a potência automaticamente
 */
function setupApplianceSelectors() {
    const selectors = document.querySelectorAll('.appliance-name');
    selectors.forEach(select => {
        // Remover listeners antigos
        const newSelect = select.cloneNode(true);
        select.parentNode.replaceChild(newSelect, select);
        
        newSelect.addEventListener('change', function() {
            const selectedOption = this.options[this.selectedIndex];
            const power = selectedOption.getAttribute('data-power');
            const index = this.id.replace('name', '');
            const powerInput = document.getElementById(`power${index}`);
            
            if (power && powerInput) {
                powerInput.value = power;
            }
        });
    });
}

/**
 * Calcula o consumo de energia
 */
function calculateConsumption() {
    appliances = [];
    let hasError = false;
    
    const items = document.querySelectorAll('.appliance-item');
    
    items.forEach((item, index) => {
        const itemIndex = item.getAttribute('data-index');
        const name = document.getElementById(`name${itemIndex}`).value;
        const power = parseFloat(document.getElementById(`power${itemIndex}`).value);
        const hours = parseFloat(document.getElementById(`hours${itemIndex}`).value);
        const days = parseFloat(document.getElementById(`days${itemIndex}`).value);
        
        // Validação
        if (!name || !power || !hours || !days) {
            alert(`Por favor, preencha todos os campos do Aparelho ${parseInt(itemIndex) + 1}`);
            hasError = true;
            return;
        }
        
        if (power <= 0 || hours < 0 || hours > 24 || days <= 0 || days > 31) {
            alert(`Por favor, verifique os valores do Aparelho ${parseInt(itemIndex) + 1}`);
            hasError = true;
            return;
        }
        
        // Cálculo: (Potência em W × Horas/dia × Dias/mês) / 1000 = kWh
        const consumptionKwh = (power * hours * days) / 1000;
        const cost = consumptionKwh * TARIFF_RJ;
        
        appliances.push({
            name,
            power,
            hours,
            days,
            consumptionKwh,
            cost
        });
    });
    
    if (hasError) return;
    
    if (appliances.length === 0) {
        alert('Adicione pelo menos um aparelho para calcular.');
        return;
    }
    
    displayResults();
}

/**
 * Exibe os resultados do cálculo
 */
function displayResults() {
    const totalKwh = appliances.reduce((sum, app) => sum + app.consumptionKwh, 0);
    const totalCost = appliances.reduce((sum, app) => sum + app.cost, 0);
    
    // Atualizar resumo
    document.getElementById('totalKwh').textContent = `${totalKwh.toFixed(2)} kWh`;
    document.getElementById('totalCost').textContent = `R$ ${totalCost.toFixed(2)}`;
    
    // Criar detalhes dos resultados
    let detailsHTML = '<h3>Consumo por Aparelho</h3>';
    appliances.forEach(app => {
        detailsHTML += `
            <div class="result-item">
                <div>
                    <div class="result-item-name">${app.name}</div>
                    <div class="result-item-details">
                        <span>${app.power}W</span>
                        <span>${app.hours}h/dia</span>
                        <span>${app.days} dias</span>
                        <span>${app.consumptionKwh.toFixed(2)} kWh</span>
                    </div>
                </div>
                <div class="result-item-cost">R$ ${app.cost.toFixed(2)}</div>
            </div>
        `;
    });
    
    document.getElementById('detailedResults').innerHTML = detailsHTML;
    
    // Gerar sugestões
    generateSuggestions(totalKwh, totalCost);
    
    // Mostrar resultados
    document.getElementById('results').style.display = 'block';
    
    // Scroll suave para resultados
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Gera sugestões de economia baseadas no consumo
 */
function generateSuggestions(totalKwh, totalCost) {
    let suggestions = [];
    
    // Verificar aparelhos específicos
    const hasChuveiro = appliances.find(app => app.name.includes('Chuveiro'));
    const hasArCondicionado = appliances.find(app => app.name.includes('Ar-condicionado'));
    const hasGeladeira = appliances.find(app => app.name.includes('Geladeira'));
    
    if (totalKwh > 200) {
        suggestions.push({
            icon: '⚠️',
            text: 'Seu consumo está alto! Considere implementar as dicas de economia para reduzir sua conta.',
            action: 'Ver Dicas'
        });
    }
    
    if (hasChuveiro && hasChuveiro.hours > 0.5) {
        const potentialSaving = (hasChuveiro.hours - 0.5) * hasChuveiro.days * hasChuveiro.power / 1000 * TARIFF_RJ;
        suggestions.push({
            icon: '🚿',
            text: `Reduzir o tempo de banho para 30 minutos/dia pode economizar até R$ ${potentialSaving.toFixed(2)}/mês.`,
            action: null
        });
    }
    
    if (hasArCondicionado && hasArCondicionado.hours > 8) {
        suggestions.push({
            icon: '❄️',
            text: 'O ar-condicionado está sendo usado por muitas horas. Mantenha a temperatura em 23°C e limpe os filtros.',
            action: null
        });
    }
    
    if (hasGeladeira) {
        suggestions.push({
            icon: '🧊',
            text: 'Verifique a borracha de vedação da geladeira e evite abri-la desnecessariamente.',
            action: null
        });
    }
    
    // Sugestão de energia solar
    if (totalCost > 150) {
        const solarSaving = totalCost * 0.8; // Economia de até 80%
        suggestions.push({
            icon: '☀️',
            text: `Com energia solar, você poderia economizar até R$ ${solarSaving.toFixed(2)}/mês! Considere investir em painéis solares.`,
            action: 'Saiba Mais'
        });
    }
    
    suggestions.push({
        icon: '💡',
        text: 'Substitua todas as lâmpadas por LED e economize até 80% no consumo de iluminação.',
        action: null
    });
    
    // Exibir sugestões
    let suggestionsHTML = '';
    suggestions.forEach(suggestion => {
        suggestionsHTML += `
            <div class="suggestion-item">
                <span style="font-size: 1.5rem; margin-right: 10px;">${suggestion.icon}</span>
                ${suggestion.text}
                ${suggestion.action ? `<a href="dicas.html" style="margin-left: 10px; font-weight: 600;">${suggestion.action} →</a>` : ''}
            </div>
        `;
    });
    
    document.getElementById('suggestionsList').innerHTML = suggestionsHTML;
}

/**
 * Reseta a calculadora
 */
function resetCalculator() {
    document.getElementById('results').style.display = 'none';
    
    // Scroll para o topo do formulário
    document.querySelector('.calculator-form').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===========================
// Animações de Scroll
// ===========================
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observar cards e seções
    const elementsToAnimate = document.querySelectorAll(
        '.stat-card, .objective-card, .tip-card, .explore-card, .energy-type, .info-card'
    );
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// ===========================
// Scroll suave para âncoras
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Efeito de scroll no header
// ===========================
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Funções Auxiliares
// ===========================

/**
 * Formata número para moeda brasileira
 */
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

/**
 * Valida se um número está dentro de um intervalo
 */
function isInRange(value, min, max) {
    return value >= min && value <= max;
}

// ===========================
// Easter Egg: Mensagem de Conscientização
// ===========================
console.log('%c🌱 Rio Sustentável', 'color: #10b981; font-size: 24px; font-weight: bold;');
console.log('%cObrigado por se preocupar com o meio ambiente!', 'color: #0ea5e9; font-size: 14px;');
console.log('%cCada pequena ação conta para um futuro mais sustentável. 🌍', 'color: #6b7280; font-size: 12px;');

