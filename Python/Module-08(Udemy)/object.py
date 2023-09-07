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
    
my_cat=Cat(name='Rahul',breed='Boy')
print(my_cat.name)