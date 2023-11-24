class User {
  sendToUser(userId, messageText) {
    const postData = {
      userId: userId,
      messageText: messageText,
    };
    if (userId < 1 || userId > 1000000000) {
      console.error('Invalid userId. It must be in the range of 1 to 1000000000.');
      return;
    }
    if (typeof messageText !== 'string' || messageText.length === 0) {
      console.error('Invalid messageText. It must be a non-empty string.');
      return;
    }
    fetch('https://someapi/save-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Message sent successfully:', data);
      })
      .catch(error => {
        console.error('Error sending message:', error);
      });
  }
}
