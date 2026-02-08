// creating random color

const randomcolor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
     
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};


let intervalid;

const startchagingcolor=function(){

    intervalid=setInterval(changebgcolor,1000);

    function changebgcolor(){
        document.body.style.backgroundColor=randomcolor();
    }

    

};

const stopchagingcolor= function(){

    clearInterval(intervalid)

    
};


document.querySelector('#start').addEventListener('click',startchagingcolor)

document.querySelector('#stop').addEventListener('click',stopchagingcolor)
