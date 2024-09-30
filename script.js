const form = document.querySelector('#form');
const submitButton = document.querySelector('#submit');
const scriptURL = 'https://script.google.com/macros/s/AKfycbzO0_g9rVhQAexvZtsj5ipa8g7zJlwB1BCk_5VEAnH9KnWg29ZD8A0ofi4wwNWxoAbS/exec';

form.addEventListener('submit', (e) => {
  submitButton.disabled = true;
  e.preventDefault();
  let requestBody = new FormData(form);
  fetch(scriptURL, { method: 'POST', body: requestBody })
    .then((response) => {
      Swal.fire({
        title: 'Isian Form berhasil dikirim.',
        text: 'Thank you fren udah meluangkan waktunya.',
        icon: 'success',
        confirmButtonText: 'Okeee.',
      });
      response;
    })
    .catch((error) => {
      alert('Error!', error.message);
    });
});
