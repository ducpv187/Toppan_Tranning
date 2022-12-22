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
    img: './common/image/others.png"',
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
    title: 'Providing Information & Designs',
    img: './common/image/providing.png',
    category: 'Purpose'
  },
  {
    id: 19,
    title: 'Enhancing ease of distribution',
    img: './common/image/enhancing.png',
    category: 'Purpose'
  },
  {
    id: 20,
    title: 'Earth-Friendly Materials',
    img: './common/image/earth-frendly.png',
    category: 'Purpose'
  },
  {
    id: 21,
    title: 'Digitalizing processes',
    img: './common/image/digitalizing.png',
    category: 'Purpose'
  }
];

$(document).ready(function(){  
//write data in html 
// --> Note: su dụng forEach jquery để đổ data vào Html (section outProducts )
// --> Note: Lưu ý về việc sử dụng template string `` --> Mục đích : có thể sư dụng ddc $
  // $.each(category, function( index, value ) {
  //   // console.log(value.category);
  //   let html = `
  //     <div class="col col-4 col-sm-4 product-box" id="search-${value.id}">
  //       <div class="icon-box">
  //         <div class="icon-box-img">
  //           <img src="${value.img}" alt="${value.title}" class="img-fluid"/>
  //         </div>
  //         <div class="icon-box-text">          
  //           <p class="title">${value.title}</p>
  //         </div>
  //       </div>
  //     </div>`;
  //   if(value.category == 'ProductType'){    
  //     $("#ProductType .row").append(html);
  //     // console.log(html);
  //     // console.log('ProductType');
  //   }
  //   else if(value.category == 'Industry'){
  //     $("#Industry .row").append(html);
  //   }
  //   else if(value.category == 'Purpose'){
  //     $("#Purpose .row").append(html);
  //   }
  // }); 
 
  //get data input 
  $("#btn_search").click(function(){
      let valueInput = $('#input_search').val();
       console.log(valueInput);    
      //filter value in array --> find value in array
      // const valueInput = "Earth-Friendly Materials"
      let valueShow = category.filter(value => value.title.includes(valueInput));
      console.log(valueShow);
      $.each(valueShow, function( index, value ) {
        // console.log(value.category);
        let html = `
          <div class="col col-4 col-sm-4 product-box" id="search-${value.id}">
            <div class="icon-box">
              <div class="icon-box-img">
                <img src="${value.img}" alt="${value.title}" class="img-fluid"/>
              </div>
              <div class="icon-box-text">          
                <p class="title">${value.title}</p>
              </div>
            </div>
          </div>`;
        if(value.category == 'ProductType'){    
          $("#ProductType .row").append(html);
        }
        else if(value.category == 'Industry'){
          $("#Industry .row").append(html);
        }
        else if(value.category == 'Purpose'){
          $("#Purpose .row").append(html);
        }
      }); 
  });
});