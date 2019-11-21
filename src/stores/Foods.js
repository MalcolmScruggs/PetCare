class Foods {
    foods = [
        {name: "grapes", type: "dog", toxic: true},
        {name: "xylitol", type: "dog", toxic: true},
        {name: "avocados", type: "dog", toxic: true},
        {name: "alchohol", type: "dog", toxic: true},
        {name: "onions", type: "dog", toxic: true},
        {name: "garlic", type: "dog", toxic: true},
        {name: "coffee", type: "dog", toxic: true},
        {name: "raisins", type: "dog", toxic: true},
        {name: "onions", type: "cat", toxic: true},
        {name: "garlic", type: "cat", toxic: true},
        {name: "lilies", type: "cat", toxic: true},
        {name: "grapes", type: "cat", toxic: true},
        {name: "raisins", type: "cat", toxic: true},
        {name: "coffee", type: "cat", toxic: true},
        {name: "chocolate", type: "cat", toxic: true},
        {name: "chocolate", type: "dog", toxic: true},
        {name: "carrots", type: "all", toxic: false},
        {name: "peas", type: "all", toxic: false},
        {name: "tomatoes", type: "all", toxic: false},
        {name: "lemons", type: "all", toxic: false},
        {name: "chicken", type: "all", toxic: false},
        {name: "fish", type: "all", toxic: false},
        {name: "beef", type: "all", toxic: false},
        {name: "venison", type: "all", toxic: false},
        {name: "steak", type: "all", toxic: false},
        {name: "bread", type: "all", toxic: false},
        {name: "toast", type: "all", toxic: false},
        {name: "lettuce", type: "all", toxic: false},
        {name: "lilies", type: "all", toxic: false},

    ]

    addFood(name, type) {
        let newFood = {
            name,
            type
        };
        this.foods.push(newFood);
    }
}

export default Foods;