import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()
document.addEventListener(
    "click",
    (clickEvent)=> {
        const clickTarget = clickEvent.target
        const clickedCityId = Number(clickTarget.dataset.cityid)
        const walkerAssignments = []
        if (clickTarget.dataset.type === "city") {
            for (const walker of walkers) {
                if (clickedCityId === walker.cityId) {
                    walkerAssignments.push(walker.name)
                }
            }
            
            
            window.alert(`${walkerAssignments[0]} is servicing this city.`)
        }
    }
    )
    //conditional checking the length of walkerAssignments

export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li data-type="city" data-cityid="${city.id}">${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

//added s to getWalker, line 3
//changed to walker.city, line 10
//changed <ol> to <ul>, line 7 and 10

//invoke getCities()
//iterate cities, if city id === object city id,