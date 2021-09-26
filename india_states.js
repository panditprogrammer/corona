// covid live status india states wise 
function india_fetch() {


    var request = new XMLHttpRequest()

    request.open('GET', 'https://data.covid19india.org/data.json', true)
    request.onload = function () {
        // Begin accessing JSON data here
        var india_data = JSON.parse(this.response)
        console.log(india_data);

        if (request.status >= 200 && request.status < 400) {
            for (let i = 1; i < india_data.statewise.length - 1; i++) {
                let table_row = _table.insertRow();
                //create cell no.1
                table_row.insertCell(0);
                _table.rows[i].cells[0].innerHTML = india_data.statewise[i].state;
                _table.rows[i].cells[0].style.textAlign = "left";
                _table.rows[i].cells[0].style.color = "white";
                _table.rows[i].cells[0].classList.add('counter');
                _table.rows[i].cells[0].classList.add('bg-secondary');

                table_row.insertCell(1);
                _table.rows[i].cells[1].innerHTML = india_data.statewise[i].active;
                _table.rows[i].cells[1].classList.add('counter');
                _table.rows[i].cells[1].style.color = "white";
                _table.rows[i].cells[1].classList.add('bg-secondary');

                table_row.insertCell(2);
                _table.rows[i].cells[2].innerHTML = india_data.statewise[i].confirmed;
                _table.rows[i].cells[2].classList.add('counter');
                _table.rows[i].cells[2].classList.add('bg-warning');

                table_row.insertCell(3);
                _table.rows[i].cells[3].innerHTML = india_data.statewise[i].recovered;
                _table.rows[i].cells[3].classList.add('counter');
                _table.rows[i].cells[3].classList.add('bg-success');

                table_row.insertCell(4);
                _table.rows[i].cells[4].innerHTML = india_data.statewise[i].deaths;
                _table.rows[i].cells[4].classList.add('counter');
                _table.rows[i].cells[4].classList.add('bg-danger');

                table_row.insertCell(5);
                _table.rows[i].cells[5].innerHTML = india_data.statewise[i].deltaconfirmed;
                _table.rows[i].cells[5].style.color = "#000000";
                _table.rows[i].cells[5].classList.add('counter');
                _table.rows[i].cells[5].classList.add('bg-warning');

                table_row.insertCell(6);
                _table.rows[i].cells[6].innerHTML = india_data.statewise[i].deltarecovered;
                _table.rows[i].cells[6].classList.add('counter');
                _table.rows[i].cells[6].classList.add('bg-success');

                table_row.insertCell(7);
                _table.rows[i].cells[7].innerHTML = india_data.statewise[i].deltadeaths;
                _table.rows[i].cells[7].classList.add('counter');
                _table.rows[i].cells[7].classList.add('bg-danger');

                table_row.insertCell(8);
                _table.rows[i].cells[8].innerHTML = india_data.statewise[i].migratedother;
                _table.rows[i].cells[8].style.color = "white";
                _table.rows[i].cells[8].classList.add('counter');
                _table.rows[i].cells[8].classList.add('bg-secondary');

                table_row.insertCell(9);
                _table.rows[i].cells[9].innerHTML = india_data.statewise[i].lastupdatedtime;
                _table.rows[i].cells[9].classList.add('counter');
                _table.rows[i].cells[9].classList.add('bg-secondary');

            }

        } else {
            console.log('error');
        }
    }

    request.send()

    let _table = document.getElementById('india_table');

    // console.log(india_data.statewise);




}



