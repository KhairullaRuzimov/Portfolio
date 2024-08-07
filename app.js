const square1 = document.querySelector('.square1');
const square4 = document.querySelector('.square4');
const square2 = document.querySelector('.square2');
const square3 = document.querySelector('.square3');
const info = document.querySelector('.info');
const start = document.querySelector('.start');
const portfolio = document.querySelector('.portfolio');
const audio = document.querySelector('audio');
const aboutMe = document.querySelector('.aboutMe__title');

portfolio.style.display = 'none';
info.style.display = 'none';
square1.style.visibility = 'hidden';
square2.style.visibility = 'hidden';
let startTime = null;


setTimeout(() => {
    const animate = requestAnimationFrame(moveRight);

    function moveRight(timestamp){
        const squareRect3 = square3.getBoundingClientRect();
        const squareRect4 = square4.getBoundingClientRect();
        square3.style.boxShadow = '1px 1px 30px 5px white';
        
        if(!startTime){
            startTime = timestamp;
        }
        let progress = timestamp - startTime;
        square3.style.left = progress / 4 + 'px';
        if(squareRect3.left < squareRect4.left + squareRect4.width 
            && squareRect4.left < squareRect3.left + squareRect3.width){
                try{
                    audio.play();
                }catch(error){
                    console.error(error);
                }   
            square3.style.boxShadow = 'none';
            square2.style.visibility = 'visible';
            setTimeout(() => {
                square4.style.backgroundColor = 'lightgreen';
                square4.style.boxShadow = '1px 1px 30px 5px white';
                const animate2 = requestAnimationFrame(moveBottom);
                let startTime2 = null;
                function moveBottom(timestamp2){
                    const squareRect4 = square4.getBoundingClientRect();
                    const squareRect2 = square2.getBoundingClientRect();
                    if(!startTime2){
                        startTime2 = timestamp2;
                    }
                    let progress2 = timestamp2 - startTime2;
                    square4.style.top = progress2 / 4 + 'px';
                    if(squareRect4.top < squareRect2.top + squareRect2.height 
                        && squareRect2.top < squareRect4.top + squareRect4.height){
                            try{
                                audio.play();
                            }catch(error){
                                console.error(error);
                            }   
                        square4.style.boxShadow = 'none';
                        square1.style.visibility = 'visible';
                        setTimeout(() => {
                            square2.style.backgroundColor = 'pink';
                            square2.style.boxShadow = '1px 1px 30px 5px white';
                            const animate3 = requestAnimationFrame(moveRight);
                            let startTime3 = null;
                            function moveRight(timestamp3){
                                const squareRect1 = square1.getBoundingClientRect();
                                const squareRect2 = square2.getBoundingClientRect();
                                if(!startTime3){
                                    startTime3 = timestamp3;
                                }
                                let progress3 = timestamp3 - startTime3;
                                square2.style.right = progress3 / 4 + 'px';
                                if(squareRect2.left < squareRect1.left + squareRect1.width 
                                    && squareRect1.left < squareRect2.left + squareRect2.width){
                                        try{
                                            audio.play();
                                        }catch(error){
                                            console.error(error);
                                        }   
                                    square2.style.boxShadow = 'none';
                                    square1.style.boxShadow = '1px 1px 30px 5px white';
                                    setTimeout(() => {
                                        square1.style.display = 'none';
                                        square2.style.display = 'none';
                                        square3.style.display = 'none';
                                        square4.style.display = 'none';
                                        const animate4 = requestAnimationFrame(popUp);
                                        let startTime4 = null;
                                        function popUp(timestamp4){
                                            if(!startTime4){
                                                startTime4 = timestamp4;
                                            }
                                            let progress4 = timestamp4 - startTime4;
                                            info.style.display = 'flex';
                                            info.style.transform = `scale(${progress4 / 300})`;
                                            if(progress4 < 350){
                                                requestAnimationFrame(popUp);
                                            }
                                        }
                                    },500)
                                    
                                }else{
                                        requestAnimationFrame(moveRight);                     
                                }
                            }
                        },500)
                    }else{
                            requestAnimationFrame(moveBottom);
                    }
                }
            },500)
        }else{
            requestAnimationFrame(moveRight);
        }
        
        
    }
    
    
    
    
},2000)

