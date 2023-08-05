let telNumber = prompt('Введіть номер телефону:');

function isTelNumber (telNumber) {
    let telArray = telNumber.split('-');
    if (telArray.length != 5) {
        telArray = telNumber.split(' ');
        if (telArray.length != 5) {
            return null;
        }
    };

    if (telArray[0] === '380' || telArray[0] === '+380') {
        for (let i = 1; i < telArray.length; i++) {
            const check = /[^0-9]/;
            str = telArray[i];
            if (check.test(str) || (i == 2 && str.length != 3) || (i != 2 && str.length != 2) ) {
                return null;
            }
        }
    }

    let normalNumber = telNumber.replace(/\D/g, '');
    normalNumber = normalNumber.replace(/^38/, '');
    alert(normalNumber);
    // console.log(telArray);
}

isTelNumber(telNumber);