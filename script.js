plantsearch = document.querySelector("#catalogue_search")
plantsearch.addEventListener("keyup",Search_catalogue)

const catalogue = [
    ["Ajwain","images/Ajwain.jpg","5","Ajwain is an herbal plant which can be used to help with digestive issues, as well as cooking with the seeds and leaves"],
    ["Assorted Succulents","images/Succulents.jpg","3-5","Multiple succulents for growing. Easy to grow with low maintenance needed"],
    ["Avocado","images/Avocado.jpg","10","A fruit tree that will eventually begin to grow avocados. Currently, it is very young, but will grow over time"],
    ["Balloon Vine / Modakathaan","images/Balloon vine.jpg","5","This is a plant with some uses such as the roots helping with stomach issues, and the leaves being a food"],
    ["Banana Tree","images/Banana.jpg","25-35","A fruit tree that grows bananas. The stalks can create more pups(offshoots) over time, allowing to to get more"],
    ["Betal Leaf / Paan","images/Paan.jpg","5-10","This is a plant with many medicinal benefit and many vitamins, such as vitamin C, calcium, and iron"],
    ["Curry Leaf","images/Curry Leaf.jpg","10-20","A plant used in many dishes and foods and has a wide range of use."],
    ["Thulasi","images/Thulasi.jpg","5-15","This is a plant universally known for its benefits, in english known as Holy Basil. Used in many festivals and ceremonies as well"],
    ["Malabar Spinach","images/Malabar.jpg","5-8","This is a plant used all across India, and is a vine, producing a large amount of leaves."],
    ["Mint / Pudina","images/Mint.jpg","5","This plant grows rampantly, and so just one plant can become an entire bed with time. Extremely worth the cost compared to the output of mint"],
    ["Ponnaganti","images/Ponnaganti.jpg","10","This is a plant used in daal, and other foods. Most common in Andhra, it can be used for your dishes"],
    ["Ridge Gourd","images/Ridge GourdX.jpg","5-8","This is a seedling for a ridge gourd plant, and will grow with time."],
    ["Ruby Necklace","images/Ruby Necklace.jpg","8","This is a larger succulent and is easy to maintain."],
    ["Vicks Plant","images/Placeholder.jpg","2-5","This plant is what makes vicks, and the smell of the leaves has positive effects of congestion and colds"],
    ["Bottle Gourd","images/Placeholder.jpg","5","This is a seedling for a bottle gourd plant, and will grow with time."],
]


function Search_catalogue() {
    let query = plantsearch.value
    document.getElementById("catalogue").innerHTML = ""
    for(let i=0;i<catalogue.length;i++){
        if (catalogue[i][0].toLowerCase().includes(query.toLowerCase()) == true){
            let box = document.createElement("div")
            box.className = "result_box"
            box.innerHTML = `
            <h2>${catalogue[i][0]}</h2>
            <img src="${catalogue[i][1]}">
            <p>Price: $${catalogue[i][2]}</p>
            <p>${catalogue[i][3]}</p>
            `
            document.querySelector("#catalogue").appendChild(box)
            box.addEventListener('mouseenter',(()=>{
                box.style.transform="scale(115%)"
                document.querySelector("#blurbox").style.backdropFilter="blur(0.2vw) brightness(80%)"
                document.querySelector("#blurbox").style.zIndex=1
                box.style.zIndex=2
            }))
            box.addEventListener('mouseleave',(()=>{
                box.style.transform="scale(100%)"
                document.querySelector("#blurbox").style.zIndex=-1
                document.querySelector("#blurbox").style.backdropFilter="blur(0vw) brightness(100%)"
                box.style.zIndex=0
            }))
        }
    }
}



Search_catalogue()

carousel = setInterval(() => {
    allboxes = document.querySelectorAll(".carouselbox")
    for(i=0;i<allboxes.length;i++){
        let xpercent = ((allboxes[i].getBoundingClientRect().left+allboxes[i].getBoundingClientRect().width/2)/window.innerWidth)*100;
        allboxes[i].style.opacity = `${((-1/100000)*((xpercent-50)**4))+100}%`
    }
}, 50);
