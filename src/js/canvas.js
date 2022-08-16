import image from '../img/background.png'
import floor from '../img/floor.png'
import backstructures from '../img/back-structures.png'
import playerImage from '../img/player/player-idle.png'
import playerRun from '../img/player/player-run.png'
import playerJump from '../img/player/player-jump.png'
import playerShoot from '../img/player/player-shoot.png'
import bullet from '../img/player/bullet.png'
import playerDie from '../img/player/player-die.png'

import enemyWalk from '../img/enemy/alien-enemy-walk.png'
import ghostBoo from '../img/ghost-shriek.png'
import houndrun from '../img/hell-hound-run.png'



const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 2480
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

}

//rectangular collision 
function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
    rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
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
      airPlatforms.forEach(platform => {

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
  }

})


// Classes ---------------------------------------------------------------------

// Player Class 
class Player {
  constructor({ offset = { x: 0, y: 0 }, position, velocity, color = 'red', attackBoxOffset = 0, attackBox, image, scale, framesMax = 1, sprites, framesHold, framesCurrent, canFall = true }) {
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
    this.canFall = canFall



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

    if(this.canFall) {

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
    
  }
    shoot() {
    this.isAttacking = true
    setTimeout(() => {
      this.isAttacking = false
    }, 100)
  }

  takeHit() {
    this.health -= 30
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
          
        }
    }
  }

}






// Platform Class
class Platform {
  constructor({ position, image }) {
    this.position = position,
      this.image = image,
      // this.width = image.width,
      // this.height = image.height
    this.width = 200,
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

let airPlatforms = []


for( let i = 0; i<= 500; i++) {
  if(i%3 === 0) {

    airPlatforms.push(
      new Platform({
        position:{x: i* 100, y: Math.floor(Math.random()*100 + 300)},
        image: platformImage
      })
      )
    }
}


// Player
const player = new Player({ 
  position: { x: 1000, y: 0 },
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


const ghostImage = createImage(ghostBoo)

const enemyImage = createImage(enemyWalk)
const houndImage = createImage(houndrun)

// Enemies
let enemies = []


  
  for(let i = 0; i< 1000; i++) {
    if(i % 17 === 0) {
      

      enemies.push(
      new Player({
        position: { x: i * 100, y: 0 },
        velocity: { x: -0.5, y: 0 },
        attackBox: {
          position: { x: 100, y: 100 },
          width: 100,
          height: 50,
          velocity: 20,
          
        },
        attackBoxOffset: { x: 0, y: 113 },
        image: enemyImage,
        scale: 2,
        framesMax: 6,
        framesHold: 18,
        offset: { x: 0, y: -83 },
        sprites: {
          idle: {
            imageSrc: enemyImage,
            framesMax: 6,
          },
          run: {
            imageSrc: enemyImage,
            framesMax: 6,
          },
          jump: {
            imageSrc: enemyImage,
            framesMax: 6,
            
        },
        shoot: {
          imageSrc: enemyImage,
          framesMax: 6,
        },
        die: {
          
        }
        
        
      }
      
    }),
    
    )
    
  }
  
  if ( i % 13=== 0 ) {
    enemies.push(
      
      new Player({
        position: { x: i *100 + 600, y: 150 },
        velocity: { x: -1, y: 0 },
        attackBox: {
          position: { x: 100, y: 100 },
          width: 100,
          height: 50,
          velocity: 20,

        },
        attackBoxOffset: { x: 0, y: 113 },
        image: ghostImage,
        scale: 2,
        framesMax: 4,
        framesHold: 18,
        offset: { x: 0, y: -60 },
        canFall :false,
        sprites: {
          idle: {
            imageSrc: ghostImage,
            framesMax: 4,
          },
          run: {
            imageSrc: ghostImage,
            framesMax: 4,
          },
          jump: {
            imageSrc: ghostImage,
            framesMax: 4,
            
          },
          shoot: {
            imageSrc: ghostImage,
            framesMax: 4,
          },
          die: {
            
          }
          
          
        }
        
      }),
      
      )
      
    }
    
    if ( i % 27 === 0) {
      enemies.push( 
        new Player({
          position: { x: i * 200 + 900, y: 0 },
          velocity: { x: -3, y: 0 },
          attackBox: {
            position: { x: 100, y: 100 },
            width: 100,
            height: 50,
            velocity: 20,
            
          },
          attackBoxOffset: { x: 0, y: 113 },
          image: houndImage,
          scale: 1,
          framesMax: 4,
          framesHold: 12,
          offset: { x: 0, y: -65 },
        sprites: {
          idle: {
            imageSrc: houndImage,
            framesMax: 4,
          },
          run: {
            imageSrc: houndImage,
            framesMax: 4,
          },
          jump: {
            imageSrc: houndImage,
            framesMax: 4,
            
          },
          shoot: {
            imageSrc: houndImage,
            framesMax: 4,
          },
          die: {
            
          }
          
          
        }
        
      })
      
      
      )
    }
    
  }
  // //enemy attack
  // enemies.forEach(enemy => {
    //   setInterval(() => {
      //     enemy.shoot()
      //   }, 200)
// })

init()



function init() {

       
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

      airPlatforms.forEach(platform => {
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
        // draw air platforms
        airPlatforms.forEach(platform => platform.draw())
        
        
        //Player movement 
        player.velocity.x = 0
        
        if (keys.a.pressed && player.lastKey === 'a' && player.position.x >= 700) {
      player.switchSprite('run')
      
      player.velocity.x = -5
      player.lookingRight = false
      
    } else if (keys.d.pressed && player.lastKey === 'd' && player.position.x <= 1200) {
      player.switchSprite('run')
      
      
      player.velocity.x = 5
      player.lookingRight = true
      
      
    } else {
      
      
      
      
          if (keys.d.pressed  ) {
        player.switchSprite('run')
        
        platforms.forEach(platform =>
          platform.position.x -= 5
          )
        airPlatforms.forEach(platform =>
          platform.position.x -= 5
        )
          backgrounds.forEach(background => {
            
            background.position.x -= background.offset.velocity.x
          })
          enemies.forEach(enemy => {
            enemy.position.x -= 5
          })
          } else if (keys.a.pressed && player.velocity.x !== 0) {
          player.switchSprite('run')
          
          player.lookingRight = false
          
          platforms.forEach(platform =>
            platform.position.x += 5
            )
        airPlatforms.forEach(platform =>
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
      
      
      
      
      
      // if (player.dead) {

      //   init()
      // }
      
      
      
      
      
      
      // enemy movement
      enemies.forEach(enemy => {
        enemy.velocity.x = enemy.velocity.x
      })
      
      
      
      // detect for collision
      enemies.forEach(enemy => {
        if (rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
        player.isAttacking) {
          enemy.takeHit()
          player.isAttacking = false
          console.log(`enemy health: ${enemy.health}`)
          
        }
        
        if (rectangularCollision({ rectangle1: enemy, rectangle2: player })) {
          // player.health = 0
          // player.dead = true
          enemy.isAttacking = false
          console.log(`player health: ${player.health}`)
          
        }
      })
      //update enemy
      enemies.forEach(enemy => {
        if (enemy.health > 0) {
          enemy.update()
        }
      })
      
      
      // update player 
      player.update()
    }
    
    
    animate()
 
  
}
  
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
