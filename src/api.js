// export const getNewReleases = async () => {
//   try {
//     const response = await fetch('http://localhost:8080/spotify/api/albumsReleases');
//     const data = await response.json();
//     console.log(data); // Log do retorno da API para ver a estrutura
//     return data.albums.items; // Adaptado conforme sua resposta da API
//   } catch (error) {
//     console.error('Erro ao obter novos lançamentos:', error);
//     throw error;
//   }
// };
