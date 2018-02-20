var exercise = {};
// calculate the maximum salary

exercise.maxSalary = function() {
    var currentMax = 0.0;
    var dataLength = exercise.data.data.length;
    var currentSalary = 0;
    for (var i = 0; i < dataLength; i++) {
        var currentSalary = exercise.data.data[i][18];
        if (currentSalary > currentMax){
            currentMax = currentSalary;
        }
        // update current salary
        // store in currentMax if it is greater than currentMax
    }

    return currentMax;
};

exercise.salariesAbove = function(salary) {
    var num_salaries = 0;
    var dataLength = exercise.data.data.length;
    var currentSalary = 0
    
    for (var i = 0; i < dataLength; i++) {
        currentSalary = exercise.data.data[i][18];
        if (currentSalary > salary){
            num_salaries++; 
        }
        // check if currentSal exceed salary
        // increment num_salaries
    }
    return num_salaries;
};