// function for simple cleanup of tel number input

function cleanTelNumber() {
    // get the input form input element with id "contact_tel"
    var inputTelNumber = document.getElementById("contact_tel").value;
    // delete all spaces, dots, brackets and minus sign form
    inputTelNumber = inputTelNumber.replace(/[ .\(\)\/-]/g, "");
    // if a number starts with 000, replace it with a +
    if (inputTelNumber.search("000") == 0) {
        // replace only replaces the first occurence, so ther is no danger of replacing a 000 later in the string
        inputTelNumber = inputTelNumber.replace("000", "+");
    }
    // if a number starts with 00, replace it with a +
    if (inputTelNumber.search("00") == 0) {
        // replace only replaces the first occurence, so ther is no danger of replacing a 00 later in the string
        inputTelNumber = inputTelNumber.replace("00", "+");
    }
    // assign the "clean" tel number back to the html element
    document.getElementById("contact_tel").value = inputTelNumber;
}