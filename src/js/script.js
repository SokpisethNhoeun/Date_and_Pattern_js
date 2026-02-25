const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('time-display');
const phoneNumber = document.getElementById('phone-number');
const submit = document.getElementById('submit');

let loading = true;

reset.addEventListener('click', () => {
  timer.innerHTML = '00:00:00';
  loading = false;
});

let timeLoading = () => {
  setInterval(() => {
    if (loading) {
      let date = new Date();
      timer.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    }
  }, 1000);
};

start.addEventListener('click', () => {
  loading = true;
  timeLoading();
});

stop.addEventListener('click', () => {
  loading = false;
});

let showValue = (event) => {
 event.preventDefault();
  let value = phoneNumber.value;
  let phoneValid = /^[0][1-9]{2}[ -][0-9]{3}[ -][0-9]{3,4}$/.test(value);
  if (phoneValid) {
    submit.disabled = false;
    submit.classList.remove('bg-gray-400');
    submit.classList.add('bg-yellow-400');
    document.getElementById('error-message').classList.add('hidden');
  } else {
    submit.disabled = true;
    submit.classList.remove('bg-yellow-400');
    submit.classList.add('bg-gray-400');
    document.getElementById('error-message').classList.remove('hidden');
  }
};
if (phoneNumber.value == '') {
  submit.disabled = true;
  submit.classList.remove('bg-yellow-400');
  submit.classList.add('bg-gray-400');
  document.getElementById('error-message').classList.add('hidden');
}
submit.addEventListener('click', () => {
  alert('Phone number submitted: ' + phoneNumber.value);
});
