import image from '../img/background.png'
import floor from '../img/floor.png'
import backstructures from '../img/back-structures.png'
import playerImage from '../img/player/player-idle.png'
import playerRun from '../img/player/player-run.png'
import playerJump from '../img/player/player-jump.png'
import playerShoot from '../img/player/player-shoot.png'
import bullet from '../img/player/bullet.png'
import playerDie from '../img/player/player-die.png'






const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 960
canvas.height = 540

// utils ----------------------------------------------
const gravity = 0.2
ctx.fillRect(0, 0, canvas.width, canvas.height)


//image 
function createImage(imageSrc) {
  const image = new Image()
  image.src = imageSrc
  return image
}

// keyStatus
const keys = {
  a: { pressed: false },
  d: { pressed: false },
  ArrowLeft: { pressed: false },
  ArrowRight: { pressed: false },
}

//rectangular collision 
function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
    rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height &&
    rectangle1.isAttacking
  )
}


// // collision detection for platform 
// function platformCollision() {

//   platforms.forEach(platform =>
//   (
//     player.position.y + player.height <= platform.position.y &&
//     player.position.x + player.width >= platform.position.x &&
//     player.position.x <= platform.position.x + platform.width && player.position.y + player.height + player.velocity.y >= platform.position.y
//   )
//   )
// }

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'w':
      platforms.forEach(platform => {

        if (player.position.y + player.height >= canvas.height || (player.position.y + player.height >= platform.position.y - 5 && player.position.x + player.width >= platform.position.x &&
          player.position.x <= platform.position.x + platform.width)) {
          player.velocity.y = -10
        }
      })
      break
    case ' ':
      player.shoot()
      break
    case 'a':
      keys.a.pressed = true
      player.lastKey = 'a'
      break
    case 'd':
      keys.d.pressed = true
      player.lastKey = 'd'
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = true
      enemy.lastKey = 'ArrowLeft'
      break
    case 'ArrowRight':
      keys.ArrowRight.pressed = true
      enemy.lastKey = 'ArrowRight'
      break
    case 'ArrowUp':
      if (enemy.position.y + enemy.height >= canvas.height) {
        enemy.velocity.y = -25
      }
      break
    case 'ArrowDown':
      enemy.shoot()
      break

  }
}
)
window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'a':
      keys.a.pressed = false
      break
    case 'd':
      keys.d.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
  }

})


// Classes ---------------------------------------------------------------------


