function getVideoId(url) {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtu\.com\/user\/[^\/]+\/u\/[^\/]+|[^\/]+?watch[?]v=|.*[?&]v=|^youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
}
