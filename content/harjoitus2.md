+++
title = "Modernin salauksen huijaaminen"
+++

## Advanced Encryption Standard (AES)

Advanced Encryption Standard (AES) on symmetrinen lohkosalausmenetelmä, jota käytetään useissa yhteyksissä salaamaan (ja myös varmentamaan) tietoja. *Symmetrinen* salaus tarkoittaa, että sekä salaaminen ja purkaminen tapahtuu samalla (salaisella) avaimella. *Lohkosalausmenetelmä* tarkoittaa, että salaus tapahtuu pilkkomalla viesti osiin (lohkoihin) ja tämän jälkeen salaamalla viesti lohko kerrallaan.

AESin etu aiemmin esitettyyn one-time pad -salaukseen on se, että siinä voidaan käyttää lyhyttä avainta (yleensä 128 tai 256 bittiä) salaamaan mielivaltaisen suuria määriä dataa. 

Kuitenkaan niin AES kuin muutkaan lohkosalausmenetelmät eivät ole immuuneja heikkouksille. Lohkosalaajia käytetään erilaisissa *moodeissa*, jotka kertovat miten viestin lohkoja syötetään itse lohkosalaajaan. Tässä esimerkissä tarkastelemme AES-CBC -moodia. Seuraavassa kuvassa näemme CBC moodin lohkosalauksen logiikan:

{{< svg "static/svg/CBC_encryption.svg" >}}

Vastaavasti, CBC moodin purkaminen:

{{< svg "static/svg/CBC_decryption.svg" >}}

CBC-moodissa selkokielinen viestilohko ja edeltävän lohkon salateksti yhdistetään XORaamalla ne yhteen ennen kuin käytetään lohkosalainta salaamaan näin saatu lohko. Koska ensimmäistä viestilohkoa varten ei ole vielä salattu yhtään aiempaa lohkoa, on CBC-moodissa määritelty ns. alustusvektori (IV), joka täyttää tämän roolin. Tämän IV:n **EI TARVITSE OLLA** salainen eli se voidaan lähettää selkokielisenä yhdessä salatun viestin kanssa.

Tässä harjoituksessa hyödynnämme edellisen tehtävän oppeja ja teemme samanlaisen muokkauksen AES-CBC:llä salattuun viestiin kuin äskettäin XOR-salattuun viestiin. Tämä onnistuu silloin, kun IV on satunnainen arvo ja tunnetaan ensimmäisessä lohkossa olevaa dataa riittävän hyvin.

***Tähän sitten esimerkin vaatimat tiedot: Avain, IV, lähtöteksti ja haluttu lopputeksti (voivat olla samat kuin tuossa aiemmin)***

***Ohjeistus CyberChefin AES -toiminnon käyttöön***
