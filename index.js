// declaration of variables
let storeName = "Pogi Tech Store", 
	storeLocation = "Metro Manila",
	storeCapacity = 500;

// creating array of objects
let products = [
    {
        name: "Laptop",
        price: 34999,
        quantity: 20
    },
   	{
        name: "Smartphone",
        price: 19999,
        quantity: 50
    },
    {
        name: "Tablet",
        price: 14999,
        quantity: 30
    },
    {
        name: "Powerbank",
        price: 7999,
        quantity: 40
    },
    {
        name: "Headphones",
        price: 2999,
        quantity: 100
    }
];

// creating totalInventoryValue variable
let totalInventoryValue = 0;
let totalNumProducts = 0;
// for loop to calculate the total inventory value
for (let i =0; i < products.length; i++){
	totalNumProducts += products[i].quantity;
	totalInventoryValue = products[i].price * products[i].quantity
}

// for loop to add 10 laptop
for (let i =0; i < products.length; i++){
	if(products[i].name == "Laptop"){
		products[i].quantity += 10;
		break;
	}
}

// getting the most expensive product
let mostExpensive = null;
for (let i =0; i < products.length; i++){
	// setting the most expensive product to first product
	if(i == 0){
		mostExpensive = i;
	}
	
	// comparing stored product price to current product price
	// if stored price is less than current price
	// set current product as most expensive
	if (mostExpensive < products[i].price){
		mostExpensive = i;
	}
}

// displaying
console.log(`Store Name: ${storeName}`)
console.log(`Store Location: ${storeLocation}`)
console.log(`Store Capacity: ${storeCapacity}`)
console.log(`Total Number of Products: ${totalNumProducts}`)
console.log(`Total Inventory Value: ${totalInventoryValue}`)
for (let i =0; i < products.length; i++){
	if(products[i].name == "Laptop"){
		console.log(products[i].quantity);
		break;
	}
}
console.log(`Most Expensive Product: ${products[mostExpensive].name}`);


// [STRETCHED GOAL]

// decalring new product variable
let newProduct = {
	name: "Ultimate Mystery Box",
	price: 99999,
	quantity: 5
}

// adding new product to 'products' array
products.push(newProduct);

// verify that new product is successfully added
console.log(products);

// recalculating totalInventoryValue
for (let i =0; i < products.length; i++){
	totalInventoryValue = products[i].price * products[i].quantity;
}

console.log(`New Total Inventory Name: ${totalInventoryValue}`);