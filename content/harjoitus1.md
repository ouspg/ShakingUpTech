+++
title = "Täydellinen salausmenetelmä?"
showFullContent = false 
description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec interdum metus. Aenean rutrum ligula sodales ex auctor, sed tempus dui mollis. Curabitur ipsum dui, aliquet nec commodo at, tristique eget ante."
+++

    01010101010101 | Alkuperäinen teksti
    11101001101011 | Salausavain
    --------------
    10111100111110 | Salattu teksti

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec interdum metus. Aenean rutrum ligula sodales ex auctor, sed tempus dui mollis. Curabitur ipsum dui, aliquet nec commodo at, tristique eget ante. Donec quis dolor nec nunc mollis interdum vel in purus. Sed vitae leo scelerisque, sollicitudin elit sed, congue ante. In augue nisl, vestibulum commodo est a, tristique porttitor est. Proin laoreet iaculis ornare. Nullam ut neque quam.


## XOR salauksen periaatteet

    A ⊕ 0 = A,
    A ⊕ A = 0,
    A ⊕ B = B ⊕ A,
    (A ⊕ B) ⊕ C = A ⊕ (B ⊕ C),
    (B ⊕ A) ⊕ A = B ⊕ 0 = B

    Missä ⊕ määrittää eksklusiivisen disjunktion (XOR)