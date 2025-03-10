// 📂 /src/components/DisplayHome.jsx
import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import { albumsData, songsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';
import AlbumList from './AlbumList';
import { data } from "react-router-dom";

const DisplayHome = () => {
    const [albums, setAlbums] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);

   useEffect(() => {
    fetch('http://localhost:8080/spotify/api/albumsReleases')
      .then((response) => response.json())
      .then((data) => {
        console.log("Dados da API:", data);
        
        // Ajuste: A API retorna um array direto de álbuns, então, só precisamos setar o estado com esse array.
        if (Array.isArray(data)) {
          setAlbums(data);  // Setando diretamente os álbuns
        } else {
          console.error("A estrutura da resposta não é um array.");
          setAlbums([]);  // Garantir que o estado sempre seja um array
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao obter novos lançamentos:", error);
        setAlbums([]);  // Caso de erro, garantir que albums seja um array
        setIsLoading(false);
      })
  }, [])
  
  return (
    <>
      <Navbar />
        <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center mt-4">Últimos Álbuns</h1>
      {IsLoading ? (
        <p className="text-white text-center">Carregando Albuns...</p>
      ) : (
      <AlbumList albums={albums} />
      )};
    </div>
    
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
          {songsData.map((item, index) => (
            <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
