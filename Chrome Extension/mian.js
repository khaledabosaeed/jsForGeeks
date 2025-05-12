const inputField = document.getElementById("input-El");
const btn = document.getElementById("button-El");
const deleteBtn = document.getElementById("clear-El");
const listItems = document.getElementById("ulEl");
const tabBtn = document.getElementById("tab-El");
let myLeads = [];

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads) );
        render(myLeads);
    })
})

btn.addEventListener("click", function () {
  myLeads.push(inputField.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  inputField.value = "";
  render(myLeads);
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems +=
     `<li>
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("click", function () { 
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});  