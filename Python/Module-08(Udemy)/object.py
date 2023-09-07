class Dog():
    def __init__(self,breed) -> None:
        self.breed=breed
        pass

my_dog=Dog(breed="German Shepard")

print(my_dog.breed)


class Cat():
    def __init__(self,breed,name) -> None:
        self.breed=breed
        self.name=name
        pass
    def meow(self,number):
        self.number=number
        print("Meow"+self.number) 
        print("Meow"+self.number) 
my_cat=Cat(name='Rahul',breed='Boy')
print(my_cat.name)
print(my_cat.meow(number='19'))
my_cat.meow(number='12')


class Circle:
    pi=3.1416
    def __init__(self,radius) -> None:
        self.radius=radius
        pass
    def get_circumference(self):
        return self.pi*self.radius*2
    
my_circle=Circle(12)
print(my_circle.get_circumference())