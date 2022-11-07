// radio
var radio1 = document.getElementById('inlineRadio1');
var radio2 = document.getElementById('inlineRadio2');
var checkBoxTxt = document.getElementById('check-box-text');

radio1.onchange = function () {
    if (radio1.checked) {
        checkBoxTxt.innerText = "I have obtained my eVISA";
    }
}
radio2.onchange = function () {
    if (radio2.checked) {
        checkBoxTxt.innerText = "I have obtained my eNTRI";
    }
}

// Captcha Box
document.getElementById("my_captcha_form").addEventListener("submit", function (evt) {

    var response = grecaptcha.getResponse();
    if (response.length == 0) {
        //if reCaptcha not verified
        alert("Please verify you are human!");
        evt.preventDefault();
        return false;
    }
});

// checkbox
var checker = document.getElementById('checkme');
var sendbtn = document.getElementById('sendNewSms');
sendbtn.disabled = true;
checker.onchange = function () {
    if (this.checked) {
        sendbtn.disabled = false;
    } else {
        sendbtn.disabled = true;
    }
}

// all data
const datas = [
    {
        key: 1,
        refNum: "12DH/34TJOEM",
        passNum: "A03038532",
        stickerNum: "EF2756260",
        applicationStatus: "APPROVED",
        visaValidity: "April 12, 2025",
        visaStatus: "VALID"
    },
    {
        key: 2,
        refNum: "12wrgb675gf",
        passNum: "53rgreg4fdv",
        stickerNum: "EF2756276",
        applicationStatus: "approved",
        visaValidity: "fgbfdthvfcvgb",
        visaStatus: "valid"
    },
    {
        key: 3,
        refNum: "12wrgb675gf",
        passNum: "nfhgnadfh",
        stickerNum: "EF2756234",
        applicationStatus: "approved",
        visaValidity: "fgbvfcvgb",
        visaStatus: "valid"
    }
];

// data table
var record = document.getElementById('recordId');
record.style.display = "none";

var tableBox = document.getElementById('table-box');
tableBox.style.display = "none";


// main function
const showData = function () {
    event.preventDefault();

    tableBox.style.display = "none";
    record.style.display = "none";

    document.getElementById("refNum").innerHTML = " ";
    document.getElementById("passportNumber").innerHTML = " ";
    document.getElementById("applicationStatus").innerHTML = " ";
    document.getElementById("visaValidity").innerHTML = " ";
    document.getElementById("visaStatus").innerHTML = " ";

    const passNumInput = document.getElementById("passNum").value;
    const stickerNumInput = document.getElementById("stickerNum").value;

    const theData = datas.find(data => data.passNum === passNumInput);

    if (theData === undefined) {
        record.style.display = "block";
        record.className = "error-style";
        record.innerText = "No Data Found!";
        alert("Please give us a valid Passport Number!");
    }
    if(theData.stickerNum != stickerNumInput) {
        record.style.display = "block";
        record.className = "error-style";
        record.innerText = "No Data Found!";
        alert("Please give us a valid Sticker Number!");
    }
    if (theData.passNum === passNumInput && theData.stickerNum === stickerNumInput) {
        record.style.display = "block";
        record.className = "found-style";
        record.innerText = "Record Found. System will display until last 3 applications only";
        tableBox.style.display = "block";

        document.getElementById("refNum").innerHTML = theData.refNum;
        document.getElementById("passportNumber").innerHTML = passNumInput;
        document.getElementById("applicationStatus").innerHTML = theData.applicationStatus;
        document.getElementById("visaValidity").innerHTML = theData.visaValidity;
        document.getElementById("visaStatus").innerHTML = theData.visaStatus;

        document.getElementById("applicationStatus").style.color = "green";
        document.getElementById("visaStatus").style.color = "green";
    }
}