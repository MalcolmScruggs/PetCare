class Foods {
    foods = [
        {name: "grapes", type: "type_dog"},
        {name: "xylitol", type: "type_dog"},
        {name: "avocados", type: "type_dog"},
        {name: "alchohol", type: "type_dog"},
        {name: "onions", type: "type_dog"},
        {name: "garlic", type: "type_dog"},
        {name: "coffee", type: "type_dog"},
        {name: "raisins", type: "type_dog"},
        {name: "onions", type: "type_cat"},
        {name: "garlic", type: "type_cat"},
        {name: "lilies", type: "type_cat"},
        {name: "grapes", type: "type_cat"},
        {name: "raisins", type: "type_cat"},
        {name: "coffee", type: "type_cat"},
        {name: "chocolate", type: "type_cat"},
        {name: "chocolate", type: "type_dog"},
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