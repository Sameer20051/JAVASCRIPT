  const sayhitesh=function(){
        console.log("hello sameer");  
          
        
    }
    const changename=function(){
        document.querySelector('h1').innerText="best js series";
    }
    setTimeout(sayhitesh,2000)  // this function will be acatvated after 2000ms 
    const chnge=setTimeout(changename,2000)

    document.querySelector('#stop').addEventListener('click',function(){
     clearTimeout(chnge)
    //  through this code if i click the buttin with id stop then the all the settimoute will be vanished for the chnge
    })