arr = [ [ [1, 1], [2, 2] ] ];

Array.prototype.sameStructureAs = function (sameArr) {
    if (Array.isArray(sameArr) == true && this.length !== sameArr.length) return false;

    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(sameArr[i]) !== Array.isArray(this[i])) {
            return false;
        }
        if(Array.isArray(sameArr[i]) && Array.isArray(this[i])) {
            const res = this[i].sameStructureAs(sameArr[i]);
            if (!res) return false;
        }
    }

    return true;
}

console.log(arr.sameStructureAs( [ [ [1, 1], [2, 2] ] ] ));















