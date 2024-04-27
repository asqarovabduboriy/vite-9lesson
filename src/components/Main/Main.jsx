import React from 'react'
import "./Main.css"
import { main_data } from '../Static/static'

function Main() {
 
    let main_cards = main_data?.map((el) => (
        <div className = {el.className}   key={el.id}>
            <div>
                <p>{el.title}</p>
                <button>Shop now</button>
            </div>
            <div className='main_img_wrapper'>
                <img src={el.img} alt="" width={"150px"} height={"150px"} />
            </div>
        </div> 
    ))
    return (
        <>
            <div className='container'>
                <div className='main_card_flex'>
                   {main_cards}
                </div>

            </div>
        </>
    )
}

export default Main;
