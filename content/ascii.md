+++
title = "ASCII taulukko"
+++

Tietokoneissa ja kryptografiassa operoidaan usein numeerisilla arvoilla, ja numeeriset arvot on lopulta käännettävä ihmiselle luettavaan muotoon.
Ohessa oleva ASCII taulukko on olemassa tätä tarkoitusta varten; eri numeeriset esitystavat ja sitä vastaava merkki on esitetty yhdessä.
Numeerinen arvo on käännetty johonkin tiettyyn merkkiin, jolla on tietty merkitys joko tietokoneen ohjauksessa, tai ihmisen tulkinnalla.

Taulukko on englanniksi, ja ohessa on lyhys kuvaus taulukon arvoista.

Merkintä `dec` tarkoittaa `decimal` eli kymmenjärjestelmän esitystä.

Merkintä `hex` tarkoittaa `hexadecimal` eli kuusitoistajärjestelmän esitystä.

Merkintä `binary` tarkoittaa binäärijärjestelmän esitystä.
Digitaalisessa maailmassa tyypillinen pituus on seitsemän tai kahdeksan binääristä numeroa eli *bittiä* (eng. bit) arvon esittämiseksi, ja tässä taulukossa arvot esitetään seitsemällä binäärinumerolla.
Alkuperäinen ASCII sisältää 128 eri merkkiä, mikä voidaan esittää seitsemällä binäärisellä numerolla (2⁷).

Kahdeksan bitin esitys tunnetaan paremmin yhtenä *tavuna* (eng. byte).
ASCII merkistö saavuttaa kahdeksannen bitin ns. pariteettibitin kanssa, mitä yleensä käytetään virheellisen arvon tunnistamisessa.
Tätä ei tarvitse huomioida tässä työpajassa.

`Character` kuvastaa merkkiä, mitä arvo vastaa ASCII merkistössä. 

ASCII on yksi ensimmäisistä yleisistä merkistöistä digitaalisessa kommunikaatiossa, mutta 128 merkkiä on varsin suppea määrä, ja tarvetta on ollut enemmälle.
Yleisin laaja kokoelma perustuu ASCII merkistön laajentaviin *Unicode* merkistöihin, joista esimerkiksi UTF-8 esitystapa voi näyttää 1,112,064 eri merkkiä.
Tällä hetkellä Unicoden uusimmassa versiossa 14.0 on 144,697 eri merkkiä.

Unicode on vastuussa esimerkiksi siitä, miten hymiöt näkyvät.
Esimerkiksi UTF-8 formaatin neljän hexaluvun sarja `0xF0 0x9F 0xA4 0xAF` esittää hymiötä &#129327;.



## ASCII ohjausmerkit

|Dec|Hex|Binary|Character|Description|
|--- |--- |--- |--- |--- |
|0|00|0000000|NUL|null|
|1|01|0000001|SOH|start of header|
|2|02|0000010|STX|start of text|
|3|03|0000011|ETX|end of text|
|4|04|0000100|EOT|end of transmission|
|5|05|0000101|ENQ|enquiry|
|6|06|0000110|ACK|acknowledge|
|7|07|0000111|BEL|bell|
|8|08|0001000|BS|backspace|
|9|09|0001001|HT|horizontal tab|
|10|0A|0001010|LF|line feed|
|11|0B|0001011|VT|vertical tab|
|12|0C|0001100|FF|form feed|
|13|0D|0001101|CR|enter / carriage return|
|14|0E|0001110|SO|shift out|
|15|0F|0001111|SI|shift in|
|16|10|0010000|DLE|data link escape|
|17|11|0010001|DC1|device control 1|
|18|12|0010010|DC2|device control 2|
|19|13|0010011|DC3|device control 3|
|20|14|0010100|DC4|device control 4|
|21|15|0010101|NAK|negative acknowledge|
|22|16|0010110|SYN|synchronize|
|23|17|0010111|ETB|end of trans. block|
|24|18|0011000|CAN|cancel|
|25|19|0011001|EM|end of medium|
|26|1A|0011010|SUB|substitute|
|27|1B|0011011|ESC|escape|
|28|1C|0011100|FS|file separator|
|29|1D|0011101|GS|group separator|
|30|1E|0011110|RS|record separator|
|31|1F|0011111|US|unit separator|
|127|7F|1111111|DEL|delete|

