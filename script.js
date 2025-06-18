fetch('videos.json')
  .then(response => response.json())
  .then(videos => {
    const container = document.getElementById('video-container');
    videos.forEach(file => {
      const item = document.createElement('div');
      item.className = 'video-item';

      const title = document.createElement('h2');
      title.textContent = file;

      const video = document.createElement('video');
      video.controls = true;
      video.src = `V/${file}`;

      item.appendChild(title);
      item.appendChild(video);
      container.appendChild(item);
    });
  })
  .catch(err => {
    console.error("Fehler beim Laden der Videos:", err);
  });
