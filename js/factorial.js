/**
 * Created by mattpowell on 5/2/16.
 */

function factorial(fish) {

    if (fish < 0) {
        return -1;
    }

    else if (fish === 0) {
        return 1;
    }

    return fish * factorial(fish-1);

}