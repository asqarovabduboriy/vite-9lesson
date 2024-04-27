import iphoe from '../../assets/Img/toppng.com-hd-png-of-apple-iphone-15-pro-max-in-natural-titanium-1600x1600.png'
import iphone2 from '../../assets/Img/toppng.com-hd-apple-iphone-15-plus-pink-back-and-side-view-png-1600x1600.png'
import iphone3 from '../../assets/Img/toppng.com-apple-iphone-15-pro-max-blue-titanium-edition-hd-png-1600x1600.png'
import img1 from '../../assets/Img/icon-1.svg.png'
import img2 from '../../assets/Img/div.banner-icon (1).png'
import img3 from '../../assets/Img/div.banner-icon (2).png'
import img4 from '../../assets/Img/div.banner-icon (3).png'
import img5 from '../../assets/Img/div.banner-icon.png'

export const main_data = [
    {
        id: 1,
        title: 'Everyday Fresh &  Clean with Our Products',
        className: 'main_card bg_main_one',
        img: iphoe,
    },
    {
        id: 2,
        title: 'Make your Breakfast Healthy and Easy',
        className: 'main_card bg_main_two',
        img: iphone2,
    },
    {
        id: 3,
        title: 'The best Organic Products Online ',
        className: 'main_card bg_main_there',
        img: iphone3
    }
]


export const API_URL = 'https://dummyjson.com/products'

export const footer_Card = [
    {
        id: 1,
        title: 'Best prices & offers',
        discription: 'Orders $50 or more',
        img: img1,
    },
    {
        id: 2,
        title: 'Free delivery',
        discription: '24/7 amazing services',
        img: img2,
    },
    {
        id: 3,
        title: 'Great daily deal',
        discription: 'When you sign up',
        img: img3,
    },
    {
        id: 4,
        title: 'Wide assortment',
        discription: 'Mega Discounts',
        img: img4,
    },
    {
        id: 5,
        title: 'Easy returns',
        discription: 'Within 30 days',
        img: img5,
    }
]


export const footer_data = [

    {
        id: 1,
        title: "Company",
        items: ["About Us", "Delivery Information", "Privacy Policy", "Terms & Conditions", "contact Us", "Support Center"]
    },
    {
        id: 2,
        title: "Category",
        items: ["Dairy & Bakery", "Fruits & Vegetable", "Snack & Spice", "Juice & Drinks", "Chicken & Meat", "Fast Food"]
    }
]

