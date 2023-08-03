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



class Vehicle1:
    def __init__(self,name) -> None:
        self.name=name
        pass
class Car(Vehicle1):
    def __init__(self, name,color,capacity) -> None:
        self.color=color
        self.capacity=capacity
        Vehicle1.__init__(self,name)
    def myMethod(self):
        return print(self.name+'is '+self.color+ 'is of capacity'+ self.capacity)
class PrivateCar(Car):
    def __init__(self, name, color, capacity,ac) -> None:
        self.ac=ac
        Car.__init__(self,name, color, capacity)
    def myMethod1(self):
        return print(self.name+'is '+self.color+ 'is of capacity'+ self.capacity +'Ac'+self.ac)
        
motorolla=PrivateCar(name='motorolla',ac='Ac',color='blue',capacity='1234')
a=motorolla.myMethod1()
print(a)