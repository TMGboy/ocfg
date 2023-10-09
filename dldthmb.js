function downloadThumbnail() {
    const youtubeLink = document.getElementById('youtubeLink').value;
    const thumbnailSize = document.getElementById('thumbnailSize').value;
    const videoId = getVideoId(youtubeLink);

    if (videoId) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailSize}.jpg`;

        const downloadLink = document.createElement('a');
        downloadLink.href = thumbnailUrl;
        
        downloadLink.download = `youtube_thumbnail_${videoId}.jpg`;

        downloadLink.click();

        document.body.removeChild(downloadLink);
    } else {
        alert('Invalid YouTube link. Please enter a valid link.');
    }
}
