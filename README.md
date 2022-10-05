# Shaking Up Tech 2022


Verkkosivusto kryptoteemaiseen työpajaan Shaking Up Tech tapahtumassa.


Verkkosivu löytyy: https://ouspg.github.io/ShakingUpTech/ tai https://shakinguptech.ouspg.org/


Teema pohjautuu Radosław Koziełin [työhön](https://github.com/panr/hugo-theme-terminal).


## Paikallinen kehitys

Asenna [hugo](https://gohugo.io/).

Aja seuraava komento tässä kansiossa 

```console
hugo server
```
Verkkosivusto löytyy osoitteeista `localhost:1313`.
Tiedoston tallennus automaattisesti päivittää verkkosivun.

Mikäli SVG tiedostoja muokataan, on serveri käynnistettävä uudelleen, ennen kuin muutokset näkyvät, vaikka poistaisi kaiken cachen käytöstä.

Mikäli teemaan on tehtävä suurempia muutoksia, on teemaa kehitettävä erikseen, ja ohjeet löytyy [täältä](themes/terminal/README.md).

Muuten CSS päällekirjoitus on pääosin riittävää, ja se löytyy kansiosta `static/style.css`