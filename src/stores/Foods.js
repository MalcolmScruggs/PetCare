class Foods {
    foods = [
        {name: "grapes", type: "dog"},
        {name: "xylitol", type: "dog"},
        {name: "avocados", type: "dog"},
        {name: "alchohol", type: "dog"},
        {name: "onions", type: "dog"},
        {name: "garlic", type: "dog"},
        {name: "coffee", type: "dog"},
        {name: "raisins", type: "dog"},
        {name: "onions", type: "cat"},
        {name: "garlic", type: "cat"},
        {name: "lilies", type: "cat"},
        {name: "grapes", type: "cat"},
        {name: "raisins", type: "cat"},
        {name: "coffee", type: "cat"},
        {name: "chocolate", type: "cat"},
        {name: "chocolate", type: "dog"},
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