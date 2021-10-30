import React, { Component } from 'react';
import CategoryItem from "./CategoryItem";

export default class CategoriesSelect extends Component {

    constructor(props) {

		super(props);

        this.onSelectCategory = ''

        this.state = {
            selectedCategoryId: null,
        }
	}

    componentDidMount() {

    }

    /* 
    onSelectCategory(event) {
        this.setState({
          selectedCategoryId: event.target.value
        });
      } */

    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="mb-4 px-5 py-3 border border-secondary d-flex justify-content-center">
                    <label htmlFor="categoriesSelect">Category: </label>
                    <select name="categories" id="categoriesSelect" className="mx-2" onChange={()=>this.props.selectCategory(this.state.selectedCategoryId)}>
                        {this.props.categories.map(category => {
                            return (
                                <CategoryItem
                                onClick={()=>{this.setState({ selectedCategoryId:category._id})}}
                                    key={category._id}
                                    id={category._id}
                                    name={category.name}
                                />
                            )
                        })}
                    </select>
                </div>
            </div>
        );
    }
}