## ASCII tulostettavat merkit

|Dec|Hex|Binary|Character|Description|
|--- |--- |--- |--- |--- |
|32|20|0100000|Space|space|
|33|21|0100001|!|exclamation mark|
|34|22|0100010|"|double quote|
|35|23|0100011|#|number|
|36|24|0100100|$|dollar|
|37|25|0100101|%|percent|
|38|26|0100110|&|ampersand|
|39|27|0100111|'|single quote|
|40|28|0101000|(|left parenthesis|
|41|29|0101001|)|right parenthesis|
|42|2A|0101010|*|asterisk|
|43|2B|0101011|+|plus|
|44|2C|0101100|,|comma|
|45|2D|0101101|-|minus|
|46|2E|0101110|.|period|
|47|2F|0101111|/|slash|
|48|30|0110000|0|zero|
|49|31|0110001|1|one|
|50|32|0110010|2|two|
|51|33|0110011|3|three|
|52|34|0110100|4|four|
|53|35|0110101|5|five|
|54|36|0110110|6|six|
|55|37|0110111|7|seven|
|56|38|0111000|8|eight|
|57|39|0111001|9|nine|
|58|3A|0111010|:|colon|
|59|3B|0111011|;|semicolon|
|60|3C|0111100|<|less than|
|61|3D|0111101|=|equality sign|
|62|3E|0111110|>|greater than|
|63|3F|0111111|?|question mark|
|64|40|1000000|@|at sign|
|65|41|1000001|A||
|66|42|1000010|B||
|67|43|1000011|C||
|68|44|1000100|D||
|69|45|1000101|E||
|70|46|1000110|F||
|71|47|1000111|G||
|72|48|1001000|H||
|73|49|1001001|I||
|74|4A|1001010|J||
|75|4B|1001011|K||
|76|4C|1001100|L||
|77|4D|1001101|M||
|78|4E|1001110|N||
|79|4F|1001111|O||
|80|50|1010000|P||
|81|51|1010001|Q||
|82|52|1010010|R||
|83|53|1010011|S||
|84|54|1010100|T||
|85|55|1010101|U||
|86|56|1010110|V||
|87|57|1010111|W||
|88|58|1011000|X||
|89|59|1011001|Y||
|90|5A|1011010|Z||
|91|5B|1011011|[|left square bracket|
|92|5C|1011100|\\ |backslash|
|93|5D|1011101|]|right square bracket|
|94|5E|1011110|^|caret / circumflex|
|95|5F|1011111|_|underscore|
|96|60|1100000|`|grave / accent|
|97|61|1100001|a||
|98|62|1100010|b||
|99|63|1100011|c||
|100|64|1100100|d||
|101|65|1100101|e||
|102|66|1100110|f||
|103|67|1100111|g||
|104|68|1101000|h||
|105|69|1101001|i||
|106|6A|1101010|j||
|107|6B|1101011|k||
|108|6C|1101100|l||
|109|6D|1101101|m||
|110|6E|1101110|n||
|111|6F|1101111|o||
|112|70|1110000|p||
|113|71|1110001|q||
|114|72|1110010|r||
|115|73|1110011|s||
|116|74|1110100|t||
|117|75|1110101|u||
|118|76|1110110|v||
|119|77|1110111|w||
|120|78|1111000|x||
|121|79|1111001|y||
|122|7A|1111010|z||
|123|7B|1111011|{|left curly bracket|
|124|7C|1111100|\||vertical bar|
|125|7D|1111101|}|right curly bracket|
|126|7E|1111110|~|tilde|
|127|7F|1111111|DEL|delete|
