
// Name: Volume of a Cone
// URL: https://edabit.com/challenge/P6XbTvWyHkrpPfhvu

function coneVolume(h, r) {
    let volume = (Math.PI * (r ** 2) * h) / 3;
    return Math.round(volume * 100) / 100;
};

coneVolume(15, 6);


/* Description:

Create a function that takes the height and radius of a cone as arguments and returns the volume of the cone. */