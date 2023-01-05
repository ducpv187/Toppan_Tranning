const category = [
  {
    id: 1,
    title: 'Flexible Packaging',
    img: './common/image/packaging.png',
    category: 'ProductType'
  },
  {
    id: 2,
    title: 'Barrier Film',
    img: './common/image/film.png',
    category: 'ProductType'
  },
  {
    id: 3,
    title: 'Folding Cartons',
    img: './common/image/cartons.png',
    category: 'ProductType'
  },
  {
    id: 4,
    title: 'Composite Containers for Liquids',
    img: './common/image/liquid.png',
    category: 'ProductType'
  },
  {
    id: 5,
    title: 'Plastic Products',
    img: './common/image/product.png',
    category: 'ProductType'
  },
  {
    id: 6,
    title: 'Corrugated Board',
    img: './common/image/board.png',
    category: 'ProductType'
  },
  {
    id: 7,
    title: 'Performance Materials and Energy',
    img: './common/image/energy.png',
    category: 'ProductType'
  },
  {
    id: 8,
    title: 'BPO/Filling',
    img: './common/image/filling.png',
    category: 'ProductType'
  },
  {
    id: 9,
    title: 'Digital transformation',
    img: './common/image/transformation.png',
    category: 'ProductType'
  },
  {
    id: 10,
    title: 'Others',
    img: './common/image/others.png',
    category: 'ProductType'
  },
  {
    id: 11,
    title: 'Medical and Pharmaceutical Goods',
    img: './common/image/mediacal.png',
    category: 'Industry'
  },
  {
    id: 12,
    title: 'Foods & Confectionery',
    img: './common/image/foods.png',
    category: 'Industry'
  },
  {
    id: 13,
    title: 'Toiletries',
    img: './common/image/toiletries.png',
    category: 'Industry'
  },
  {
    id: 14,
    title: 'Beverages',
    img: './common/image/beverages.png',
    category: 'Industry'
  },
  {
    id: 15,
    title: 'Industrial Materials',
    img: './common/image/industrial.png',
    category: 'Industry'
  },
  {
    id: 16,
    title: 'User-Friendly Design',
    img: './common/image/user-friendly.png',
    category: 'Purpose'
  },
  {
    id: 17,
    title: 'Providing Information & Designs',
    img: './common/image/providing.png',
    category: 'Purpose'
  },
  {
    id: 18,
    title: 'Enhancing ease of distribution',
    img: './common/image/enhancing.png',
    category: 'Purpose'
  },
  {
    id: 19,
    title: 'Earth-Friendly Materials',
    img: './common/image/earth-frendly.png',
    category: 'Purpose'
  },
  {
    id: 20,
    title: 'Digitalizing processes',
    img: './common/image/digitalizing.png',
    category: 'Purpose'
  }
];

//C1: call url data api ajax

// $.ajax({
//     type: "GET",
//     url: 'https://63a56082318b23efa791bf88.mockapi.io/api/products',
//     data: {"data":"check"},
//     success: function(data){
//       console.log(data)
//       eachData(data);      
//     }
//   });

// C2: call api fetch
// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };

