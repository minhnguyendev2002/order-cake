import React, { useState } from "react";
import { TinderCard } from "./CardSwitch"; 
import ButtonActions from './ButtonActions';
import $ from 'jquery';
const db = [
  { 
    url: "/img/cake-circle-259.jpg",
    sku:"KA-259",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-260.jpg",
    sku:"KA-260",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-261.jpg",
    sku:"KA-261",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-262.jpg",
    sku:"KA-262",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-263.jpg",
    sku:"KA-263",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-264.jpg",
    sku:"KA-264",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-265.jpg",
    sku:"KA-265",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-266.jpg",
    sku:"KA-266",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-267.jpg",
    sku:"KA-267",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-268.jpg",
    sku:"KA-268",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-269.jpg",
    sku:"KA-269",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-270.jpg",
    sku:"KA-270",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-271.jpg",
    sku:"KA-271",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-272.jpg",
    sku:"KA-272",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-273.jpg",
    sku:"KA-273",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-274.jpg",
    sku:"KA-274",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-275.jpg",
    sku:"KA-275",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-276.jpg",
    sku:"KA-276",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-277.jpg",
    sku:"KA-277",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-278.jpg",
    sku:"KA-278",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-279.jpg",
    sku:"KA-279",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-280.jpg",
    sku:"KA-280",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-281.jpg",
    sku:"KA-281",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-282.jpg",
    sku:"KA-282",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-283.jpeg",
    sku:"KA-283",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  },
  {
    url: "/img/cake-circle-284.jpeg",
    sku:"KA-284",
    material:"Bột ngô, Bột mì, Dầu ăn, Sữa tươi không đường, Trứng gà, Đường xay",
    design:"Bánh tròn",
    height:"15cm"
  }
];

function Simple() {
  const characters = db; 
  const [lastDirection, setLastDirection] = useState(characters[characters.length-1].url); 
  const [skuDirection, setSkuDirection] = useState(characters[characters.length-1].sku); 
  const swiped = (direction,nameToDelete) => { 
    $('.card').removeClass('flip_toSee');
    $('.content_card_infor').fadeOut()
  }; 
  const outOfFrame = (name, sku) => { 
    setLastDirection(name);
    setSkuDirection(sku)
  };
  return (
    <> 
      <div className="container d-flex justify-content-center align-items-start">
        {characters.map((character,index) => (
          <TinderCard
            className="swipe"
            key={character.sku}
            onSwipe={(dir) => swiped(dir, character.url)} 
            onCardLeftScreen={() => outOfFrame(characters[index-1].url, characters[index-1].sku )}
          >
            <div
              style={{ backgroundImage: "url(" + character.url + ")" }}
              className="card"
            >
              <h3>{character.sku}</h3>
              <div className="content_card_infor">
                <h5 className="text-center">Thông tin sản phẩm</h5>
                <ul >
                  <li>Mã sản phẩm: <p>{character.sku}</p> </li>
                  <li>Nguyên liệu: <p>{character.material}</p> </li>
                  <li>Kiểu dáng: <span>{character.design}</span> </li>
                  <li>Chiều cao: <span>{character.height}</span> </li>
                </ul>
              </div>
            </div>
          </TinderCard>
        ))}
      </div> 
      <ButtonActions imageCakeActive={lastDirection} skuCake={skuDirection}/>
    </>
  );
}

export default Simple;
