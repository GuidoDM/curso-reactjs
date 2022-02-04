
const productos = [

    {
        "id": '0',
        "categoria": "Short",
        "producto": "Short",
        "descripcion": "Short playero",
		"precio": 120,
        "stock": 10,
        "imagen": "3"
    },

    {
        "id": '1',
        "categoria": "Chamarra",
        "producto": "Chamarra",
        "descripcion": "chamarra de mezclilla para dama",
		"precio": 720,
        "stock": 5,
        "imagen": "0"
    },

    {
        "id": '2',
        "categoria": "Chamarra",
        "producto": "Chamarra",
        "descripcion": "Chamarra de cuero para dama",
		"precio": 1120,
        "stock": 2,
        "imagen": "0"
    },
	
	{
        "id": '3',
        "categoria": "JeansPescadores",
        "producto": "Jeans",
        "descripcion": "Pescadores",
		"precio": 200,
        "stock": 20,
        "imagen": "1"
    },
	
	{
        "id": '4',
        "categoria": "JeansCapri",
        "producto": "Jeans",
        "descripcion": "Capri",
		"precio": 220,
        "stock": 20,
        "imagen": "2"
    }
];

export const getFetch = new Promise ( (res, rej)=>{
    let condition = true
    if (condition) {
        setTimeout ( ()=> {
            res(productos)
        },2000)
        
    }else{
        rej('404 not found')
    }

})