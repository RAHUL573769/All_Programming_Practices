class Bank:
    def __init__(self,balance) -> None:
        self.balance=balance
        self.minwithdraw=100
        self.maxwithdraw=200
        pass
    def get_balance(self):
        return self.balance
    def deposit(self,amount):
        if(amount>0):
            self.balance=self.balance+amount
    def withdraw(self,amount):
        if(amount<self.minwithdraw):
            print( f'You must withdraw {self.minwithdraw}')
        elif(amount>self.minwithdraw):
            print(f'WithdrW AMOUNT {amount}')
        
    
    
b1=Bank(100)

print()
print(b1.get_balance())
b1.withdraw(1000)