// Player Class 
class Fighter {
  constructor({ offset = { x: 0, y: 0 }, position, velocity, color = 'red', attackBoxOffset = 0, attackBox, image, scale, framesMax = 1, sprites, framesHold, framesCurrent }) {
    this.position = position
    this.velocity = velocity
    this.width = 50
    this.height = 150
    this.lastKey
    this.attackBox = attackBox
    this.color = color
    this.attackBoxOffset = attackBoxOffset
    this.isAttacking = false
    this.health = 100
    this.attackBox.position = { x: this.position.x, y: this.position.y }
    this.scale = scale
    this.framesMax = framesMax
    this.framesCurrent = framesCurrent
    this.framesElapsed = 0
    this.framesHold = framesHold
    this.offset = offset
    this.image = image
    this.lookingRight = true
    this.sprites = sprites
    this.dead = false



    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image()
      sprites[sprite].image.src = sprites[sprite].imageSrc

    }


  }
  draw() {
    // draw out the player
    // ctx.fillStyle = this.color
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    if (this.lookingRight) {
      ctx.drawImage(
        this.image,
        this.framesCurrent * (this.image.width / this.framesMax),
        0,
        this.image.width / this.framesMax,
        this.image.height,
        this.position.x - this.offset.x,
        this.position.y - this.offset.y,
        (this.image.width / this.framesMax) * this.scale,
        this.image.height * this.scale)
    } else {
      ctx.translate(this.position.x + this.image.width, this.position.y)
      ctx.scale(-1, 1)
      ctx.drawImage(
        this.image,
        this.framesCurrent * (this.image.width / this.framesMax),
        0,
        this.image.width / this.framesMax,
        this.image.height,
        this.image.width - this.offset.x - 40,
        this.image.height + 20,
        (this.image.width / this.framesMax) * this.scale,
        this.image.height * this.scale)
      ctx.setTransform(1, 0, 0, 1, 0, 1);

    }
    const Bullet = createImage(bullet)
    //draw out the attackBox
    if (this.isAttacking) {

      ctx.drawImage(Bullet, this.attackBox.position.x - this.attackBoxOffset.x, this.attackBox.position.y - - this.attackBoxOffset.y)
    } else {
      this.attackBox.position.x = this.position.x - this.attackBoxOffset.x
      this.attackBox.position.y = this.position.y - this.attackBoxOffset.y




    }
  }
  animateFrames() {
    this.framesElapsed++

    if (this.framesElapsed % this.framesHold === 0) {

      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++
      } else {
        this.framesCurrent = 0
      }
    }
  }

  //to update our player on every render
  update() {
    // to draw our player on every render
    this.draw()
    if (!this.dead) {
      this.animateFrames()
    }

    this.attackBox.position.y = this.position.y
    //movement
    this.position.y += this.velocity.y
    this.position.x += this.velocity.x

    //gravity 
    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0
    } else {
      this.velocity.y += gravity
    }
    if (this.isAttacking) {
      if (this.lookingRight) {

        this.attackBox.position.x += this.attackBox.velocity
      } else {
        this.attackBox.position.x -= this.attackBox.velocity

      }
    }
  }

  shoot() {
    this.isAttacking = true
    setTimeout(() => {
      this.isAttacking = false
    }, 100)
  }

  takeHit() {
    this.health -= 10
    if (this.health <= 0) {
      this.switchSprite('die')
    }
  }
  switchSprite(sprite) {
    if (this.image === this.sprites.die.image) {
      if (this.framesCurrent === this.sprites.die.framesMax - 1) {
        this.dead = true
      }
      return

    }

    switch (sprite) {
      case 'idle':
        if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image
          this.framesMax = this.sprites.idle.framesMax
          this.framesCurrent = 0
        }
        break
      case 'run':
        if (this.image !== this.sprites.run.image) {
          this.image = this.sprites.run.image
          this.framesMax = this.sprites.run.framesMax
          this.framesCurrent = 0


        }
        break
      case 'jump':
        if (this.image !== this.sprites.jump.image) {
          this.image = this.sprites.jump.image
          this.framesMax = this.sprites.jump.framesMax
          this.framesCurrent = 0

        }
        break
      case 'shoot':
        if (this.image !== this.sprites.shoot.image) {
          this.image = this.sprites.shoot.image
          this.framesMax = this.sprites.shoot.framesMax
          this.framesCurrent = 0
        }
        break
      case 'die':
        if (this.image !== this.sprites.die.image) {
          this.image = this.sprites.die.image
          this.framesMax = this.sprites.die.framesMax
          framesCurrent = 0

        }
    }
  }


}
// Platform Class
class Platform {
  constructor({ position, image }) {
    this.position = position,
      this.image = image,
      this.width = image.width,
      this.height = image.height
    this.width = 100,
      this.height = 50
  }
  draw() {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    // ctx.fillStyle = 'blue'
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}


// Background Class 
class Background {
  constructor({ position, image, width = image.width, height = image.height, offset = {}, }) {
    this.position = position,
      this.image = image,
      this.width = width,
      this.height = height,
      this.offset = offset
  }
  draw() {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
  }
  update() {
    this.draw()
  }
}
const backgroundImage = createImage(image)
const backstructureImg = createImage(backstructures)


let backgrounds = []

// Background
for (let i = 0; i <= 50; i++) {
  backgrounds.push(
    new Background({
      position: { x: 500 * i, y: 0 },
      image: backgroundImage,
      width: 500,
      height: canvas.height,
      offset: {
        velocity: {
          x: 1,
        }
      }
    })

  )
}

// Background and platforms implementation

//BackStructures
for (let i = 0; i <= 50; i++) {
  backgrounds.push(

    new Background({
      position: { x: 700 * i, y: 0 },
      image: backstructureImg,
      width: 500,
      height: canvas.height,
      offset: {
        velocity: {
          x: 3,
        }
      }
    })

  )
}


//platform

const platformImage = createImage(floor)

// const platforms = [
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

let platforms = []

for (let i = 0; i <= 500; i++) {
  platforms.push(
    new Platform({
      position: { x: i * 100, y: 500 },
      image: platformImage
    })
  )
}


// Player
const player = new Fighter({
  position: { x: 100, y: 0 },
  velocity: { x: 0, y: 0 },
  attackBox: {
    position: { x: 100, y: 100 },
    width: 100,
    height: 50,
    velocity: 20,

  },
  attackBoxOffset: { x: 0, y: 113 },
  image: playerImage,
  scale: 2,
  framesMax: 4,
  framesHold: 18,
  offset: { x: 0, y: -67 },
  sprites: {
    idle: {
      imageSrc: playerImage,
      framesMax: 4,
    },
    run: {
      imageSrc: playerRun,
      framesMax: 11,
    },
    jump: {
      imageSrc: playerJump,
      framesMax: 6,

    },
    shoot: {
      imageSrc: playerShoot,
      framesMax: 2,
    },
    die: {
      imageSrc: playerDie,
      framesMax: 4,

    }

  }

})





// Enemies
const enemies = [new Fighter({
  position: { x: 100, y: 0 },
  velocity: { x: 0, y: 0 },
  attackBox: {
    position: { x: 100, y: 100 },
    width: 100,
    height: 50,
    velocity: 20,

  },
  attackBoxOffset: { x: 0, y: 113 },
  image: playerImage,
  scale: 2,
  framesMax: 4,
  framesHold: 18,
  offset: { x: 0, y: -67 },
  sprites: {
    idle: {
      imageSrc: playerImage,
      framesMax: 4,
    },
    run: {
      imageSrc: playerRun,
      framesMax: 11,
    },
    jump: {
      imageSrc: playerJump,
      framesMax: 6,

    },
    shoot: {
      imageSrc: playerShoot,
      framesMax: 2,
    },
    die: {
      imageSrc: playerDie,
      framesMax: 4,

    }

  }

})
]

// enemy attack
enemies.forEach(enemy => {
  setInterval(() => {
    enemy.shoot()
  }, 200)
})





// Animation Loop -----------------------------------------------------------------------
function animate() {
  requestAnimationFrame(animate)
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // draw backgrounds
  backgrounds.forEach(background => background.update())

  //platform collision   
  platforms.forEach(platform => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width && player.position.y + player.height + player.velocity.y >= platform.position.y
    ) {
      player.velocity.y = 0
    }
    enemies.forEach(enemy => {
      if (
        enemy.position.y + enemy.height <= platform.position.y &&
        enemy.position.x + enemy.width >= platform.position.x &&
        enemy.position.x <= platform.position.x + platform.width && enemy.position.y + enemy.height + enemy.velocity.y >= platform.position.y

      ) {
        enemy.velocity.y = 0
      }
    })
  }
  )

  // draw platform
  platforms.forEach(platform => { platform.draw() })



  //Player movement 
  player.velocity.x = 0

  if (keys.a.pressed && player.lastKey === 'a' && player.position.x >= 100) {
    player.switchSprite('run')

    player.velocity.x = -5
    player.lookingRight = false

  } else if (keys.d.pressed && player.lastKey === 'd' && player.position.x <= 400) {
    player.switchSprite('run')

    player.velocity.x = 5
    player.lookingRight = true


  } else {




    if (keys.d.pressed) {
      player.switchSprite('run')
      platforms.forEach(platform =>
        platform.position.x -= 5
      )
      backgrounds.forEach(background => {

        background.position.x -= background.offset.velocity.x
      })
      enemies.forEach(enemy => {
        enemy.position.x -= 5
      })
    } else if (keys.a.pressed) {
      player.switchSprite('run')

      player.lookingRight = false

      platforms.forEach(platform =>
        platform.position.x += 5
      )
      backgrounds.forEach(background => {

        background.position.x += background.offset.velocity.x
      })
      enemies.forEach(enemy => {
        enemy.position.x += 5
      })
    } else if (player.velocity.y < 0) {
      player.switchSprite('jump')
    } else {
      player.switchSprite('idle')
    }
    if (player.isAttacking) {
      player.switchSprite('shoot')
    }

  }












  // enemy movement
  enemies.forEach(enemy => {

    enemy.velocity.x = 0
    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft' && enemy.position.x >= 5) {
      enemy.velocity.x = -5
    } else if (
      keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight' && enemy.position.x + enemy.width <= canvas.width - 4) {
      enemy.velocity.x = 5
    }
  })



  // detect for collision
  enemies.forEach(enemy => {
    if (rectangularCollision({ rectangle1: player, rectangle2: enemy })) {
      enemy.takeHit()
      player.isAttacking = false
      console.log(`enemy health: ${enemy.health}`)
    }

    if (rectangularCollision({ rectangle1: enemy, rectangle2: player })) {
      player.takeHit()

      enemy.isAttacking = false
      console.log(`player health: ${player.health}`)
    }
  })
  //update enemy
  // enemies.forEach(enemy => {
  //   if (enemy.health > 0) {
  //     enemy.update()
  //   }
  // })

  // update player 
  player.update()
}

animate()



  // // enemy AI
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
