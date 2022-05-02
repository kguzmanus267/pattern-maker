const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//document.getElementsByClassName()
//document.querySelectorAll()
canvas.width = 1200
canvas.height= 800
//function xRandom(){Math.floor(Math.random()*1200)+1}
//function yRandom(){Math.floor(Math.random()*750)+1}
//function speedRandom(){Math.floor(Math.random()*5)+1}
//function xRandomPlus() {
  //  intervalId = setInterval(xRandom, 1000);
    //console.log('plus')
  //}
//zips 1-10 are lines on xy axis
var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

class Zip {
    constructor(){
        this.position = {
            x:Math.floor(Math.random()*1200)+1,
            y:Math.floor(Math.random()*750)+1
        }
        this.velocity = {
            x:Math.sin(Math.floor(Math.random()*5)+1),
            y:Math.sin(Math.floor(Math.random()*5)+1)
        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {  
        c.strokeStyle = 'cyan'
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
class Zip2{
    constructor(){
        this.position = {
            x:Math.floor(Math.random()*1200)+1,
            y:Math.floor(Math.random()*750)+1
        }
        this.velocity = {
            x:Math.floor(Math.random()*5)+1,
            y:Math.floor(Math.random()*5)+1        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.strokeStyle = 'lime'
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
class Zip3{
    constructor(){
        this.position = {
            x:Math.floor(Math.random()*1200)+1,
            y:Math.floor(Math.random()*750)+1
        }
        this.velocity = {
            x:Math.sin(Math.floor(Math.random()*5)+1),
            y:Math.sin(Math.floor(Math.random()*5)+1)
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
class Zip4{
    constructor(){
        this.position = {
            x:Math.floor(Math.random()*1200)+1,
            y:Math.floor(Math.random()*750)+1
        }
        this.velocity = {
            x:Math.floor(Math.random()*5)+1,
            y:Math.floor(Math.random()*5)+1
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
class Zip5{
    constructor(){
        this.position = {
            x:Math.floor(Math.random()*1200)+1,
            y:Math.floor(Math.random()*750)+1
        }
        this.velocity = {
            x:Math.sin(Math.floor(Math.random()*5)+1),
            y:Math.sin(Math.floor(Math.random()*5)+1)
        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.strokeStyle = 'crimson'
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
class Zip6{
    constructor(){
        this.position = {
            x:Math.floor(Math.random()*1200)+1,
            y:Math.floor(Math.random()*750)+1
        }
        this.velocity = {
            x:Math.sin(Math.floor(Math.random()*5)+1),
            y:Math.sin(Math.floor(Math.random()*5)+1)
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
class Zip7{
    constructor(){
        this.position = {
            x:Math.floor(Math.random()*1200)+1,
            y:Math.floor(Math.random()*750)+1
        }
        this.velocity = {
            x:Math.cos(Math.PI/360),
            y:Math.sin(Math.PI/360)
        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.strokeStyle = 'lightgrey'
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
class Zip8{
    constructor(){
        this.position = {
            x:Math.floor(Math.random()*1200)+1,
            y:Math.floor(Math.random()*750)+1
        }
        this.velocity = {
            x:Math.floor(Math.random()*5)+1,
            y:Math.floor(Math.random()*5)+1
        }
        
        const image = new Image()
       
        this.image = image
        this.width = 15
        this.height = 15
        

        } 
    draw() {
        c.strokeStyle = 'teal'
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
        
    
    }}}
class Zip9{
    constructor(){
       this.position = {
        x:Math.floor(Math.random()*1200)+1,
        y:Math.floor(Math.random()*750)+1
                }
        this.velocity = {
            x:Math.floor(Math.random()*5)+1,
            y:Math.floor(Math.random()*5)+1
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
class Zip10{
            constructor(){
                this.position = {
                    x:Math.floor(Math.random()*1200)+1,
                    y:Math.floor(Math.random()*750)+1
                }
                this.velocity = {
                    x:Math.sin(Math.floor(Math.random()*5)+1),
                    y:Math.sin(Math.floor(Math.random()*5)+1)
                }
                
                const image = new Image()
               
                this.image = image
                this.width = 5
                this.height = 5
                
        
                } 
            draw() {
                c.strokeStyle = 'magenta'
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
class Circular{
    constructor(){
        this.position = {
            x:Math.floor(Math.random()*1200)+1,
            y:Math.floor(Math.random()*750)+1
        }
        this.velocity = {
            x:Math.floor(Math.random()*5)+1,
            y:Math.floor(Math.random()*5)+1
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
            x:Math.floor(Math.random()*1200)+1,
            y:Math.floor(Math.random()*750)+1
        }
        this.velocity = {
            x:Math.floor(Math.random()*5)+1,
            y:Math.floor(Math.random()*5)+1
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
            x:Math.floor(Math.random()*1200)+1,
            y:Math.floor(Math.random()*750)+1
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
            x:Math.floor(Math.random()*1200)+1,
            y:Math.floor(Math.random()*750)+1
        }
        this.velocity = {
            x:Math.floor(Math.random()*5)+1,
            y:Math.floor(Math.random()*5)+1
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
            x:Math.floor(Math.random()*1200)+1,
            y:Math.floor(Math.random()*750)+1
        }
        this.velocity = {
            x:Math.floor(Math.random()*5)+1,
            y:Math.floor(Math.random()*5)+1
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
            x:Math.floor(Math.random()*1200)+1,
            y:Math.floor(Math.random()*750)+1
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
            x:Math.floor(Math.random()*1200)+1,
            y:Math.floor(Math.random()*750)+1
        }
        this.velocity = {
            x:Math.floor(Math.random()*5)+1,
            y:Math.floor(Math.random()*5)+1
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
const changer = {
     space: {pressed:false}

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


document.addEventListener('keydown',({key}) => {
    switch (key){
        case ' ':{console.log('test')
    }
            
        break}

setTimeout(function(){
    console.log('Refresh');
    window.location.reload(1);
 }, 70000)});

animate()