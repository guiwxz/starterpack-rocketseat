const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query; // no metodo get a gente consegue pegar a informação pagina. E pra fazer isso usa o query
                                    //body: conteudo que vem do corpo (geralmente em json)
                                    //params: conteudo igual o ID
                                    //query: conteudo que vem do get
                                    
        const products = await Product.paginate({ /* where, condições pra filtragem*/ }, { page: page, limit: 10 });

        return response.json(products);
    },

    async store(request, response) {
        const product = await Product.create(request.body); // request.body é o que veio pelo corpo da pagina (os dados) na hora que deu o send no insomnia

        return response.json(product);
    },

    async show(request, response) {
        const product = await Product.findById(request.params.id);

        return response.json(product);
    },

    async update(request, response) {
        const product = await Product.findByIdAndUpdate(request.params.id, request.body, { new: true });

        return response.json(product);
    },

    async destroy(request, response){
        const product = await Product.findByIdAndRemove(request.params.id);

        return response.send('WORKED OUT');
    }
}