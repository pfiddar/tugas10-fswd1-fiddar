let endpoint = "https://reqres.in/api/products"; 
let content = document.getElementById('content');

let produk = [{
    id : 1,
    nama : "Chessecake",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqi4u0x9sYoyI53hxrTB-q5xR7amd8UrWj3Q&usqp=CAU",
    harga : "Rp. 20.000",
    deskripsi : "Lorem ipsum dolor sit amet consectetur adipisicing"
},
{
    id : 2, 
    nama : "Choco Muffin",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj66Y47aMrlY3zLZYnOPnK-gFp7q4ucupD-w&usqp=CAU",
    harga : "Rp. 10.000",
    deskripsi : "Lorem ipsum dolor sit amet consectetur adipisicing"
},
{
    id : 3, 
    nama : "Chiffon Cake",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtFHiPO61y9cO5KEzI5ksSborCuCEe-7R5Q&usqp=CAU",
    harga : "Rp. 25.000",
    deskripsi : "Lorem ipsum dolor sit amet consectetur adipisicing"
},
{
    id : 4, 
    nama : "Croissant",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq86INfgcDFfiaMYw8768L-3eEBhpXV0sGxQ&usqp=CAU",
    harga : "Rp. 20.000",
    deskripsi : "Lorem ipsum dolor sit amet consectetur adipisicing"
},
{
    id : 5, 
    nama : "Strawberry Chessecake",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIAG4LfhcfWMXcOeVzq6Yhe-jrg3jy-_Y6Ow&usqp=CAU",
    harga : "Rp. 45.000",
    deskripsi : "Lorem ipsum dolor sit amet consectetur adipisicing"
},
{
    id : 6, 
    nama : "Nutella Stuffed Cookies",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAIG8yEoS1BmkZ0crgEsAAvcvapl9aSjf_A&usqp=CAU",
    harga : "Rp. 15.000",
    deskripsi : "Lorem ipsum dolor sit amet consectetur adipisicing"
},
{
    id : 7, 
    nama : "Biscoff Stuffed Cookies",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBHEMDvWEtoRoO8Y624aSyK2fygrS9k6iSw&usqp=CAU",
    harga : "Rp. 15.000",
    deskripsi : "Lorem ipsum dolor sit amet consectetur adipisicing"
}];
let fetchOption = {
    method : "POST",
    headers : {
        "Content-Type" : "application/json"
    },
    body : JSON.stringify({produk: produk})
};
fetch(endpoint, fetchOption)
    .then((res) => res.json())
    .then((response) => {

        response.produk.forEach(element => {
            content.innerHTML += `
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-body">
                                    <img class=" card-img-top figure-img img-fluid rounded" src="${element.img}" alt="gambar">
                                </div>
                                <div class="card-footer">
                                    <h3 class="card-title"><b>${element.nama}</b></h3><br>
                                    <p>${element.deskripsi}</p>
                                    <div class="row align-items-center">
                                        <div class="col-sm-8">
                                            <h4 class="card-title">${element.harga}</h4>
                                        </div>
                                        <div class="col-sm-4">
                                            <button class="btn btn-primary btn-block">
                                                <i class="ion ion-ios-cart"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            `
            // console.log(element);
        });
    })

/* <div class="col-sm-8">
                                        <h4 class="card-title">Rp. 15.000</h4>
                                    </div>
                                    <div class="col-sm-4">
                                        <button class="btn btn-primary btn-block">
                                            <i class="ion ion-ios-cart"></i>
                                        </button>
                                    </div> */

