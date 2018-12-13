# so classes are same as types. they are, in fact, user-defined types. they are also objects and first class citizens

class schedule(object):

    import collections
    # what is declared here is a STATIC property, meaning they exist in all of the class instances
    # this is a class attribute, as they are declared at class level
    # since some attributes apply to all classes regardless of type of schedule,
    # they can be declared here
    schedule_list = collections.OrderedDict()  # i like my checklist in the order in which i put them in
    schedule_list['not completed'] = []
    schedule_list['completed'] = []

    # dummy static attribute
    delete_from_class_definition = 'no!!!'

    import datetime
    timestamp = datetime.datetime.today()
    print('static attribute of time :', timestamp)

    # INITIALIZATIONS
    def __init__(self, username, topic):
        init_timestamp = schedule.timestamp.strftime("%Y-%M-%d %H:%M:%S")
        print("new schedule created on {0}".format(init_timestamp))
        # what is declared here is made at the beginning of the making of the class (when it is initialized)
        # and are
        self.name = 'default_list_{0}' .format(init_timestamp.replace(" ", "_"))
        self.completion_status = False
        self.username = username
        self.topic = topic

        #dummy instance attribute
        self.delete_from_class_instance = None

    # called instance methods, cause they need to be instanced first with init
    def name_schedule(self, input_name):
        if input_name:
            self.name = input_name

    def add_entry(self, *args):
        self.schedule_list['not completed'].append(" | ".join(args))

    def complete_entry(self, keywords_or_index):
        if type(keywords_or_index) is int or float:
            i = keywords_or_index
            list_value = self.schedule_list['not completed'][i]
            self.schedule_list['completed'].append(list_value)
            del (self.schedule_list['not completed'][i])

    def check_completion(self):
        print('how many things in "not complete" list: {0}' .format(len(self.schedule_list['not completed'])))
        if len(self.schedule_list['not completed']) == 0:
            print("checklist completed")
        else:
            print("checklist not completed")

    """
    STATIC METHODS
    """

    # static methods work without initialization, as it the class is a def
    # they are used for things that NEVER CHANGE
    @staticmethod
    def make_me_happy():
        print("boop beep boop bop boop!!!")

    @staticmethod
    def count_schedule(schedule_in):
        print(len(schedule_in))

    """
    resource : https://stackoverflow.com/questions/2438473/what-is-the-advantage-of-using-static-methods-in-python
    
    Static methods don't have access to any of the attributes to the class instance
    and don't have attributes to the class either
    
    However they are useful when they do small things that need nothing but what is passed into them
    (like a multiply / divide function that you only need in the class, so it would make
    sense inside and not outside a class)
    
    """


    """
    CLASS METHODS
    """
    # mostly useful in inheritance, when you want to create multiple classes that are
    # really quite similar


    # OUTPUTS
    def display_schedule(self):
        from tabulate import tabulate
        #flipped = zip(self.schedule_list.keys(), self.schedule_list.values())
        #print(tabulate(flipped, headers=['keywords', 'content']))
        print('')
        print(tabulate(self.schedule_list, headers='keys'))
        print('')

    # a basic output into other python functions
    def to_list(self):
        output_list = []
        for key in self.schedule_list.keys():
            output_list.append([key, self.schedule_list[key]])
        return output_list


prep_list = schedule("Tang Li Qun", "things to prepare in python")

# write decorator to show full list
# something called @display or something

# Classes make it possible to tell it (an object) to Do something
prep_list.name_schedule('20171211')
prep_list.add_entry('the paper on the graph theory thing at different scales in the city')
prep_list.add_entry('read up about big O, try ELI5')
prep_list.add_entry('logarithms and how to quickly think of questions in their terms')
prep_list.add_entry('practise more python!!!! (recurring entry)')
prep_list.add_entry('go badminton with jason!', 'it is in Kasai though')
prep_list.add_entry('remember to send the documents back to si gu in malaysia so that the '
                    'unit trust fund can happen')
prep_list.add_entry('decision trees and the measure of impurity', 'gini index and information gain')
prep_list.add_entry('k means clustering center weighing', 'how many Ks and where to start populating the Ks')
prep_list.add_entry('mention t-sne and how it can be used in conjunctino with k means')
prep_list.add_entry('the method behind backpropagation, used in a simple neural network (MLP)')
prep_list.add_entry('MapReduce', 'and their use cases')

prep_list.complete_entry(1)


prep_list.display_schedule()
prep_list.check_completion()
print('\n')

# random stuff
del prep_list.delete_from_class_instance
del schedule.delete_from_class_definition
prep_list.make_me_happy()

# some roundabout way to use a static method
print('how many things')
prep_list.count_schedule(prep_list.to_list())


