/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/back-structures.png":
/*!*************************************!*\
  !*** ./src/img/back-structures.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9a065dae9ac8250360cdf01425d25d98.png");

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fddf2af35bae8088523fe608a0957646.png");

/***/ }),

/***/ "./src/img/floor.png":
/*!***************************!*\
  !*** ./src/img/floor.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c16a6adce9c2ff4beaf3bb77bcca67db.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_floor_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/floor.png */ "./src/img/floor.png");
/* harmony import */ var _img_back_structures_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/back-structures.png */ "./src/img/back-structures.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 960;
canvas.height = 540; // utils ----------------------------------------------

var gravity = 2;
ctx.fillRect(0, 0, canvas.width, canvas.height); //image 

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
} // keyStatus


var keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  }
}; //rectangular collision 

function rectangularCollision(_ref) {
  var rectangle1 = _ref.rectangle1,
      rectangle2 = _ref.rectangle2;
  return rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width && rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height && rectangle1.isAttacking;
} // collision detection for platform 


function platformCollision() {
  platforms.forEach(function (platform) {
    return player.position.y + player.height <= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width && player.position.y + player.height + player.velocity.y >= platform.position.y;
  });
}

window.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'w':
      platforms.forEach(function (platform) {
        if (player.position.y + player.height >= canvas.height || player.position.y + player.height >= platform.position.y - 5 && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
          player.velocity.y = -25;
        }
      });
      break;

    case ' ':
      player.shoot();
      break;

    case 'a':
      keys.a.pressed = true;
      player.lastKey = 'a';
      break;

    case 'd':
      keys.d.pressed = true;
      player.lastKey = 'd';
      break;

    case 'ArrowLeft':
      keys.ArrowLeft.pressed = true;
      enemy.lastKey = 'ArrowLeft';
      break;

    case 'ArrowRight':
      keys.ArrowRight.pressed = true;
      enemy.lastKey = 'ArrowRight';
      break;

    case 'ArrowUp':
      if (enemy.position.y + enemy.height >= canvas.height) {
        enemy.velocity.y = -25;
      }

      break;

    case 'ArrowDown':
      enemy.shoot();
      break;
  }
});
window.addEventListener('keyup', function (event) {
  switch (event.key) {
    case 'a':
      keys.a.pressed = false;
      break;

    case 'd':
      keys.d.pressed = false;
      break;

    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false;
      break;

    case 'ArrowRight':
      keys.ArrowRight.pressed = false;
      break;
  }
}); // Classes ---------------------------------------------------------------------
// Player Class 

var Fighter = /*#__PURE__*/function () {
  function Fighter(_ref2) {
    var position = _ref2.position,
        velocity = _ref2.velocity,
        _ref2$color = _ref2.color,
        color = _ref2$color === void 0 ? 'red' : _ref2$color,
        _ref2$offset = _ref2.offset,
        offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
        attackBox = _ref2.attackBox;

    _classCallCheck(this, Fighter);

    this.position = position;
    this.velocity = velocity;
    this.width = 50;
    this.height = 150;
    this.lastKey;
    this.attackBox = attackBox;
    this.color = color;
    this.offset = offset;
    this.isAttacking = false;
    this.health = 100;
    this.attackBox.position = {
      x: this.position.x,
      y: this.position.y
    };
  }

  _createClass(Fighter, [{
    key: "draw",
    value: function draw() {
      // draw out the player
      ctx.fillStyle = this.color;
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // draw out the attackBox
      // if (this.isAttacking) {

      ctx.fillStyle = 'green';
      ctx.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height);

      if (!this.isAttacking) {
        this.attackBox.position.x = this.position.x - this.offset;
      } // }

    } //to update our player on every render

  }, {
    key: "update",
    value: function update() {
      // to draw our player on every render
      this.draw();
      this.attackBox.position.y = this.position.y; //movement

      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x; //gravity 

      if (this.position.y + this.height + this.velocity.y >= canvas.height) {
        this.velocity.y = 0;
      } else {
        this.velocity.y += gravity;
      }

      if (this.isAttacking) {
        this.attackBox.position.x += this.attackBox.velocity;
      }
    }
  }, {
    key: "shoot",
    value: function shoot() {
      var _this = this;

      this.isAttacking = true;
      setTimeout(function () {
        _this.isAttacking = false;
      }, 100);
    }
  }, {
    key: "takeHit",
    value: function takeHit() {
      this.health -= 10;
    }
  }]);

  return Fighter;
}(); // Platform Class


var Platform = /*#__PURE__*/function () {
  function Platform(_ref3) {
    var position = _ref3.position,
        image = _ref3.image;

    _classCallCheck(this, Platform);

    this.position = position, this.image = image, this.width = image.width, this.height = image.height;
    this.width = 100, this.height = 50;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height); // ctx.fillStyle = 'blue'
      // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
  }]);

  return Platform;
}(); // Background Class 


