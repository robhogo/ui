# robho-frontend
Voor semester 6 van de opleiding ICT & Software van Fontys hogescholen heb ik de opdracht gekregen om een Enterprise applicatie te maken. De applicatie die ik ga maken is Return of Bithero Online (RoBHO). RoBHO is een browser game die je samen kan spelen met 1-4 mensen en is gebaseerd op de Bithero game die ik heb gemaakt in semester 2.

## Wat is dit?
front-end voor de applicatie. Dit omvat de hele game.

## Ontwikkelaar
| Naam | Email |
| Jaap van der Meer | 405273@student.fontys.nl | 

## Gerelateerde projecten
- [RoBHo-frontend](https://dev.azure.com/I405273/BitheroOnline/_git/RoBHo-frontend) - front-end voor de applicatie.



# Build Docker Image
docker build -t bithero-ui .

# Run Docker Image
docker run -it -p 8080:8080 --rm --name bithero-ui-app bithero-ui

