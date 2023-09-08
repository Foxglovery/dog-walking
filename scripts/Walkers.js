import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click", 
    (clickEvent)=>{//when clicked, passes item clicked to func
        const whatWasClicked = clickEvent.target//saves the target clicked on to const
        const clickedCityId = whatWasClicked.dataset.city
        let walkerCityNames = []
        if (whatWasClicked.dataset.type === "walker") {
           for (const city of cities) {
            if(city.id === parseInt(clickedCityId)) {
                walkerCityNames.push(city.name)
                
            }
           
            // const matchCityToName = (matchedCities) => {
            //     let matchingCities = ""
            //     for (const i of matchedCities) {
            //         for (const city of cities) {
            //             if (i.cityId === city.id) {
            //                 matchingCities += `${city.name} and `
            //             }
            //         }
            //     }
            //     matchingCities = matchingCities.slice(0, -5)
            //     return matchingCities
            // }

           }
           

            window.alert(`This Walker works in ${walkerCityNames}`)
        }
        
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}"
                        data-city="${walker.cityId}"
                        data-type="walker"
        >${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML

}

//deleted FullName from line 10
//fixed the import in line 1
//added return statement, line 14