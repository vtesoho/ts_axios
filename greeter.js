// //命明函数
// function add(x,y){
//   return x + y
// }
var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var PickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: _this.suits[PickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log('card ' + pickedCard.card + ' of ' + pickedCard.suit);
