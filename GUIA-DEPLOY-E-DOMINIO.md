# LockSafe: como publicar e usar um domínio próprio

Guia preparado em 19/10/2026 para o repositório ProfPlatini/landing-page-inova.

## 1. O que você já tem

- Site público: https://profplatini.github.io/landing-page-inova/
- Repositório: https://github.com/ProfPlatini/landing-page-inova
- Hospedagem: GitHub Pages. Armazena e entrega os arquivos aos visitantes.
- Deploy: é o envio de uma versão do site para a hospedagem. Já está automatizado neste projeto.
- Domínio: é um endereço que você registra e renova, como `seudominio.com.br`. Esse nome é apenas um exemplo; nenhuma disponibilidade foi consultada ou compra realizada.

Você pode manter o GitHub Pages e pagar apenas pelo registro do domínio. Comprar um domínio não inclui automaticamente uma hospedagem nem uma caixa de e-mail.

## 2. Como atualizar o site (deploy)

O workflow `.github/workflows/pages.yml` publica o conteúdo de `dist/`. Alterações em `dist/` enviadas à branch `main` disparam a publicação automaticamente.

Fluxo normal: editar → salvar → commit → push → aguardar a execução ficar verde em **Actions**.

Se estiver usando o Codex, você pode pedir: “Faça a alteração, commit e push, e confira o deploy”.

Para publicar manualmente sem novas alterações:

1. Abra https://github.com/ProfPlatini/landing-page-inova/actions
2. Escolha **Publicar LockSafe no GitHub Pages**.
3. Clique em **Run workflow**, selecione `main` e confirme.
4. Aguarde o resultado verde; então abra o site.

Em **Settings → Pages → Build and deployment → Source**, mantenha **GitHub Actions**. Não selecione publicação a partir da raiz da branch: os arquivos do site estão em `dist/`.

## 3. Comprar um domínio .com.br

1. Entre em https://registro.br/ e pesquise o nome desejado.
2. Se estiver disponível, crie sua conta e informe os dados solicitados. Escolha conscientemente quem será o titular do domínio do projeto.
3. Selecione o período e confira o valor antes de pagar. A página oficial informa R$ 40 por ano na consulta de 19/10/2026.
4. Após o pagamento e a ativação, o domínio aparecerá no painel.
5. Mantenha o cadastro atualizado e renove o registro antes do vencimento.

Para este site, você não precisa contratar junto um pacote de hospedagem, construtor de sites ou e-mail profissional. O endereço Gmail atual pode continuar no contato.

Fonte do preço e das condições: https://registro.br/dominio/

## 4. Conectar o domínio ao GitHub Pages

Use o domínio realmente adquirido no lugar de `seudominio.com.br` em todos os passos.

### Confirmar a propriedade

No GitHub, abra **configurações da sua conta → Pages → Add a domain**. Informe o domínio e copie exatamente o registro TXT apresentado. No painel DNS do domínio, crie esse TXT; depois volte ao GitHub e clique em **Verify**. Mantenha o registro TXT após a verificação. Esse procedimento é recomendado pelo GitHub.

Fonte: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages

### Informar o endereço no projeto

1. Abra https://github.com/ProfPlatini/landing-page-inova/settings/pages
2. Em **Custom domain**, informe `seudominio.com.br`, sem `https://` e sem caminhos.
3. Clique em **Save**.

### Apontar o domínio para a hospedagem

Se estiver usando o DNS do Registro.br, abra o domínio e procure a edição da zona DNS. Os nomes dos botões podem variar. Cadastre os registros abaixo:

| Tipo | Nome | Destino |
|---|---|---|
| A | raiz do domínio | 185.199.108.153 |
| A | raiz do domínio | 185.199.109.153 |
| A | raiz do domínio | 185.199.110.153 |
| A | raiz do domínio | 185.199.111.153 |
| CNAME | www | profplatini.github.io |

A raiz costuma ser representada por `@` ou pelo campo Nome vazio, conforme o painel. Não use `@` se o painel não aceitar essa notação. O destino de `www` é somente `profplatini.github.io`, sem `https://` e sem `/landing-page-inova/`.

Ajuste apenas os registros do site que conflitem com esses destinos; preserve o TXT de verificação e eventuais registros de outros serviços. Não cadastre um registro curinga (`*`).

Esta configuração usa os quatro endereços IPv4. Os endereços IPv6 são opcionais e estão na documentação oficial caso você queira configurá-los também.

### Ativar HTTPS e conferir

1. Aguarde a atualização do DNS; segundo o GitHub, pode levar até 24 horas.
2. Em **Settings → Pages**, aguarde a validação do domínio e habilite **Enforce HTTPS** quando estiver disponível. O certificado é fornecido pelo GitHub Pages.
3. Teste o domínio com e sem `www`, no computador e no celular. Confira imagens, os quatro vídeos sem áudio, o vídeo com digitação e o e-mail.
4. Continue usando o mesmo fluxo de commit e push. Não é preciso enviar os arquivos ao Registro.br.

O projeto usa GitHub Actions: não precisa criar um arquivo CNAME no código. O domínio é configurado em Settings → Pages.

Fontes oficiais:
- Domínio e DNS: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- HTTPS: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
