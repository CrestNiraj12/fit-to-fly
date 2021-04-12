export const convertDateToString = (date) => {
    var month = date.getUTCMonth() + 1;
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();
    return `${String(day).length === 2 ? day : `0${day}`}/${
        String(month).length === 2 ? month : `0${month}`
    }/${year}`;
};

export const isValidDate = (date) => {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth();
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    return date >= new Date(year, month, day);
};

export const generateTimePeriod = (minTime, maxTime, duration = 5) => {
    const periods = [];
    var start;
    minTime = minTime.trim();
    maxTime = maxTime.trim();
    var ended = false;

    for (
        var i = Number(minTime.split(":")[0]);
        i <= Number(maxTime.split(":")[0]);
        i++
    ) {
        for (var j = 0; j <= 55; j += duration) {
            const time = `${String(i).length === 2 ? i : "0" + String(i)}:${
                String(j).length === 2 ? j : "0" + String(j)
            }`;

            const endTime =
                j === 55
                    ? `${
                          String(i + 1).length === 2
                              ? i + 1
                              : "0" + String(i + 1)
                      }:00`
                    : `${String(i).length === 2 ? i : "0" + String(i)}:${
                          String(j + 5).length === 2
                              ? j + 5
                              : "0" + String(j + 5)
                      }`;
            if (time === minTime) start = true;
            if (start) periods.push(time + " - " + endTime);
            if (endTime === maxTime) {
                ended = true;
                break;
            }
        }
        if (ended) break;
    }
    return periods;
};
