from animal_enum import Animal
from factory.python.cat import Cat
from factory.python.dog import Dog


def factory(animal: Animal):
    if animal == Animal.CAT:
        return Cat()
    elif animal == Animal.DOG:
        return Dog()


class AnimalFactory():
    def createAnimal(self, animal: Animal):
        if animal == Animal.CAT:
            return Cat()
        elif animal == Animal.DOG:
            return Dog()


if __name__ == "__main__":
    # use Factory function
    cat = factory(Animal.CAT)
    cat.speak()

    dog = factory(Animal.DOG)
    dog.speak()
    ###

    # use Factory class
    animal_factory = AnimalFactory()
    cat = animal_factory.createAnimal(Animal.CAT)
    cat.speak()

    dog = animal_factory.createAnimal(Animal.DOG)
    dog.speak()