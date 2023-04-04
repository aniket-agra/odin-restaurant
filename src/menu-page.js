// fill content on menu page

import "./menu-page.css";
import Data from "./menu-data.tsv";

function createContent () {
    let content = document.querySelector("#content");
    content.style.paddingTop = "5%";

    let element = document.createElement("div");
    element.style.display = "grid";
    element.style.gridTemplateColumns = "1";
    element.style.rowGap = "1rem";
    
    let num_items = Data.length;
    for (let i = 0; i < num_items; i++) {
        let item = document.createElement("div");
        item.style.display = "flex";
        item.style.justifyContent = "space-between";

        let itemPic = new Image(200, 200);
        itemPic.src = undefined; //Data[0][0]

        let itemDesc = document.createElement("div");
        itemDesc.textContent = Data[i][1];
        itemDesc.style.alignSelf = "center";

        if (i % 2 === 0) {
            item.appendChild(itemPic);
            item.appendChild(itemDesc);
        }
        else {
            item.appendChild(itemDesc);
            item.appendChild(itemPic);
        }

        element.appendChild(item);
    }
    content.appendChild(element);
}

export {createContent};