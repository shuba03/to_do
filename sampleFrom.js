var form = document.getElementById('details-form');
form.onsubmit = function (e){ 
  var firstNameEle = document.getElementById('first-name');
  var lastNameEle = document.getElementById('last-name');
  var rollNoEle = document.getElementById('roll-no');
  var emailEle = document.getElementById('email');
  var phoneEle = document.getElementById('phone');
  var countryEle = document.getElementById('country');

  var formDetails = {
    firstName : firstNameEle.value,
    lastName : lastNameEle.value,
    rollNo : rollNoEle.value,
    email : emailEle.value,
    phoneNo : phoneEle.value,
    country : countryEle.value,
  };

  firstNameEle.value = "";
  lastNameEle.value = "";
  rollNoEle.value = "";
  phoneEle.value = "";
  emailEle.value = "";
  countryEle.value = "India";

  console.log(formDetails);
  addRow(formDetails);
  return false;
}

function addRow(details)
{
  var tableRow = document.createElement('tr');
  var firstNameData = document.createElement('td');
  var lastNameData = document.createElement('td');
  var rollNoData = document.createElement('td');
  var countryData = document.createElement('td');
  var phoneData = document.createElement('td');
  var emailData = document.createElement('td');
  var buttonCell = document.createElement('td');


  var button = document.createElement('button');
  button.innerText = 'Cancel';
  button.onclick = function(e){
    tableRow.remove();
  }

  firstNameData.innerText = details.firstName;
  lastNameData.innerText = details.lastName;
  rollNoData.innerText = details.rollNo;
  emailData.innerText = details.email;
  countryData.innerText = details.country;
  phoneData.innerText = details.phoneNo;
  buttonCell.appendChild(button);


  tableRow.append(firstNameData, lastNameData, rollNoData, emailData, countryData, phoneData,buttonCell);
  document.getElementById('data-table').appendChild(tableRow);
}