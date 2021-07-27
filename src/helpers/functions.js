import {productsCategoriesData, productsData} from "./productsData";
import {useEffect} from "react";
import {getAllCategories} from "../services/network";

// GET ALL TYPES OF PRODUCT OF DISPENSERS
export const getDispensersProducts = (dispensers) => {
    if(dispensers){
        let productsIds = [];
        dispensers.forEach(
            dispenser => dispenser.products.forEach(
                product => {
                    if (!productsIds.find(el => el.id === product.id))
                        productsIds.push(product)
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
export const getProductsCategories = (products) => {
    if(products){
        let categories = [];
        products.forEach(
            product => {
                if (!categories.find(el => el=== product.categoryId)){
                    categories.push(product.categoryId);
                }
            }
        );
        return categories;
    }
}

// GET NUMBER OF PRODUCTS OF A CATEGORY
export const getProductsNumberOfCategory = (categoryId, products) => {
    if(categoryId && products) {
        let numberProducts = 0;
        products.forEach(
            product => {
                if(product.categoryId === categoryId)
                    numberProducts++;
            }

        )
        return numberProducts
    }

}
