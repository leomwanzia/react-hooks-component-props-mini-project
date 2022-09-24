
import React from 'react'

const Article = (props) => {
    const{title, preview, minutes, date= "January 1, 1970"} = props
  return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </article>
  )
}

export default Article;