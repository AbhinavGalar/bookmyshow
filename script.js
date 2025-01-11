async function fet(){
    let table = document.querySelector('#displaydata')
    let res = await fetch("http://localhost:3000/emp")
    let data = await res.json()
    let finaldata = data.map((e)=>`
    <tr>
    <td> ${e.id} </td>
    <td> ${e.name} </td>
    <td> ${e.show} </td>
    <td> ${e.row} </td>
    <td> ${e.timings} </td>
    <td> <button onclick="mydelete('${e.id}')">Delet</button> </td>
    <td> <button onclick="edit('${e.id}')">Edit</button> </td>
    </tr>

    `).join("")
    table.innerHTML = finaldata
}
fet()

// ==============delete===============
function mydelete(id){
    console.log(id);
    fetch(`http://localhost:3000/emp/${id}`,{
        method:'DELETE'
    })
    .then(r=>alert("Deleted...!!"))
 }


// ============insert data=============
function insert_data(){
    let data = {
        name: document.querySelector('#name').value,
        age: document.querySelector('#age').value,
        city: document.querySelector('#city').value,
        contact: document.querySelector('#contact').value,

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


// ====================update===============
 async function edit(id){
    let res = await fetch(`http://localhost:3000/emp/${id}`,)
    let data = await res.json()
    let edit_frm =`
    <input type="text" value="${data.id}" readonly id="id1"> <br>
    <input type="text" value="${data.movie name}" id=" movie name1"> <br>
    <input type="text" value="${data.age}" id="age1"> <br>
    <input type="text" value="${data.contact}" id="contact1"> <br>
    <input type="text" value="${data.city}" id="city1"> <br>
    <input type="submit" onclick="mydata('${data.id}')">

    `
    document.querySelector('#editform').innerHTML=edit_frm
 }

 function mydata(id){
    let updata = {
        name: document.querySelector('#movie name').value,
        id: document.querySelector('#row').value,
        age: document.querySelector('#age1').value,
        contact: document.querySelector('#contact1').value,
        city: document.querySelector('#city1').value

    }
    fetch(`http://localhost:3000/emp/${id}`,{
        method: 'PUT',
        header:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updata)
    })
    .then(res=>alert("updated..!!!"))
 }
