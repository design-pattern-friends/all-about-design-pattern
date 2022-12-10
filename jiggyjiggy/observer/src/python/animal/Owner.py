from jiggyjiggy.observser.animal.Observer import Observer


class Owner:
    def __init__(self):
        self.animals = []

    def register(self, animal: Observer):
        self.animals.append(animal)

    def notify(self):
        for animal in self.animals:
            animal.update()
