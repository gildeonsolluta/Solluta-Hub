# Guia de Deploy - Solluta Hub no HostGator

Este guia explica como fazer o deploy do Solluta Hub e suas landing pages no HostGator, usando o domínio `sollutasolucoes.com.br` com rotas locais.

## Estrutura Final

Após o deploy, a estrutura será:
- **Site Principal**: `sollutasolucoes.com.br`
- **Limpa Nome**: `sollutasolucoes.com.br/limpa-nome`
- **Superendividamento**: `sollutasolucoes.com.br/superendividamento`
- **Previdenciário**: `sollutasolucoes.com.br/previdenciario`
- **Revisão de Veículos**: `sollutasolucoes.com.br/revisao-veiculos`
- **Calculadora**: `sollutasolucoes.com.br/calculadora-superendividamento`

## Pré-requisitos

1. Conta no HostGator com acesso ao painel de controle (cPanel)
2. Domínio `sollutasolucoes.com.br` configurado e apontando para o HostGator
3. Node.js instalado localmente (para fazer o build)
4. Acesso via FTP ou File Manager do cPanel

## Passo 1: Preparar o Build Local

### 1.1 Instalar Dependências

```bash
npm install
```

### 1.2 Fazer o Build do Projeto

```bash
npm run build
```

Isso criará uma pasta `dist` com todos os arquivos estáticos prontos para deploy.

## Passo 2: Configurar o Vite para Produção

O arquivo `vite.config.ts` já está configurado, mas verifique se o `base` está correto:

```typescript
export default defineConfig({
  base: '/', // Para raiz do domínio
  // ... resto da configuração
});
```

## Passo 3: Acessar o cPanel do HostGator

1. Acesse o cPanel do HostGator
2. Faça login com suas credenciais
3. Localize a seção **"Arquivos"** e clique em **"Gerenciador de Arquivos"**

## Passo 4: Limpar o Diretório Público

1. No Gerenciador de Arquivos, navegue até a pasta `public_html` (ou `www` dependendo da configuração)
2. **IMPORTANTE**: Faça backup dos arquivos existentes antes de deletar
3. Delete todos os arquivos dentro de `public_html` (exceto arquivos importantes como `.htaccess` se existir)

## Passo 5: Fazer Upload dos Arquivos

### Opção A: Via File Manager (cPanel)

1. No Gerenciador de Arquivos, entre na pasta `public_html`
2. Clique em **"Upload"** no topo
3. Selecione todos os arquivos da pasta `dist` do seu projeto
4. Aguarde o upload completar

### Opção B: Via FTP

1. Use um cliente FTP (FileZilla, WinSCP, etc.)
2. Conecte-se ao servidor usando as credenciais FTP fornecidas pelo HostGator
3. Navegue até `public_html`
4. Faça upload de todos os arquivos da pasta `dist`

## Passo 6: Criar Arquivo .htaccess para React Router

Como estamos usando React Router, precisamos configurar o servidor para redirecionar todas as rotas para `index.html`. Crie um arquivo `.htaccess` na raiz do `public_html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Compressão GZIP para melhor performance
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache de arquivos estáticos
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
</IfModule>
```

### Como criar o .htaccess no cPanel:

1. No Gerenciador de Arquivos, dentro de `public_html`
2. Clique em **"+ Arquivo"** no topo
3. Nomeie o arquivo como `.htaccess` (com o ponto no início)
4. Cole o conteúdo acima
5. Salve o arquivo

## Passo 7: Verificar Permissões de Arquivos

1. No Gerenciador de Arquivos, selecione todos os arquivos
2. Clique com botão direito e escolha **"Alterar Permissões"**
3. Configure:
   - **Arquivos**: `644`
   - **Pastas**: `755`
   - Marque **"Recursivo"** se disponível

## Passo 8: Configurar SSL/HTTPS

1. No cPanel, procure por **"SSL/TLS"** ou **"Let's Encrypt"**
2. Ative o certificado SSL gratuito para seu domínio
3. Force redirecionamento HTTPS (geralmente há uma opção para isso)

## Passo 9: Testar o Site

1. Acesse `https://sollutasolucoes.com.br` no navegador
2. Teste todas as rotas:
   - `/limpa-nome`
   - `/superendividamento`
   - `/previdenciario`
   - `/revisao-veiculos`
   - `/calculadora-superendividamento`
3. Verifique se não há erros 404

## Passo 10: Otimizações Adicionais

### 10.1 Habilitar Compressão

O arquivo `.htaccess` já inclui compressão GZIP, mas você pode verificar no cPanel se o módulo `mod_deflate` está ativo.

### 10.2 Configurar Cache do Navegador

O `.htaccess` já inclui configurações de cache. Verifique se está funcionando usando as ferramentas de desenvolvedor do navegador.

### 10.3 Minificar Assets (Opcional)

O Vite já minifica automaticamente no build de produção, mas você pode verificar se os arquivos estão minificados na pasta `dist`.

## Troubleshooting

### Problema: Página em branco

**Solução**: 
- Verifique se o arquivo `index.html` está na raiz de `public_html`
- Verifique se o `.htaccess` está configurado corretamente
- Verifique as permissões dos arquivos (644 para arquivos, 755 para pastas)

### Problema: Erro 404 em rotas

**Solução**:
- Verifique se o `.htaccess` está presente e configurado corretamente
- Certifique-se de que o módulo `mod_rewrite` está habilitado no servidor
- Verifique se o arquivo `index.html` está na raiz

### Problema: Assets não carregam (CSS/JS)

**Solução**:
- Verifique se todos os arquivos da pasta `dist` foram enviados
- Verifique as permissões dos arquivos
- Limpe o cache do navegador (Ctrl+Shift+R ou Cmd+Shift+R)

### Problema: Site muito lento

**Solução**:
- Ative a compressão GZIP (já configurado no `.htaccess`)
- Verifique se o cache está funcionando
- Considere usar um CDN (opcional)

## Atualizações Futuras

Para atualizar o site:

1. Faça as alterações no código localmente
2. Execute `npm run build` novamente
3. Faça upload apenas dos arquivos alterados (ou todos para garantir)
4. Limpe o cache do navegador e teste

## Estrutura de Arquivos no Servidor

```
public_html/
├── .htaccess
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
└── [outros arquivos estáticos]
```

## Suporte

Se encontrar problemas:
1. Verifique os logs de erro do cPanel
2. Entre em contato com o suporte do HostGator
3. Consulte a documentação do HostGator sobre React/SPA

## Notas Importantes

- **Backup**: Sempre faça backup antes de fazer alterações
- **HTTPS**: Certifique-se de que o SSL está ativo
- **Performance**: O HostGator pode ter limitações de performance para SPAs grandes
- **Domínio**: Certifique-se de que o domínio está apontando corretamente para o HostGator

