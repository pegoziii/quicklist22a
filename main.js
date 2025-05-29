const items = []

function addItem() {
    const itemName = document.querySelector("#item").value

    const item = {
        name: itemName,
        checked: false
    }

    items.push(item)

    document.querySelector("#item").value = ""

    showItemsList()
}

function showItemsList() {
    const sectionList = document.querySelector(".list")

    sectionList.textContent = ""

    items.sort((itemA, itemB) => Number(itemA.checked) - Number(itemB.checked))

    items.map ((item, index) => {
        sectionList.innerHTML += `
         <div class="item">
        <div>
            <input type="checkbox" name="list" id="item-${index}" ${item.checked == true ? "checked" : ""}> 
            <div class="custom-checkbox">
                <img src="./assests/assets/checked.svg" alt="checked">
            </div>
            <label for="item-${index}" onclick="checkItem('${item.name}')">${item.name}</label>
        </div>
        <button>
            <img src="./assests/assets/trash-icon.svg" alt="lixo">
        </button>
    </div> `

    })

} 


function checkItem(itemName) {
    const item = items.find((item) => item.name === itemName)
    item.checked = !item.checked
    showItemsList()
  }