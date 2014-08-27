/*
 * This file is reserved for global/site-wide scripts only.
 * Put page specific scripts local to it's referring page.
 */

$(document).ready(function(){
	EmailDecrypt(); //Decrypt emails
});

function EmailDecrypt(){
/* 
 * Decrypts emails that have been obscured to prevent spam from email bots.
 * name [at] domain [dot] com
 * name@domain.com
 */
	var sEncryptedEmailClass = '.Email';
	var sAtMatch = ' [at] ';
	var sAtReplace = '@';
	var sDotMatch = ' [dot] ';
	var sDotReplace = '.';
	var sTempEncryptedEmail = '';
	var arrEmails = $(sEncryptedEmailClass);
	for(var i = 0; i < arrEmails.length; i++){
		sTempEncryptedEmail = arrEmails[i].innerHTML;
		sTempEncryptedEmail = sTempEncryptedEmail.replace(sAtMatch,sAtReplace);
		sTempEncryptedEmail = sTempEncryptedEmail.replace(sDotMatch,sDotReplace);
		$(sEncryptedEmailClass)[i].innerHTML = sTempEncryptedEmail;
	}
}//EmailDecrypt