function disappear(){
    start.style.display = 'none';
    portfolio.style.display = 'block';
    let startTime = null;
      function animateImg(timestamp){
        if(!startTime){
            startTime = timestamp;
        }
        let progress = timestamp - startTime;
        const intro = document.querySelector('.intro');
        const introProp = window.getComputedStyle(intro).flexDirection;
        if(introProp === 'column'){
            intro.style.gap = progress / 4 + 'px';
            if(progress < 200){
                requestAnimationFrame(animateImg);
            }
        }else{
            intro.style.gap = progress / 4 + 'px';
            if(progress < 1200){
                requestAnimationFrame(animateImg);
            }
        }
        
        
    }
    requestAnimationFrame(animateImg);

        const avatar = document.querySelector('.avatar');
        
        let result = false;
        let startTime2 = null;
        let startTime3 = null;
        function giveInfo(timestamp2){
            if(!result){
                setTimeout(() => {
                    result = true;
                    startTime2 = null;
                },1100);
                if(!startTime2){
                    startTime2 = timestamp2;
                }
                let progress2 = timestamp2 - startTime2;
                avatar.style.transform = `rotateY(${progress2 / 4}deg)`;
                if(progress2 >= 400){
                    avatar.innerHTML = `<p><i class='bi bi-telephone-fill'></i>: +998 97 858 60 00</p> <p><i class='bi bi-geo-alt-fill'></i>: Uzbekistan, Khorezm</p><p><i class='bi bi-envelope-fill'></i>: Khairulla2008@outlook.com</p>`;  
                    avatar.style.transform = 'rotateY(0deg)';
                }
                if(progress2 < 600){
                    requestAnimationFrame(giveInfo);
                }
            }
            else{
                setTimeout(() => {
                    result = false;
                    startTime3 = null;
                },1100);
                if(!startTime3){
                    startTime3 = timestamp2;
                }
                let progress2 = timestamp2 - startTime3;
                avatar.style.transform = `rotateY(${progress2 / 4}deg)`;
                if(progress2 >= 400){
                    avatar.textContent = '';
                    avatar.style.transform = 'rotateY(0deg)';
                    let img = document.createElement('img');
                    img.setAttribute('src','img/person.jpg');
                    avatar.appendChild(img);
                }
                if(progress2 < 600){
                    requestAnimationFrame(giveInfo);
                }
                    
                   
            }
        
        }
        
        avatar.addEventListener('click',() => {
            requestAnimationFrame(giveInfo)
        });
   
       
            
            
                requestAnimationFrame(scaling);
        
     
       
    
}
let startTime4 = null;
aboutMe.style.transform = 'scale(0)';
function scaling(timestamp){
    let aboutMeProp = aboutMe.getBoundingClientRect();
    if(aboutMeProp.left >= 0 && aboutMeProp.top >= 0 && aboutMeProp.right <= window.innerWidth && aboutMeProp.bottom - (aboutMeProp.height / 2) <= window.innerHeight){
        if(!startTime4){
            startTime4 = timestamp;
        }
        
        let progress = timestamp - startTime4;
        aboutMe.style.transform = `scale(${progress / 1000})`;
        if(progress < 1){
            requestAnimationFrame(scaling);
        }
        const introProp = window.getComputedStyle(document.querySelector('.intro')).flexDirection;
        if(introProp !== 'column'){
            aboutMe.style.position = 'relative';
            aboutMe.style.left = '55px'; 
        }
        
       
    }
    requestAnimationFrame(scaling);
}

    
