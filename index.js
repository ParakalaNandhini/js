var b=document.forms;
      console.log(b)
      b[1].addEventListener("submit", (event)=>{
        event.preventDefault();
        var data={
          image:event.target[0].value,
          caption:event.target[1].value
        }
        fetch(" http://localhost:3000/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }) .then((res) => {
          return res.json();
        }).then((data)=>{
         var posts= document.querySelector(".post")
         posts.innerHTML="Done"
        })
      })
      fetch("http://localhost:3000/posts",
            {
                method:"get",
                headers:{
                    'Content-Type':'application/json'
                } 
            }).then((res)=>{
                return res.json();
            }).then((data)=>{
              var maindiv=document.querySelector(".middle-down")
              maindiv.paddingLeft="100px"
   
              
              for(i=data.length-1;i>=0;i--){
                var crdiv=document.createElement("div")
                crdiv.className="postimg"
                crdiv.style.paddingLeft="100px"
                crdiv.style.paddingTop="50px"
                maindiv.appendChild(crdiv)
                var crimg=document.createElement("img")
                crimg.src="./images/phoebe.jpg"
                crimg.height="30"
                crdiv.appendChild(crimg)
                crname=document.createElement("h6")
                crname.className="profilename"
                crname.innerHTML="nandhu"+"<i class='fa fa-ellipsis-h' style='font-size:24px;padding-left:400px'></i>"
                crdiv.appendChild(crname)
                crdiv2=document.createElement("div")
                maindiv.appendChild(crdiv2)
                crimg=document.createElement("img")
                crimg.className="images"
                crimg.style.paddingLeft="100px"
                crimg.style.paddingTop="10px"
                crimg.src=data[i].image
                crimg.height="400"
                crimg.width="650"
                crdiv2.appendChild(crimg)
                crp=document.createElement("p")
                crdiv2.appendChild(crp)

                crred=document.createElement("i")
                crred.className="fa fa-heart-o"
                crred.style.fontSize="24px"
                crred.style.paddingLeft="100px"
                crred.style.paddingTop="10px" 
                crp.appendChild(crred)
                //comment
                cri=document.createElement("i")
                cri.className="fa fa-comment-o"
                cri.style.fontSize="24px"
                cri.style.paddingLeft="15px"
                crp.appendChild(cri)
                //share

                cri=document.createElement("i")
                cri.className="fa fa-paper-plane-o"
                cri.style.fontSize="24px"
                cri.style.paddingLeft="15px"
                crp.appendChild(cri)

                //saved
                cri=document.createElement("i")
                cri.className="fa fa-bookmark-o"
                cri.style.fontSize="24px"
                cri.style.paddingLeft="420px"
                crp.appendChild(cri)
                //caption
                crp=document.createElement("p")
                crp.innerHTML="<b>"+"nandhu"
                crp.style.paddingLeft="100px"
                crdiv2.appendChild(crp)
                critalic=document.createElement("i")
                critalic.style.fontSize="large"
                critalic.innerHTML=" "+ " "+data[i].caption
                crp.appendChild(critalic)

              }
              var red = document.getElementsByClassName("fa fa-heart-o");
              for (let i = 0; i < red.length; i++) {
                red[i].addEventListener("click", (event) => {
                  var clickedHeart = event.target;
                  if (clickedHeart.style.color !== "red") {
                    clickedHeart.style.color = "red";
                    clickedHeart.className = "fa fa-heart";
                  }
                });
              }
              
             var saved=document.getElementsByClassName("fa fa-bookmark-o")
             for(let i=0;i<saved.length;i++){
              saved[i].addEventListener("click",()=>{
                saved[i].className=("fa fa-bookmark")
              })
             }
             
            });
          
          var followget=document.querySelectorAll(".follow")
            for(let i=0;i<followget.length;i++){
              followget[i].addEventListener("click",()=>{
                followget[i].innerHTML="Requested"
                followget[i].style.color="gray"
              })
            }
            var geta=document.querySelectorAll(".a")
            for(let i=0;i<geta.length;i++){
              geta[i].addEventListener("click",()=>{
                window.location.assign("./story.html")
              })
            }

            var gets=document.getElementById("switch")
            gets.addEventListener("click",()=>{
              var account=new bootstrap.Modal(document.getElementById("acc"))
              account.show();

            })