input.onButtonPressed(Button.A, function () {
    index = randint(0, 9)
    basic.showString("" + (text_list[index]))
})
let index = 0
let text_list: string[] = []
text_list = [
"batman",
"superman",
"shrek",
"car",
"spiderman",
"thor",
"ironman",
"thanos",
"Incrediman",
"Dark Vador"
]
