+++
title = "Modernin salauksen huijaaminen"
+++

## Advanced Encryption Standard (AES)

Advanced Encryption Standard (AES) on symmetrinen lohkosalausmenetelmä [^1][^3] (engl. *symmetric block encryption method*), jota käytetään useissa yhteyksissä salaamaan (ja myös varmentamaan) tietoja. *Symmetrinen* salaus tarkoittaa, että sekä salaaminen ja purkaminen tapahtuu samalla (salaisella) avaimella. *Lohkosalausmenetelmä* tarkoittaa, että salaus tapahtuu pilkkomalla viesti osiin (lohkoihin) ja tämän jälkeen salaamalla viesti lohko kerrallaan.

AES:in etu aiemmin esitettyyn one-time pad -salaukseen on se, että siinä voidaan käyttää lyhyttä avainta (yleensä 128 tai 256 bittiä) salaamaan mielivaltaisen suuria määriä dataa. 

Yhtenä erityishuomiona on se, että viestin koko täytyy olla jaollinen AES lohkon koolla, mikä on 128 bittiä. 
AES-CBC käyttää aina 128 bitin lohkokokoa avaimen koosta riippumatta.
Käytännössä tämä tarkoittaa sitä, että yhteen lohkoon mahtuu viesti tai määrä dataa, jonka pituus on maksimissaan 16 tavua, eli yleensä 16 eri merkkiä. 
Aina tämä ei toteudu, niin joudutaan käyttämään ns. täydennysdataa (engl. *padding*) täyttämään viimeinen vajaa lohko [^2]. 
Täydennysdatan menetelmiin ei perehdytä tässä sen tarkemmin.

Kuitenkaan niin AES kuin muutkaan lohkosalausmenetelmät eivät ole immuuneja heikkouksille. Lohkosalaajia käytetään erilaisissa *moodeissa*, jotka kertovat miten viestin lohkoja syötetään itse lohkosalaajaan. Tässä esimerkissä tarkastelemme AES-CBC -moodia. Seuraavassa kuvassa näemme CBC moodin lohkosalauksen logiikan:

{{< svg "static/svg/CBC_encryption.svg" >}}

Vastaavasti, CBC moodin purkaminen:

{{< svg "static/svg/CBC_decryption.svg" >}}

CBC-moodissa selkokielinen viestilohko ja edeltävän lohkon salateksti yhdistetään XOR:aamalla ne yhteen ennen kuin käytetään lohkosalainta salaamaan näin saatu lohko. Koska ensimmäistä viestilohkoa varten ei ole vielä salattu yhtään aiempaa lohkoa, on CBC-moodissa määritelty ns. alustusvektori (IV), joka täyttää tämän roolin. Tämän IV:n **EI TARVITSE OLLA** salainen eli se voidaan lähettää selkokielisenä yhdessä salatun viestin kanssa.


## Tehtävä 

Myöskään AES-CBC salausmenetelmä ei yksin kykene varmistamaan datan eheyttä tai alkuperää.
Tässä harjoituksessa hyödynnämme edellisen tehtävän oppeja ja teemme samanlaisen muokkauksen AES-CBC:llä salattuun viestiin kuin äskettäin XOR-salattuun viestiin.
Tämä onnistuu silloin, kun IV on satunnainen arvo ja tunnetaan ensimmäisessä lohkossa olevaa dataa riittävän hyvin. 
Onkin täsmennettävä, että IV:tä käytetään purkamisvaiheessa vain yhteen lohkoon, eli tämä huijaus onnistuu vain sille lohkolle.
Tai koko viestille, jos se kattaa vain yhden lohkon.

Esimerkissä käytämme viestiä, joka mahtuu yhdelle lohkolle.

---

Alice yrittää lähettää salattua viestiä pankille, jossa täsmennetään eräs rahansiirto.
Tiedämme, että viesti on seuraavaa muotoa:

`Bob saa X euroa`

Emme kuitenkaan tiedä rahamäärää.
Eve kuitenkin onnistuu kaappaamaan viestin käsiinsä, ennen kuin se päätyy oikealle vastaanottajalle. 
Viesti on salattu AES-256-CBC menetelmällä ja viestin alustusvektori (IV) on `2ef5501d95015084d5673a686b58ccf7`.
Alustusvektori on myös kaapattu, koska se on julkista tietoa.

Salateksti on seuraava heksadesimaalimuodossa:

`40cb78f90920b8d21229333b76c3ed99`

Eve haluaa muuttaa viestin muotoon `Eve saa X euroa`, ennen kuin välittää sen oikealle vastaanottajalle.

Kuinka tämä onnistuu?

---

### Lisätietoa ja vinkkejä

Koska alkuperäinen viesti on 15 merkkiä, tarkoittaa se sitä, että yksi merkki puuttuu ennen kuin yksi lohko täyttyy.
Täydennysdataa käytetään täyttämään puuttuva merkki, ja näin tuotettu lähtödata on lopulta 128 bittiä pitkä.
Se selittää salatekstin vaihtuvan pituuden; salatekstin pituus on lopulta 128 bittiä, vaikka alkuperäinen selkoteksti on vain 120 bittiä (15 merkkiä). 

Seuraavat kysymykset voivat auttaa ongelman ratkaisemisessa:

  * Kuinka alkuperäinen teksti poikkeaa halutusta tekstistä bittitasolla?
  * Mikä on XOR operaation rooli AES-CBC moodin purkamisessa ja sen yhteys alustusvektoriin?
  * Onko selkotekstissä täydennysdataa hetkeä ennen salausta? (Kyllä on, huomioi se selkotekstin ja alustusvektorin osalta, kun teet muunnoksia!)



Tehtävän ratkaisuun on käytettävä CyberChef työkalua, mistä voit lukea lisää [täältä.](/cyberchef)

XOR operaatio, heksalukumuunnokset ja AES algoritmin käyttö ovat hyödyllisiä tähän tehtävään littyen.

Salausavain (256 bittiä) tarkistamista varten on 

`b6c0140d8cfe2a901fd8b2ac569fac096afc875ddae033e17cdbcbe316cd705f`

>  Käytettäessä XOR operaatiota CyberChef:issä, on tärkeää että merkkijonot ovat yhtä pitkiä!


[^1]: [AES in Wikipedia](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) 

[^2]: [Padding in Wikipedia](https://en.wikipedia.org/wiki/Padding_(cryptography)) 

[^3]: [Block cipher mode of operation in Wikipedia](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation) 
