export function toRupiah(num){
    var res;
    res = num.toString().split('').reverse().join('').match((/\d{1,3}/g)).join('.').split('').reverse().join('')+",00";
    return res;
}
