import bestseller from '../../Assets/Currated/bestsellers.jpg'
import men from '../../Assets/Currated/men.webp'
import mentwo from '../../Assets/Currated/women2.webp'
import both from '../../Assets/Currated/both2.webp'
const CurratedPicksItems = [
    {
        id: 1,
        name: "Best Seller",
        image: bestseller,
        path: "bestsellers"
    },
    {
        id: 2,
        name: "Shop Men",
        image: men,
        path: "shopmen"
    },
    {
        id: 3,
        name: "Shop Women",
        image: mentwo,
        path: "shopwomen"

    },
    {
        id: 4,
        name: "Shop Casual",
        image: both,
        path: "shopcasual"

    },
]

export default CurratedPicksItems;