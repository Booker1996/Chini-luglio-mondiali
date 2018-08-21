var matches = [];
matches[0]={
    opponent: 'Croazia',
    outcome: 'W'
};
matches[1]={
    opponent: 'Italia',
    outcome: 'L'
};
matches[2]={
    opponent: 'Germania',
    outcome: 'W'
};
matches[3]={
    opponent: 'Spagna',
    outcome: 'D'
};

var teams = [];
teams[0] = {
    id: 'ITA',
    name: 'Italia',
    is_still_in: true,
    matches: [matches[0],matches[2]]
};
teams[1] = {
    id: 'CRO',
    name: 'Croazia',
    is_still_in: false,
    matches: [matches[1],matches[3]]
};

console.log(teams[0]);
console.log(teams[1]);