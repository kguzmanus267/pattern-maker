const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1200
canvas.height= 800
//zips 1-10 dare lines on xy axis
class Zip {
    constructor(){
        this.position = {
            x:10,
            y:5
        }
        this.velocity = {
            x:5,
            y:5
        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y,this.width,this.height)
     c.drawImage(
        this.image, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
    }
    update(){
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
    
    }}

}
class Zip2{
    constructor(){
        this.position = {
            x:10,
            y:34
        }
        this.velocity = {
            x:5,
            y:34        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y,this.width,this.height)
     c.drawImage(
        this.image, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
    }
    update(){
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
    
    }}
}
class Zip3{
    constructor(){
        this.position = {
            x:10,
            y:305
        }
        this.velocity = {
            x:55,
            y:5
        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.fillStyle = 'green'
        c.fillRect(this.position.x, this.position.y,this.width,this.height)
     c.drawImage(
        this.image, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
    }
    update(){
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
    
    }}
}
class Zip4{
    constructor(){
        this.position = {
            x:378,
            y:30
        }
        this.velocity = {
            x:5,
            y:447
        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.fillStyle = 'yellow'
        c.fillRect(this.position.x, this.position.y,this.width,this.height)
     c.drawImage(
        this.image, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
    }
    update(){
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
    
    }}
}
class Zip5{
    constructor(){
        this.position = {
            x:785,
            y:30
        }
        this.velocity = {
            x:5,
            y:5
        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.fillStyle = 'purple'
        c.fillRect(this.position.x, this.position.y,this.width,this.height)
     c.drawImage(
        this.image, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
    }
    update(){
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
    
    }}
}
class Zip6{
    constructor(){
        this.position = {
            x:10,
            y:75
        }
        this.velocity = {
            x:5,
            y:5
        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.fillStyle = 'white'
        c.fillRect(this.position.x, this.position.y,this.width,this.height)
     c.drawImage(
        this.image, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
    }
    update(){
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
    
    }}
}
class Zip7{
    constructor(){
        this.position = {
            x:78,
            y:30
        }
        this.velocity = {
            x:5,
            y:5
        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.fillStyle = 'pink'
        c.fillRect(this.position.x, this.position.y,this.width,this.height)
     c.drawImage(
        this.image, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
    }
    update(){
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
    
    }}
}
class Zip8{
    constructor(){
        this.position = {
            x:10,
            y:30
        }
        this.velocity = {
            x:5,
            y:52
        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.fillStyle = 'teal'
        c.fillRect(this.position.x, this.position.y,this.width,this.height)
     c.drawImage(
        this.image, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
    }
    update(){
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
    
    }}}
 class Zip9{
    constructor(){
       this.position = {
                    x:10,
                    y:45
                }
        this.velocity = {
                    x:5,
                    y:5
                }
                
                const image = new Image()
               
                this.image = image
                this.width = 15
                this.height = 15
                
        
                } 
      draw() {
                c.fillStyle = 'orange'
                c.fillRect(this.position.x, this.position.y,this.width,this.height)
     c.drawImage(
                this.image, 
                this.position.x, 
                this.position.y, 
                this.width, 
                this.height)
            }
         update(){
                if(this.image){
                this.draw()
                this.position.x += this.velocity.x
                this.position.y += this.velocity.y
                
            
            }}
        }
 class Zip10{
            constructor(){
                this.position = {
                    x:456,
                    y:40
                }
                this.velocity = {
                    x:9,
                    y:5
                }
                
                const image = new Image()
               
                this.image = image
                this.width = 5
                this.height = 5
                
        
                } 
            draw() {
                c.fillStyle = 'magenta'
                c.fillRect(this.position.x, this.position.y,this.width,this.height)
             c.drawImage(
                this.image, 
                this.position.x, 
                this.position.y, 
                this.width, 
                this.height)
            }
            update(){
                if(this.image){
                this.draw()
                this.position.x += this.velocity.x
                this.position.y += this.velocity.y
                
            
            }}
            
        }

//circular are circles moving about
        class Circular{
    constructor(){
        this.position = {
            x:489,
            y:30
        }
        this.velocity = {
            x:5,
            y:5
        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.strokeStyle = 'green'
        c.beginPath();
        c.arc(this.position.x, this.position.y, 100,0,2*Math.PI);
        c.stroke();
     c.drawImage(
        this.image, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
    }
    update(){
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
    
    }}

}
class Circular2{
    constructor(){
        this.position = {
            x:5+6,
            y:345+6
        }
        this.velocity = {
            x:5,
            y:5
        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.strokeStyle = 'red'
        c.beginPath();
        c.arc(this.position.x, this.position.y, 100,0,2*Math.PI);
        c.stroke();
     c.drawImage(
        this.image, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
    }
    update(){
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
    
    }}

}
class Circular3{
    constructor(){
        this.position = {
            x:265,
            y:189
        }
        this.velocity = {
            x:52,
            y:47
        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.strokeStyle = 'blue'
        c.beginPath();
        c.arc(this.position.x, this.position.y, 100,0,2*Math.PI);
        c.stroke();
     c.drawImage(
        this.image, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
    }
    update(){
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
    
    }}

}
class Circular4{
    constructor(){
        this.position = {
            x:50,
            y:60
        }
        this.velocity = {
            x:52,
            y:3
        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.strokeStyle = 'yellow'
        c.beginPath();
        c.arc(this.position.x, this.position.y, 100,0,2*Math.PI);
        c.stroke();
     c.drawImage(
        this.image, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
    }
    update(){
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
    
    }}

}
class Circular5{
    constructor(){
        this.position = {
            x:66,
            y:50
        }
        this.velocity = {
            x:55,
            y:10
        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.strokeStyle = 'orange'
        c.beginPath();
        c.arc(this.position.x, this.position.y, 100,0,2*Math.PI);
        c.stroke();
     c.drawImage(
        this.image, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
    }
    update(){
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
    
    }}

}
class Circular6{
    constructor(){
        this.position = {
            x:555,
            y:6
        }
        this.velocity = {
            x:8,
            y:88
        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.strokeStyle = 'white'
        c.beginPath();
        c.arc(this.position.x, this.position.y, 100,0,2*Math.PI);
        c.stroke();
     c.drawImage(
        this.image, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
    }
    update(){
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
    
    }}

}
class Circular7{
    constructor(){
        this.position = {
            x:10,
            y:0
        }
        this.velocity = {
            x:4,
            y:22
        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.strokeStyle = 'purple'
        c.beginPath();
        c.arc(this.position.x, this.position.y, 100,0,2*Math.PI);
        c.stroke();
     c.drawImage(
        this.image, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
    }
    update(){
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
    
    }}

}
const zip = new Zip()
const zip2 = new Zip2()
const zip3 = new Zip3()
const zip4 = new Zip4()
const zip5 = new Zip5()
const zip6 = new Zip6()
const zip7 = new Zip7()
const zip8 = new Zip8()
const zip9 = new Zip9()
const zip10 = new Zip10()
const circular = new Circular()
const circular2= new Circular2()
const circular3 = new Circular3()
const circular4= new Circular4()
const circular5 = new Circular6()
const circular6= new Circular6()
const circular7 = new Circular7()
zip.update
zip2.update
zip3.update
zip4.update
zip5.update
zip6.update
zip7.update
zip8.update
zip9.update
zip10.update
circular.update
circular2.update
circular3.update
circular4.update
circular5.update
circular6.update
circular7.update

function animate(){
    requestAnimationFrame(animate)
    zip.update()
    zip2.update()
    zip3.update()
    zip4.update()
    zip5.update()
    zip6.update()
    zip7.update()
    zip8.update()
    zip9.update()
    zip10.update()

circular.update()
circular.update()
circular2.update()
circular3.update()
circular4.update()
circular5.update()
circular6.update()
circular7.update()
}
animate()