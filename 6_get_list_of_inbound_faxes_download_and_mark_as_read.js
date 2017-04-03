// get all unread faxes
interfax.inbound.all({
  unreadOnly: true
}).then(saveImages);

function saveImages(faxes) {
  for (var id in faxes) {
    var fax = faxes[id];
    // save each fax and mark as read
    interfax.inbound.image(fax.messageId)
      .then(saveAndMarkAsRead.bind(fax));
  }
}

function saveAndMarkAsRead(image) {
  // saves image to file
  image.save(`${this.messageId}.${image.extension}`);
  // mark as read
  interfax.inbound.mark(this.messageId, true);
}
