async function printSchedule(sch){
    let response = await fetch('http://127.0.01:8090/pl_list');
    let body = await response.text();
    let pl = JSON.parse(body);
    for(let i = 0; i < sch.length; i++){
        if(pl[i]){
            venue = " [" + pl[i] + "]";
        }
        else{
            venue = "";
        }
        switch(i){
            case 0: document.getElementById('e8').innerHTML = sch[i] + venue;
                    break;
            case 1: document.getElementById('e9').innerHTML = sch[i] + venue;
                    break;
            case 2: document.getElementById('e10').innerHTML = sch[i] + venue;
                    break;
            case 3: document.getElementById('e11').innerHTML = sch[i] + venue;
                    break;
            case 4: document.getElementById('e12').innerHTML = sch[i] + venue;
                    break;
            case 5: document.getElementById('e13').innerHTML = sch[i] + venue;
                    break;
            case 6: document.getElementById('e14').innerHTML = sch[i] + venue;
                    break;
            case 7: document.getElementById('e15').innerHTML = sch[i] + venue;
                    break;
            case 8: document.getElementById('e16').innerHTML = sch[i] + venue;
                    break;
            case 9: document.getElementById('e17').innerHTML = sch[i] + venue;
                    break;
            case 10: document.getElementById('e18').innerHTML = sch[i] + venue;
                    break;
            case 11: document.getElementById('e19').innerHTML = sch[i] + venue;
                    break;
            case 12: document.getElementById('e20').innerHTML = sch[i] + venue;
                    break;
            case 13: document.getElementById('e21').innerHTML = sch[i] + venue;
                    break; 
            case 14: document.getElementById('e22').innerHTML = sch[i] + venue;
                    break; 
            case 15: document.getElementById('e23').innerHTML = sch[i] + venue;
                    break;
        }                 
    }
}

document.getElementById('Mon').addEventListener('click', async function(event){

    event.preventDefault();
    try{
        let current = 0;
        let response = await fetch('http://127.0.01:8090/switch',{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "cur=" + current
            })
        if(!response.ok){
            throw new Error("problem switching day" + response.code);
        }
    } catch(error){
        alert("problem: " + error);
    }
    
});

document.getElementById('Tue').addEventListener('click', async function(event){

    event.preventDefault();
    try{
        let current = 1;
        let response = await fetch('http://127.0.01:8090/switch',{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "cur=" + current
            })
        if(!response.ok){
            throw new Error("problem switching day" + response.code);
        }
    } catch(error){
        alert("problem: " + error);
    }

});

document.getElementById('Wed').addEventListener('click', async function(event){

    event.preventDefault();
    try{
        let current = 2;
        let response = await fetch('http://127.0.01:8090/switch',{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "cur=" + current
            })
        if(!response.ok){
            throw new Error("problem switching day" + response.code);
        }
    } catch(error){
        alert("problem: " + error);
    }

});

document.getElementById('Thu').addEventListener('click', async function(event){

    event.preventDefault();
    try{
        let current = 3;
        let response = await fetch('http://127.0.01:8090/switch',{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "cur=" + current
            })
        if(!response.ok){
            throw new Error("problem switching day" + response.code);
        }
    } catch(error){
        alert("problem: " + error);
    }

});

document.getElementById('Fri').addEventListener('click', async function(event){

    event.preventDefault();
    try{
        let current = 4;
        let response = await fetch('http://127.0.01:8090/switch',{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "cur=" + current
            })
        if(!response.ok){
            throw new Error("problem switching day" + response.code);
        }
    } catch(error){
        alert("problem: " + error);
    }

});

document.getElementById('Sat').addEventListener('click', async function(event){

    event.preventDefault();
    try{
        let current = 5;
        let response = await fetch('http://127.0.01:8090/switch',{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "cur=" + current
            })
        if(!response.ok){
            throw new Error("problem switching day" + response.code);
        }
    } catch(error){
        alert("problem: " + error);
    }

});

document.getElementById('Sun').addEventListener('click', async function(event){
    event.preventDefault();

    try{
        let current = 6;
        let response = await fetch('http://127.0.01:8090/switch',{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "cur=" + current
            })
        if(!response.ok){
            throw new Error("problem switching day" + response.code);
        }
    } catch(error){
        alert("problem: " + error);
    }

});

document.getElementById('week').addEventListener('click', async function(event){
    
    let response = await fetch('http://127.0.01:8090/list');
    let body = await response.text();
    document.getElementById('schedule').style.display = 'block';
    let scheduling = JSON.parse(body);
    printSchedule(scheduling);

})

document.getElementById('ev_but').addEventListener('click', async function(event){
    
    document.getElementById('ev').style.display = 'block';
    document.getElementById('menu').style.display = 'none';

})

document.getElementById('pl_but').addEventListener('click', async function(event){
    
    let response = await fetch('http://127.0.01:8090/places');
    let body = await response.text();
    let places = JSON.parse(body);
    document.getElementById('places').innerHTML = "<ul>";
    for(let i = 0; i < places.length; i++){
        document.getElementById('places').innerHTML += "<li>" + places[i] + "</li>";
    }
    document.getElementById('places').innerHTML += "</ul>";
    document.getElementById('pl').style.display = 'block';
    document.getElementById('menu').style.display = 'none';

})

document.getElementById('ev_back').addEventListener('click', async function(event){
    
    document.getElementById('ev').style.display = 'none';
    document.getElementById('menu').style.display = 'block';

})

document.getElementById('pl_back').addEventListener('click', async function(event){
    
    document.getElementById('pl').style.display = 'none';
    document.getElementById('menu').style.display = 'block';

})



document.getElementById('add_ev').addEventListener('submit', async function(event){
    event.preventDefault();

    try{
        let ev_event = document.getElementById('ev_event').value;
        let hr = document.getElementById('hr').value;
        let place = document.getElementById('place').value;
        document.getElementById('ev_event').value = "";
        document.getElementById('hr').value = "";
        document.getElementById('place').value = "";
        let response = await fetch('http://127.0.01:8090/add',{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "ev_event=" + ev_event + "&hr=" + (hr-8) + "&place=" + place
            })
        if(!response.ok){
            throw new Error("problem adding event" + response.code);
        }
    } catch(error){
        alert("problem: " + error);
    }

    let response = await fetch('http://127.0.01:8090/list');
    let body = await response.text();
    document.getElementById('schedule').style.display = 'block';
    let scheduling = JSON.parse(body);
    printSchedule(scheduling);

})

document.getElementById('del_ev').addEventListener('submit', async function(event){
    event.preventDefault();

    try{
        let hr = document.getElementById('hr2').value;
        document.getElementById('hr2').value = "";
        let response = await fetch('http://127.0.01:8090/delete',{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "hr=" + (hr-8)
            })
        if(!response.ok){
            throw new Error("problem deleting event" + response.code);
        }
    } catch(error){
        alert("problem: " + error);
    }

    let response = await fetch('http://127.0.01:8090/list');
    let body = await response.text();
    document.getElementById('schedule').style.display = 'block';
    let scheduling = JSON.parse(body);
    printSchedule(scheduling);

})