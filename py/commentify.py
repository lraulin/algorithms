import pyperclip


def python_line():
    text = pyperclip.paste()
    print(text)
    text = text.split(' ')
    new_text = ['#']
    line = 0

    for word in text:
        if len(new_text[line] + word) >= 80:
            new_text[line] += '\n'
            line += 1
            new_text.append("# " + word)
        else:
            new_text[line] += ' ' + word

    new_text = ''.join(new_text)
    pyperclip.copy(new_text)


def block():
    text = pyperclip.paste()
    print(text)
    text = text.split(' ')
    new_text = ['']
    line = 0

    for word in text:
        if len(new_text[line] + word) >= 80:
            new_text[line] += '\n'
            line += 1
            new_text.append(word)
            new_text[line] += ' '
        else:
            new_text[line] += word + ' '

    new_text = ''.join(new_text)
    pyperclip.copy(new_text)


block()
