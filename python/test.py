#!/usr/bin/python3

import json

class Books:
    def __init__(self, name, chapters, author):
        self.name = name 
        self.chapters = chapters
        self.author = author
        
book1 = Books(name="The name is The Desire of Ages,", chapters="has 27 chapters", author="and the author is Ellen G. White")
book2 = Books(name="The name is Atomic Habits,", chapters="has 17 chapters", author="and the author is James Clear")
book3 = Books(name="The name is Prayer,", chapters="has 15 chapters", author="and the author is Ellen G. White")
       
to_dict = dict ({"name": "The Desire of Ages", "chapters": 27, "author": "Ellen G. White"})

json_string = json.dumps(to_dict)

python_obj = json.loads(json_string)

print(book1.name, book1.chapters, book1.author)
print(book2.name, book2.chapters, book2.author)
print(book3.name, book3.chapters, book3.author)
print(to_dict)
print(type(to_dict))
print(json_string)
print(python_obj)
