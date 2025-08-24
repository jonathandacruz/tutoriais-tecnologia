# publicacao-automatica-instagram-n8n


# 📌 Manual: Configuração de Posts Automáticos no Instagram


Este manual descreve **passo a passo** como obter as credenciais necessárias para automatizar publicações no Instagram, utilizando **Replicate**, **Meta Graph API**, **RapidAPI** e **OpenAI**.

## 🎯 Baixe o Template Pronto e Veja o Vídeo no YouTube
💡 Quer pular toda a parte de configuração manual?  
Baixe meu **template pronto** e tenha tudo configurado em minutos.  

🎬 Assista também o vídeo passo a passo no YouTube.

🔗 [Comprar Template - R$ 37,00](https://hotm.art/HDtGfsg) 
🔗 [Assistir no YouTube](https://youtu.be/BRSAI3GOhWc)

---

## 1️⃣ Criar conta no Replicate e habilitar modelo
1. Acesse: [https://replicate.com](https://replicate.com)
2. Crie sua conta ou faça login.
3. Pesquise e cadastre-se no modelo **black-forest-labs/flux-schnell**  
   🔗 Link direto: [https://replicate.com/black-forest-labs/flux-schnell](https://replicate.com/black-forest-labs/flux-schnell)
4. Adicione um meio de pagamento (cartão internacional).
5. Carregue um crédito pequeno para teste.  
   💡 **Sugestão:** adicione apenas **US$ 2,00** para experimentar.
6. Copie sua **API Token** (nas configurações da conta).

---

## 2️⃣ Conectar Instagram à Página do Facebook e gerar token da Meta
1. Vá até o **Facebook** e crie (ou utilize) uma página comercial.
2. No Instagram, vá em **Configurações > Conta Profissional > Central de Contas** e vincule a página do Facebook.
3. Acesse o **Graph API Explorer**:  
   🔗 [https://developers.facebook.com/tools/explorer/](https://developers.facebook.com/tools/explorer/)
4. Gere um **Access Token temporário** para a página.
5. Com o token temporário em mãos, troque-o por um **token permanente**:  
   - Siga a documentação da Meta: [Gerar Token Permanente](https://developers.facebook.com/docs/facebook-login/access-tokens/refreshing)
  
   - curl --location 'https://graph.facebook.com/v22.0/oauth/access_token?grant_type=fb_exchange_token&client_id=XXXX&client_secret=XXXXXXXX&fb_exchange_token=EAAHTmdoZCmk4BPLcFexIoL7TUjhcyBuC6Y90Vg0fZCu16DMTZAdwsGZC0FS1amQAzHpwROuUWyk6IG1R6tZBhT6Q3Vkxs6Ftt8kdl0mNqN8MZBMJp0AF24lkHrJEZCBaYLkgQjkuX3Dluly25gwdnDaDxSOPT05n0l05hsPJG86rP8gm5J9XYrZCerJmOaNeKZCgeftDuZBbtWHM01ZCWt2HSImKo7YTi7pccp61ooT4UnYejFzMYZBLbyWdZCtw2dAZDZD'
6. Salve o **Page Access Token** — ele será usado para publicar no Instagram.

---

## 3️⃣ Obter API Token no RapidAPI
1. Acesse: [https://rapidapi.com](https://rapidapi.com)
2. Crie sua conta ou faça login.
3. Inscreva-se no endpoint **Instagram Scraper Stable API**:  
   🔗 [https://instagram-scraper-stable-api.p.rapidapi.com](https://instagram-scraper-stable-api.p.rapidapi.com)
4. Copie o **X-RapidAPI-Key** (token da API) na sua conta.

---

## 4️⃣ Criar conta na OpenAI e obter chave de API
1. Vá até: [https://platform.openai.com](https://platform.openai.com)
2. Crie sua conta ou faça login.
3. Acesse **API Keys**:  
   - Menu superior direito > **View API Keys**  
   - Clique em **Create new secret key**.
4. Copie e guarde sua chave — **não compartilhe publicamente**.

💡 *Essa chave é utilizada para gerar textos, descrições ou legendas automáticas para os posts.*

---

## 📦 Resumo das Credenciais Necessárias
| Serviço              | O que coletar?          | Onde usar? |
|----------------------|------------------------|------------|
| Replicate            | API Token              | Geração de imagens |
| Meta Graph API       | Page Access Token      | Publicar no Instagram |
| RapidAPI             | X-RapidAPI-Key         | Buscar informações e dados do Instagram |
| OpenAI               | API Key                | Gerar textos e legendas automáticas |

---

## ⚠️ Dicas Importantes
- Nunca exponha suas chaves de API publicamente.
- Teste sempre com valores pequenos antes de automatizar em larga escala.
- Tokens permanentes da Meta ainda expiram eventualmente — mantenha controle.
- Se um serviço parar de funcionar, verifique se o **limite de crédito** foi atingido.

---

## 🎯 Baixe o Template Pronto e Veja o Vídeo no YouTube
💡 Pronto para começar?  
Adquira o template e siga o passo a passo no vídeo.

🔗 [Comprar Template - R$ 37,00](https://hotm.art/HDtGfsg) 
🔗 [Assistir no YouTube](https://youtu.be/BRSAI3GOhWc)

---

✏️ **Autor:** Jonathan da Cruz  
📺 Acompanhe o vídeo completo no YouTube para ver a integração funcionando passo a passo.
