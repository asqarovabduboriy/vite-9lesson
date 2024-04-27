import React from 'react'
import './Admin.css'
import img from '../../../assets/Img/toppng.com-apple-iphone-15-pro-max-blue-titanium-edition-hd-png-1600x1600.png'
import { main_data } from '../../Static/static'

const Admin = () => {
 

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

<div className='header_red'>
        <div className='container'>
          <div className='header_red_ptext'>
            <p>About us</p>
            <p>Home - About us</p>
          </div>
        </div>
      </div>


      <div className='container'>
      <h1 className='admin_text_content_h1'>Admin panel</h1>
        <div className="admin_text_content">
          <div className="big_text_content_admin">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
              necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
              rerum quod. Tempora magni autem a voluptatibus neque.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
              necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
              rerum quod. Tempora magni autem a voluptatibus neque.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
              necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
              rerum quod. Tempora magni autem a voluptatibus neque.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
              necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
              rerum quod. Tempora magni autem a voluptatibus neque.</p>
          </div>

          <div className='imgs_admin_wrapper'>
            <img src={img} alt="" />
          </div>
        </div>


        <div className='main_card_flex'>
                   {main_cards}
                </div>
      </div>
    </>
  )
}

export default Admin