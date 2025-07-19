const replaceFirstLast = str => str.trim().length < 2 ? "" : str.slice(-1) + str.slice(1, -1) + str[0]
module.exports = replaceFirstLast

