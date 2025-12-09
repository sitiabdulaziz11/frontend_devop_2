
def reverse_string(text):
    return text[::-1]

# Example use
print(reverse_string("Django"))  # Output: ognajD

def check():
    return f"he"
print(check())
#     print("he")6
# check()

# def even_or_odd(num): incorrect?
#     int(input("Enter number: "))
    
#     if num % 2 == 0:
#         print("even")
#     else:
#         print("odd")
        
# even_or_odd(x)

# def even_or_odd(num):
    
#     if num % 2 == 0:
#         print("even")
#     else:
#         print("odd")
     
# x = int(input("Enter number: "))
# even_or_odd(x)

# # or

# def even_or_odd():
#     num = int(input("Enter number: "))
    
#     if num % 2 == 0:
#         print("even")
#     else:
#         print("odd")
        
# even_or_odd()

class Student:
    """ student class
    """
    def __init__(self, name, age):
        """ initializer
        """
        self.name = name
        self.age = age
        
    def get_info(self):
        return f"{self.name} is {self.age} years old"
    
    def update_age(self, new_age):
        self.age = new_age
        return f"age updated to {self.age}"
        
    def __str__(self):
        return f"name is {self.name} and {self.age}"
        
s1 = Student("eman", 12)
print(s1)

print(s1.get_info())
print(s1.update_age(13))

# print(s1.name)
# print(s1.age)