// fetch("https://63a56082318b23efa791bf88.mockapi.io/api/products", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

  // function eachData(data){
  //   // console.log(data)
  //   $.each(data, function( index, value ) {
  //     // console.log(value.category);
  //     let html = `
  //       <div class="col col-4 col-sm-4 product-box" id="search-${value.id}">
  //         <div class="icon-box">
  //           <div class="icon-box-img">
  //             <img src="${value.img}" alt="${value.title}" class="img-fluid"/>
  //           </div>
  //           <div class="icon-box-text">          
  //             <p class="title">${value.title}</p>
  //           </div>
  //         </div>
  //       </div>`;
  //     if(value.category == 'ProductType'){    
  //       $("#ProductType .row").append(html);
  //       // console.log(html);
  //       // console.log('ProductType');
  //     }
  //     else if(value.category == 'Industry'){
  //       $("#Industry .row").append(html);
  //     }
  //     else if(value.category == 'Purpose'){
  //       $("#Purpose .row").append(html);
  //     }
  //   }); 
     
    //get data input 
  //   $("#btn_search").click(function(){
  //     let valueInput = $('#input_search').val(); 
  //     // console.log(valueInput)
  //     let classEmty = '.outProducts.outProducts-2 .row__bottom .tabcontent .row';      
  //     $(classEmty).empty();
  //     //  console.log(valueInput);    
  //     //filter value in array --> find value in array      
  //     //c1: viet arrown function =>
  //     // let valueShow = data.filter(value => value.title.includes(valueInput));
  //     //c2: viet declartion function
  //     let valueShow = data.filter( function(value){
  //       return value.title.includes(valueInput);
  //     });
  //       console.log(valueShow);
  //     if (valueShow.length > 0){
  //       $.each(valueShow, function( index, value ) {                       
  //       let html = `
  //         <div class="col col-4 col-sm-4 product-box" id="search-${value.id}">
  //           <div class="icon-box">
  //             <div class="icon-box-img">
  //               <img src="${value.img}" alt="${value.title}" class="img-fluid"/>
  //             </div>
  //             <div class="icon-box-text">          
  //               <p class="title">${value.title}</p>
  //             </div>
  //           </div>
  //         </div>`;
  //         if(value.category == 'ProductType'){    
  //           $("#ProductType .row").append(html);
  //         }
  //         else if(value.category == 'Industry'){
  //           $("#Industry .row").append(html);
  //         }
  //         else if(value.category == 'Purpose'){
  //           $("#Purpose .row").append(html);
  //         }
  //       }); 
  //     }
  //     else {
  //       let htmlError = 
  //       `<div class="col product-box">
  //           <div class="icon-box">
  //             <div class="icon-box-text">          
  //               <p class="title">Not Found Items</p>
  //             </div>
  //           </div>
  //       </div>`;
  //       $(".outProducts-2 .tabcontent .row").append(htmlError);
  //     }    
  //   });
  // }


/// ------------------- Phần dưới này để đổ DATA fix cứng -----------
// $(document).ready(function(){  
// // write data in html 
// // --> Note: su dụng forEach jquery để đổ data vào Html (section outProducts )
// // --> Note: Lưu ý về việc sử dụng template string `` --> Mục đích : có thể sư dụng ddc $
//   $.each(category, function( index, value ) {
//     // console.log(value.category);
//     let html = `
//       <div class="col col-4 col-sm-4 product-box" id="search-${value.id}">
//         <div class="icon-box">
//           <div class="icon-box-img">
//             <img src="${value.img}" alt="${value.title}" class="img-fluid"/>
//           </div>
//           <div class="icon-box-text">          
//             <p class="title">${value.title}</p>
//           </div>
//         </div>
//       </div>`;
//     if(value.category == 'ProductType'){    
//       $("#ProductType .row").append(html);
//     }
//     else if(value.category == 'Industry'){
//       $("#Industry .row").append(html);
//     }
//     else if(value.category == 'Purpose'){
//       $("#Purpose .row").append(html);
//     }
//   }); 
 
//   //get data input 
//   $("#btn_search").click(function(){
//       let valueInput = $('#input_search').val(); 
//       let classEmty = '.outProducts.outProducts-2 .row__bottom .tabcontent .row';      
//       $(classEmty).empty();
//       //  console.log(valueInput);    
//       //filter value in array --> find value in array      
//       let valueShow = category.filter(value => value.title.includes(valueInput));
//         console.log(valueShow);
//       if (valueShow.length > 0){
//         $.each(valueShow, function( index, value ) {                       
//         let html = `
//           <div class="col col-4 col-sm-4 product-box" id="search-${value.id}">
//             <div class="icon-box">
//               <div class="icon-box-img">
//                 <img src="${value.img}" alt="${value.title}" class="img-fluid"/>
//               </div>
//               <div class="icon-box-text">          
//                 <p class="title">${value.title}</p>
//               </div>
//             </div>
//           </div>`;
//           if(value.category == 'ProductType'){    
//             $("#ProductType .row").append(html);
//           }
//           else if(value.category == 'Industry'){
//             $("#Industry .row").append(html);
//           }
//           else if(value.category == 'Purpose'){
//             $("#Purpose .row").append(html);
//           }
//         }); 
//       }
//       else {
//         let htmlError = 
//         `<div class="col product-box">
//             <div class="icon-box">
//               <div class="icon-box-text">          
//                 <p class="title">Not Found Items</p>
//               </div>
//             </div>
//         </div>`;
//         $(".outProducts-2 .tabcontent .row").append(htmlError);
//       }    
//   });
// });
