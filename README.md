# LockSafe — landing page

Versão atualizada para apresentação do projeto finalista do INOVA SENAI 2026.

## Publicação em hospedagem própria

A página é estática: envie todo o conteúdo de `dist/` para a pasta pública da hospedagem. O arquivo `index.html` precisa ficar na raiz pública, ao lado de `styles.css`, `script.js` e da pasta `assets/`. Não exige banco de dados, servidor de aplicação ou instalação de dependências. Ative HTTPS e aponte o domínio conforme as instruções do provedor escolhido.

A prévia do Sites é privada. Para visitantes do evento, use a hospedagem pública de sua escolha ou altere explicitamente a audiência da prévia posteriormente.

## Contatos

Os valores estão intencionalmente vazios no início de `dist/script.js`, em `CONTACT`. Preencha `email`, `whatsapp` (com código do país e DDD) e `linkedin` (URL completa HTTPS). Os links são ativados quando houver valores. Esta versão não coleta dados nem envia formulários.

## Conteúdo e identidade

- Conteúdo principal: apresentação LockSafe_PitchDay_INOVA2026_v4.pptx fornecida pela equipe.
- Foto: imagem da equipe enviada pelo usuário, otimizada em WebP.
- Quatro vídeos reais: arquivos enviados em 16/10/2026 (10.52.36, 10.52.38, 10.52.43 e 10.52.45), preservados sem recompressão.
- Personalização: vídeo extraído do slide 5 da apresentação, em seção própria.
- Fotografia da placa: extraída da apresentação; imagem do Raspberry Pi 5 fornecida pelo usuário.
- Logo original: preservada em `dist/assets/logo-original.png`. O cabeçalho utiliza uma assinatura tipográfica e símbolo vetorial simplificado para legibilidade na web.
- Regulamentos e material de alinhamento foram referências de contexto. Não foram disponibilizados para download na página.
- Preços, estatísticas de acidentes, projeções financeiras e dados pessoais não foram publicados nesta primeira versão.
- Os próximos passos aparecem como planejamento, e o estágio atual é apresentado como protótipo em bancada.
- Fontes: DM Sans e Barlow Condensed, carregadas do Google Fonts, com fontes locais alternativas.

## Ajustes para a versão de divulgação

Completar os canais oficiais de contato e, se desejado, os nomes e funções dos integrantes. Confirmar cronograma, proposta comercial e história detalhada com a equipe. Após escolher o domínio, configurar o endereço canônico e a imagem de compartilhamento social.

## Verificações

Sintaxe JavaScript; links internos; carregamento de imagens e vídeo; troca das demonstrações; menu móvel; perguntas expansíveis; contatos em branco; ausência de rolagem horizontal em 1440 px e 390 px.

## Tecnologias e marcas

Faixa animada com pausa, navegação por teclado e respeito a movimento reduzido. Identifica tecnologias do projeto, sem afirmar patrocínio.

- Agno: https://agno-public.s3.us-east-1.amazonaws.com/assets/logo-light.svg
- OpenCV: https://opencv.org/media-kit/
- YOLO: logotipo Ultralytics, https://github.com/ultralytics/assets
- OpenAI, Python, Linux, Raspberry Pi e Windows: ícones do acervo Simple Icons (versões 13.21.0 e 11.15.0), https://github.com/simple-icons/simple-icons
- pySerial, python-dotenv e Picamera2: símbolos genéricos acompanhados dos nomes, sem apresentá-los como logos oficiais.
- os, time e threading são identificados como módulos nativos Python.

YOLO e compatibilidade Windows/Linux foram incluídos conforme informação da equipe. O trecho de código fornecido utiliza OpenAI, Agno, OpenCV, pySerial e python-dotenv; Picamera2 é opcional para Raspberry Pi. O código-fonte da aplicação de controle não é publicado com a landing page.
