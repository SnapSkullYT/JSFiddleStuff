var playerSprite = (document.getElementById("firstDIV"))

if (((playerSprite.getAttribute("src")) == null) || ((playerSprite.getAttribute("src")) == (""))) {
	playerSprite.style.width = ("50px")
  playerSprite.style.height = ("50px")
}

var leftKeyPressed = false
var downKeyPressed = false
var upKeyPressed = false
var rightKeyPressed = false

var moveInterval = 15

var outlineStyles = [
	("solid"),
	("dotted"),
	("dashed"),
	("double")
]

var currentStyle = 0
var outlineHidden = false

var debugEnabled = false

document.onkeydown = (function(windowEvent) {
	var windowEvent = ((windowEvent) || (window.event))
  var keyPressed = (windowEvent.code)
	var playerSpriteProperties = (playerSprite.getBoundingClientRect())
  if ((((keyPressed) == ("ArrowLeft")) || ((keyPressed) == ("KeyA"))) && ((leftKeyPressed) == false)) {
  	leftKeyPressed = true
    if (((playerSpriteProperties.x) - 1) > 0) {
  		playerSprite.style.left = ((((playerSpriteProperties.x) - 1)) + ("px"))
  	}
		moveLeftInterval = (setInterval((function() {
			var playerSpriteProperties = (playerSprite.getBoundingClientRect())
  		if (((playerSpriteProperties.x) - 1) > 0) {
  			playerSprite.style.left = ((((playerSpriteProperties.x) - 1)) + ("px"))
  		}
		}), (moveInterval)))
  }
  if ((((keyPressed) == ("ArrowDown")) || ((keyPressed) == ("KeyS"))) && ((downKeyPressed) == false)) {
  	downKeyPressed = true
    if (((playerSpriteProperties.y) + 1) < ((window.innerHeight) - (playerSpriteProperties.height))) {
  		playerSprite.style.top = ((((playerSpriteProperties.y) + 1)) + ("px"))
    }
		moveDownInterval = (setInterval((function() {
			var playerSpriteProperties = (playerSprite.getBoundingClientRect())
  		if (((playerSpriteProperties.y) + 1) < ((window.innerHeight) - (playerSpriteProperties.height))) {
  			playerSprite.style.top = ((((playerSpriteProperties.y) + 1)) + ("px"))
    	}
		}), (moveInterval)))
  }
	if ((((keyPressed) == ("ArrowUp")) || ((keyPressed) == ("KeyW"))) && ((upKeyPressed) == false)) {
  	upKeyPressed = true
    if (((playerSpriteProperties.y) - 1) > 0) {
  		playerSprite.style.top = ((((playerSpriteProperties.y) - 1)) + ("px"))
  	}
		moveUpInterval = (setInterval((function() {
			var playerSpriteProperties = (playerSprite.getBoundingClientRect())
  		if (((playerSpriteProperties.y) - 1) > 0) {
  			playerSprite.style.top = ((((playerSpriteProperties.y) - 1)) + ("px"))
  		}
		}), (moveInterval)))
  }
  if ((((keyPressed) == ("ArrowRight")) || ((keyPressed) == ("KeyD"))) && ((rightKeyPressed) == false)) {
  	rightKeyPressed = true
    if (((playerSpriteProperties.x) + 1) < ((window.innerWidth) - (playerSpriteProperties.width))) {
  		playerSprite.style.left = ((((playerSpriteProperties.x) + 1)) + ("px"))
    }
		moveRightInterval = (setInterval((function() {
			var playerSpriteProperties = (playerSprite.getBoundingClientRect())
  		if (((playerSpriteProperties.x) + 1) < ((window.innerWidth) - (playerSpriteProperties.width))) {
  			playerSprite.style.left = ((((playerSpriteProperties.x) + 1)) + ("px"))
    	}
		}), (moveInterval)))
  }



	if ((keyPressed) == ("Comma")) {
  	changeOutlineStyle(playerSprite)
  }
  if ((keyPressed) == ("Period")) {
  	changeElementColor(playerSprite)
  }
})

document.onkeyup = (function(windowEvent) {
	var windowEvent = ((windowEvent) || (window.event))
  var keyReleased = (windowEvent.code)
  if ((((keyReleased) == ("ArrowLeft")) || ((keyReleased) == ("KeyA"))) && ((leftKeyPressed) == true)) {
  	leftKeyPressed = false
    clearInterval(moveLeftInterval)
  }
  if ((((keyReleased) == ("ArrowDown")) || ((keyReleased) == ("KeyS"))) && ((downKeyPressed) == true)) {
  	downKeyPressed = false
    clearInterval(moveDownInterval)
  }
  if ((((keyReleased) == ("ArrowUp")) || ((keyReleased) == ("KeyW"))) && ((upKeyPressed) == true)) {
  	upKeyPressed = false
    clearInterval(moveUpInterval)
  }
  if ((((keyReleased) == ("ArrowRight")) || ((keyReleased) == ("KeyD"))) && ((rightKeyPressed) == true)) {
  	rightKeyPressed = false
    clearInterval(moveRightInterval)
  }
})

playerSprite.onclick = (function() {
	if (outlineHidden) {
  	outlineHidden = false
  	playerSprite.style.outline = (outlineStyles[currentStyle])
  } else {
  	outlineHidden = true
  	playerSprite.style.outline = ("none")
  }
})

function changeOutlineStyle(elementToChange) {
  if (((currentStyle) + 1) == (outlineStyles.length)) {
    currentStyle = 0
    if ((outlineHidden) == false) {
    	elementToChange.style.outline = (outlineStyles[currentStyle])
    }
  } else {
    currentStyle = ((currentStyle) + 1)
    if ((outlineHidden) == false) {
    	elementToChange.style.outline = (outlineStyles[currentStyle])
    }
  }
  if (debugEnabled) {
  	console.log(("Change Outline Style To: '") + (outlineStyles[currentStyle]) + ("' || Current Style Number: ") + (currentStyle))
  }
}

function changeElementColor(elementToChange) {
	var colorToSet = prompt("Enter color name")
  var defaultColorNames = [
  	("default"),
    ("nothing"),
    ("blank"),
    ("reset")
  ]
  var wasBlank = false
  for (var i = 0; i < defaultColorNames.length; i++) {
  	if ((colorToSet.toLowerCase()) == (defaultColorNames[i])) {
    	wasBlank = true
      elementToChange.style.removeProperty("background-color")
    }
  }
  if ((wasBlank) == false) {
  	elementToChange.style.backgroundColor = (colorToSet)
  }
}
