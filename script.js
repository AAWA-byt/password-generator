// get interact
var passwd_field = document.getElementById("passwd");


// functions for generatePasswd()
const generateSecurePassword = () => {
    // Set password length and characters to use
    const length = 16;
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:\'",.<>?/\\';

    // Use crypto.getRandomValues() to generate a cryptographically secure random password
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    let password = '';
    for (let i = 0; i < array.length; i++) {
        password += characters.charAt(array[i] % characters.length);
    }

    // Insert the password into the text field
    document.getElementById('passwd').value = password;
}


// functions for copyPasswd() 
function copyPasswd() {
    navigator.clipboard.writeText(passwd_field.value);
    alert('Generated password was copied to clipboard')
}

