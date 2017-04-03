interfax.deliver({
  faxNumber : '+11111111112',
  file : 'folder/fax.pdf'
}).then(reloadAndCheckStatus);;

// reloads the fax data for a fax
function reloadAndCheckStatus(fax) {
  interfax.outbound.find(fax.id)
    .then(checkFax);
};

// wait for the fax to send
// successfully
function checkFax(fax) {
  // sleep if pending
  if (fax.status < 0) {
    setTimeout(reloadAndCheckStatus, 10000, fax);
  } else {
    // output on success or error
    if(fax.status == 0) {
      console.log("Sent!");
    } else {
      console.log("Error: "+fax.status);
    }
  }
};
