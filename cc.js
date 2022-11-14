const coffeeShop = {
    branch: 'here',
    drinks: {
        coffee: {
            price: 4,
            stock: 100,
        },
        vodka: {
            price: 1,
            stock: 4000
        }
    },
    food: {
        bagel: {
            price: 5,
            stock: 50,
        },
        crisps: {
            price: 0.79,
            stock: 400,
        }
    },
    stockCheck () {
        for(let drinksAv in coffeeShop.drinks){
            console.log(`${drinksAv} is ${coffeeShop.food.crisps.price}`);
        }
        
    },
    orderFood (itemF) {
        switch(itemF) {
            case ('bagel'):
                coffeeShop.food.bagel.stock --;
                console.log(`Your ${itemF} will cost £${coffeeShop.food.bagel.price}`);
                console.log(`There is ${coffeeShop.food.bagel.stock} in stock`);
                break
            case('crisps'):
                coffeeShop.food.crisps.stock --;
                console.log(`Your ${itemF} will cost £${coffeeShop.food.crisps.price}`);
                console.log(`There is ${coffeeShop.food.crisps.stock} in stock`);
                break
            default:
                console.log("we don't make that here");
            }
    },
    orderDrink (itemD) {
        switch(itemD) {
            case ('coffee'):
                coffeeShop.drinks.coffee.stock --;
                console.log(`Your ${itemD} will cost £${coffeeShop.drinks.coffee.price}`);
                console.log(`There is ${coffeeShop.drinks.coffee.stock} in stock`);
                break
            case('vodka'):
                coffeeShop.drinks.vodka.stock --;
                console.log(`Your ${itemD} will cost £${coffeeShop.drinks.vodka.price}`);
                console.log(`There is ${coffeeShop.drinks.vodka.stock} in stock`);
                break
            default:
                console.log("it's only coffee or vodka mate");
            }
    },

    order (itemF, itemD) {
        this.orderFood(itemF);
        this.orderDrink(itemD);
    }
}

coffeeShop.order('beans','tea');
