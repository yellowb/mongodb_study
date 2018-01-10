// List of char set
const charSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
               'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
               'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
               'U', 'V', 'W', 'X', 'Y', 'Z'];

// List of field name
const fieldNameSet = ['name', 'age', 'price', 'size', 'length', 'height', 'weight', 'level', 'school', 'city',
                      'country', 'grade', 'tel', 'fax', 'email', 'facebook', 'weibo', 'zhihu', 'qq', 'wechat'];

// Return a random char from charset
function getRandomChar() {
    return charSet[Math.floor(Math.random() * charSet.length)];
}

// Return a random number in range [0, 10000)
function getRandomNum() {
    return Math.floor(Math.random() * 10000);
}

// Return a random string with 11-char length
function getString() {
    let uuid = '';
    for (let i = 0; i < 5; i++) { 
         uuid += getRandomChar();
    }
    uuid += '-';
    for (let i = 0; i < 5; i++) { 
         uuid += getRandomChar();
    }
    return uuid;
}

// Return a random field name
function getRandomFieldName() {
    return fieldNameSet[Math.floor(Math.random() * fieldNameSet.length)];
}

// Return a object wirh 6 random fields in an array
function generateRandomObj() {
    let obj = {
        attrs: []
    };
    
    for (let i = 0; i < 6; i++) {
        let attr = {};
        attr[getRandomFieldName()] = (i % 2 == 0) ? getString() : getRandomNum();
        obj.attrs.push(attr);
    }

    return obj;
}

// // Tests
// console.log(getRandomChar());
// console.log(getRandomNum());
// console.log(getString());
// console.log(getRandomFieldName());
// console.log(generateRandomObj());

// Insert test data

for(let i = 0; i < 100; i++) {
    let testdata = [];
    for(let j = 0; j < 10000; j++) {
        let obj = generateRandomObj();
        testdata.push(obj);
    }
    db.modeling_2.insert(testdata);
}



