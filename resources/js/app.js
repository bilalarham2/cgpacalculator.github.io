var id = -1;
var subAr = [];
var marksAr = [];
var creditAr = [];
// var id, subAr, marksAr, creditAr, GPAcount;
/*-----------------------------/
----- DOM strings -----
------------------------------*/

var DOMStrings = {
    subName: '.sub-name',
    subCredit: '.sub-credit',
    subMar: '.sub-mar',
    subAdd: '.sub-add'
};

var Calculator = function() {
    var grade, subTime, totalcredit, totaltimecal;
    totalcredit = 0;
    totaltimecal = 0;
    marksAr.forEach(function(current, index, array) {
        if (current >= 85) {
            grade = 4.00;
        } else if (current == 84) {
            grade = 3.94;
        } else if (current == 83) {
            grade = 3.87;
        } else if (current == 82) {
            grade = 3.80;
        } else if (current == 81) {
            grade = 3.74;
        } else if (current == 80) {
            grade = 3.67;
        } else if (current == 79) {
            grade = 3.60;
        } else if (current == 78) {
            grade = 3.54;
        } else if (current == 77) {
            grade = 3.47;
        }else if (current == 76) {
            grade = 3.40;
        }else if (current == 75) {
            grade = 3.34;
        }else if (current == 74) {
            grade = 3.27;
        }else if (current == 73) {
            grade = 3.20;
        }else if (current == 72) {
            grade = 3.14;
        }else if (current == 71) {
            grade = 3.07;
        }else if (current == 70) {
            grade = 3.00;
        }else if (current == 69) {
            grade = 2.95;
        }else if (current == 68) {
            grade = 2.90;
        }else if (current == 67) {
            grade = 2.85;
        }else if (current == 66) {
            grade = 2.80;
        }else if (current == 65) {
            grade = 2.75;
        }else if (current == 64) {
            grade = 2.70;
        }else if (current == 63) {
            grade = 2.65;
        }else if (current == 62) {
            grade = 2.60;
        }else if (current == 61) {
            grade = 2.55;
        }else if (current == 60) {
            grade = 2.50;
        }else if (current == 59) {
            grade = 2.40;
        }else if (current == 58) {
            grade = 2.30;
        }else if (current == 57) {
            grade = 2.20;
        }else if (current == 56) {
            grade = 2.10;
        }else if (current == 55) {
            grade = 2.00;
        }else if (current == 54) {
            grade = 1.90;
        }else if (current == 53) {
            grade = 1.80;
        }else if (current == 52) {
            grade = 1.70;
        }else if (current == 51) {
            grade = 1.60;
        }else if (current == 50) {
            grade = 1.50;
        } else {
            grade = 0.00;
        }
        subTime = grade * creditAr[index];
        console.log(current)
        totalcredit += creditAr[index];
        totaltimecal += subTime;

    });
    totalGPA = totaltimecal / totalcredit;

    totalGPA = totalGPA.toFixed(2);
    if (totalGPA !== '' && !isNaN(totalGPA) && GPAcount === 0) {

        showGPA();
        document.querySelector('.total-gpa').textContent = totalGPA;
    }

   
};

var setupEventListners = function() {
    document.querySelector(DOMStrings.subAdd).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
    document.querySelector('.calculate-btn').addEventListener('click', Calculator);
    document.querySelector('.reset-btn').addEventListener('click', init);
};


var getInput = function() {

    return {
        subjectAd: document.querySelector(DOMStrings.subName).value,
        creditAd: parseFloat(document.querySelector(DOMStrings.subCredit).value),
        marksAd: parseFloat(document.querySelector(DOMStrings.subMar).value)
    };
};



var ctrlAddItem = function() {
    var input, newItem;
    input = getInput();
    if (input.subjectAd !== "" && isNaN(input.subjectAd) && input.creditAd > 0 && input.marksAd >= 0) {
        // newItem = addItem(input.subjectAd, input.creditAd, input.marksAd);
        id += 1;
        subAr[id] = input.subjectAd;
        creditAr[id] = input.creditAd;
        marksAr[id] = input.marksAd;
        clearFields();
        updateUI(id);
    }

}

var clearFields = function() {
    var fields, fieldsArr;
    fields = document.querySelectorAll(DOMStrings.subName + ',' + DOMStrings.subCredit + ',' + DOMStrings.subMar);
    fieldsArr = Array.prototype.slice.call(fields);
    fieldsArr.forEach(function(current, index, array) {
        current.value = "";
    });
    fieldsArr[0].focus();
};

var updateUI = function(ide) {
    var html, newhtml;
    html = '<div class="subject clearfix" id="item-%id%"> <div class = "sub-name-des">%sub%</div> <div class = "right">%marks%</div><div class = "right cred">%credit%</div></div>';
    newhtml = html.replace('%id%', ide);
    newhtml = newhtml.replace('%sub%', subAr[ide]);
    marksAr[ide] < 10 ? newhtml = newhtml.replace('%marks%', '0' + marksAr[ide]) : newhtml = newhtml.replace('%marks%', marksAr[ide]);
    newhtml = newhtml.replace('%credit%', creditAr[ide]);
    document.querySelector('.subject-head').insertAdjacentHTML('beforeend', newhtml);
}

//Reset UI
var resetUI = function() {
    document.querySelector('.subject-head').textContent = '';
    document.querySelector('.result-area').textContent = '';
}

// Show total GPA on UI

var showGPA = function() {
    var html, newhtml;
    html = '<h2>YOUR GPA IS</h2><p class="total-gpa">%total-gpa%</p>';
    document.querySelector('.result-area').insertAdjacentHTML('beforeend', html);
    GPAcount = 1;
}
var init = function() {
    setupEventListners();
    clearFields();
    resetUI();
    id = -1;
    GPAcount = 0;
    subAr = [];
    marksAr = [];
    creditAr = [];
}

init();