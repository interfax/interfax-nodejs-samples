// given an InterFAX fax ID
var faxId = '12345'
// retrieve the fax
interfax.outbound.find(faxId)
  .then(function(fax) {
    // check the status
    fax.status;
  });
