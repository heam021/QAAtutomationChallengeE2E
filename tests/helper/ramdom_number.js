

export function generateRandomNumber(length) {
    return Math.floor(Math.random() * Math.pow(10, length)).toString().padStart(length, '0');
  }
  
  export function generateRandomEmail() {
    const username = 'heam'; // static name
    const domain = 'gmail.com'; // static domain
    const randomNumber = generateRandomNumber(4); // Generate a random number
    
    return `${username}${randomNumber}@${domain}`;
  }
  
  