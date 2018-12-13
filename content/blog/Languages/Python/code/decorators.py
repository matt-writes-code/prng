def time_this(original_function):
    import datetime
    def new_function(*args, **kwargs):
        start = datetime.datetime.now()
        x = original_function(*args, **kwargs)
        end = datetime.datetime.now()
        print("time taken: {0} seconds" .format(end - start))
        return x
    return new_function

@time_this
def sum_to_n(number_in):
    total = 0
    for i in range(number_in):
        total += i
    return total

y = sum_to_n(1000000)
print(y)

