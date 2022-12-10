class Observer:
    def update(self):
        pass


class Cat(Observer):
    def update(self):
        print("meow")
   

class Dog(Observer):
    def update(self):
        print("bark")
