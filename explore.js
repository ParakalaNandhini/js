function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
      
        fetch("https://project-data-5.onrender.com/posts",
        {
            method:"get",
            headers:{
                'Content-Type':'application/json'
            } 
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
        const shuffledImages = shuffleArray(data);

          for(i=0;i<9;i++){
          getr=document.getElementsByClassName("right")
          crimg=document.createElement("img")
          crimg.src=shuffledImages[i].image;
          crimg.height="400"
          crimg.width="300"
          getr[0].appendChild(crimg)
        }
      })