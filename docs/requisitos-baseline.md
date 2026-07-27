# Requisitos do Sistema - Rio Sustentável

## Requisitos Funcionais

### RF01 - Navegação e Interface Geral
- Menu de navegação responsivo (hamburguer em mobile)
- Scroll suave entre seções
- Rodapé com links rápidos e informações de contato
- Design com recursos visuais temáticos (cores sustentáveis, ícones, animações)

### RF02 - Página Inicial (Home)
- Hero section com apresentação do projeto
- Cards de estatísticas sobre energia sustentável
- Objetivos do projeto
- Cards de exploração com links para outras páginas
- Botão CTA direcionando para a calculadora

### RF03 - Página de Dicas de Economia
- Dicas categorizadas (iluminação, climatização, eletrodomésticos)
- Estimativa de economia em reais para cada dica
- Cards visuais com ícones
- Botão CTA para calculadora

### RF04 - Calculadora de Consumo - Entrada de Dados
- Formulário para adicionar múltiplos aparelhos elétricos
- Seleção de aparelho pré-configurado (11 opções) com auto-preenchimento de potência
- Inserção manual de potência (Watts), horas/dia e dias/mês
- Validação de campos (obrigatórios e valores numéricos: potência > 0, horas ≤ 24, dias ≤ 31)
- Adição e remoção dinâmica de aparelhos

### RF05 - Calculadora de Consumo - Cálculos e Resultados
- Cálculo de consumo em kWh por aparelho e total mensal
- Cálculo de custo em reais (tarifa R$ 0,85/kWh)
- Exibição detalhada por aparelho
- Informações sobre metodologia de cálculo

### RF06 - Calculadora de Consumo - Sugestões Personalizadas
- Sugestões específicas baseadas em uso (chuveiro, ar-condicionado, lâmpadas LED)
- Sugestão de energia solar para consumo > R$ 150/mês
- Links para página de dicas
- Botão para resetar calculadora
- Scroll automático para resultados

### RF07 - Página de Energias Renováveis
- Informações completas sobre 4 tipos de energia (solar, eólica, hidrelétrica, biomassa/biogás)
- Para cada tipo: potencial no RJ, projetos existentes/em desenvolvimento, benefícios
- Comparação visual entre renováveis e combustíveis fósseis
- Cards com ícones para cada tipo de energia

### RF08 - Página Sobre
- Descrição e objetivos detalhados do projeto
- Contexto energético do Rio de Janeiro (desafios, potencial, oportunidades)
- Cards de impacto esperado
- Metodologia do projeto (4 etapas)
- Referências e fontes consultadas

---

## Requisitos Não Funcionais

### RNF01 - Usabilidade
- Interface intuitiva e fácil de usar
- Design responsivo (desktop, tablet, mobile)
- Tempo de resposta da calculadora < 1 segundo
- Mensagens de erro claras
- Estrutura HTML semântica (acessibilidade)

### RNF02 - Performance
- Carregamento de página < 2 segundos
- Animações fluidas (60fps)
- Otimização para dispositivos móveis
- JavaScript vanilla sem dependências externas

### RNF03 - Compatibilidade
- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Resoluções de 320px até 1920px+
- Funcionalidade offline após primeiro carregamento

### RNF04 - Manutenibilidade
- Código organizado e comentado
- Variáveis CSS para customização
- Separação de responsabilidades (HTML, CSS, JS)
- Nomenclatura clara

### RNF05 - Confiabilidade
- Validação de dados no cliente
- Tratamento de erros em cálculos
- Valores padrão para campos opcionais
- Cálculos precisos (2 casas decimais)

---

## Resumo Quantitativo

- **Requisitos Funcionais:** 8 (consolidados de 73)
- **Requisitos Não Funcionais:** 5 (consolidados de 20)
- **Total:** 13 requisitos principais

---

## Ferramentas Utilizadas

As seguintes ferramentas foram utilizadas pela equipe para desenvolver o projeto Rio Sustentável:

### Desenvolvimento
- **HTML5**: Linguagem de marcação para estruturação das páginas web do projeto, garantindo semântica e acessibilidade
- **CSS3**: Estilização e design responsivo do site, incluindo animações, gradientes e layout adaptativo para diferentes dispositivos
- **JavaScript (Vanilla)**: Implementação da lógica de negócio, incluindo a calculadora de consumo energético, validações de formulário e interatividade da interface

### Controle de Versão
- **Git**: Sistema de controle de versão para rastreamento de alterações no código
- **GitHub**: Plataforma de hospedagem do repositório e controle de versão do projeto  
  Link do repositório: [Rio-sustentavel](https://github.com/kauanesantos/Rio-sustentavel)

### Testes e Validação
- **Google Chrome DevTools**: Ferramenta de inspeção e debug para testes de responsividade e performance
- **Firefox Developer Tools**: Ferramenta complementar para validação de compatibilidade cross-browser
- **Safari Web Inspector**: Testes de compatibilidade em ambiente macOS/iOS

### Documentação
- **Markdown**: Formato de documentação para README, requisitos e diagramas do projeto
- **Mermaid**: Geração de diagramas de classe e fluxogramas para documentação técnica

### Design e Prototipagem
- **CSS Variables**: Sistema de design tokens para manutenção consistente de cores e espaçamentos
- **Emoji Unicode**: Iconografia visual para representação de conceitos de energia sustentável

---

## Considerações Finais

• O desenvolvimento deste projeto demonstrou ser uma excelente oportunidade para conscientizar a população do Rio de Janeiro sobre o uso responsável de energia elétrica e o potencial das energias renováveis no estado;

• A elaboração da calculadora de consumo energético permitiu aos usuários visualizarem de forma prática e imediata o impacto financeiro e ambiental do seu consumo elétrico, facilitando a tomada de decisões conscientes;

• O desenvolvimento do plano de gerenciamento e a definição de requisitos foi de suma importância para estruturar o projeto de forma organizada, permitindo ajustes e refinamentos durante o processo de desenvolvimento;

• A escolha por tecnologias web nativas (HTML, CSS e JavaScript vanilla) garantiu um produto final leve, rápido e acessível, sem dependências externas que pudessem comprometer a manutenibilidade ou performance;

• A pesquisa sobre o potencial energético do Rio de Janeiro revelou dados importantes sobre a viabilidade de energias renováveis no estado, especialmente solar e eólica offshore, que podem ser fundamentais para o futuro energético sustentável;

• O projeto incentiva a participação cidadã na transição energética, fornecendo informações técnicas acessíveis sobre diferentes tipos de energias limpas e seus benefícios econômicos e ambientais;

• A interface responsiva e intuitiva permite que o conteúdo seja acessado por diversos públicos, desde estudantes até profissionais da área energética, democratizando o conhecimento sobre sustentabilidade;

• As sugestões personalizadas geradas pela calculadora adaptam-se ao perfil de consumo de cada usuário, tornando as recomendações mais relevantes e aumentando a probabilidade de adoção de práticas mais sustentáveis;

• Este projeto extensionista demonstra como a tecnologia pode ser aliada à educação ambiental, criando ferramentas práticas que contribuem para os Objetivos de Desenvolvimento Sustentável (ODS) da ONU, especialmente o ODS 7 (Energia Limpa e Acessível), ODS 11 (Cidades e Comunidades Sustentáveis), ODS 12 (Consumo e Produção Responsáveis) e ODS 13 (Ação Contra a Mudança Global do Clima).

---

**Versão**: 2.0 (Consolidada)  
**Data**: Novembro 2025  
**Projeto**: Rio Sustentável - Energia Limpa para o Rio de Janeiro

