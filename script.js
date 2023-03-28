// This code gets a reference to the password field
var passwd_field = document.getElementById("passwd");

// This function generates a secure random password
const generateSecurePassword = () => {
    // Defines the length of the password
    const length = 16;
    // Defines the characters that can be used in the password
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:\'",.<>?/\\';
    
    // Generates an array of random numbers using the Web Crypto API
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);

    // Builds the password string using the random numbers and the defined characters
    let password = '';
    for (let i = 0; i < array.length; i++) {
        password += characters.charAt(array[i] % characters.length);
    }

    // Sets the generated password as the value of the password field
    document.getElementById('passwd').value = password;

}

// This function copies the generated password to the clipboard
function copyPasswd() {
    navigator.clipboard.writeText(passwd_field.value);
    alert('Generated password was copied to clipboard')
}
