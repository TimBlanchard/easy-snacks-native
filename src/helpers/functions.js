import {productsCategoriesData, productsData} from "./productsData";

// GET ALL TYPES OF PRODUCT OF DISPENSERS
export const getDispensersProducts = (schoolDispensers) => {
    if(schoolDispensers){
        let productsIds = [];
        schoolDispensers.forEach(
            dispenser => dispenser.productsId.forEach(
                productId => {
                    if (!productsIds.find(el => el === productId))
                        productsIds.push(productId)
                }
            )
        );
        return productsIds;
    }
}

// GET ALL CATEGORIES OF A PRODUCT
export const getProductCategories = (productId) => {
    if(!productId) {
        return;
    } else {
        let productCategories = [];
        productsData.find(el => el.id === productId).categoriesId.forEach(
            productCategory => productCategories.push(productCategory)

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
                console.log(productCategories);
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

// GET NAME OF CATEGORY ID
export const getCategoryName = (categoryId) => {
    if(categoryId){
        return productsCategoriesData.find(cat => cat.id === categoryId).name;
    }
}
