import React, { Component } from 'react';
import axios from 'axios';

import CategoriesSelect from "../components/CategoriesSelect";
import ProductsList from "../components/ProductsList";


export default class Shop extends Component {

    state = {
        selectedCategoryId: null,
        products: [],
        categories: [],
        allProducts: []
    };

    componentDidMount() {

        axios.get('http://localhost:5000/api/category/')
            .then(res => {
                this.setState({
                    categories: res.data,
                    selectedCategoryId: this.state.categories[0],
                });
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get('http://localhost:5000/api/product/')
            .then(res => {
                this.setState({
                    allProducts: res.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    selectCategory = ({ target }) => {
        const category_id = target.value
        const filteredProducts = this.state.allProducts.filter(p => category_id === p.category_id._id)
        this.setState({ products: filteredProducts })
    }

    render() {
        return (
            <div>
                <CategoriesSelect selectCategory={this.selectCategory} categories={this.state.categories} />
                <ProductsList selectedCategoryId={this.state.selectedCategoryId} items={this.state.products} />
            </div>
        )
    }
}