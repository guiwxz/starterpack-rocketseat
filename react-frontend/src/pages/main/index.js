import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css'

export default class Main extends Component{
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }
    componentDidMount() { // metodo executado logo que o componente (ex: Main) for mostrado em tela
        this.loadProducts(); // no caso a primeira coisa q vai acontecer quando carregar o componente main, é carregar os produtos
    }
// funções que ja sao do react usam essa forma de named function normal. Porém quando nos precisamo criar uma função
// é necessario que seja em formato de arrow function, igual ali em baixo

    loadProducts = async (pageNumber = 1) => {
        try{
            const response = await api.get(`/products?page=${pageNumber}`);

            const { docs, ...productInfo } = response.data; // docs recebe os itens, productInfo a info das paginas

            this.setState({ products: docs, productInfo: productInfo });
            // atualiza o valor das variaveis de estado conforme a informação que chegou no response.data
        }catch(err){
            alert('server is not responding');
        }       
    }

    prevPage = () => {
        const { page } = this.state;

        if(page === 1){
            return;
        }
        const pageNumber = page - 1;
        this.setState({ page: pageNumber })
        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;
    
        //console.log(page, productInfo.pages);
        if(page === productInfo.pages){
            return;
        }
        const pageNumber = page + 1;
        this.setState({ page: pageNumber })
        this.loadProducts(pageNumber);
    }



    render(){
        const { products, page, productInfo } = this.state;

        return(
            <div className="product-list">

                {products.map( product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/product/${product._id}`}>Acessar</Link>
                    </article>                    
                ))}

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>
                </div>

            </div>
        )
    }
}


/*
export default function Main() {
    const [products, setProducts] = useState([])

    async function loadProducts(){
        const response = await api.get('/products');

        setProducts(response.data.docs);
    }
    loadProducts();

    return(
        <div className="product-list">
            {products.map( product => (
                <h2 key={product._id}>{product.title}</h2>
            ))}
        </div>
    )
}
*/