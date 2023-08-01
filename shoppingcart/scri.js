const shopicon = document.getElementsByClassName('shop-icon')[0];
const loginbtn = document.getElementsByClassName('login-button')[0];
const logincontainer = document.getElementsByClassName('login-container')[0];
const userinfocontainer = document.getElementsByClassName("user-info")[0];


shopicon.addEventListener('click', () => {
  if (logincontainer.style.display === "block" && userinfocontainer.style.display === "block") {
    logincontainer.style.display = "none";
    userinfocontainer.style.display = "none";
  } else {
    logincontainer.style.display = "block";
    userinfocontainer.style.display = "block";
  }
});

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {


    // separete container for each category
    const mensClothingContainer = document.getElementById("productContainerOne");
    const womensClothingContainer = document.getElementById("womenproduct-container");
    const jewelleryContainer = document.getElementById("jewellryproduct-container");
    const electronicsContainer = document.getElementById("electronicproduct-container");

    data.forEach(product => {
      const productContainerOne = document.createElement("div");
      productContainerOne.id = "productContainerOne";

      const imgcontainer = document.createElement("div");
      imgcontainer.id = "imgcontainer";
      const img = document.createElement("img");
      img.src = product.image;
      imgcontainer.appendChild(img);

      const productname = document.createElement("p");
      productname.id = "productname";
      productname.textContent = product.title;

      const productvalue = document.createElement("p");
      productvalue.id = "productvalue";
      productvalue.textContent = product.price;

      const productsize = document.createElement("p");
      productsize.id = "productsize";
      productsize.textContent = "M";

      const productcolor = document.createElement('p');
      productcolor.id = "productcolor";
      productcolor.textContent = "blue";

      const productrating = document.createElement('p');
      productrating.id = "productrating";
      productrating.textContent = product.rating.rate;

      const cartbtn = document.createElement("button");
      cartbtn.id = "addcartbtn";
      cartbtn.textContent = "Add To Cart";


      productContainerOne.appendChild(imgcontainer);
      productContainerOne.appendChild(productname);
      productContainerOne.appendChild(productvalue);
      productContainerOne.appendChild(productsize);
      productContainerOne.appendChild(productcolor);
      productContainerOne.appendChild(productrating);
      productContainerOne.appendChild(cartbtn);

      //check the category of the product and append it to the corresponding container
      if (product.category === "men's clothing") {
        mensClothingContainer.appendChild(productContainerOne);
      } else if (product.category === "women's clothing") {
        womensClothingContainer.appendChild(productContainerOne);
      } else if (product.category === "jewelery") {
        jewelleryContainer.appendChild(productContainerOne);
      } else if (product.category === "electronics") {
        electronicsContainer.appendChild(productContainerOne);
      }

    });
  })
.catch(error =>{
  console.log("Error fetching product data", error);
});


