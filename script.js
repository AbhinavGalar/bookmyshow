async function fet(){
    let table = document.querySelector('#displaydata')
    let res = await fetch("http://localhost:3000/emp")
    let data = await res.json()
    let finaldata = data.map((e)=>`
    <tr>
    <td> ${e.id} </td>
    <td> ${e.name} </td>
    <td> ${e.age} </td>
    <td> ${e.contact} </td>
    <td> ${e.city} </td>
    <td> <button onclick="mydelete('${e.id}')">Delet</button> </td>
    <td> <button onclick="edit('${e.id}')">Edit</button> </td>
    </tr>

    `).join("")
    table.innerHTML = finaldata
}


function insert_data(){
    let data = {
        movie: document.querySelector('#movie').value,
        row: document.querySelector('#row').value,
    seats: document.querySelector('#timing').value,
        contact: document.querySelector('#seat').value,

    }

    fetch("http://localhost:3000/emp",{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(r=>alert("BOOKING CONFIRMED GO AND ENJOY "))
}
