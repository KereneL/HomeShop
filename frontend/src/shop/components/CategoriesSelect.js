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

    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="mb-4 px-5 py-3 border border-secondary d-flex justify-content-center">
                    <label htmlFor="categoriesSelect">Category: </label>
                    <select name="categories" id="categoriesSelect" className="mx-2" onChange={(ev) => this.props.selectCategory(ev)}>
                        {this.props.categories.map(category => {
                            return (
                                <CategoryItem
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

