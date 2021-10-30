import React, { Component } from 'react';
import axios from 'axios';

import CategoriesSelect from "../components/CategoriesSelect";
import ProductsList from "../components/ProductsList";


export default class Shop extends Component {

    constructor(props) {

		super(props);

		this.state = {
            selectedCategoryId: null,
            products: [],
            categories: [],
		};
	}

    componentDidMount() {

        axios.get('http://localhost:5000/api/category/')
        .then(res => {
            console.log(res)
            this.setState({
                categories: res.data,
                selectedCategoryId: this.state.categories[0],
            });
            console.log(this.state.selectedCategoryId);
        })
        .catch((error) => {
            console.log(error);
        })

		axios.get('http://localhost:5000/api/product/')
			.then(res => {
                console.log(res)
                this.setState({
                    products: res.data,
                });
			})
			.catch((error) => {
				console.log(error);
			});
	}

    selectCategory(category_id) {
        console.log({category_id})
        this.setState({
          //selectedCategoryId: category
        });
      }

    render() {
        return(
            <div>
                <CategoriesSelect selectCategory={this.selectCategory} categories={this.state.categories} />
                
                <ProductsList selectedCategoryId={this.state.selectedCategoryId} items={this.state.products} />
            </div>
        )
    }
}