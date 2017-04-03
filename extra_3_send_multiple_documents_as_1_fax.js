// send multiple files as 1 fax
interfax.outbound.deliver({
  // a valid fax number
  faxNumber: "+11111111112",
  // a list of paths, urls, or
  // InterFAX::File objects
  files: [
    'path/to/fax.pdf',
    'path/to/fax.html',
    'http://example.com/path/to/fax.html'
  ]
});
