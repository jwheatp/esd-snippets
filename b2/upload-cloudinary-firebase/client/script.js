function sendFile(event) {
  event.preventDefault(); 

  const body = new FormData();
  body.append("picture", picture.files[0]);

  // attention à ne pas renommer body ci-dessous, ou alors mettre 'body: autrechose'
  fetch("http://localhost:3000/upload", {
    method: "POST",
    body,
  });
}