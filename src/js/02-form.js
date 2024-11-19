const form = document.querySelector('.feedback-form');
const btn = document.querySelector('[type=submit]');

form.addEventListener('input', e => {
  const { name, value } = e.target;
  if (name === 'email' || name === 'message') {
    localStorage.setItem(`${name}_value`, value);
  }
});

window.onload = () => {
  form.email.value = localStorage.getItem('email_value') || '';
  form.message.value = localStorage.getItem('message_value') || '';
};

btn.addEventListener('click', e => {
  e.preventDefault();
  const mailValue = form.email.value.trim();
  const messageValue = form.message.value.trim();

  if ((mailValue && messageValue) === '') {
    alert('All form fields must be filled in');
  } else {
    console.log({
      email: mailValue,
      message: messageValue,
    });
    form.reset();
    localStorage.clear();
  }
});
