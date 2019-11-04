class Pets {
    pets = [
        {name: "Rover", weight: 10},
    ];

    addPet(name, weight) {
        let newPet = {
            name,
            weight
        };
        this.pets.push(newPet)
    }

}

export default Pets;