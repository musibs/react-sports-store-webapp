var faker = require("faker");
var data = [];
var categories = ["Chess", "Running", "Watersports", "Soccer"];
faker.seed(100);
for(let i=0; i<503; i++){
    var category = faker.helpers.randomize(categories);
    data.push({
        id: 1,
        name: faker.commerce.productName(),
        category: category,
        description: `${category} : ${faker.lorem.sentence(3)}`,
        price: Number(faker.commerce.price())
    })
}

module.exports = function() {
    return {
        categories : categories,
        products : data,
        orders: []
    }
}