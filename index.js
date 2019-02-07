/* 
(function() {
  console.log(this)
  const cards = document.querySelectorAll('.memory-card')
  cards.forEach(card => {
    card.addEventListener('click', flipCard, false)
  })
  let hasFilppedCard = false
  let firstCard, secondCard;
  let lockBoard = false

  function flipCard() {
    if (lockBoard) return
    if (this === firstCard) return
    this.classList.toggle('flip')
    this.classList.add('flip')
    if (!hasFilppedCard) {
      hasFilppedCard = true
      firstCard = this
      return
    }
    secondCard = this
    hasFilppedCard = false
    checkForMatch()
  }

  function checkForMatch() {
    console.log(firstCard)
    console.log(secondCard)
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards()
      return
    }
    unfilpCards()
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
    resetCard()
  }

  function unfilpCards() {
    lockBoard = true
    setTimeout(() => {
      lockBoard = false
      firstCard.classList.remove('flip')
      secondCard.classList.remove('flip')
      lockBoard = false
      resetCard()
    }, 1500);
  }

  function resetCard() {
    [firstCard, secondCard] = [null, null]
    [hasFilppedCard, lockBoard] = [false, false]
  }
  function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12)
      card.style.order = randomPos
    })
  }
  shuffle()
})()
*/


(function() {
  var index = {
    init: function() {
      const _this = index
      const cards = document.querySelectorAll('.memory-card')
      cards.forEach(card => {
        card.addEventListener('click', _this.flipCard, false)
      })
    },
    flipCard: function() {
      var _this = index
      if (_this.data.lockBoard) return
      if (this === _this.data.firstCard) return
      this.classList.toggle('flip')
      this.classList.add('flip')
      if (!_this.data.hasFilppedCard) {
        _this.data.hasFilppedCard = true
        _this.data.firstCard = this
        return
      }
      _this.data.secondCard = this
      _this.data.hasFilppedCard = false
      _this.checkForMatch()
    },
    data: {
      hasFilppedCard: false,
      lockBoard: false,
      firstCard: null,
      secondCard: null
    },
    checkForMatch: function() {
      const _this = index
      const firstCard = _this.data.firstCard
      const secondCard = _this.data.secondCard
      if (firstCard.dataset.framework === secondCard.dataset.framework) {
        _this.disableCards()
        return
      }
      _this.unfilpCards()
    },
    disableCards: function() {
      const _this = index
      _this.data.firstCard.removeEventListener('click', _this.flipCard)
      _this.data.secondCard.removeEventListener('click', _this.flipCard)
      _this.resetCard()
    },
    resetCard: function() {
      const data = {
        hasFilppedCard: false,
        lockBoard: false,
        firstCard: null,
        secondCard: null
      }
      Object.assign(index.data,data)
    },
    unfilpCards:function () {
      const _this = index
      _this.data.lockBoard = true
      setTimeout(() => {
        _this.data.lockBoard = false
        _this.data.firstCard.classList.remove('flip')
        _this.data.secondCard.classList.remove('flip')
        _this.data.lockBoard = false
        _this.resetCard()
      }, 1500);
    },
    shuffle:(function(){
      const cards = document.querySelectorAll('.memory-card')
      cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12)
        card.style.order = randomPos
      })
    })()
  }
  //此种写法时init中的this的指向已经指向了window因此将this保存下来
  /* 
    const a = index.init
    a() 
  */
  index.init()
})()