const shopbtn = document.getElementsByClassName('shop-icon')[0];
const logincontainer = document.getElementsByClassName('login-container')[0];
const filtericon = document.getElementById('filtericon');
const functionalitycontainer = document.getElementById("allfilterfunctionality");
const ratingslider = document.getElementById("ratingslider");
const ratingresult = document.getElementById("ratingresult");

// all four container tag line
const menstag=document.getElementById("menstag");
const womenstag=document.getElementById("womenstag");
const jewellerytag=document.getElementById("jewellerytag");
const electronicstag=document.getElementById("electronicstag");

shopbtn.addEventListener('click', () => {
    if (logincontainer.style.display === "none") {
        logincontainer.style.display = "block";
    } else {
        logincontainer.style.display = "none";
    }
});

filtericon.addEventListener('click', () => {
    if (functionalitycontainer.style.display === "none") {
        functionalitycontainer.style.display = 'block';
    } else {
        functionalitycontainer.style.display = "none";
    }
});

ratingslider.addEventListener('input', () => {
    ratingresult.textContent = ratingslider.value;
})

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {

        // separate container for Each category
        let menscontainer = document.getElementById("mensproduct-container");
        let womenscontainer = document.getElementById("womensproduct-container");
        let jewellerycontainer = document.getElementById("jewelleryproduct-container");
        let electronicscontainer = document.getElementById("electronicsproduct-container");

        let mensCounter = 0;
        let womensCounter = 0;
        let jewelleryCounter = 0;
        let electronicsCounter = 0;
        //     <div id="productContainerOne">
        //    <div id="imgcontainer">
        //       <img src="/images/landingPagePic.png" alt="">
        //   </div>
        //   <p id="productname">Fjallraven-Foldsack No.1 Backpack, Fits 15 Lapt</p>
        //   <p id="productvalue">$109.95</p>
        //   <p id="productsize">S</p> 
        //   <p id="productcolor">BLUE</p>
        //   <P id="productrating">Rating: 3.9/5</P>
        //   <button id="addcartbtn">Add To Cart</button> 
        // </div>    

        data.forEach(product => {

            // click functionality for button
            let clickmensclothbtn = document.getElementById("mensclothbtn");
            let clickwomensclothbtn = document.getElementById("womenclothbtn");
            const clickjewellerybtn= document.getElementById("jewellerybtn");
            const clickelectronisbtn = document.getElementById("electronicsbtn");
            const clickallbtn=document.getElementById("allbtn");
                   
            // create DOM structure
            let productContainerOne = document.createElement('div');
            productContainerOne.id = 'productContainerOne';

            let imgcontainer = document.createElement('div');
            imgcontainer.id = 'imgcontainer';
            let img = document.createElement('img');
            img.src = product.image;
            imgcontainer.appendChild(img);

            let productname = document.createElement('p');
            productname.id = "productname";
            productname.textContent = product.title;

            let productvalue = document.createElement('p');
            productvalue.id = 'productvalue';
            productvalue.textContent = product.price;

            let productsize = document.createElement('p');
            productsize.id = 'productsize';
            productsize.textContent = 'M';

            let productcolor = document.createElement('p');
            productcolor.id = 'productcolor';
            productcolor.textContent = 'BLUE';

            let productrating = document.createElement('p');
            productrating.id = "productrating";
            productrating.textContent = product.rating.rate;

            // create button
            let btn = document.createElement('button');
            btn.id = 'addcartbtn';
            btn.textContent = "Add To Cart";

            // append all elements into main div
            productContainerOne.appendChild(imgcontainer);
            productContainerOne.appendChild(productname);
            productContainerOne.appendChild(productvalue);
            productContainerOne.appendChild(productsize);
            productContainerOne.appendChild(productcolor);
            productContainerOne.appendChild(productrating);
            productContainerOne.appendChild(btn);


            //    valiadate the conatainer 

            if (product.category === "men's clothing" && mensCounter < 4) {
                menscontainer.appendChild(productContainerOne);
                mensCounter++;
            } else if (product.category === "women's clothing" && womensCounter < 4) {
                womenscontainer.appendChild(productContainerOne);
                womensCounter++;
            } else if (product.category === "jewelery" && jewelleryCounter < 4) {
                jewellerycontainer.appendChild(productContainerOne);
                jewelleryCounter++;
            } else if (product.category === "electronics" && electronicsCounter < 4) {
                electronicscontainer.appendChild(productContainerOne);
                electronicsCounter++;
            }


            //Addd button functionality (addEventListner)
            clickmensclothbtn.addEventListener('click', () => {

                menscontainer.style.display="flex";
                womenscontainer.style.display="none";
                jewellerycontainer.style.display="none";
                electronicscontainer.style.display="none";
                womenstag.style.display="none";
                electronicstag.style.display="none";
                jewellerytag.style.display="none";
              });
              
             clickwomensclothbtn.addEventListener('click', ()=>{
                menscontainer.style.display="none";
                womenscontainer.style.display="flex";
                jewellerycontainer.style.display="none";
                electronicscontainer.style.display="none";
                womenstag.style.display="none";
                electronicstag.style.display="none";
                jewellerytag.style.display="none";
              });

              clickjewellerybtn.addEventListener('click', ()=>{
                menscontainer.style.display="none";
                womenscontainer.style.display="none";
                jewellerycontainer.style.display="flex";
                electronicscontainer.style.display="none";
                womenstag.style.display="none";
                electronicstag.style.display="none";
                jewellerytag.style.display="none";
              });

              clickelectronisbtn.addEventListener('click', ()=>{
                menscontainer.style.display="none";
                womenscontainer.style.display="none";
                electronicscontainer.style.display="flex"; 
                jewellerycontainer.style.display="none";
                womenstag.style.display="none";
                electronicstag.style.display="none";
                jewellerytag.style.display="none";
              });

              
            clickallbtn.addEventListener('click', ()=>{
                menscontainer.style.display="flex";
                womenscontainer.style.display="flex";
                electronicscontainer.style.display="flex"; 
                jewellerycontainer.style.display="flex";
                womenstag.style.display="flex";
                electronicstag.style.display="flex";
                jewellerytag.style.display="flex";
            })

        }
        );//

        //for create click functionality

       const addcartbutton=document.querySelectorAll("#addcartbtn");
       const cartfafa=document.getElementById("fafacart");
        
      addcartbutton.forEach((cartbutton)=>{
        cartbutton.addEventListener('click',()=>{
            if(cartfafa.style.display==="none"){
                cartfafa.style.display="block";
            }else{
                cartfafa.style.display="none";
            }
        })
      })

    });
