class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(!this.cards) {
      return undefined;
    }
    
    let arrLength = this.cards.length;

    while (arrLength > 0) {
      // get random number from 0 to the length of the array of cards -1 || whatever number arrLength is currently equal to -1
      let index = Math.floor(Math.random() * arrLength);

      // here we reduce the number or arrLength by 1 so that the last card in the cards array does not get changed every time the loop runs || the card that corrisponds to the arrLength in the cards array
      arrLength --;

      // create a temp variable that store the last element in the array || the index which corrisponds to the cards[arrLength];
      let tempCard = this.cards[arrLength];

      // fill the last element in the array of cards with the random card;
      this.cards[arrLength] = this.cards[index];

      // fill the empty space where the random element was with the temp card;
      this.cards[index] = tempCard;

      // this is the same thing that is happening on line 24 - 30 above
      // [[this.cards[arrLength], this.cards[index]]] = [[this.cards[index], this.cards[arrLength]]]
    }

    return this.cards
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++;

    if(card1 === card2) {
      this.pairsGuessed ++;

      return true;
    } 

    return false;
  }

  checkIfFinished() {
    // if(this.pairsGuessed === 12) {
    // if (this.pairsGuessed === this.cards.length / 2) {
    //   return true;
    // }
    
    // return false;
    if(this.checkIfWin()) {
      return 'Winner'
    } else if(this.checkIfLost()) {
      return 'Lost'
    } 

    return false;
  }

  checkIfLost() {
    if (this.pairsClicked === this.cards.length) {
      return true;
    }
    
    return false;
  }

  checkIfWin() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }
    
    return false;
  }
}
