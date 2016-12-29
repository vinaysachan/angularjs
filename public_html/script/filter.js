myApp.filter('newgenderFilter', function () {
    return function (gender) {
        switch (gender) {
            case 1:
                return 'This is Male';
                break;
            case 2:
                return 'This is Female';
                break;
            case 3:
                return 'Not Disclosed';
                break;
            default:
                return 'Not Given';
                break;
        }
    }
});

myApp.filter('MygenderFilter', function () {
    return function (gender) {
        switch (gender) {
            case 'M':
                return 'Male';
                break;
            case 'F':
                return 'Female';
                break;
            default:
                return 'Not Disclosed';
                break;
        }
    }
});