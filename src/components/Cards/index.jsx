import React from 'react'

const Cards = ({image,text,title}) => {
    return (
        <div>
            <div className='container'>

                <div className='card'>
                    <div className='image'>
                        <img src={image} alt="" />
                    </div>
                    <div className='text'>
                        <p>{text}</p>
                        <h3>{title}</h3>
                    </div>
                </div>

               
            </div>
        </div>
    )
}

export default Cards
