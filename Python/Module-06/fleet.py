class Company:
    def __init__(self,name,address) -> None:
        self.name=name
        self.address=address
        self.bus=[]
        self.routes=[]
        self.drivers=[]
        self.counters=[]
        self.managers=[]
        self.supervisors=[]
        pass
class Driver:
    def __init__(self,name,license,age) -> None:
        self.name=name
        self.license=license
        self.age=age
        pass
class Counter:
    def __init__(self) -> None:
        pass
    

redMia=Driver(age=12,license=1234, name="Mia")
