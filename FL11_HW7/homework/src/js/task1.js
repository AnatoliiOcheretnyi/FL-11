let askUserMail = prompt('enter your e-mail.');
let askUserPass;
let changePass;
let oldPass;
let newPass;
let checkPass;
let minMailLength = 6;
let minPassLength = 5;
let data = {
    user: {mail: 'user@gmail.com', pass: 'UserPass'},
    admin: {mail: 'admin@gmail.com', pass: 'AdminPass'}
};

if(askUserMail === '' || askUserMail === null){
    alert('Canceled.')
}else if(askUserMail.length < minMailLength){
    alert('I don\'t know any emails having name length less than 6 symbols');
}else if(askUserMail === data.user['mail'] || askUserMail === data.admin['mail']){
    askUserPass = prompt('enter your pass.')
    if(askUserPass === '' || askUserPass === null){
        alert('Canceled.')
    } else if(askUserMail === data.user['mail'] && askUserPass === data.user['pass'] ||
              askUserMail === data.admin['mail'] && askUserPass === data.admin['pass']){
        changePass = confirm('Do you want to change your password?')
        if(changePass === false){
            alert('You have failed the change.')
        }else{
            oldPass = prompt('enter your old pass')
            if(oldPass === askUserPass){
                newPass = prompt('enter your new pass')
                if(newPass.length < minPassLength){
                    alert('It’s too short password. Sorry.')
                }else{
                    checkPass = prompt('enter your new password again please')
                    if(checkPass !== newPass){
                        alert('You wrote the wrong password.')
                    }else{
                        alert('You have successfully changed your password.')
                    }
                }
            }
        }
    }else{
        alert('Wrong password')
    } 
}else{
    alert('I don’t know you')
}