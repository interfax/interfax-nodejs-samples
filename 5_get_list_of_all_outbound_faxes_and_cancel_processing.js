// get all recent faxes
interfax.outbound.all()
  .then(cancelPending);

// cancel all processing faxes
function cancelPending(faxes) {
  for (var fax in faxes) {
    if (fax.status < 0) {
      fax.cancel();
    }
  }
}
