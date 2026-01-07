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

### URLs Locais (Mesmo Domínio)

As landing pages são servidas como rotas locais no mesmo domínio:

- **Limpa Nome**: `sollutasolucoes.com.br/limpa-nome`
- **Superendividamento**: `sollutasolucoes.com.br/superendividamento`
- **Previdenciário**: `sollutasolucoes.com.br/previdenciario`
- **Revisão de Veículos**: `sollutasolucoes.com.br/revisao-veiculos`

Todas as landing pages fazem parte do mesmo aplicativo React e são gerenciadas pelo React Router.

## Como Usar

Para usar as URLs das landing pages no código, importe a configuração:

```typescript
import { LANDING_PAGES } from "@/config/landingPages";

// Exemplo de uso
const limpaNomeUrl = LANDING_PAGES.LIMPA_NOME;
```

## Rotas Locais

As landing pages são servidas diretamente como componentes React nas seguintes rotas:

- `/limpa-nome` → Componente `LimpaNome`
- `/superendividamento` → Componente `Superendividamento`
- `/previdenciario` → Componente `Previdenciario`
- `/revisao-veiculos` → Componente `RevisaoVeiculos`

Todas as rotas são configuradas no arquivo `src/App.tsx` usando React Router.

## Componente de Serviços

O componente `Servicos.tsx` foi atualizado para usar links externos que abrem as landing pages em uma nova aba. Os serviços agora são extensões do Solluta Hub, conectados às landing pages hospedadas no repositório GitHub.

## Deploy

Para fazer o deploy no HostGator, consulte o guia completo: [GUIA_DEPLOY_HOSTGATOR.md](../GUIA_DEPLOY_HOSTGATOR.md)

## Atualização

Para atualizar as rotas das landing pages, edite o arquivo `src/config/landingPages.ts` ou `src/App.tsx`.

