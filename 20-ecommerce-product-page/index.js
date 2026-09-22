let countEl = document.getElementById('count-el')
// console.log(countEl)

let count = 0

function increment(){
count += 1
countEl.innerText = count
}

function decrease(){
if (count >=1){
   count -= 1
}else{
    count = 0
}
countEl.innerText = count

}

function add(){
    console.log(count)
}
