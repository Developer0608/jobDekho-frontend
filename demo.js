
const moment = require('moment')

const tradeExcutedByDay = (userData, day) => {
    let tradeExecutedArray = {
        rangeA: [],
        rangeB: [],
        rangeC: [],
        rangeD: []
    }
    console.log("USER DATA:::",userData.trades)

    const tradesByDay = userData.trades.filter((element) => {
         if (day == -1) {
            return element
        }
        else {
            element.entryTime.Date = element.entryTime.Date.replace(/\//g, '-');
            const entryDate = new Date(`${element.entryTime.Date}`);
            entryDate.setUTCHours(0, 0, 0, 0);
            const dayOfElement = entryDate.toLocaleDateString('en-US', { weekday: 'long' });
            return dayOfElement === day;
        }

    });
    
    for (const trade of tradesByDay) {
        const entryTime = moment(trade.entryTime.time, "h:mm A");
        if (
          entryTime.isBetween(
            moment("9:30 AM", "h:mm A"),
            moment("10:59 AM", "h:mm A"),
            undefined,
            "[]"
          )
        ) {
          tradeExecutedArray.rangeA.push(trade);
        //   console.log("RANGE A::", tradeExecutedArray.rangeA);
        } else if (
          entryTime.isBetween(
            moment("11:00 AM", "h:mm A"),
            moment("12:59 PM", "h:mm A"),
            undefined,
            "[]"
          )
        ) {
          tradeExecutedArray.rangeB.push(trade);
        //   console.log("RANGE B::", tradeExecutedArray.rangeB);
        } else if (
          entryTime.isBetween(
            moment("1:00 PM", "h:mm A"),
            moment("2:59 PM", "h:mm A"),
            undefined,
            "[]"
          )
        ) {
          tradeExecutedArray.rangeC.push(trade);
        //   console.log("RANGE C::", tradeExecutedArray.rangeC);
        } else if (
          entryTime.isBetween(
            moment("3:00 PM", "h:mm A"),
            moment("3:59 PM", "h:mm A"),
            undefined,
            "[]"
          )
        ) {
          tradeExecutedArray.rangeD.push(trade);

        }
      }
    let avgProfit, winRate;
    let finalArray = [];
    
    
    let totalCounter = 0, totalProfit = 0;
    for (const range in tradeExecutedArray) {
        let profitCounter = 0;
        let rangeProfit = 0
        for (const trade of tradeExecutedArray[range]) {
            if (trade.profitable > 0){
                totalCounter++;
                profitCounter++; 
            }
            totalProfit += trade.profitable;
            rangeProfit += trade.profitable;
        }

        totalProfit += rangeProfit;
        avgProfit = rangeProfit / (tradeExecutedArray[range].length === 0 ? 1 : tradeExecutedArray[range].length);
        winRate = (profitCounter / (tradeExecutedArray[range].length === 0 ? 1 : tradeExecutedArray[range].length)) * 100;

        finalArray.push({
            avgProfit,
            winRate,
            range,
        })
        console.log("FINAL ARRAY:::",finalArray)
    }
    
    return {
        totalProfit: totalProfit / (userData.length === 0 ? 1 : userData.length),
        totalWinRate: (totalCounter / (userData.length === 0? 1 : userData.length)) * 100,
        ...finalArray,
    }
};

module.exports = tradeExcutedByDay
