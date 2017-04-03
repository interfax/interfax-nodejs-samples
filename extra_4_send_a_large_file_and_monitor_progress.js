import fs from 'fs';

fs.readFile('tests/test.pdf', uploadAndSend);

// upload and then send the document
function uploadAndSend(error, data){
  interfax.documents.create(
    'test.pdf',
    Buffer.byteLength(data)
  ).then(function(document){
    upload(0, document, data);
  });
}

// upload the file in 500 byte chunks
function upload(cursor = 0, document, data) {
  if (cursor >= data.length) {
    sendFax(document);
  }

  let chunk       = data.slice(cursor, cursor+500);
  let next_cursor = cursor+Buffer.byteLength(chunk);

  interfax.documents.upload(
    document.id,
    cursor,
    next_cursor-1,
    chunk
  ).then(function() {
    upload(next_cursor, document, data);
  });
}

// send the fax
function sendFax(document) {
  interfax.outbound.deliver({
    // a valid fax number
    faxNumber: "+11111111112",
    // the document URI
    file: document.uri
  });
}
