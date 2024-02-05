var updateBtns = document.getElementsByClassName('update-cart')

for(i = 0; i < updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId', productId, 'action', action)
        console.log('user:', user)
        if (user === "AnonymousUser"){
            updateUserOrder(productId, action)
        }
        else{
            console.log('user logged in, success add')
        }
    })
}

function updateUserOrder(productId, action){
    console.log('user logged in, success add')
    var url = '/update_item/'
    fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'productId': productId, 'action': action})
    })
    .then((response) => {
        response.json()
    })
    .then((data) => {
        console.log('data', data)
    })
}