const schoolsData = [
    {
        id:1,
        name:"Lycée Jean Moulin",
        address:"43 rue de la paix",
        postal_code:"75001",
        city:"Paris",
        dispensers: [
            {
                id: 1,
                productsId: [1, 3, 6]
            },
            {
                id: 2,
                productsId: [6, 5, 4]
            }
        ]
    },
    {
        id:2,
        name:"Université Paris Descartes",
        address:"33 rue de la paix",
        postal_code:"75002",
        city:"Paris",
        dispensers: [
            {
                id: 1,
                productsId: [1, 2, 3, 5, 6]
            },
            {
                id: 2,
                productsId: [6, 5]
            }
        ]
    },
    {
        id:3,
        name:"Collège Jean Moulin",
        address:"12 rue de la paix",
        postal_code:"75003",
        city:"Paris",
        dispensers: [
            {
                id: 1,
                productsId: [1, 2, 3, 4, 5, 6]
            }
        ]
    },
    {
        id:4,
        name:"Lycée Rabelais",
        address:"18 rue de la paix",
        postal_code:"75004",
        city:"Paris",
        dispensers: [
            {
                id: 1,
                productsId: [1, 2, 3, 4, 5, 6]
            }
        ]
    },
    {
        id:5,
        name:"Lycée Jean Moulin",
        address:"43 rue de la paix",
        postal_code:"75005",
        city:"Paris",
        dispensers: [
            {
                id: 1,
                productsId: [1, 2, 3, 4, 5, 6]
            }
        ]
    },
]

export default schoolsData;
