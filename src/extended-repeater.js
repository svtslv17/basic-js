module.exports = function repeater(str, obj) {
  let separator = "+",
    additionSeparator = "|",
    repeatTimes = 1,
    addition = "",
    additionRepeatTimes = "",
    fullStr = "",
    add = "";

  if (obj.separator != undefined) {
    separator = obj.separator;
  }
  if (obj.additionSeparator != undefined) {
    additionSeparator = obj.additionSeparator;
  }
  if (obj.repeatTimes != undefined) {
    repeatTimes = obj.repeatTimes;
  }
  if (obj.addition != undefined || obj.addition == null) {
    addition = obj.addition;
  }
  if (obj.additionRepeatTimes != undefined) {
    additionRepeatTimes = obj.additionRepeatTimes;
  }

  for (let art = additionRepeatTimes; art > 0; art--) {
    if (add != "") {
      add += additionSeparator;
    }
    add += addition;
  }
  for (let rt = repeatTimes; rt > 0; rt--) {
    if (fullStr != "") {
      fullStr += separator;
    }
    fullStr += str + add;
  }
  if (obj.repeatTimes == undefined) {
    fullStr += addition;
  }
  return fullStr;
};
