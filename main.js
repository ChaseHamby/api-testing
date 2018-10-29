console.log('hi');

const cemetaryBuilder = (data) => {
    let domString =`<h3>Cemetary Name: ${data[0].cemetery_name}</h3>
    <h3>Street Number : ${data[0].number}</h3>
    <h3>Street Name: ${data[0].mapped_location_address}</h3>
    <h3>County: ${data[0].additional_location_information}</h3>
    `
    $("#main").html(domString);
};

const ultraBuild = (data) => {
    let domString = '';
    for (let i = 0; i < data.length; i++) {
        domString += `<div>${Object.values(data[i])}</div>`;  
    }
    $("#main2").html(domString)
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
    cemetaryBuilder(data)
    ultraBuild(data);
    })
    .catch(error => {
        console.error(error)
    })
}

initialApiView();