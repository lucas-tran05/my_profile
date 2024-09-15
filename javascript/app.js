document.getElementById('phone-link').textContent = phoneNumber;
document.getElementById('phone-link').setAttribute('href', `tel:${phoneNumber}`);

document.getElementById('email-link').textContent = email;
document.getElementById('email-link').setAttribute('href', `mailto:${email}`);

document.getElementById('address-text').textContent = address;
