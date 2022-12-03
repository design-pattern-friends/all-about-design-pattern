from jiggyjiggy.observser.animal.Observer import Cat, Dog
from jiggyjiggy.observser.animal.Owner import *

if __name__ == "__main__":
    owner = Owner()

    cat = Cat()
    dog = Dog()

    owner.register(cat)
    owner.register(dog)

    owner.notify()
