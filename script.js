function isTelNumber (telNumber) {
    const check = /^(\+?380)([-\s]?\d{2,3}){4}$/;

    if (!check.test(telNumber)) {
        return null; 
    }

    let normalNumber = telNumber.replace(/\D/g, '');

    normalNumber = normalNumber.replace(/^380/, '0');

    return normalNumber
}

const res = ["+38-044-3-64836-5", "3 8044 3 64836 5", "3 80r44 3 64abc836 5", "+380r44-3-64abc836-5-678", `3 8044
 3 64836 5`, '380 44 364 83 65', '+380 44 364 83 65', '380-44-364-83-65', '+380-44-364-83-65'].map(telNumber => isTelNumber(telNumber));
console.log(res);