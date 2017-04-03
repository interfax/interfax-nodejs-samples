// send a single fax
var promise = interfax.deliver({
  // a valid fax number
  faxNumber : '+11111111112',
  // a path to an InterFAX
  // compatible file
  file : 'folder/fax.pdf'
});
