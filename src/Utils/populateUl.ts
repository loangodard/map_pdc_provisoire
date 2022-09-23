import { CollectPoint } from "../Classes/CollectPoint/CollectPoint.js";
import { fillColor } from "./fillColor.js";

export const populateUl = (collectPoints: CollectPoint[]) => {
    const collectPointList = document.getElementById("collect-point-list");
    if (collectPointList) {
        collectPoints.forEach((collectPoint) => {
            console.log("rate =>",fillColor(collectPoint.saturationRate))
            const li = document.createElement("li");
            li.classList.add("collect-point-container");
            li.innerHTML = `
                        <div>
                            <h2>${collectPoint.name}</h2>
                            <p>${collectPoint.address}, ${collectPoint.zipCode} ${collectPoint.city}</p>
                            <div class="collect-point-crats-data-container">
                                <ul>
                                    <li>Caisses pleines : <b>${collectPoint.numberOfFullCrates}/${collectPoint.capacity}</b></li>
                                    <li>Taux de remplissage : <b>${collectPoint.saturationRate}%</b><div class="circle" style="background-color:${fillColor(collectPoint.saturationRate)};"></div></li>
                                </ul>
                            </div>
                        </div>
                    `;

            collectPointList.appendChild(li);
        })
    }
}