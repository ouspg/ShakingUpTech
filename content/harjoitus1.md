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
Selkoteksti ja avain saavat siis lopulta aina numeerisen muodon.

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

Yksinkertaisin tapaus OTP:stä käyttää modulus arvoa 2, ja se tunnetaan paremmin XOR (bitwsise exclusive or) salauksena tietotekniikassa.
Tästä voi saada paremman idean salauksen toimintatavasta.

## XOR salauksen periaatteet

XOR salauksessa selkotekstin ja avaimen merkit voivat saada joko arvot 1 tai 0. 
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

{{< details "Lisätietoa koodauksesta">}}

Collapsed text
{{< /details >}}

## Tehtävä

OTP salauksessa oli ehtoja, ennen kuin täydellinen salaus saavutetaan.
Lisäksi salaus ei pystynyt varmentamaan tiedon eheyttä tai alkuperää.
Salauksella on myös muita ongelmia eräissä tilanteissa, joista seuraava viistoaa myös eheyden ja alkuperän todentamista.


Salauksen yhdestä rajoitteesta otetaan esimerkkitapaus.
Tässä tilanteessa käytämme kryptoanalyysissa niin kutsuttua "tunnetun selkotekstin hyökkäystä" (eng. *known-plaintext attack (KPA)*), mille OTP on haavoittuvainen.
Käytännössä osoitamme, että voimme saada avaimen tietoomme, jos tiedämme selkotekstin ja salatekstin.
Osittain tästä syystä, samaa avainta ei saa käyttää uudestaan.
Lisäksi voimme tehdä haluamimme salatekstejä pelkästään tietämällä nämä kaksi asiaa, kunhan purkautuvat yhtä pitkään selkotekstiin kuin alkuperäinen. Muuten jää kiinni muokkauksesta!


Tiedät, että erään viestin selkoteksti on `Hei, Alice!`. 
Viestin XOR salattu (huom. *ei ASCII!*) muoto näkyy seuraavasta taulukosta:

<!-- | |H|e|i|,| |A|l|i|c|e|!|
|-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
Binääri|10111011|00000010|10010011|10110000|11100001|01000000|10011111|00001110|10011001|11111001|11100000| -->

|Merkki|XOR salattu (bin)| XOR salattu (hex)|
|:-:|:--------:|:--:|
| H | 10111011 | bb |
| e | 00000010 | 02 |
| i | 10010011 | 93 |
| , | 10110000 | b0 |
|   | 11100001 | e1 |
| A | 01011010 | 5a |
| l | 10100000 | a0 |
| i | 01111101 | 7d |
| c | 01111000 | 78 |
| e | 00011101 | 1d |
| ! | 10111011 | bb |  

Jos tiivistetään tämä heksadesimaalinen esitysmuoto, `Hei, Alice!` on salattuna `bb0293b0e15aa07d781dbb`



Yritämme osoittaa, että tietämällä selkotekstin ja sen salatekstin, voimme muodostaa salatekstejä, jotka päätyvät haluttuun selkotekstiin, kun salaus puretaan. Ainoana rajoitteena on se, että pituus ei olla pidempi kuin alkuperäinen selkoteksti.
Se, että miksi tämä on mahdollista, voidaan päätellä XOR salauksen periaatteiden mukaan.

Jos käytetään samaa salausavainta, mikä on selkotekstin `Hei, Eve...` salateksti?

Entä mikä on salausavain?

Tämän tehtävän voi tehdä joko ylläolevalla JavaScript laatikolla, tai ns. **CyberChef** ohjelmalla, mistä voi lukea lisää [täältä.](/cyberchef)

Tehtävän voi tehdä myös kynällä ja paperilla, käyttäen annettua [ASCII taulukkoa hyväksi.](/ascii)

[^1]: [XOR Cipher in Wikipedia 🙄](https://en.wikipedia.org/wiki/XOR_cipher) 