import React from 'react'

function Coin(name,image,symbol,price,volume) {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='crypto'/>
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-data'>${price}</p>
                    <p className='coin-volume'>${volume.toLocalstring()}</p>

                </div>
            </div>
        </div>
    )
}

export default Coin
