const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query; // Se não for informada a página, por padrão busca a 1 

        const [count] = await connection('incidents').count(); // Retorna um array, mas da forma que está, pega só o primeiro registro

        const incidents = await connection('incidents')
            .limit(5) // Limita a busca no banco por 5 incidentes
            .offset((page - 1) * 5)
            .select('*');

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body; // Desestruturação dos dados
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({ //Desestruturação do ID retornado no Result
            title,
            description,
            value,
            ong_id
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if(incident.ong_id != ong_id) {
            return response.status(401).json({error: 'Operation not permited.'})
        }
        
        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};