+++
title = "Täydellinen salausmenetelmä?"
showFullContent = false 
description = "Johdatus kerta-avainjärjestelmään ja sen riskeihin"
+++

## Johdanto

Salauksen ensisijainen tavoite on tehdä selkokielisestä informaatiosta käsittämätöntä, niin että sen luottamuksellisuus voidaan säilyttää.
Informaatio voidaan välittää tai tallettaa luottamuksellisesti oikealle henkilölle ilman, että joku muu voi ymmärtää sen tarkoituksen.
Toissijaisina tavoitteina on osoittaa informaation alkuperä ja sen eheys.


Salauksessa keskeisiä termejä ovat salausalgoritmi (eng. *cipher*),  selkoteksti (eng. *plaintext*), salateksti (eng. *ciphertext*) ja salausavain (eng. *cipher key* tai vain *key*). 
Tietokonemaailmassa englanti on pakollinen kieli, ja sen takia keskeistä termeistä on esitetty myös käännös.

Salaus perustuu salausalgoritmiin, mikä muuttaa yleensä selkotekstin salatekstiksi salausavaimen avulla.
Tämä on onnistuttava myös päinvastaiseen suuntaan; muuten salaus menettää tarkoituksensa.
On oltava olemassa avain joka voi myös purkaa salauksen. Monesti se on sama kuin salaamiseen käytetty, mutta ei aina.

## One-time pad ja XOR salaus



## XOR salauksen periaatteet


```
A ⊕ 0 = A,
A ⊕ A = 0,
A ⊕ B = B ⊕ A,
(A ⊕ B) ⊕ C = A ⊕ (B ⊕ C),
(B ⊕ A) ⊕ A = B ⊕ 0 = B
```
Missä `⊕` määrittää eksklusiivisen disjunktion (XOR) [^1]

{{< svg "static/svg/xor_cipher.svg" >}}

Testaa itse!

{{< iframe "../iframe/xor.html" >}}


[^1]: [XOR Cipher in Wikipedia 🙄](https://en.wikipedia.org/wiki/XOR_cipher) 