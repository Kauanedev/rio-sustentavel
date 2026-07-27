# Diagramas de Classe - Rio Sustentável

## Diagrama 1: Sistema de Calculadora de Consumo

```mermaid
classDiagram
    class Calculator {
        -float TARIFF_RJ
        -int applianceCount
        -Array~Appliance~ appliances
        +addAppliance()
        +removeAppliance(index)
        +calculateConsumption()
        +displayResults()
        +generateSuggestions(totalKwh, totalCost)
        +resetCalculator()
    }

    class Appliance {
        -string name
        -float power
        -float hours
        -int days
        -float consumptionKwh
        -float cost
        +calculateConsumption()
        +getCost()
    }

    class ValidationService {
        +validateAppliance(appliance)
        +isInRange(value, min, max)
        +validatePower(power)
        +validateHours(hours)
        +validateDays(days)
    }

    class ResultDisplay {
        -float totalKwh
        -float totalCost
        +showSummary()
        +showDetails()
        +showSuggestions()
    }

    class Suggestion {
        -string icon
        -string text
        -string action
        +generate(appliances, totalKwh)
        +display()
    }

    Calculator "1" --> "*" Appliance : manages
    Calculator --> "1" ValidationService : uses
    Calculator --> "1" ResultDisplay : updates
    ResultDisplay --> "*" Suggestion : displays
```

---

## Diagrama 2: Estrutura Geral do Sistema Web

```mermaid
classDiagram
    class SistemaWeb {
        +navegacao
        +animacoes
        +inicializar()
    }

    class Navegacao {
        -menuMobileAberto
        +toggleMenu()
        +navegarPara(url)
    }

    class PaginaInicial {
        -estatisticas
        -objetivos
        +exibir()
    }

    class PaginaDicas {
        -dicas
        +exibirDicas()
    }

    class PaginaCalculadora {
        -calculadora
        +calcular()
        +exibirResultados()
    }

    class PaginaEnergias {
        -tiposEnergia
        +exibirInformacoes()
    }

    class PaginaSobre {
        -informacoes
        +exibirConteudo()
    }

    class Animacoes {
        +fadeIn()
        +scrollSuave()
    }

    SistemaWeb --> Navegacao
    SistemaWeb --> Animacoes
    SistemaWeb --> PaginaInicial
    SistemaWeb --> PaginaDicas
    SistemaWeb --> PaginaCalculadora
    SistemaWeb --> PaginaEnergias
    SistemaWeb --> PaginaSobre
    PaginaCalculadora --> Calculator
```

---

## Descrição dos Diagramas

### Diagrama 1 - Sistema de Calculadora de Consumo

Este diagrama representa a estrutura da calculadora de consumo de energia, mostrando:

- **Calculator**: Classe principal que gerencia o cálculo de consumo
- **Appliance**: Representa cada aparelho elétrico com suas características
- **ValidationService**: Serviço para validar os dados inseridos
- **ResultDisplay**: Responsável por exibir os resultados calculados
- **Suggestion**: Gera sugestões personalizadas de economia

### Diagrama 2 - Estrutura Geral do Sistema Web

Este diagrama mostra a arquitetura simplificada do website, incluindo:

- **SistemaWeb**: Classe principal que coordena todo o sistema
- **Navegacao**: Gerencia menu mobile e navegação entre páginas
- **Animacoes**: Controla efeitos visuais (fade-in, scroll suave)
- **5 Páginas**: PaginaInicial, PaginaDicas, PaginaCalculadora, PaginaEnergias, PaginaSobre
- **Integração**: PaginaCalculadora usa a classe Calculator (do Diagrama 1)

### Relacionamentos

Os diagramas mostram os relacionamentos entre as classes:
- **→ (Seta)**: Indica que uma classe usa ou se relaciona com outra
- **Números (1, *)**: Indicam quantos objetos se relacionam
  - `1` = exatamente um
  - `*` = zero ou mais (múltiplos)

**Exemplo**: `Calculator "1" --> "*" Appliance` significa que 1 Calculator gerencia vários (0 ou mais) Appliances.

