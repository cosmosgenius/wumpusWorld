exports.createWorld = function(config){
    
};

function genRandom(min, max){
    var rand = Math.random();
        rand = rand * (max - min + 1);
        rand = Math.floor(rand);
        rand = rand + min;
    return rand;
}