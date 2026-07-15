# Star Vidros — projeto para rodar no VS Code

## Como rodar

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`. Build de produção: `npm run build` (gera a pasta `dist`).

## O que foi ajustado (só configuração, nada de layout/funcionalidade)

O export original veio de um ambiente Replit/monorepo e tinha algumas coisas que só existem lá dentro.
Corrigido para funcionar em qualquer máquina, sem mudar nenhuma tela, componente, estilo ou comportamento:

- **package.json**: as dependências estavam como `"catalog:"` (um recurso de monorepo pnpm) em vez de
  uma versão real — não instalava fora do Replit. Troquei por versões reais. Também removi
  `@workspace/api-client-react` (não é usada em nenhum lugar do código).
- **vite.config.ts**: exigia as variáveis de ambiente `PORT` e `BASE_PATH` (senão nem iniciava) e
  carregava plugins exclusivos do Replit (`@replit/vite-plugin-*`). Troquei por uma porta padrão (5173)
  e removi esses plugins — eles só adicionam uma barra de dev do Replit, não afetam o site em si.
- **tsconfig.json**: estendia um `tsconfig.base.json` que não veio no zip. Deixei autossuficiente.

## Sobre as imagens (⚠️ importante)

O arquivo `.zip` que você me passou **não incluía as imagens** usadas no Hero, na seção Sobre e nos
cards de Serviços (`star-hero.jpg`, `star-sobre.jpg`, `star-box.jpg`, `star-porta.jpg`, `star-janela.jpg`,
`star-balcao.jpg`, `star-espelho.jpg`, `star-escada.jpg`). Elas ficavam numa pasta `attached_assets`
fora da pasta do app, que não foi exportada.

Para o projeto não quebrar, coloquei imagens de placeholder (com o nome do arquivo escrito em cima) em:

```
src/assets/generated_images/
```

**Troque esses 8 arquivos pelas imagens originais** (mesmo nome, mesma pasta) para o site voltar a ficar
visualmente idêntico ao que você tinha. O logo (`star-vidros-logo.png`) esse sim veio no zip e já está lá.
