$(document).ready(function () {
    $('select').formSelect();
});

$(document).ready(function () {
    $('.parallax').parallax();
});

const formResponseObject = {
    realization: 0,
    relationship: 0,
    power: 0,
}

// Questions
const q15 = document.getElementById('question-15');
const q14 = document.getElementById('question-14');
const q13 = document.getElementById('question-13');
const q12 = document.getElementById('question-12');
const q11 = document.getElementById('question-11');
const q10 = document.getElementById('question-10');
const q9 = document.getElementById('question-9');
const q8 = document.getElementById('question-8');
const q7 = document.getElementById('question-7');
const q6 = document.getElementById('question-6');
const q5 = document.getElementById('question-5');
const q4 = document.getElementById('question-4');
const q3 = document.getElementById('question-3');
const q2 = document.getElementById('question-2');
const q1 = document.getElementById('question-1');

const formButton = document.getElementById("form-button");
const tableSection = document.getElementById('table-section');
const rRealization = document.getElementById('result-realization');
const rRelationship = document.getElementById('result-relationship');
const rPower = document.getElementById('result-power');

formButton.onclick = function () {
    let q15Response = Number(q15.options[q15.selectedIndex].text);
    let q14Response = Number(q14.options[q14.selectedIndex].text);
    let q13Response = Number(q13.options[q13.selectedIndex].text);
    let q12Response = Number(q12.options[q12.selectedIndex].text);
    let q11Response = Number(q11.options[q11.selectedIndex].text);
    let q10Response = Number(q10.options[q10.selectedIndex].text);
    let q9Response = Number(q9.options[q9.selectedIndex].text);
    let q8Response = Number(q8.options[q8.selectedIndex].text);
    let q7Response = Number(q7.options[q7.selectedIndex].text);
    let q6Response = Number(q6.options[q6.selectedIndex].text);
    let q5Response = Number(q5.options[q5.selectedIndex].text);
    let q4Response = Number(q4.options[q4.selectedIndex].text);
    let q3Response = Number(q3.options[q3.selectedIndex].text);
    let q2Response = Number(q2.options[q2.selectedIndex].text);
    let q1Response = Number(q1.options[q1.selectedIndex].text);

    if (!(q1Response > 0 && q2Response > 0 && q3Response > 0 && q4Response > 0 && q5Response > 0 &&
        q6Response > 0 && q7Response > 0 && q8Response > 0 && q9Response > 0 && q10Response > 0 &&
        q11Response > 0 && q12Response > 0 && q13Response > 0 && q14Response > 0 && q15Response > 0)) {

        M.toast({ html: 'Existem afirmações que não foram selecionadas!' })
        return;
    }

    const realization = q4Response + q5Response + q7Response + q11Response + q15Response;
    const relationship = q2Response + q6Response + q8Response + q12Response + q13Response;
    const power = q1Response + q3Response + q9Response + q10Response + q14Response;

    formResponseObject.realization = realization;
    formResponseObject.relationship = relationship;
    formResponseObject.power = power;

    tableSection.classList.toggle('hide');
    rPower.innerText = power;
    rRealization.innerText = realization;
    rRelationship.innerText = relationship;
}

