document = document.getElementById("form1").addEventListener("submit", submitFun1);

var employeeDataArr =JSON.parse(localStorage.getItem("employeeData"))|| [];
function submitFun1(e) {
    document.querySelector("#tbody").innerHTML = "";
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var shift = document.querySelector("#shift").value;
    var date = document.querySelector("#date").value;
    var employee_id = document.querySelector("#employee_id").value;

    var employeeObj = {
        name: name,
        shift: shift,
        date: date,
        employee_id: employee_id,
    }

    employeeDataArr.push(employeeObj);
    localStorage.setItem("employeeData", JSON.stringify(employeeDataArr));
    document.querySelector("#form1").reset();
    alert("employee Added Successfully");
    

    displayFun(employeeDataArr)
}

function displayFun(employeeDataArr) {

    var count = 1;
    employeeDataArr.map(function (item) {
    
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerHTML = count++
        var td2 = document.createElement("td");
        td2.innerHTML = item.name;
        var td3 = document.createElement("td");
        td3.innerHTML = item.shift;
        var td4 = document.createElement("td");
        td4.innerHTML = item.date;
        var td5 = document.createElement("td");
        td5.innerHTML = item.employee_id;
        var td6 = document.createElement("td");
        var btn1 = document.createElement("button");
        btn1.innerHTML = "P";
        btn1.addEventListener("click", function () {
            td6.innerHTML = "<button >Present</button>";
        });
        var btn2 = document.createElement("button");
        btn2.innerHTML = "A";
        btn2.addEventListener("click", function () {
            td6.innerHTML = "<button id='absent'>Absent</button>";
        
        });
        td6.classList.add("td6");
        td6.append(btn1, btn2);

        tr.append(td1, td2, td3, td4, td5, td6);

        document.querySelector("#tbody").append(tr);

    });
    
}
displayFun(employeeDataArr);
