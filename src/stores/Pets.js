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
            img: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/03/12192604/Black-Lab-Face.jpg"
        },
    ];

    addPet(pet) {
        this.pets.push(pet)
    }

}

export default Pets;