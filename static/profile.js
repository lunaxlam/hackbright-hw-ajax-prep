function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value,

  };

  // make request to server to get the data
  fetch('/api/profile', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      const name = data.fullname;
      const age = data.age;
      const occupation = data.occupation;

      // add the data the server returns to the document
      // (you can add it to the end of the div with ID "profiles")
      document.querySelector('#profiles').insertAdjacentHTML('beforeend', `<p>Name: ${name}</p>`);
      document.querySelector('#profiles').insertAdjacentHTML('beforeend', `<p>Age: ${age}</p>`);
      document.querySelector('#profiles').insertAdjacentHTML('beforeend', `<p>Occupation: ${occupation}</p>`);
      }
    )
};

document.querySelector('#profile-form').addEventListener('submit', submitProfile);
