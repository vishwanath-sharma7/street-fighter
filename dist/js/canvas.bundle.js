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

/***/ "./src/img/enemy/alien-enemy-walk.png":
/*!********************************************!*\
  !*** ./src/img/enemy/alien-enemy-walk.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fba60699ca6e329bcf00705313e9e38f.png");

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

/***/ "./src/img/ghost-shriek.png":
/*!**********************************!*\
  !*** ./src/img/ghost-shriek.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "60f34445a968f0017ba56090e66891cc.png");

/***/ }),

/***/ "./src/img/hell-hound-run.png":
/*!************************************!*\
  !*** ./src/img/hell-hound-run.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "29919a343ec71a92c2663bdaa4e9a696.png");

/***/ }),

/***/ "./src/img/player/bullet.png":
/*!***********************************!*\
  !*** ./src/img/player/bullet.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e427ac7f38c59471609e17cf8df5ab83.png");

/***/ }),

/***/ "./src/img/player/player-die.png":
/*!***************************************!*\
  !*** ./src/img/player/player-die.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5aa6fd65428823ec3b32b2f8a435428f.png");

/***/ }),

/***/ "./src/img/player/player-idle.png":
/*!****************************************!*\
  !*** ./src/img/player/player-idle.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "704689d2b7cbbe95851878113c0649b8.png");

/***/ }),

/***/ "./src/img/player/player-jump.png":
/*!****************************************!*\
  !*** ./src/img/player/player-jump.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f56f40b3915cae68aae40ea49a0e0a46.png");

/***/ }),

/***/ "./src/img/player/player-run.png":
/*!***************************************!*\
  !*** ./src/img/player/player-run.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4d5164e4e2a83b541d7ef2275fbb275f.png");

/***/ }),

/***/ "./src/img/player/player-shoot.png":
/*!*****************************************!*\
  !*** ./src/img/player/player-shoot.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1346e517677b421c4645f4db8c043dee.png");

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
/* harmony import */ var _img_player_player_idle_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/player/player-idle.png */ "./src/img/player/player-idle.png");
/* harmony import */ var _img_player_player_run_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/player/player-run.png */ "./src/img/player/player-run.png");
/* harmony import */ var _img_player_player_jump_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/player/player-jump.png */ "./src/img/player/player-jump.png");
/* harmony import */ var _img_player_player_shoot_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/player/player-shoot.png */ "./src/img/player/player-shoot.png");
/* harmony import */ var _img_player_bullet_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/player/bullet.png */ "./src/img/player/bullet.png");
/* harmony import */ var _img_player_player_die_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/player/player-die.png */ "./src/img/player/player-die.png");
/* harmony import */ var _img_enemy_alien_enemy_walk_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/enemy/alien-enemy-walk.png */ "./src/img/enemy/alien-enemy-walk.png");
/* harmony import */ var _img_ghost_shriek_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/ghost-shriek.png */ "./src/img/ghost-shriek.png");
/* harmony import */ var _img_hell_hound_run_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/hell-hound-run.png */ "./src/img/hell-hound-run.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }













var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 2480;
canvas.height = 540; // utils ----------------------------------------------

var gravity = 0.2;
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
  }
}; //rectangular collision 

function rectangularCollision(_ref) {
  var rectangle1 = _ref.rectangle1,
      rectangle2 = _ref.rectangle2;
  return rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width && rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height;
} // // collision detection for platform 
// function platformCollision() {
//   platforms.forEach(platform =>
//   (
//     player.position.y + player.height <= platform.position.y &&
//     player.position.x + player.width >= platform.position.x &&
//     player.position.x <= platform.position.x + platform.width && player.position.y + player.height + player.velocity.y >= platform.position.y
//   )
//   )
// }


window.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'w':
      platforms.forEach(function (platform) {
        if (player.position.y + player.height >= canvas.height || player.position.y + player.height >= platform.position.y - 5 && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
          player.velocity.y = -10;
        }
      });
      airPlatforms.forEach(function (platform) {
        if (player.position.y + player.height >= canvas.height || player.position.y + player.height >= platform.position.y - 5 && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
          player.velocity.y = -10;
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
  }
}); // Classes ---------------------------------------------------------------------
// Player Class 

