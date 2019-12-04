class Pets {
    pets = [
        {
            id: 1,
            name: "Rover",
            type: "dog",
            breed: "Black Labrador",
            weight: 10,
            age: 5,
            notes: "Partially blind in the left eye",
            img: "https://www.doggoneproblems.com/wp-content/uploads/2017/07/Wilson-Black-Lab.jpg"
        },
    ];

    addPet(pet) {
        this.pets.push(pet)
    }

    editPet(pet) {
        for(let i = 0; i < this.pets.length; i++) {
            if (pet.id === this.pets[i].id) {
                this.pets[i] = pet
            }
        }
    }

}

export default Pets;
