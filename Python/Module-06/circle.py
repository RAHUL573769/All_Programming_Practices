class Circle:
    pi=3.1416
    def __init__(self,radius) -> None:
        self.radius=radius
        self.circum=2*(self.pi)*(self.radius)
        
        
        pass
    def getarea(self):
        area=self.pi*self.radius*self.radius
        print(area)
        
c1=Circle(23)
print('13',c1.getarea())
c1.circum
c1.circum