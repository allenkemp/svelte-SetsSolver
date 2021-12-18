const deck = [
    {
      shape: "o",
      color: "p",
      shade: "c",
      qty: 2,
      id: "0"
    },
    {
      shape: "o",
      color: "g",
      shade: "l",
      qty: 2,
      id: "1"
    },
    {
      shape: "d",
      color: "r",
      shade: "s",
      qty: 1,
      id: "2"
    },
    {
      shape: "d",
      color: "p",
      shade: "c",
      qty: 1,
      id: "3"
    },
    {
      shape: "o",
      color: "p",
      shade: "s",
      qty: 2,
      id: "4"
    },
    {
      shape: "o",
      color: "g",
      shade: "c",
      qty: 1,
      id: "5"
    },
    {
      shape: "s",
      color: "r",
      shade: "c",
      qty: 1,
      id: "6"
    },
    {
      shape: "o",
      color: "p",
      shade: "l",
      qty: 2,
      id: "7"
    },
    {
      shape: "o",
      color: "r",
      shade: "l",
      qty: 2,
      id: "8"
    },
    {
      shape: "s",
      color: "r",
      shade: "l",
      qty: 3,
      id: "9"
    },
    {
      shape: "d",
      color: "g",
      shade: "c",
      qty: 1,
      id: "10"
    },
    {
      shape: "s",
      color: "r",
      shade: "c",
      qty: 3,
      id: "11"
    }
  ];
  
  function prettyPrint(tile) {
    
    let colorDescription = "";
    let shapeDescription = "";
    let shadeDescription = "";
    
    switch (tile.shape) {
      case "o":
        shapeDescription = "Oval";
        break;
      case "d":
        shapeDescription = "Diamond";
        break;
      case "s":
        shapeDescription = "Squiggle";
        break;
      default:
        shapeDescription = "Invalid";
    }
  
    switch (tile.color) {
      case "r":
        colorDescription = "Red";
        break;
      case "g":
        colorDescription = "Green";
        break;
      case "p":
        colorDescription = "Purple";
        break;
      default:
        colorDescription ="Invalid";
    }
    
    switch (tile.shade) {
      case "s":
        shadeDescription = "Solid";
        break;
      case "c":
        shadeDescription = "Clear";
        break;
      case "l":
        shadeDescription = "Striped";
        break;
      default:
        shadeDescription = "Invalid"; 
    }
    
    let description = `Tile ${tile.id} has ${tile.qty} ${colorDescription} ${shapeDescription} shapes with ${shadeDescription} Shading.`;
    
  }
  
  deck.forEach(prettyPrint);
  
  //Rules: each feature (shape, color, shading, number) must be all different or all the same
  //ex: Valid set: 3 red solid ovals, 3 red solid squiggles, 3 red solid diamonds
  //    each card is 3 items, all red, all solid, all shapes different
  //    
  //    Valid set: 1 green solid oval, 2 striped red ovals, 3 clear purple ovals
  //      number of items, color, shading are all unique, shape is same
  //
  //    Not Valid set: 1 green solid oval, 2 purple solid squiggles, 3 solid red ovals
  //    not valid because color & shape is same on 2 cards but not 3rd


let sets = [];
let duplicateFlag = false;

deck.forEach((el) => {
    console.log(`first card: ${el.id}`);
    let subdeck1 = [...deck];
    subdeck1.splice(deck.indexOf(el),1);
  
    subdeck1.forEach((el2) => {
        console.log(`second card : ${el2.id}`);
        let subdeck2 = [...subdeck1];
        subdeck2.splice(subdeck1.indexOf(el2),1);
        subdeck2.forEach((el3) => {
            console.log(`third card : ${el3.id} `);
            //console.log(`3 cards are: ${el.id}, ${el2.id}, and ${el3.id}`);
            if( ((el.qty == el2.qty && el.qty == el3.qty && el2.qty == el3.qty) ||
                (el.qty != el2.qty && el.qty != el3.qty && el2.qty != el3.qty)) &&

                ((el.shape == el2.shape && el.shape == el3.shape && el2.shape == el3.shape) ||
                (el.shape != el2.shape && el.shape != el3.shape && el2.shape != el3.shape)) &&

                ((el.shade == el2.shade && el.shade == el3.shade && el2.shade == el3.shade) ||
                (el.shade != el2.shade && el.shade != el3.shade && el2.shade != el3.shade)) &&

                ((el.color == el2.color && el.color == el3.color && el2.color == el3.color) ||
                (el.color != el2.color && el.color != el3.color && el2.color != el3.color))
             )
             {
                 let foundSet = [el, el2, el3];
                 foundSet.sort((a: any,b: any) => a.id - b.id);
                 console.log(`found set after sort: ${foundSet[0].id}, ${foundSet[1].id}, ${foundSet[2].id}`);
               
                 console.log(`sets array length: ${sets.length}`);
                 if(sets.length == 0 || JSON.stringify(sets).indexOf(JSON.stringify(foundSet)) == -1)
                   {
                     console.log(`Added new set - ${foundSet[0].id}, ${foundSet[1].id}, ${foundSet[2].id}`)
                     sets.push(foundSet);    
                   }
             }
               
                 
             
        });
    
    });

});

console.log(sets);