class User {
    watchEvent(sportEvent) {
        console.log(`User ${this.userId} is now watching sport event ${sportEvent.sporteventId}`);
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.src = `https://example.com/broadcast/${eventId}.mp4`;
        videoPlayer.play();
    }
