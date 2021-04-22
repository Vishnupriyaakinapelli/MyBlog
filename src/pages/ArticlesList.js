import React from 'react';
import articleContent from './article-content';
import {Link}from 'react-router-dom'

const ArticlesList =() =>
(
    <>
        <h1>Articles</h1>
        {articleContent.map( (art,key) => (
        <Link key={key} to={`/article/${art.name}`}>
            <h3 >{art.title}</h3>
        </Link>
        )
        )}
    </>
    
)

export default ArticlesList;