import React from 'react';
import articleContent from './article-content'

const ArticlePage = ({ match }) => {

    const name = match.params.name;
    const article = articleContent.find(a => a.name === name);

    if(!article) return (<h1>Article does not exist!!</h1>)
    return (
        <>
            {/* <h1>This is the {name} Article.</h1> */}
            <h1>{article.title}</h1>
            {article.content.map( (par,key) =>
            (<p key={key}>{par}</p>)
            )}
        </>
    )
}

export default ArticlePage;