var Player = /*#__PURE__*/function () {
  function Player(_ref2) {
    var _ref2$offset = _ref2.offset,
        offset = _ref2$offset === void 0 ? {
      x: 0,
      y: 0
    } : _ref2$offset,
        position = _ref2.position,
        velocity = _ref2.velocity,
        _ref2$color = _ref2.color,
        color = _ref2$color === void 0 ? 'red' : _ref2$color,
        _ref2$attackBoxOffset = _ref2.attackBoxOffset,
        attackBoxOffset = _ref2$attackBoxOffset === void 0 ? 0 : _ref2$attackBoxOffset,
        attackBox = _ref2.attackBox,
        image = _ref2.image,
        scale = _ref2.scale,
        _ref2$framesMax = _ref2.framesMax,
        framesMax = _ref2$framesMax === void 0 ? 1 : _ref2$framesMax,
        sprites = _ref2.sprites,
        framesHold = _ref2.framesHold,
        framesCurrent = _ref2.framesCurrent,
        _ref2$canFall = _ref2.canFall,
        canFall = _ref2$canFall === void 0 ? true : _ref2$canFall;

    _classCallCheck(this, Player);

    this.position = position;
    this.velocity = velocity;
    this.width = 50;
    this.height = 150;
    this.lastKey;
    this.attackBox = attackBox;
    this.color = color;
    this.attackBoxOffset = attackBoxOffset;
    this.isAttacking = false;
    this.health = 100;
    this.attackBox.position = {
      x: this.position.x,
      y: this.position.y
    };
    this.scale = scale;
    this.framesMax = framesMax;
    this.framesCurrent = framesCurrent;
    this.framesElapsed = 0;
    this.framesHold = framesHold;
    this.offset = offset;
    this.image = image;
    this.lookingRight = true;
    this.sprites = sprites;
    this.dead = false;
    this.canFall = canFall;

    for (var sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      // draw out the player
      // ctx.fillStyle = this.color
      // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
      if (this.lookingRight) {
        ctx.drawImage(this.image, this.framesCurrent * (this.image.width / this.framesMax), 0, this.image.width / this.framesMax, this.image.height, this.position.x - this.offset.x, this.position.y - this.offset.y, this.image.width / this.framesMax * this.scale, this.image.height * this.scale);
      } else {
        ctx.translate(this.position.x + this.image.width, this.position.y);
        ctx.scale(-1, 1);
        ctx.drawImage(this.image, this.framesCurrent * (this.image.width / this.framesMax), 0, this.image.width / this.framesMax, this.image.height, this.image.width - this.offset.x - 40, this.image.height + 20, this.image.width / this.framesMax * this.scale, this.image.height * this.scale);
        ctx.setTransform(1, 0, 0, 1, 0, 1);
      }

      var Bullet = createImage(_img_player_bullet_png__WEBPACK_IMPORTED_MODULE_7__["default"]); //draw out the attackBox

      if (this.isAttacking) {
        ctx.drawImage(Bullet, this.attackBox.position.x - this.attackBoxOffset.x, this.attackBox.position.y - -this.attackBoxOffset.y);
      } else {
        this.attackBox.position.x = this.position.x - this.attackBoxOffset.x;
        this.attackBox.position.y = this.position.y - this.attackBoxOffset.y;
      }
    }
  }, {
    key: "animateFrames",
    value: function animateFrames() {
      this.framesElapsed++;

      if (this.framesElapsed % this.framesHold === 0) {
        if (this.framesCurrent < this.framesMax - 1) {
          this.framesCurrent++;
        } else {
          this.framesCurrent = 0;
        }
      }
    } //to update our player on every render

  }, {
    key: "update",
    value: function update() {
      // to draw our player on every render
      this.draw();

      if (!this.dead) {
        this.animateFrames();
      }

      this.attackBox.position.y = this.position.y; //movement

      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x; //gravity 

      if (this.canFall) {
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
          this.velocity.y = 0;
        } else {
          this.velocity.y += gravity;
        }

        if (this.isAttacking) {
          if (this.lookingRight) {
            this.attackBox.position.x += this.attackBox.velocity;
          } else {
            this.attackBox.position.x -= this.attackBox.velocity;
          }
        }
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
      this.health -= 30;

      if (this.health <= 0) {
        this.switchSprite('die');
      }
    }
  }, {
    key: "switchSprite",
    value: function switchSprite(sprite) {
      if (this.image === this.sprites.die.image) {
        if (this.framesCurrent === this.sprites.die.framesMax - 1) {
          this.dead = true;
        }

        return;
      }

      switch (sprite) {
        case 'idle':
          if (this.image !== this.sprites.idle.image) {
            this.image = this.sprites.idle.image;
            this.framesMax = this.sprites.idle.framesMax;
            this.framesCurrent = 0;
          }

          break;

        case 'run':
          if (this.image !== this.sprites.run.image) {
            this.image = this.sprites.run.image;
            this.framesMax = this.sprites.run.framesMax;
            this.framesCurrent = 0;
          }

          break;

        case 'jump':
          if (this.image !== this.sprites.jump.image) {
            this.image = this.sprites.jump.image;
            this.framesMax = this.sprites.jump.framesMax;
            this.framesCurrent = 0;
          }

          break;

        case 'shoot':
          if (this.image !== this.sprites.shoot.image) {
            this.image = this.sprites.shoot.image;
            this.framesMax = this.sprites.shoot.framesMax;
            this.framesCurrent = 0;
          }

          break;

        case 'die':
          if (this.image !== this.sprites.die.image) {
            this.image = this.sprites.die.image;
            this.framesMax = this.sprites.die.framesMax;
          }

      }
    }
  }]);

  return Player;
}(); // Platform Class


