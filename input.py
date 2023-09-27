import json
import os

# Get the directory where the Python script is located
script_dir = os.path.dirname(os.path.abspath(__file__))

# Specify the file name and path
file_name = os.path.join(script_dir, "data.json")

# Load existing data from the file if it exists, or initialize an empty list
if os.path.exists(file_name):
    with open(file_name, "r") as file:
        data = json.load(file)
else:
    data = []

i = 15
while i != 0:
    word = input("Enter a word: ")
    meaning = input("Enter the meaning of the word: ")

    # Create a dictionary for the word and meaning
    word_meaning_dict = {"word": word, "meaning": meaning}

    # Append the dictionary to the data list
    data.append(word_meaning_dict)

    i = i - 1 
    print("Left:", i)

# Open the file in write mode and write the updated data as JSON
with open(file_name, "w") as file:
    json.dump(data, file, indent=4)

print(f'Data has been appended to {file_name}')