var Background = /*#__PURE__*/function () {
  function Background(_ref4) {
    var position = _ref4.position,
        image = _ref4.image,
        _ref4$width = _ref4.width,
        width = _ref4$width === void 0 ? image.width : _ref4$width,
        _ref4$height = _ref4.height,
        height = _ref4$height === void 0 ? image.height : _ref4$height,
        offset = _ref4.offset;

    _classCallCheck(this, Background);

    this.position = position, this.image = image, this.width = width, this.height = height;
    this.offset = offset;
  }

  _createClass(Background, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Background;
}();

var backgroundImage = createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var backstructureImg = createImage(_img_back_structures_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var backgrounds = []; // Background

for (var i = 0; i <= 50; i++) {
  backgrounds.push(new Background({
    position: {
      x: 500 * i,
      y: 0
    },
    image: backgroundImage,
    width: 500,
    height: canvas.height,
    offset: {
      velocity: {
        x: 1
      }
    }
  }));
} // Background and platforms implementation
//BackStructures


for (var _i = 0; _i <= 50; _i++) {
  backgrounds.push(new Background({
    position: {
      x: 700 * _i,
      y: 0
    },
    image: backstructureImg,
    width: 500,
    height: canvas.height,
    offset: {
      velocity: {
        x: 3
      }
    }
  }));
} //platform


var platformImage = createImage(_img_floor_png__WEBPACK_IMPORTED_MODULE_1__["default"]); // const platforms = [
//   new Platform({
// position: { x: 0, y: 400 },
// image: platformImage
//   }
//   ),
//   new Platform({
//     position: { x: 200, y: 400 },
//     image: platformImage
//   }
//   ),
// ]

var platforms = [];

for (var _i2 = 0; _i2 <= 500; _i2++) {
  platforms.push(new Platform({
    position: {
      x: _i2 * 100,
      y: 500
    },
    image: platformImage
  }));
} // Player


var player = new Fighter({
  position: {
    x: 100,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  attackBox: {
    position: {
      x: 100,
      y: 0
    },
    width: 100,
    height: 50,
    velocity: 20
  }
}); // Enemies

var enemies = [new Fighter({
  position: {
    x: 400,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: 50,
  attackBox: {
    width: 100,
    height: 50,
    velocity: -20
  }
}), new Fighter({
  position: {
    x: 700,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: 50,
  attackBox: {
    width: 100,
    height: 50,
    velocity: -20
  }
})]; // enemy attack

enemies.forEach(function (enemy) {
  setInterval(function () {
    enemy.shoot();
  }, 200);
}); // Animation Loop -----------------------------------------------------------------------

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height); // draw backgrounds

  backgrounds.forEach(function (background) {
    return background.draw();
  }); //platform collision   

  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width && player.position.y + player.height + player.velocity.y >= platform.position.y) {
      player.velocity.y = 0;
    }

    enemies.forEach(function (enemy) {
      if (enemy.position.y + enemy.height <= platform.position.y && enemy.position.x + enemy.width >= platform.position.x && enemy.position.x <= platform.position.x + platform.width && enemy.position.y + enemy.height + enemy.velocity.y >= platform.position.y) {
        enemy.velocity.y = 0;
      }
    });
  }); // draw platform

  platforms.forEach(function (platform) {
    platform.draw();
  }); //Player movement 

  player.velocity.x = 0;

  if (keys.a.pressed && player.lastKey === 'a' && player.position.x >= 100) {
    player.velocity.x = -5;
  } else if (keys.d.pressed && player.lastKey === 'd' && player.position.x <= 400) {
    player.velocity.x = 5;
  } else {
    if (keys.d.pressed) {
      platforms.forEach(function (platform) {
        return platform.position.x -= 5;
      });
      backgrounds.forEach(function (background) {
        background.position.x -= background.offset.velocity.x;
      });
      enemies.forEach(function (enemy) {
        enemy.position.x -= 5;
      });
    } else if (keys.a.pressed) {
      platforms.forEach(function (platform) {
        return platform.position.x += 5;
      });
      backgrounds.forEach(function (background) {
        background.position.x += background.offset.velocity.x;
      });
      enemies.forEach(function (enemy) {
        enemy.position.x += 5;
      });
    }
  } // enemy movement


  enemies.forEach(function (enemy) {
    enemy.velocity.x = 0;

    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft' && enemy.position.x >= 5) {
      enemy.velocity.x = -5;
    } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight' && enemy.position.x + enemy.width <= canvas.width - 4) {
      enemy.velocity.x = 5;
    }
  }); // detect for collision

  enemies.forEach(function (enemy) {
    if (rectangularCollision({
      rectangle1: player,
      rectangle2: enemy
    })) {
      enemy.takeHit();
      player.isAttacking = false;
      console.log("enemy health: ".concat(enemy.health));
    }

    if (rectangularCollision({
      rectangle1: enemy,
      rectangle2: player
    })) {
      player.takeHit();
      enemy.isAttacking = false;
      console.log("player health: ".concat(player.health));
    }
  }); //update enemy

  enemies.forEach(function (enemy) {
    if (enemy.health > 0) {
      enemy.update();
    }
  }); // update player 

  player.update();
}

animate(); // // enemy AI
// const randomness = Math.floor(Math.random() * 10)
// if (player.isAttacking && rectangularCollision({ rectangle1: player, rectangle2: enemy })) {
//     if (randomness > 6) {
//         enemy.velocity.y = -30
//     }
// }
// if (randomness * 10 >= 80 && enemy.position.x - player.position.x < 100) {
//     if (randomness % 2 === 0 && player.velocity.x <= 2) {
//         enemy.shoot()
//     }
// }
// if (randomness > 5) {
//     enemy.velocity.x = -3
// } else (
//     enemy.velocity.x = 3
// )
// if (keys.a.pressed && player.position.x >= canvas.width / 3) {
//     if (randomness >= 8) {
//         enemy.velocity.x = -10
//     }
// }
// if ((enemy.position.x + enemy.width >= canvas.width - 100) || (enemy.position.x + enemy.velocity.x <= 300)) {
//     enemy.velocity.x = 0
// }
// if (keys.d.pressed) {
//     if (player.position.x > canvas.width / 3 && enemy.position.x >= 500) {
//         enemy.velocity.x -= 5
//     }
// }

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map