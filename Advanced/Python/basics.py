def counting_strings(text):
    words = text.split(' ')
    word_count = {}

    for word in words:
        word_count[word] = word_count.get(word, 0) + 1

    return word_count



print(counting_strings('word after word'))



# enhanced version

def counting_strings_enhanced(text):

    words = text.split(' ')

    return {word: words.count(word) for word in set(words)}


def unique_char(text):

    char_count = {}

    for char in text:
        
        if char != ' ':
            if char in char_count:
                char_count[char] += 1
            else:
                char_count[char] = 1
    
    return char_count

# enhanced version

def unique_char_enhanced(text):

    return {char: text.count(char) for char in set(text) if char != ' '}



def palindrome_count(words):

    counter = 0

    for word in words:
        if word == word[::-1]:
            counter += 1

    return counter

# enhanced

def palindome_count_enhanced(words):

    return sum(1 for word in words if word == word[::-1])
