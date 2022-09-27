+++
title = "Täydellinen salausmenetelmä?"
showFullContent = false 
description = "Johdatus kerta-avainjärjestelmään ja sen riskeihin"
+++

## Johdanto

Salauksen ensisijainen tavoite on tehdä selkokielisestä informaatiosta käsittämätöntä, niin että sen luottamuksellisuus voidaan säilyttää.
Informaatio voidaan välittää tai tallettaa luottamuksellisesti oikealle henkilölle ilman, että joku muu voi ymmärtää sen tarkoituksen.
Toissijaisina tavoitteina on osoittaa informaation alkuperä ja sen eheys.


Salauksessa keskeisiä termejä ovat salausalgoritmi (eng. *cipher*),  selkoteksti (eng. *plaintext*), salateksti (eng. *ciphertext*) ja salausavain (eng. *key*). 

Tietokonemaailmassa englanti on pakollinen kieli, ja sen takia keskeistä termeistä on esitetty myös käännös.

Salaus perustuu operaatioihin, joissa 




## XOR salauksen periaatteet


```
A ⊕ 0 = A,
A ⊕ A = 0,
A ⊕ B = B ⊕ A,
(A ⊕ B) ⊕ C = A ⊕ (B ⊕ C),
(B ⊕ A) ⊕ A = B ⊕ 0 = B
```
Missä `⊕` määrittää eksklusiivisen disjunktion (XOR)

{{< svg "static/svg/xor_cipher.svg" >}}

Testaa itse!

{{< iframe "../iframe/xor.html" >}}