#  LetterFy - Plataforma de Avaliação de Músicas e Álbuns

LetterFy é uma aplicação web desenvolvida com React e Vite para avaliação de músicas e álbuns. Os usuários podem compartilhar opiniões e notas sobre seus artistas favoritos.

---

## 💻 Demonstrações da Aplicação

### 🔸 Tela Inicial e Interface

<p align="center">
  <img src="https://github.com/user-attachments/assets/acd5646d-c4b7-46cd-ba5a-931c3ceccbc7" width="500" style="border-radius: 8px; margin: 10px;">
  <img src="https://github.com/user-attachments/assets/543dbbc1-ed75-481a-83ab-85ae41038246" width="500" style="border-radius: 8px; margin: 10px;">
  <img src="https://github.com/user-attachments/assets/e500de33-2697-42ac-a9f0-aed67f6c6c0d" width="500" style="border-radius: 8px; margin: 10px;">

</p>


### 🔸 Carrossel de Álbuns do Spotify

<p align="center">
  <img src="https://github.com/user-attachments/assets/acd5646d-c4b7-46cd-ba5a-931c3ceccbc7" width="500" style="border-radius: 8px; margin: 10px;">
</p>

### 🔸 Tela de Cadastro e Login

<p align="center">
  <img src="https://github.com/user-attachments/assets/63d8d08c-d612-40dc-849b-ad53e1b78cc2" width="500" style="border-radius: 8px; margin: 10px;">
  <img src="https://github.com/user-attachments/assets/b9a152cb-0cdb-4e3d-b3a6-8f8e6fe57d4c" width="500" style="border-radius: 8px; margin: 10px;">
</p>

A autenticação foi implementada usando **Spring Security** no backend.  
Ao fazer login, a aplicação retorna um **token JWT**, que é armazenado no **localStorage** do navegador.  
Esse token é utilizado para autenticar todas as requisições feitas pelo usuário.  
Você pode entender melhor como isso funciona acessando o repositório do [backend da aplicação](https://github.com/RuanPereiradev/letterfy).

### 🔸 Reviews de Álbuns

<p align="center">
  <img src="https://github.com/user-attachments/assets/4afb9761-fa27-4320-b89e-ec668deefbf1" width="500" style="border-radius: 8px; margin: 10px;">
  <img src="https://github.com/user-attachments/assets/b9f7bb69-0a31-4575-9390-c7bbe4b4a874" width="500" style="border-radius: 8px; margin: 10px;">
</p>

O usuário pode visualizar **suas próprias reviews**, **comentários de outros usuários** e **avaliar os álbuns disponíveis** na plataforma.

A criação de uma review **só é permitida se o usuário estiver autenticado**, pois é necessário recuperar o **token JWT armazenado no localStorage**.

Esse token é enviado nas requisições ao backend para garantir que apenas usuários autenticados possam fazer reviews e interagir com o conteúdo.

Todo esse sistema de autenticação é gerenciado pelo backend com **Spring Security**.

---

##  Funcionalidades

-  Integração com Spotify para exibição de álbuns populares.
-  Sistema de avaliação (reviews) de álbuns.
-  Autenticação com Spring Security e JWT.
-  Carrossel animado de álbuns.
-  Cadastro e login com persistência de token.

---

## 🧩 Requisitos

### Frontend
- Node.js 18+
- npm
- Git

### Projeto completo
- Node.js 18+
- Java 17+
- Maven
- Conta no Spotify Developer
- PostgreSQL ou MySQL
- Docker (opcional)

---

## ⚙️ Instalação e Execução

```bash
# 1. Clone o repositório
git clone https://github.com/RuanPereiradev/letterfy-front.git

# 2. Acesse o diretório do projeto
cd letterfy-front

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev


## Instalação e Configuração do Ambiente
Siga os passos abaixo para configurar e rodar a aplicação localmente:

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/RuanPereiradev/letterfy-front.git
   ```
   
2. **Acesse o diretório do projeto:**
   ```sh
   cd letterfy
   ```

3. **Instale as dependências:**
   ```sh
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```
   Aplicação estará acessível em `http://localhost:5173/` (ou outra porta especificada pelo Vite).

## Scripts Disponíveis
No projeto, você pode executar os seguintes comandos:

- `npm run dev` - Inicia o servidor de desenvolvimento com Vite.
- `npm run build` - Gera os arquivos otimizados para produção.
- `npm run preview` - Visualiza o build localmente.
- `npm run lint` - Executa o ESLint para verificação de padrões de código.

## Tecnologias Utilizadas
- **React** - Biblioteca para construção da interface do usuário.
- **Vite** - Ferramenta para desenvolvimento frontend rápido.
- **React Router** - Gerenciamento de rotas no frontend.
- **Tailwind CSS** - Framework para estilização rápida.
- **ESLint** - Ferramenta para padronização de código.

## Contribuição
Contribuições são bem-vindas! Siga os passos abaixo:
1. Faça um fork do repositório.
2. Crie um branch para sua feature (`git checkout -b minha-feature`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Envie para o repositório remoto (`git push origin minha-feature`).
5. Abra um Pull Request.



