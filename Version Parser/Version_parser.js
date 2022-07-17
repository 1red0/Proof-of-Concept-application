function parseVersion()
{   
    // Get the input from the form and put it in a variable
    let str = document.getElementById("version").value;

    // Verify if the input is a string
    if (typeof(str) != 'string') { alert("Invalid input"); }

    // Split the input string
    let arr = str.split('.');

    // Parse int or default to 0
    let major = parseInt(arr[0]) || 0;
    let minor = parseInt(arr[1]) || 0;
    let bugfix = parseInt(arr[2]) || 0;

    // Put an alert with the desired OUTPUT when the user submits the form
    alert("Major = "+ major +"; "+"Minor = " + minor +"; " + "Bugfix = " + bugfix + "; ");
}