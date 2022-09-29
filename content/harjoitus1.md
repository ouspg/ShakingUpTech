+++
title = "Täydellinen salausmenetelmä?"
showFullContent = false 
description = "Johdatus kerta-avainjärjestelmään ja sen riskeihin"
+++

## Johdanto

Salauksen ensisijainen tavoite on tehdä selkokielisestä informaatiosta käsittämätöntä, niin että sen *luottamuksellisuus* (eng. *confidentiality*) voidaan säilyttää.
Informaatio voidaan välittää tai tallettaa luottamuksellisesti oikealle henkilölle ilman, että joku muu voi ymmärtää sen tarkoituksen.
Toissijaisina tavoitteina on osoittaa informaation alkuperä (eng. *authenticity*) ja sen eheys (eng. *integrity*).
Alkuperän ja eheyden osoittamisesta käytetään yleensä termiä *varmentaminen*.


Salauksessa keskeisiä termejä ovat salausalgoritmi (eng. *cipher*),  selkoteksti (eng. *plaintext*), salateksti (eng. *ciphertext*) ja salausavain (eng. *cipher key* tai vain *key*). 
Tietokonemaailmassa englanti on keskeinen kieli, ja sen takia termeistä on esitetty myös käännös.

Salaus perustuu salausalgoritmiin, mikä muuttaa yleensä selkotekstin salatekstiksi salausavaimen avulla.
Tämä on onnistuttava myös päinvastaiseen suuntaan; muuten salaus menettää tarkoituksensa.
On oltava olemassa avain joka voi myös purkaa salauksen. Monesti se on sama kuin salaamiseen käytetty, mutta ei aina.

## One-time pad

Kerta-avainjärjestelmä eli one-time pad (OTP) on yksi yksinkertaisimmista ja samalla vahvimmista salausmenetelmistä.
Menetelmä kykenee takaamaan täydellisen luottamuksellisuuden, jos tietyt ehdot täyttyvät.
**Se ei kuitenkaan kykene takaamaan tiedon alkuperää tai eheyttä.**

OTP perustuu *modulaariseen lisäykseen*, jossa satunnaista ja samanpituista salausavainta kuin selkoteksti, käytetään tietyn vakion modulon laskentaan.
Selkoteksti ja avain yleensä koostuvat arvoista, jotka ovat pienempiä kuin modulus.

<!-- `$ C = K + P \pmod M $`
`$ P = C - K \pmod M $, missä K` -->
<!-- &            \text{, missä K on key}\\ -->
<!-- &\text{, P plaintext,}\\&\text{C ciphertext ja M modulus} -->

`$$
\begin{align} 
 C = (K + P) \bmod M\\
 P = (C - K) \bmod M\\\\
& \text{...kun } \begin{cases}
            \text{K : avain}\\
            \text{P : selkoteksti}\\
            \text{C : salateksti}\\
            \text{M : modulus}
         \end{cases}
\end{align}\\
$$`

> OTP on murtumaton, jos seuraavat ehdot täyttyvät:
>
>  * Avain täytyy olla vähintään yhtä pitkä kuin selkoteksti
>  * Avain täytyy olla satunnainen
>  * Avainta ei saa uudelleenkäyttää
>  * Avain täytyy pitää salassa


Yksinkertaisin tapaus OTP:stä käyttää modulus arvoa 2, ja se tunnetaan paremmin XOR salauksena.

## XOR salauksen periaatteet

XOR (exclusive or) salauksessa selkotekstin ja avaimen merkit voivat saada joko arvot 1 tai 0. 
Tässä yksinkertaisimmassa tapauksessa ei modulolaskentaan tarvi kiinnittää huomiota, kun on olemassa vain kahta mahdollista arvoa.
Seuraavat laskusäännöt pätevät XOR operaatioissa:

`$$
\begin{align}
& A ⊕ 0 = A,\\
& A ⊕ A = 0,\\
& A ⊕ B = B ⊕ A,\\
& (A ⊕ B) ⊕ C = A ⊕ (B ⊕ C),\\
& (B ⊕ A) ⊕ A = B ⊕ 0 = B\\
\end{align}
$$`

Missä `$⊕$` määrittää eksklusiivisen disjunktion (XOR) [^1]

Seuraava esimerkki sisältää XOR salauksen sanalle `Wow`. 

{{< svg "static/svg/xor_cipher.svg" >}}

### Testaa itse!

Allaolevalla laatikolla voit hieman kokeilla XOR laskentaa ja binäärimuunnoksia JavaScript ohjelmointikielellä.

{{< iframe "../iframe/xor.html" >}}

## Harjoitus

[^1]: [XOR Cipher in Wikipedia 🙄](https://en.wikipedia.org/wiki/XOR_cipher) 