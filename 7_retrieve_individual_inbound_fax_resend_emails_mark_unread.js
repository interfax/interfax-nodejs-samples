// given an InterFAX fax ID
var faxId = '12345';
// resend the email
interfax.inbound.resend(faxId);
// mark as unread
interfax.inbound.mark(faxId, true);
