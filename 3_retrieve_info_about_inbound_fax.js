// given an InterFAX fax ID
faxId = '12345'
// retrieve the fax
interfax.inbound.find(faxId)
  .then(function(fax) {
    // check the status
    fax.imageStatus;
    // check the number of pages
    fax.pages
  });
