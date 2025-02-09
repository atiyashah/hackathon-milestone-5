"use strict";
let MyName = localStorage.getItem("name");
window.addEventListener("load", () => {
    let desig = localStorage.getItem("desig");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let add = localStorage.getItem("add");
    let pInfo = localStorage.getItem("pInfo");
    let degree = localStorage.getItem("degree");
    let degree2 = localStorage.getItem("degree2");
    let degree3 = localStorage.getItem("degree3");
    let pass = localStorage.getItem("pass");
    let pass2 = localStorage.getItem("pass2");
    let pass3 = localStorage.getItem("pass3");
    let uni = localStorage.getItem("uni");
    let uni2 = localStorage.getItem("uni2");
    let uni3 = localStorage.getItem("uni3");
    let skill1 = localStorage.getItem("skill1");
    console.log(skill1);
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    let styear = localStorage.getItem("styear");
    let endyear = localStorage.getItem("endyear");
    let comp = localStorage.getItem("comp");
    let companylocation = localStorage.getItem("companylocation");
    let jobtitle = localStorage.getItem("jobtitle");
    let achv = localStorage.getItem("achv");
    let picture = localStorage.getItem("profile_pic");
    let resName = document.getElementById("resName");
    resName.textContent = MyName;
    let resDesig = document.getElementById("resDesig");
    resDesig.textContent = desig;
    let resPhone = document.getElementById("resPhone");
    resPhone.textContent = phone;
    let resEmail = document.getElementById("resEmail");
    resEmail.textContent = email;
    let resAdd = document.getElementById("resAdd");
    resAdd.textContent = add;
    let resPinfo = document.getElementById("resPinfo");
    resPinfo.textContent = pInfo;
    let resPass = document.getElementById("resPass");
    resPass.textContent = pass;
    let resDegree = document.getElementById("resDegree");
    resDegree.textContent = degree;
    let resIns = document.getElementById("resIns");
    resIns.textContent = uni;
    let resPass2 = document.getElementById("resPass2");
    resPass2.textContent = pass2;
    let resDegree2 = document.getElementById("resDegree2");
    resDegree2.textContent = degree2;
    let resIns2 = document.getElementById("resIns2");
    resIns2.textContent = uni2;
    let resPass3 = document.getElementById("resPass3");
    resPass3.textContent = pass3;
    let resDegree3 = document.getElementById("resDegree3");
    resDegree3.textContent = degree3;
    let resIns3 = document.getElementById("resIns3");
    resIns3.textContent = uni3;
    let resS1 = document.getElementById("resS1");
    resS1.textContent = skill1;
    let resS2 = document.getElementById("resS2");
    resS2.textContent = skill2;
    let resS3 = document.getElementById("resS3");
    resS3.textContent = skill3;
    let resStartYear = document.getElementById("resStartYear");
    resStartYear.textContent = styear;
    let resEndyear = document.getElementById("resEndyear");
    resEndyear.textContent = endyear;
    let resTitle = document.getElementById("resTitle");
    resTitle.textContent = jobtitle;
    let resComp = document.getElementById("resComp");
    resComp.textContent = comp;
    let resLocation = document.getElementById("resLocation");
    resLocation.textContent = companylocation;
    let resJobTitle = document.getElementById("resJobTitle");
    resJobTitle.textContent = jobtitle;
    let resAch = document.getElementById("resAch");
    resAch.textContent = achv;
    let resImg = document.getElementById("resImg");
    resImg.src = picture;
});
let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener("click", () => {
    window.print();
});
//////////////////////////edit button//////////////////////////
let edit_btn = document.getElementById("edit_btn");
edit_btn?.addEventListener("click", () => {
    window.history.back();
});
/////////////////////////shareable button//////////////////////////
let shareable_btn = document.getElementById("shareable_btn");
let anc = document.getElementById("anc");
let userName;
if (MyName) {
    userName = MyName.toLowerCase().replace(/\s+/g, "-");
}
else {
    userName = "user";
}
let baseUrl = "http://127.0.0.1:5502/milstone-1/index.html";
let uniqueUrl = `${baseUrl}?/${myName}`;
shareable_btn?.addEventListener("click", () => {
    anc?.setAttribute("href", uniqueUrl);
});
