

const menu = ['Chhole Bhature', 'Butter Chicken', 'Rajma Chawal',
    'Chicken Biryani', 'Dal Makhni', 'Kadhai Paneer', 'Garlic Bread',
    'onion rings', 'Amritsari Naan', 'Paav Bhaaji', 'Ras Malai',
    'Onion Pizza', 'Egg Curry', 'Egg Omlet', 'Garlic Naan', 'Garlic Rice',
    'kadhai paneer', 'Shahi Paneer', 'Chai', 'Momos', 'Chicken Korma',
    'Dosa', 'Uttapam', 'Sambhar', 'Vada Paav'];
    



function isVeg(food) {
    if (food.toLowerCase().indexOf('chicken') !== -1 || food.toLowerCase().indexOf('egg') !== -1) {
        return false;
    }
    return true;
}

function isOnionGarlicFree(food) {
    if (food.toLowerCase().indexOf('onion') !== -1 || food.toLowerCase().indexOf('garlic') !== -1) {
        return false;
    }
    return true;
}


const vegMenu = menu.filter(isVeg);
const jainMenu = menu.filter(isVeg).filter(isOnionGarlicFree);
console.log(menu);
console.log(vegMenu);
console.log(jainMenu);