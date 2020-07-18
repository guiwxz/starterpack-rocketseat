import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Product extends Component {
    state = {
        product: {}
    }

    componentDidMount() {
        this.loadProduct();
    }

    loadProduct = async () => {
        const { id } = this.props.match.params;//isso aqui pega oq vem no ID quando clica no produto

        const response = await api.get(`/products/${id}`)

        this.setState({ product: response.data });
    }

    render(){
        const { title, description, url } = this.state.product;
        return(
            <div className="product-info">
                <h1>{title}</h1>
                <p>{description}</p>
                <p>
                    URL: <a rel="noopener noreferrer" target="_blank" href={url}>{url}</a>
                </p>
            </div>
        )
    }
}