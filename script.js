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
    .then(r=>alert("Data Inserted"))
}
