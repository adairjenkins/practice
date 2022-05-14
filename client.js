console.log('js');

// I have an array of objects, called options.
const options = [{label: 'Corporate Accounting - Entry Level', value: 'Corporate Accounting - Entry Level', disabled: true, parentValue: ''}, 
                 {label: 'Engineering --- Electronic/Computer Engineer', value: 'Electronic/Computer Engineer', disabled: false, parentValue: 'Engineering'},
                 {label: 'Financial Services - Banking/Investment/Finance', value: 'Financial Services - Banking/Investment/Finance', disabled: true, parentValue: ''},
                 {label: 'Healthcare - Dental Care', value: 'Healthcare - Dental Care', disabled: true, parentValue: ''},
                 {label: 'Real Estate --- Leasing Manager/Consultant', value: 'Leasing Manager/Consultant', disabled: false, parentValue: 'Real Estate'},
                 {label: 'Veterinary Services --- Boarding/Grooming', value: 'Boarding/Grooming', disabled: false, parentValue: 'Veterinary Services'},
                 {label: 'Warehousing/Logistics', value: 'Warehousing/Logistics', disabled: true, parentValue: ''}]

// I also have an array of "selected values" that are selected by the user
const values = ['Corporate Accounting - Entry Level', 'Healthcare - Dental Care']

// I would like to return a new array that returns the full matching object, based on a match on the .value. 
// All built in javascript methods are accepted, but not required.

let filterMatches = [];

for (let i=0; i < values.length; i++) {
    filterMatches = [...filterMatches, options.filter(obj => obj.value === values[i])].flat();
}

console.log('filterMatches:', filterMatches);


let regexMatches = [];

for (let i=0; i < values.length; i++) {
    const regex = new RegExp(values[i]);

    for (let obj of options) {
        if (regex.test(obj.value)) {
            regexMatches.push(obj);
        }
    }
}

console.log('regexMatches:', regexMatches);