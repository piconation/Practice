/**
 * Created by mattpowell on 4/29/16.
 */

function fib(n) {
    if (n <= 1) {
        return 0;
    }
    else if (n <= 2) {
        return 1;
    }
    else {
        return fib(n - 2) + fib(n - 1);
    }
}
    //n = NaN return = NaN;
    //n <= 1, return = 0;
    //n = 1, return = 0;
    //n = 2, return = 1;
    //n = 3, return = 1;
    
