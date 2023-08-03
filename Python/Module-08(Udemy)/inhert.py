class Animal:
    def __init__(self) -> None:
        print("I am Animal")
        pass
    def who_am_i(self):
        print("I am an aial")
    
class Dog(Animal):
    def __init__(self) -> None:
        Animal.__init__(self)
        print("Dog Created")
    
myAnimal=Animal()

myDog=Dog()
myDog.who_am_i()

class Person:
    def __init__(self,name) -> None:
        self.name=name
        pass
    def myEat(self):
        return print(self.name + "eats rice")
class Rahul(Person):
    def __init__(self, name) -> None:
        Person.__init__(self,name)
        print("Dog Created")

myPerson=Rahul(name='Rahul')
myPerson.myEat()



class Animal:
    def __init__(self,type) -> None:
        self.type=type
        pass
class Dog(Animal):
    def __init__(self, type,name) -> None:
        self.name=name
        Animal.__init__(self,type)
    def mySound(self):
        return print(self.type +self.name+' Can Make Sound ')

myDog1=Animal(type='Dog')
felix=Dog(name='felix',type='Dog')
felix.mySound()


class Vehicle:
    def __init__(self,name) -> None:
        self.name=name
        pass    
class Car(Vehicle):
    def __init__(self, name,capacity,color) -> None:
        self.color=color
        self.capacity=capacity
        Vehicle.__init__(self,name)
    def myMethod(self):
        return print(self.name+'is '+self.color+ 'is of capacity'+ self.capacity)
class PrivateCar(Car):
    def __init__(self, name, capacity, color,ac) -> None:
        self.ac=ac
        
        Car.__init__(self,name, capacity, color)
        


corolla=Car(capacity='123CC',color='blue',name='Corolla')
corolla.myMethod()
privateCar1=PrivateCar(capacity='1244',ac='12',color='blue',name='Rahul')


class Animal():
    def __init__(self):
        print("Animal Crwated")
    def eat(self):
        print("I a eatng")
                
class Dog(Animal):
    def __init__(self):
        Animal.__init__(self)
    def nakeSound(self):
        return print("I bark")
flix=Dog()
flix.eat()
flix.nakeSound()