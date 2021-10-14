const express = require('express')
const app = express()
const portIndex = process.argv.indexOf("--port");
const port = portIndex > -1 ? parseInt(process.argv[portIndex + 1]) : 3000

const minItems = 5;
const maxItems = 10;
const upperCasedNames = false;

function randomWithSeed(seed) {
    return Math.abs(Math.floor(Math.sin(seed) * 10000000000000000));
}

app.get('/api/v1/fridge/:userId', (req, res) => {
    const {userId} = req.params;
    let seed = 0;

    for (let i = 0; i < userId.length; i++) {
        seed += userId.charCodeAt(i);
    }

    let random = randomWithSeed(seed);
    const fridgeItems = getFridgeItems(seed);
    if (upperCasedNames) {
        fridgeItems.forEach(item => item.name = item.name.toUpperCase())
    }

    const resultItems = [];
    let numberOfItems = minItems + random % (maxItems - minItems);
    if (numberOfItems > fridgeItems.length) {
        numberOfItems = fridgeItems.length;
    }

    for (let i = 0; i < numberOfItems; i++) {
        resultItems.push(fridgeItems[seed % fridgeItems.length]);
        fridgeItems.splice(seed % fridgeItems.length, 1);
        random = randomWithSeed(seed);
    }

    res.send(resultItems);
})

app.get('/isAlive', (req, res) => {
    res.send();
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})

function getFridgeItems(seed) {
    function getValueFromRange(a, b) {
        const value = a + seed % (b - a);
        seed = randomWithSeed(seed);
        return value;
    }

    return [
        {name: "Milk fat-free", category: "Milk", amount: getValueFromRange(100, 2000), unit: "ml"},
        {name: "Milk low-fat", category: "Milk", amount: getValueFromRange(100, 2000), unit: "ml"},
        {name: "Mozzarella", category: "Cheese", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Parmesan", category: "Cheese", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Cheddar", category: "Cheese", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Gouda", category: "Cheese", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Swiss cheese", category: "Cheese", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Brie", category: "Cheese", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Camembert", category: "Cheese", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Feta", category: "Cheese", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Monterey Jack", category: "Cheese", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Provolone", category: "Cheese", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Edam", category: "Cheese", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Blue cheese", category: "Cheese", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Gorgonzola", category: "Cheese", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Roquefort", category: "Cheese", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Ricotta", category: "Cheese", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Cottage cheese", category: "Cheese", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Mascarpone", category: "Cheese", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Halloumi", category: "Cheese", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Yoghurt fat-free", category: "Yoghurt", amount: getValueFromRange(100, 600), unit: "g"},
        {name: "Yoghurt low-fat", category: "Yoghurt", amount: getValueFromRange(100, 600), unit: "g"},
        {name: "Eggs", category: "Eggs", amount: getValueFromRange(1, 15), unit: ""},
        {name: "Bananas", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Apples", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Strawberries", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Grapes", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Oranges", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Watermelon", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Blueberries", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Lemons", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Peaches", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Avocados", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Pineapple", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Cherries", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Cantaloupe", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Pears", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Limes", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Raspberries", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Blackberries", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Clementine", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Plums", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Nectarines", category: "Fruits", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Potatoes", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Tomatoes", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Onions", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Carrots", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Lettuce", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Bell Peppers", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Broccoli", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Cucumbers", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Celery", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Mushrooms", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Corn", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Garlic", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Spinach", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Green Beans", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Sweet Potatoes", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Green Onions", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Cauliflower", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Cabbage", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Asparagus", category: "Vegetables", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Butter", category: "Butter", amount: getValueFromRange(100, 500), unit: "g"},
        {name: "Margarine", category: "Butter", amount: getValueFromRange(100, 500), unit: "g"},
        {name: "Juice", category: "Drink", amount: getValueFromRange(100, 2000), unit: "ml"},
        {name: "Ham", category: "Meat", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Sausage", category: "Meat", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Frankfurter", category: "Meat", amount: getValueFromRange(100, 2000), unit: "g"},
        {name: "Ketchup", category: "Sauce", amount: getValueFromRange(100, 2000), unit: "g"}
    ]
}