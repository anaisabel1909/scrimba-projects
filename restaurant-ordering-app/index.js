import {menuArray} from "./data.js"

const menu = document.getElementById("menu-section")
const order = document.getElementById("order")
const orderList = document.getElementById("order-list")
const price = document.getElementById("total-price")
const completeOrderBtn = document.getElementById("complete-order-btn")
const paymentForm = document.getElementById("payment-form")
const paymentModal = document.getElementById("payment-modal")
const orderOnTheWayMessage = document.getElementById("order-on-the-way-section")

let orderArray = []

// render menu 
function getMenuHTML() {
    let menuHTML = ''
    menuArray.forEach((menuItem) => {
        const {name, ingredients, id, price, emoji} = menuItem
        menuHTML += `<div class="menu-section">
                        <div class="menu-item">
                            <div class="menu-item-emoji">${emoji}</div>
                            <div class="menu-item-spec">
                                <h4>${name}</h4>
                                <p>${ingredients.join(', ')}</p>
                                <h5>$${price}</h5>
                            </div>
                            <button class="add-item-btn" id="add-item-btn" data-item-id="${id}" data>+</button>
                        </div>
                        <div class="separator"></div>
                     </div>
                     `
                     
    })
    return menuHTML
}

menu.innerHTML = getMenuHTML()

// add item to order
menu.addEventListener('click', function(e) {
    if(e.target.dataset.itemId){
        addItemToOrder(e.target.dataset.itemId)
        order.style.display = 'block';
    }
})

function addItemToOrder(itemId) {
    orderArray.push(menuArray[Number(itemId)])
    renderOrderList()
}

// render order list + total price
function renderOrderList() {
    orderList.innerHTML = getOrderList()
    price.textContent = `$${getTotalPrice()}`
}

function getOrderList() {
    let orderHTML = ""
    orderArray.forEach((orderItem) => {
    orderHTML += `<div class="order-item">
                    <h4>${orderItem.name}</h4>
                    <button id="remove-item-btn" data-item-to-remove=${orderItem.id}>remove</button>
                    <h4 class="order-price">$${orderItem.price}</h4>
                  </div>`
    })
    return orderHTML
}

function getTotalPrice() {
    return orderArray.reduce((total, item) => total + item.price, 0)
}

// remove item from order list
orderList.addEventListener('click', function(e) {
    if (e.target.dataset.itemToRemove) {
        removeItemFromOrder(e.target.dataset.itemToRemove)
    }
})

function removeItemFromOrder(itemId) {
    for (let i = 0; i < orderArray.length; i++) {
        if (orderArray[i].id === Number(itemId)) {
            orderArray.splice(i, 1)
            renderOrderList()
            break
        }
    }
}

// complete order and go to payment section 
completeOrderBtn.addEventListener('click', () => paymentModal.style.display = 'block')

paymentForm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    order.style.display = 'none'
    
    paymentModal.style.display = 'none'
    
    const paymentFormData = new FormData(paymentForm)
    const name = paymentFormData.get('userName')
    
    orderOnTheWayMessage.innerHTML = 
    `
    <div class="order-message-section">
        <h3 class="order-message">Thanks, ${name}! Your order is on the way!</h3>
    </div>
    `
    orderOnTheWayMessage.style.display = 'block'
})