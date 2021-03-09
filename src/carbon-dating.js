const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(SampleActivity) {
  if (
    typeof SampleActivity === typeof String() &&
    +SampleActivity !== 0 &&
    SampleActivity[0] !== "-"
  ) {
    SampleActivity = SampleActivity.replace(/[^.\d]/g, "");
    if (SampleActivity == "") {
      return false;
    } else {
      SampleActivity += ".0";
      SampleActivity = +SampleActivity.match(/\d+\.\d+/g)[0];
      if (typeof SampleActivity === typeof Number() && SampleActivity !== 0) {
        let answer = Math.ceil(
          Math.log(MODERN_ACTIVITY / parseFloat(SampleActivity)) *
            (HALF_LIFE_PERIOD / 0.693)
        );
        if (answer > 0) {
          return answer;
        } else {
          return false;
        }
      } else return false;
    }
  }
  return false;
};
