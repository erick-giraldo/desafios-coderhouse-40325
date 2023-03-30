(function () {
  const button = document.getElementById('get-cookie');
  button.addEventListener('click', () => {
    fetch('/get-cookie')
      .then((response) => response.json())
      .then((data) => console.log('get-cookie result', data));
  })
})()