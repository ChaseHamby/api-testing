console.log('hi');

const cemetaryBuilder = (data) => {
    let domString =`<h3>${data[0].cemetery_name}</h3>
    <h3>${data[0].number}</h3>
    <h3>${data[0].mapped_location_address}</h3>
    <h3>${data[0].additional_location_information}</h3>
    `
    $("#main").html(domString);
};

const newPromise = () => {
    return new Promise((resolve, reject) => {
    $.get(' https://data.nashville.gov/resource/jrij-nn43.json')
        .done((data) => {
            resolve(data);
    })
        .fail((error) => {
            reject(error);
        })
    })
};

const initialApiView = () => {
    newPromise().then(data => {
    console.log(data)
    cemetaryBuilder(data)
    })
    .catch(error => {
        console.error(error)
    })
}

initialApiView();