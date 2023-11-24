function sendToUser(userId, messageText) {
  if ((userId < 1 || userId > 1000000000) && messageText.trim().length === 0) {
    return -2;
  }
  if (userId < 1 || userId > 1000000000) {
    return -1;
  }

  if (messageText.trim().length === 0) {
    return 0;
  }
  return 1;
}

const result1 = sendToUser(95, 'Send new message');
console.log(`sendToUser(95, 'Send new message') - очікуваний результат 1 ${result1 === 1 ? 'TC1.1 passed' : 'TC1.1 failed'}`);

const result2 = sendToUser(0, 'Send new message');
console.log(`sendToUser(0, 'Send new message') - очікуваний результат -1 ${result2 === -1 ? 'TC1.2 passed' : 'TC1.2 failed'}`);

const result3 = sendToUser(95, '');
console.log(`sendToUser(95, '') - очікуваний результат 0 ${result3 === 0 ? 'TC1.3 passed' : 'TC1.3 failed'}`);

const result4 = sendToUser(0, '');
console.log(`sendToUser(0, '') - очікуваний результат -2 ${result4 === -2 ? 'TC1.4 passed' : 'TC1.4 failed'}`);
