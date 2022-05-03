import React from 'react'

const Book = (props) => {
    const { img, title, author } = props;
    const clickHandler = () => {
        console.log("hello")
    }
    const complexExample = (author) => {
        console.log(author)
    }
    return (
        <article className="book" onMouseOver={()=>{
            console.log(title)
        }}>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>
                Example
            </button>
            <button type="button" onClick={() => complexExample(author)}>
                more complex button
            </button>
        </article>
    );
};

export default Book