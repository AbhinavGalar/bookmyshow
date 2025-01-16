async function fet(){
    let table = document.querySelector('#displaydata')
    let res = await fetch("http://localhost:3000/emp")
    let data = await res.json()
    let finaldata = data.map((e)=>`
    <tr>
    <td> ${e.id} </td>
    <td> ${e.movie} </td>
    <td> ${e.sets} </td>
    <td> ${e.row} </td>
    <td> ${e.timing} </td>

    <td> <button onclick="mydelete('${e.id}')">CANCEL</button> </td>
    <td> <button onclick="edit('${e.id}')">Edit</button> </td>
    </tr>

    `).join("")
    table.innerHTML = finaldata
}
fet()

// ==============delete===============
function mydelete(id){
    console.log(id);
    fetch(`http://localhost:3000/emp${id}`,{
        method:'DELETE'
    })
    .then(r=>alert("Deleted...!!"))
 }


// ============insert data=============
function insert_data(){
    let data = {
        movie: document.querySelector('#Movie').value,
        sets: document.querySelector('#row').value,
        row: document.querySelector('#seats').value,
        timing: document.querySelector('#timing').value,

    }

    fetch("http://localhost:3000/emp",{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(r=>alert("Data Inserted"))
}
// ==========================local storage data==========================
let data={
    username:"abhinav",
    passowrd:6261471558,
}
localStorage.setItem("userdata",JSON.stringify(data))
let finaldata=JSON.parse(localStorage.getItem('userdata'))
console.log(finaldata.age);
// ====================BOM=========================
const fun =()=>{
    window.open("signin.html"," ","height=100px","width=100px","top=100px","width=100px")
}