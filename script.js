function insert_data(){
    let data = {
       movie name: document.querySelector('#movie').value,
        row: document.querySelector('#row').value,
        timing: document.querySelector('#timings').value,
        seats: document.querySelector('#seats').value,
        choose: document.querySelector('#choose').value,


    }

    fetch(`"http://localhost:3000/emp"`,{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(r=>alert("Data Inserted"))
}
