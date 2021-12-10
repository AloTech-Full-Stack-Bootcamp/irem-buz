# Parametre olarak verilen l rakamdan (basamak sayısı) oluşan, yine parametre olarak verilen n adet rastgele sayı üreten bir generator yazalım. Daha önce üretilen bir sayının tekrar üretilmemesini bekliyoruz. Fonksiyonun signature'ı: random_number_generator(n, l=6)

import random

def random_number_generator(n, l):
    randList = []

    while len(randList) < n:
        number = random.randint(10**(l-1), 10**(l)-1)
        if number not in randList:
            randList.append(number)
            yield number

print(list(random_number_generator(7, 6)))

# Aşağıda tanımlı fonksiyonla birlikte kullanıldığında,
# a) aldığı tüm sayı parametrelerinin değerini 1 arttıracak,
# b) boolean dönüş değerinin tersine çevirecek (True dönüyor ise False, False dönüyor ise True yapacak şekilde) bir decorator yazalım.
# (Not: Belki de mod_batch fonksiyonu yanlış implemente edilmiştir... Bu durumda öncelikle onun beklenen çıktıyı verecek şekilde düzenlenmesi gerekir.)


def my_awesome_decorator(fun):
    def wrapped(*args):
        return not fun(*[i+1 for i in args])
    return wrapped

@my_awesome_decorator
def mod_batch(*numbers):
    # Parametre olarak verilen tüm sayıların 3 ile tam bölünebilir olup olmadığını kontrol eder.
    return all([True if i % 3 == 0 else False for i in numbers])

print(mod_batch(2, 5, 8))
