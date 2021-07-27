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


// GET ALL CATEGORIES OF PRODUCTS ID ARRAY
export const getProductsCategories = (productsIdArray) => {
    if(productsIdArray){
        let categories = [];
        productsIdArray.forEach(
            productId => {
                const productCategories = getProductCategories(productId);
                productCategories.forEach(
                    productCategory => {
                        if (!categories.find(el => el === productCategory))
                        categories.push(productCategory);
                    }
                );
            }
        );
        return categories;
    }
}
