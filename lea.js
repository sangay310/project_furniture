let saveFile = () => {

    // Get the data from each element on the form.
    const name = document.getElementById('name');
    const start_date = document.getElementById('start-date');
    const end_date = document.getElementById('end-date');
    const reason = document.getElementById('reason');
    const type = document.getElementById("selector").value;
  
    // This variable stores all the data.
    let data = 
        '\r Name: ' + name.value + ' \r\n ' + 
        'Start Date: ' +start_date.value + ' \r\n ' + 
        'End Date: ' + end_date.value + ' \r\n ' + 
        'Reason: ' + reason.value + ' \r\n ' + 
        'Type of Applicatoin: ' + type.value;
  
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.
  
    let newLink = document.createElement("a");
    newLink.download = sFileName;
  
    if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
    }
  
    newLink.click(); 
  }
  