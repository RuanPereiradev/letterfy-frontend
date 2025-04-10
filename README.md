# LetterFy - Plataforma de Avaliação de Músicas e Álbuns

### LetterFy é uma aplicação web desenvolvida com React e Vite para avaliação de músicas e álbuns, permitindo aos usuários compartilhar opiniões e notas sobre seus artistas favoritos.
</br>

![Screenshot from 2025-04-10 16-05-24](https://github.com/user-attachments/assets/2375340a-15ad-4fa0-a5f2-a8514e7686da)
![Screenshot from 2025-04-10 16-05-48](https://github.com/user-attachments/assets/b9f7bb69-0a31-4575-9390-c7bbe4b4a874)
![Screenshot from 2025-04-10 16-06-37](https://github.com/user-attachments/assets/3d8e2951-aef4-406b-9585-f1370f41a151)
![Screenshot from 2025-04-10 16-07-13](https://github.com/user-attachments/assets/63d8d08c-d612-40dc-849b-ad53e1b78cc2)
![Screenshot from 2025-04-10 16-07-19](https://github.com/user-attachments/assets/b9a152cb-0cdb-4e3d-b3a6-8f8e6fe57d4c)

# Features
- **Integração com Back-end**: Ao iniciar a aplicação fazemos uma requisição pro receber os ultimos albuns do spotify, que são apresentados e modo carrossel com animações
</br>

![Screenshot from 2025-04-10 16-13-18](https://github.com/user-attachments/assets/acd5646d-c4b7-46cd-ba5a-931c3ceccbc7)
</br>

- **Cadastro e login no banco de dados**: Fazemos o cadastro e login, utilizando o spring security no backend, recuperamos o token jwt e quardamos no localstorage
</br>

![Screenshot from 2025-03-21 15-19-40](https://github.com/user-attachments/assets/567cbf8e-bd09-4982-a223-ef7aa6f23e63)
</br>

- **O Reviews para albúns** : O usuário pode fazer reviews para os albuns disponíveis onde serão mostrados tanto sua como as reviews de outros usuários
  </br>

![Screenshot from 2025-04-10 16-19-29](https://github.com/user-attachments/assets/4afb9761-fa27-4320-b89e-ec668deefbf1)
</br>



## Requisitos
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



