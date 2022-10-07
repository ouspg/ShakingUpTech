+++
title = "CyberChef: The Cyber Swiss Army Knife"
showFullContent = false 
description = "CyberChef:in käyttö"
toc = false
+++


{{< rawhtml >}}
<a href="https://gchq.github.io/CyberChef" target="_blank">CyberChef</a>
{{< /rawhtml >}}
on suosittu selainpohjainen ohjelma, joka tarjoaa paljon eri työkaluja, mitä monet tietoturva-ammattilaiset voivat käyttää jopa päivittäin.
Sen avulla voi tehdä monenlaisia erilaisia "kyberoperaatioita".

Tässä työpajassa kokeillaan muutamaa, jotka voivat helpottaa huomattavasti datan käsittelyä, muunnoksia ja salausta.

CyberChefillä luodaan niin sanottuja reseptejä yhdistämällä eri operaatioita, jotka näkyvät vasemmassa reunassa.
Operaatiot on jaettuna eri kategorioihin.
Oikeassa yläreunassa on syötettävä data, eli "ainesosa" ja oikeassa alareunassa on lähtevä data, eli lopputulos.

Oheinen taulukko näyttää mahdolliset hyödylliset operaatiot tähän työpajaan liittyen.

| Nimi                | Kategoria           | Kuvaus                                                           |
|---------------------|---------------------|------------------------------------------------------------------|
| From/To Hex         | Data format         | Ota/tuota dataa heksadesimaaliformaatissa                         |
| From/To Binary      | Data format         | Ota/tuota dataa binäärinumeroformaatissa                          |
| XOR                 | Encryption/Encoding | Tekee XOR operaation syötetyn datan ja avaimen välillä            |
| AES Encrypt/Decrypt | Encryption/Encoding | Salaa tai purkaa syötetyn datan AES algoritmilla määriteltyä avainta ja IV:tä käyttäen |


Voit harjoitella CyberChefin käyttöä vaikka seuraavalla heksadesimaaliluvulla:

`5368616b696e67205570205465636821`

Jos valitset CyberChef:istä raahamalla "From Hex" metodin reseptiksi, konversio (mahdollisesti) luettavaksi tekstiksi pitäisi tapahtua automaattisesti, kun heksaluku on laitettu `input` osioon.

Painamalla 🚫 kieltomerkkiä, operaatiota ei sisällytetä reseptiin, ja kokonaisuutta voi helposti hallita, vaikka valmiiksi laittaisikin useamman operaation jonoon.

Käyttämällä &#9208; taukomerkkiä, voi katsoa reseptin tuottamaa lähtötuloa siinä vaiheessa.

**Huomaa, että UTF-8 merkistö sisältää myös ASCII merkistön!**

Voit siis antaa XOR operaatiolle tekstiä parametrina, ja se kääntyy automaattisesti oikeaan binääriesitykseen.

### Linkkejä valmiisiin resepteihin
{{< rawhtml >}}

 <ul>
  <li><a href="https://gchq.github.io/CyberChef/#recipe=From_Hex('Auto')XOR(%7B'option':'Hex','string':''%7D,'Standard',false)" target="_blank">'From Hex' ja 'XOR' operaatio valmiina.</a></li>
  <li>
<a href="https://gchq.github.io/CyberChef/#recipe=From_Hex('Auto')XOR(%7B'option':'Hex','string':''%7D,'Standard',false/disabled)AES_Decrypt(%7B'option':'Hex','string':''%7D,%7B'option':'Hex','string':''%7D,'CBC','Hex','Raw',%7B'option':'Hex','string':''%7D,%7B'option':'Hex','string':''%7D)" target="_blank">'From Hex', 'XOR' (ei käytössä) ja AES purkuoperaatio valmiina</a>
</ul> 
</li>


{{< /rawhtml >}}