var Platform = /*#__PURE__*/function () {
  function Platform(_ref3) {
    var position = _ref3.position,
        image = _ref3.image;

    _classCallCheck(this, Platform);

    this.position = position, this.image = image, // this.width = image.width,
    // this.height = image.height
    this.width = 200, this.height = 50;
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
        _ref4$offset = _ref4.offset,
        offset = _ref4$offset === void 0 ? {} : _ref4$offset;

    _classCallCheck(this, Background);

    this.position = position, this.image = image, this.width = width, this.height = height, this.offset = offset;
  }

  _createClass(Background, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
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
//     position: { x: 0, y: 400 },
//     image: platformImage
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
}

var airPlatforms = [];

for (var _i3 = 0; _i3 <= 500; _i3++) {
  if (_i3 % 3 === 0) {
    airPlatforms.push(new Platform({
      position: {
        x: _i3 * 100,
        y: Math.floor(Math.random() * 100 + 300)
      },
      image: platformImage
    }));
  }
} // Player


var player = new Player({
  position: {
    x: 1000,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  attackBox: {
    position: {
      x: 100,
      y: 100
    },
    width: 100,
    height: 50,
    velocity: 20
  },
  attackBoxOffset: {
    x: 0,
    y: 113
  },
  image: _img_player_player_idle_png__WEBPACK_IMPORTED_MODULE_3__["default"],
  scale: 2,
  framesMax: 4,
  framesHold: 18,
  offset: {
    x: 0,
    y: -67
  },
  sprites: {
    idle: {
      imageSrc: _img_player_player_idle_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      framesMax: 4
    },
    run: {
      imageSrc: _img_player_player_run_png__WEBPACK_IMPORTED_MODULE_4__["default"],
      framesMax: 11
    },
    jump: {
      imageSrc: _img_player_player_jump_png__WEBPACK_IMPORTED_MODULE_5__["default"],
      framesMax: 6
    },
    shoot: {
      imageSrc: _img_player_player_shoot_png__WEBPACK_IMPORTED_MODULE_6__["default"],
      framesMax: 2
    },
    die: {
      imageSrc: _img_player_player_die_png__WEBPACK_IMPORTED_MODULE_8__["default"],
      framesMax: 4
    }
  }
});
var ghostImage = createImage(_img_ghost_shriek_png__WEBPACK_IMPORTED_MODULE_10__["default"]);
var enemyImage = createImage(_img_enemy_alien_enemy_walk_png__WEBPACK_IMPORTED_MODULE_9__["default"]);
var houndImage = createImage(_img_hell_hound_run_png__WEBPACK_IMPORTED_MODULE_11__["default"]); // Enemies

var enemies = [];

for (var _i4 = 0; _i4 < 1000; _i4++) {
  if (_i4 % 17 === 0) {
    enemies.push(new Player({
      position: {
        x: _i4 * 100,
        y: 0
      },
      velocity: {
        x: -0.5,
        y: 0
      },
      attackBox: {
        position: {
          x: 100,
          y: 100
        },
        width: 100,
        height: 50,
        velocity: 20
      },
      attackBoxOffset: {
        x: 0,
        y: 113
      },
      image: enemyImage,
      scale: 2,
      framesMax: 6,
      framesHold: 18,
      offset: {
        x: 0,
        y: -83
      },
      sprites: {
        idle: {
          imageSrc: enemyImage,
          framesMax: 6
        },
        run: {
          imageSrc: enemyImage,
          framesMax: 6
        },
        jump: {
          imageSrc: enemyImage,
          framesMax: 6
        },
        shoot: {
          imageSrc: enemyImage,
          framesMax: 6
        },
        die: {}
      }
    }));
  }

  if (_i4 % 13 === 0) {
    enemies.push(new Player({
      position: {
        x: _i4 * 100 + 600,
        y: 150
      },
      velocity: {
        x: -1,
        y: 0
      },
      attackBox: {
        position: {
          x: 100,
          y: 100
        },
        width: 100,
        height: 50,
        velocity: 20
      },
      attackBoxOffset: {
        x: 0,
        y: 113
      },
      image: ghostImage,
      scale: 2,
      framesMax: 4,
      framesHold: 18,
      offset: {
        x: 0,
        y: -60
      },
      canFall: false,
      sprites: {
        idle: {
          imageSrc: ghostImage,
          framesMax: 4
        },
        run: {
          imageSrc: ghostImage,
          framesMax: 4
        },
        jump: {
          imageSrc: ghostImage,
          framesMax: 4
        },
        shoot: {
          imageSrc: ghostImage,
          framesMax: 4
        },
        die: {}
      }
    }));
  }

  if (_i4 % 27 === 0) {
    enemies.push(new Player({
      position: {
        x: _i4 * 200 + 900,
        y: 0
      },
      velocity: {
        x: -3,
        y: 0
      },
      attackBox: {
        position: {
          x: 100,
          y: 100
        },
        width: 100,
        height: 50,
        velocity: 20
      },
      attackBoxOffset: {
        x: 0,
        y: 113
      },
      image: houndImage,
      scale: 1,
      framesMax: 4,
      framesHold: 12,
      offset: {
        x: 0,
        y: -65
      },
      sprites: {
        idle: {
          imageSrc: houndImage,
          framesMax: 4
        },
        run: {
          imageSrc: houndImage,
          framesMax: 4
        },
        jump: {
          imageSrc: houndImage,
          framesMax: 4
        },
        shoot: {
          imageSrc: houndImage,
          framesMax: 4
        },
        die: {}
      }
    }));
  }
} // //enemy attack
// enemies.forEach(enemy => {
//   setInterval(() => {
//     enemy.shoot()
//   }, 200)
// })


init();

function init() {
  // Animation Loop -----------------------------------------------------------------------
  function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height); // draw backgrounds

    backgrounds.forEach(function (background) {
      return background.update();
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
    });
    airPlatforms.forEach(function (platform) {
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
    }); // draw air platforms

    airPlatforms.forEach(function (platform) {
      return platform.draw();
    }); //Player movement 

    player.velocity.x = 0;

    if (keys.a.pressed && player.lastKey === 'a' && player.position.x >= 700) {
      player.switchSprite('run');
      player.velocity.x = -5;
      player.lookingRight = false;
    } else if (keys.d.pressed && player.lastKey === 'd' && player.position.x <= 1200) {
      player.switchSprite('run');
      player.velocity.x = 5;
      player.lookingRight = true;
    } else {
      if (keys.d.pressed) {
        player.switchSprite('run');
        platforms.forEach(function (platform) {
          return platform.position.x -= 5;
        });
        airPlatforms.forEach(function (platform) {
          return platform.position.x -= 5;
        });
        backgrounds.forEach(function (background) {
          background.position.x -= background.offset.velocity.x;
        });
        enemies.forEach(function (enemy) {
          enemy.position.x -= 5;
        });
      } else if (keys.a.pressed && player.velocity.x !== 0) {
        player.switchSprite('run');
        player.lookingRight = false;
        platforms.forEach(function (platform) {
          return platform.position.x += 5;
        });
        airPlatforms.forEach(function (platform) {
          return platform.position.x += 5;
        });
        backgrounds.forEach(function (background) {
          background.position.x += background.offset.velocity.x;
        });
        enemies.forEach(function (enemy) {
          enemy.position.x += 5;
        });
      } else if (player.velocity.y < 0) {
        player.switchSprite('jump');
      } else {
        player.switchSprite('idle');
      }

      if (player.isAttacking) {
        player.switchSprite('shoot');
      }
    } // if (player.dead) {
    //   init()
    // }
    // enemy movement


    enemies.forEach(function (enemy) {
      enemy.velocity.x = enemy.velocity.x;
    }); // detect for collision

    enemies.forEach(function (enemy) {
      if (rectangularCollision({
        rectangle1: player,
        rectangle2: enemy
      }) && player.isAttacking) {
        enemy.takeHit();
        player.isAttacking = false;
        console.log("enemy health: ".concat(enemy.health));
      }

      if (rectangularCollision({
        rectangle1: enemy,
        rectangle2: player
      })) {
        // player.health = 0
        // player.dead = true
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

  animate();
} // // enemy AI
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