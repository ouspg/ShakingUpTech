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
Täydellinen luottamus tarkoittaa, että mahdollinen vastustaja ei voi oppia salatekstistä yhtään mitään, vaikka hänellä olisi rajoittamattomat resurssit.

OTP perustuu *modulaariseen lisäykseen*, jossa satunnaista ja vähintään samanpituista salausavainta kuin selkoteksti, käytetään tietyn vakion modulon laskentaan yhdessä selkotekstin kanssa.
Selkoteksti ja avain yleensä koostuvat arvoista, jotka ovat pienempiä kuin modulus.
Selkoteksti ja avain saa siis lopulta aina numeerisen muodon.

<!-- MathJax support, using LaTeX commands -->

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

Näillä ehdoilla on nurja puolensa; avainten hallinta on monimutkaista, sillä avain pitää aina toimittaa informaation vastaanottajalle salassa, ja avaimen on oltava vähintään yhtä pitkä kuin salattava informaatio.
Lisäksi uusi avain tarvitaan aina uutta viestiä varten.
Jatkuvaan informaation välittämiseen tämä voi olla mahdoton ratkaisu.

Vielä ei tarvi ymmärtää salauksen täyttä mekanismia, siihen otetaan seuraavaksi parempi katsaus.
Yksinkertaisin tapaus OTP:stä käyttää modulus arvoa 2, ja se tunnetaan paremmin XOR salauksena.

## XOR salauksen periaatteet

XOR (exclusive or) salauksessa selkotekstin ja avaimen merkit voivat saada joko arvot 1 tai 0. 
Tässä yksinkertaisimmassa tapauksessa ei modulolaskentaan tarvitse kiinnittää huomiota, kun on olemassa vain kaksi mahdollista arvoa.
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
Koska arvot voivat vaihdella vain nollasta ykköseen, on keksittävä esitystapa, miten kirjamia ja siten ymmärrettävää informaatiota voidaan esittää vain näillä kahdella arvolla.
Tietokonemaailmassa ratkaisu on ns. merkistö, ja yksi yleisimmistä on ASCII.
Voit lukea ASCII merkistöstä [täältä lisää.](/ascii)

Allaolevassa esimerkissä ylimmän rivin yksi lohko kuvastaa yhtä kirjainta, jonka binäärinen esitysmuoto on poimittu ASCII taulusta.
Toisen rivin arvot ovat satunnaisia, ja viimeinen rivi esittää salateksiä, joka on XOR laskennalla saavutettu.
Tekemällä XOR laskennan uudestaan samalla salausavaimella, voidaan saada selkoteksti takaisin salatekstistä.

{{< svg "static/svg/xor_cipher.svg" >}}

### Testaa itse!

Monet operaatioista voi laskea ihan käsin paperilla, mutta on olemassa työkaluja jotka voivat huomattavasti helpottaa asiaa.

Allaolevalla laatikolla voit hieman kokeilla XOR laskentaa ja binäärimuunnoksia JavaScript ohjelmointikielellä.

Saatko saman salatekstin jos muunnat kuvan jokaisen salausavainlohkon desimaaliluvuiksi ja käytät XOR operaatiota jokaiseen `Wow` sanan vastaavaan kirjaimeen?

{{< iframe "../iframe/xor.html" >}}

## Harjoitus

OTP salauksessa oli edellä mainitut ehdot, millä täydellinen salaus saavutetaan, ja mitä muita rajoituksia salauksella on.
Salaus ei ennen kaikkea pysty varmentamaan tiedon eheyttä tai alkuperää.

Salauksen rajoitteista otetaan esimerkkitapaus.
Tässä tilanteessa käytämme niin kutsuttua "tunnetun selkotekstin hyökkäystä" (eng. *known-plaintext attack (KPA)*) kryptoanalyysissa.

Tiedät, että erään viestin selkoteksti on `Hei, Alice!`. 
Viestin XOR salattu (huom. *ei ASCII!*) muoto näkyy seuraavasta taulukosta:

<!-- | |H|e|i|,| |A|l|i|c|e|!|
|-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
Binääri|10111011|00000010|10010011|10110000|11100001|01000000|10011111|00001110|10011001|11111001|11100000| -->

|Merkki|Salattu binäärimuoto| Salattu hexadesimaali|
|:-:|:--------:|:--:|
| H | 10111011 | bb |
| e | 00000010 | 02 |
| i | 10010011 | 93 |
| , | 10110000 | b0 |
|   | 11100001 | e1 |
| A | 01000000 | 40 |
| l | 10011111 | 9f |
| i | 00001110 | 0e |
| c | 10011001 | 99 |
| e | 11111001 | f9 |
| ! | 11100000 | e0 |

Jos tiivistetään tämä esitysmuoto, `Hei, Alice!` on salattuna `bb0293b0e1409f0e99f9e0`



Tietämällä selkotekstin ja sen salatekstin, voimme muodostaa mielivaltaisia salatekstejä, jotka päätyvät haluttuun selkotekstiin, kun salaus puretaan.
Tämä voidaan päätellä XOR salauksen periaatteiden mukaan.

Jos käytetään samaa salausavainta, mikä on selkotekstin `Hei, Eve...` salateksti?

Entä mikä on salausavain?

[^1]: [XOR Cipher in Wikipedia 🙄](https://en.wikipedia.org/wiki/XOR_cipher) 