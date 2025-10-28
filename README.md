# 🧠 QR Code Generator – Gerador de QR Codes Dinâmicos

Um **gerador de QR Code inteligente e personalizável**, desenvolvido com **Next.js + TypeScript**, que permite ao usuário criar QR Codes em tempo real, alterar suas cores e baixar o resultado como imagem **PNG**.

---

## 🚀 Funcionalidades

* 🔗 **Geração automática** de QR Code ao digitar um link no campo de entrada.
* 🎨 **Customização de cores**, permitindo escolher a cor principal e a cor de fundo do QR Code.
* 🖼️ **Download instantâneo** do QR Code gerado em formato **PNG**.
* ⚡ Interface simples, moderna e totalmente responsiva.

---

## 🧩 Tecnologias Utilizadas

* **Next.js** – Framework React para aplicações web modernas.
* **TypeScript** – Tipagem estática para maior confiabilidade do código.
* **React Hooks** – Para controle de estado e lógica reutilizável (`useLogoUpload`, `qrCodeDownload`).
* **CSS Modules / Tailwind (se aplicável)** – Estilização elegante e modular.
* **qrcode.react** – Biblioteca para geração dos QR Codes.

---

## 💡 Como Funciona

1. O usuário insere um link no campo de entrada.
2. O QR Code é **gerado automaticamente** em tempo real.
3. O usuário pode **alterar a cor principal e a cor de fundo** do QR Code.
4. Após personalizar, basta clicar em **“Baixar QR Code”** para salvar a imagem no dispositivo.

---

## 🧱 Estrutura do Projeto

```
QR_CODE_GENERATOR/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── styles.css
│   └── hooks/
│       ├── qrCodeDownload.ts
│       └── useLogoUpload.ts
├── public/
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Como Executar Localmente

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/qr_code_generator.git
   ```

2. **Acesse a pasta do projeto**

   ```bash
   cd qr_code_generator
   ```

3. **Instale as dependências**

   ```bash
   npm install
   ```

4. **Execute o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

5. Acesse o app no navegador:
   👉 `http://localhost:3000`

---

## 🌐 Deploy

O projeto pode ser publicado facilmente no **Vercel**, bastando conectar o repositório GitHub e fazer o deploy automático.

---

## 🧑‍💻 Autor

Desenvolvido por **Paulo Henrique** 💻
Sinta-se à vontade para contribuir, sugerir melhorias ou deixar uma ⭐ no repositório!