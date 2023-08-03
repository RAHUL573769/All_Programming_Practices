# python numbers


class Student:
    roll=''
    gpa=''
    def display(self):
        print(f'Roll:{self.roll}')
rahul=Student()
rahul.roll=101
rahul.display()
print('13',rahul.display())

class Triangle:
    
    def __init__(self,base,height) -> None:
        self.base=base
        self.height=height
        print(f'Area is {base*height}')
        
        pass
t1=Triangle(10,20)
print(t1)