import {productsCategoriesData, productsData} from "./productsData";

// GET ALL TYPES OF PRODUCT OF DISPENSERS
export const getDispensersProducts = (schoolDispensers) => {
    if(schoolDispensers){
        let productsArray = [];
        schoolDispensers.forEach(
            element => element.productsId.forEach(
                element => {
                    if (!productsArray.find(el => el === element))
                        productsArray.push(element)
                }
            )
        );
        return productsArray;
    }
}

// GET ALL CATEGORIES OF A PRODUCT
export const getProductCategories = (productId) => {
    if(!productId) {
        return;
    } else {
        let productCategories = [];
        productsData.find(el => el.id === productId).categoriesId.forEach(
            element => productCategories.push(element)

        )
        return productCategories;
    }
}



const getProductsCategories = () => {
    if(productsId){
        let categories = [];
        productsId.forEach(
            element => {
                console.log(element, 'element');
                if (productsCategoriesData.find(x => x.id === element.id))
                    categories.push(element)
            }
        );
        console.log(categories);
        return categories;
    }
}
