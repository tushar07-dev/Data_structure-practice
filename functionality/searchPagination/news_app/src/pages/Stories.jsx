import React, { useEffect } from 'react'

import { useGlobalContext } from '../Context/Contextapi';

const Stories = () => {
const {hits , nbPage , isLoading} = useGlobalContext();

    if(isLoading){
        return <h1>Loading...</h1>
    }
    
  return (
    <>
    <div className='stories' style={{border: '1px solid red', textAlign:"center"}}>
        <h2>My exh News POST</h2>
        {hits.map((el) => {
            const {title , author, objectID , url , num_comments} = el;
            return (
            <div className="card"  key={objectID}>
            <h2>{title}</h2>
                <p>By <span>{author}</span> | <span>{num_comments}</span> comments</p>
                <div>
                    <a href={url} target="_blank" rel="noreferrer">Read More</a>
                    {/* <a href={objectID} onClick={() => {removePost(objectID)} }>Remve</a> */}
                </div>
            </div>   )
                
            
        })}
        </div>
    </>
  )
}

export default Stories