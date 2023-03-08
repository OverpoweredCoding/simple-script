exports.p = function print(d) {
    if (d)
        console.log(d)
    else
        console.log("Seriously? You can't even figure out how to log to the console properly? Go back to the documentation and read a bit before trying to code in simple script.")
}

exports.aS = function addString(o, t) {
    if (o && t) {
        n = o + t
        return n
    } else
        throw "AS Improperly used. Please check your syntax! [Technicals: No value provided for o or t]"
}

exports.a = function add(o, t, d) {
    if (o && t && d) {
        n = Number(o) + Number(t)
        return n.toFixed(d)
    } else
        throw "A Improperly used. Please check your syntax! [Technicals: No value provided for o, t, or d]"
}

exports.s = function subtract(o, t, d) {
    if (o && t && d) {
        n = Number(o) - Number(t)
        return n.toFixed(d)
    } else
        throw "S Improperly used. Please check your syntax! [Technicals: No value provided for o, t, or d]"
}

exports.m = function mult(o, t, d) {
    if (o && t && d) {
        n = Number(o) * Number(t)
        return n.toFixed(d)
    } else
        throw "M Improperly used. Please check your syntax! [Technicals: No value provided for o, t, or d]"
}

exports.d = function div(o, t, d) {
    if (o && t && d) {
        n = Number(o) / Number(t)
        return n.toFixed(d)
    } else
    throw "D Improperly used. Please check your syntax! [Technicals: No value provided for o, t, or d]"
}

exports.async = function async(f, d) {
    if (f && d) {
        for(var i = 0; i < f.length; i++) {
            setTimeout(f[i], d);
        }
    } else
        throw "ASYNC Improperly used. Please check your syntax! [Technicals: No value provided for f or d]"
}

exports.q = function quit(c) {
    process.exit(c)
}

exports.json = function json(j) {
    if (j) {
        n = JSON.parse(j)
        return n
    } else 
        throw "JSON Improperly used. Please check your syntax! [Technicals: No value provided for json]"

}

exports.jsonp = function jsonp(j, p) {
    if (j && p) {
        n = JSON.parse(j)
        if (n[p])
            return n[p]
        else
            throw "JSONP Improperly used. Please check your syntax!"
    } else
        throw "JSONP Improperly used. Please check your syntax! [Technicals: No value provided for json or parameter]"
}