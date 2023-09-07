import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click", 
    (clickEvent)=>{//when clicked, passes item clicked to func
        const whatWasClicked = clickEvent.target//saves the target clicked on to const
        
        if (whatWasClicked.dataset.type === "walker") {
            window.alert(`This Walker works in ${whatWasClicked.dataset.city}`)
        }
        
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}"
                        data-city="${walker.city}"
                        data-type="walker"
        >${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML

}

//deleted FullName from line 10
//fixed the import in line 1
//added return statement, line 14