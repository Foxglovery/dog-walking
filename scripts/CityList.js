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
            if (walkerAssignments.length === 1 ) {

                window.alert(`${walkerAssignments[0]} is servicing this city.`)
            } else if (walkerAssignments.length >  1) {
                    const walkerAssignmentString = walkerAssignments.toString()
                    console.log(walkerAssignmentString)
                window.alert(`${walkerAssignments.join(" and ")} are servicing this city`)
            } else if (walkerAssignments.length === 0) {
                window.alert(`There are no walkers servicing this city. Too bad.`)
            }
            
        }
    }
    )
    //conditional checking the length of walkerAssignments
    //if walkerAssignments.length > 1
    //data.join method for multiple walkers 







    
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




// import { getDocks, getHaulers } from "./database.js"

// const haulers = getHaulers()
// const docks = getDocks()

// export const DockList = () => {


//     let docksHTML = "<ul>"

//     for (const dock of docks) {


//         // Convert each dock object to an <li> and append to the docksHTML string
//         docksHTML += `<li class="dock" data-name="${dock.location}" data-id="${dock.id}" data-type="dock">"${dock.location}"</li>`
//     }

//     docksHTML += "</ul>"

//     return docksHTML
// }

// // 
// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target

//         if (itemClicked.dataset.type === "dock") {

//             const dockId = itemClicked.dataset.id //dock.id PK
//             const location = itemClicked.dataset.name
        
//             const data = []
            
//                  //iterate the docks array
//                 //if a hauler is currently at the dock, 
//                 //iterate the haulers array
//                 //for each hauler if the hauler.dockId is equal to the dock.id
//                 for (const hauler of haulers) {
//                     if (hauler.dockId === parseInt(dockId)) {
//                         data.push(hauler.name)
//                     }
                    
//                 }
//                 if (data.length === 0) {
// // The Shanghai, China dock is currently unloading nothing
//                 window.alert(`${location} is currently unloading nothing`)
//                 } else if (data.length === 1) {
//                 window.alert(`${location} is currently unloading ${data[0]}`) 
//                 } else if (data.length > 1) {
//                     window.alert(`${location} is currently unloading ${data.join(", ")}`)
//                     //display each item in the array data, using .join()
//                 }
//             }
                

            
//         }
// )

    

//INSTRUCTION:
// When a dock is clicked, present a message to the user that follows the format below if a hauler is currently at that dock.
// The Shanghai, China dock is currently unloading Boaty McBoatface


// If there is no hauler at the dock, present the following message.
// The Shanghai, China dock is currently unloading nothing

// If there is more than one hauler at the dock, present the following message.
// The Shanghai, China dock is currently unloading Boaty McBoatface, Seawise Giant


