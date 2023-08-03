class Laptop:
    def __init__(self,name,price,color,memory) -> None:
        self.name=name
        self.price=price
        self.color=color
        self.memory=memory
        pass
    def run(self):
        return f'Runnung Laptiop{self.brand}'
    def code(self):
        return f'Codding Laptop'

myLaptop=Laptop(price=1234,color='blue',memory=123,name="Asus")
print(myLaptop)

print(f'My Laptop Name is {myLaptop.name}')


class Device:
    def __init__(self,name,price,color) -> None:
        self.name=name
        self.price=price
        self.color=color
    def run(self):
        return f'Running {self.name}'
class Camera(Device):
    def __init__(self,pixel,name,price,color) -> None:
        self.pixel=pixel
        super().__init__(name,price,color)

myCamera=Camera(color='Blue',name='Oppo',pixel=123,price=12)
myCamera.name='Rahul'
print(myCamera.name)

class Vehicle:
    def __init__(self,weight,color,name) -> None:
        self.weight=weight
        self.color=color
        self.name=name

class Car(Vehicle):
    def __init__(self,ac,weight,color,name) -> None:
        self.ac=ac
        super().__init__(weight,color,name)
class PrivateCar(Car):
    def __init__(self, ac, weight, color, name) -> None:
        self.ac=ac
        super().__init__(ac, weight, color, name)


myCar=PrivateCar(ac='Present',color='Vlur',name='Rolex',weight=466)
print(PrivateCar.color)
print(PrivateCar.color)
        
