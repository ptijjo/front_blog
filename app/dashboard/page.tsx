"use client"
import CreateArticle from '@/components/createArticle/CreateArticle';
import { selectArticle } from '@/lib/features/articles/articleSlice';
import { Selector } from '@/lib/hooks';
import Article from '@/lib/interface/articles.interface';
import React, { useEffect } from 'react';

const Dashboard = () => {

  const articleData = Selector(selectArticle);


  if (articleData.length === 0) {
    return (
      <main className='flex flex-col flex-grow w-full justify-center items-center'>
        <CreateArticle />
        <p>Aucun article disponible</p>
      </main>
    )
  }




  return (
    <main className='flex flex-grow w-full justify-center'>
      <CreateArticle />
      {articleData.map((article: Article) => (
        <div key={article.id}>

        </div>
      ))}
    </main>
  )
}

export default Dashboard
