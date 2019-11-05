class Pets {
    pets = [
        {name: "Rover", weight: 10, type: "type_dog"},
    ];

    addPet(name, weight, type) {
        let newPet = {
            name,
            weight,
            type
        };
        this.pets.push(newPet)
    }

}

export default Pets;