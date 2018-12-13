class Animal():
    def __init__(self):
        self.alive = True
        self.moving = True
        self.state = 'Neutral'

    def check_on(self):
        if self.alive == True:
            print("I'm not dead!")
        if self.alive == True and self.moving == False:
            print("I'm probably resting")
        if self.alive == False:
            print("I'm dead due to neglect")
            self.state = 'Vengeful'
        if self.alive == False and self.moving == True:
            print("WOOooooOOOOO!")
        print("I'm feeling {0}" .format(self.state))

    def feed(self, food):
        if 'rock' or 'stick' in food:
            self.alive = False
        else:
            self.state = 'Happy'

    def drop(self):
        self.alive = False

    def sleep(self):
        self.moving = False

# dog inherits stuff from animal
class Dog(Animal):

    def __init__(self):
        Animal.__init__(self)  # needs to tell superclass to init also if you wanna init in dog
        # if you don't need to init in dog, then you don't need to init animal too
        self.state = 'Ecstatic' # changing properties of superclass
        self.legs = 4  # adding new properties to class

    def do_tricks(self):
        if 'Ecstatic' in self.state:
            print("jumping around like crazy!!!")
        elif 'Vengeful' in self.state:
            print("looking away and not doing anything")
        else:
            print("rolling over and playing dead!")

a = Dog()
a.check_on()
a.do_tricks()
a.sleep()
a.check_on()