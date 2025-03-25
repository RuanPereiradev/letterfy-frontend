# LetterFy - Plataforma de Avaliação de Músicas e Álbuns

### LetterFy é uma aplicação web desenvolvida com React e Vite para avaliação de músicas e álbuns, permitindo aos usuários compartilhar opiniões e notas sobre seus artistas favoritos.
</br>

<<<<<<< HEAD
![Screenshot from 2025-03-21 15-18-14](https://github.com/user-attachments/assets/1139d407-1733-4020-9f0f-271b2c5b2023)
![Screenshot from 2025-03-21 15-18-32](https://github.com/user-attachments/assets/9955587d-6f3d-4155-8738-a279d2405343)
![Screenshot from 2025-03-21 15-40-50](https://github.com/user-attachments/assets/2e906eb7-8b4a-42fe-9493-a65e0b27807b)
![Screenshot from 2025-03-21 15-41-16](https://github.com/user-attachments/assets/6ece0a89-65d6-43ae-b3ea-cdd1085b2f03)


## Features
- **Integração com Back-end**: Ao iniciar a aplicação fazemos uma requisição pro receber os ultimos albuns do spotify
</br>

![Screenshot from 2025-03-21 15-19-17](https://github.com/user-attachments/assets/fa1403fe-54a9-48bc-a933-56cf2bc4d254)

- **Cadastro e login no banco de dados**: Fazemos o cadastro e login, utilizando o spring security no backend, recuperamos o token jwt e quardamos no localstorage
</br>

![Screenshot from 2025-03-21 15-19-40](https://github.com/user-attachments/assets/567cbf8e-bd09-4982-a223-ef7aa6f23e63)

- **O Reviews para albúns** : O usuário pode fazer reviews para os albuns disponíveis
![Screenshot from 2025-03-21 15-41-16](https://github.com/user-attachments/assets/6ece0a89-65d6-43ae-b3ea-cdd1085b2f03)

## Requisitos (Apenas front-end)
=======

## Requisitos
>>>>>>> atualizações de busca e filtro
Antes de iniciar, certifique-se de que possui os seguintes requisitos instalados:
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- [Git](https://git-scm.com/) (opcional, para clonar o repositório)

## Requisitos(Aplicação completa)
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- [Git](https://git-scm.com/) (opcional, para clonar o repositório)
- Java 17 or later
- Maven
- Spotify Developer Account (for Client ID and Client Secret)
- PostgreSQL or MySQL for user authentication storage
- Docker instaled

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



