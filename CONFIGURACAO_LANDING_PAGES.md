# Configuração das Landing Pages

Este documento descreve a configuração das landing pages conectadas ao site principal da Solluta.

## Repositório das Landing Pages

As landing pages estão hospedadas no seguinte repositório do GitHub:

**Repositório**: https://github.com/gildeonsolluta/Landing-Pages.git

## Estrutura das Landing Pages

O repositório contém as seguintes landing pages:

1. **LIMPA-NOME** - Landing page para o serviço de Limpa Nome
2. **SUPERENDIVIDAMENTO** - Landing page para o serviço de Superendividamento
3. **PREVIDENCIÁRIO** - Landing page para o serviço Previdenciário
4. **BUSCA E APREENSÃO** - Landing page para o serviço de Busca e Apreensão

## URLs das Landing Pages

As URLs das landing pages são configuradas no arquivo `src/config/landingPages.ts`.

### URLs Baseadas em GitHub Pages

Se as landing pages estiverem hospedadas no GitHub Pages, as URLs serão:

- Limpa Nome: `https://gildeonsolluta.github.io/Landing-Pages/LIMPA-NOME`
- Superendividamento: `https://gildeonsolluta.github.io/Landing-Pages/SUPERENDIVIDAMENTO`
- Previdenciário: `https://gildeonsolluta.github.io/Landing-Pages/PREVIDENCIÁRIO`
- Busca e Apreensão: `https://gildeonsolluta.github.io/Landing-Pages/BUSCA%20E%20APREENSÃO`

## Como Usar

Para usar as URLs das landing pages no código, importe a configuração:

```typescript
import { LANDING_PAGES } from "@/config/landingPages";

// Exemplo de uso
const limpaNomeUrl = LANDING_PAGES.LIMPA_NOME;
```

## Redirecionamento Automático

As rotas locais do site principal foram configuradas para redirecionar automaticamente para as landing pages externas:

- `/limpa-nome` → Redireciona para `LANDING_PAGES.LIMPA_NOME`
- `/superendividamento` → Redireciona para `LANDING_PAGES.SUPERENDIVIDAMENTO`
- `/previdenciario` → Redireciona para `LANDING_PAGES.PREVIDENCIARIO`
- `/revisao-veiculos` → Redireciona para `LANDING_PAGES.BUSCA_E_APREENSAO`

O componente `RedirectToLandingPage` é usado para fazer o redirecionamento automático quando alguém acessa essas rotas.

## Componente de Serviços

O componente `Servicos.tsx` foi atualizado para usar links externos que abrem as landing pages em uma nova aba. Os serviços agora são extensões do Solluta Hub, conectados às landing pages hospedadas no repositório GitHub.

## Atualização

Para atualizar as URLs das landing pages, edite o arquivo `src/config/landingPages.ts`.

