self.onmessage = function(event) {
    const { start, end, total,step,hh } = event.data;
    let results = [];
    let isTimeout = false;
    //let step = 1;
   // let total=8910000;
    // for (let i = start; i < end; i++) {
    //     for (let j = 0; j < largeNumber; j++) {
    //         results.push(performHeavyTask(i, j));
    //     }
    // }
    for (let x = start; x <= end && !isTimeout; x += step) {

        let sub1 = hh[0].quanlity * x;
        let taxVal1 = sub1 * hh[0].taxRate / 100;
        if (sub1  + taxVal1 > total) {
            break;
        }
        for (let y = hh[1].price - hh[1].range; y <= hh[1].price + hh[1].range && !isTimeout; y += step) {
            let sub2 = hh[1].quanlity * y;
            let taxVal2 = sub2 * hh[1].taxRate / 100;
            if (sub1 + sub2  + taxVal1 + taxVal2 > total) {
                break;
            }

            for (let z = hh[2].price - hh[2].range; z <= hh[2].price + hh[2].range && !isTimeout; z += step) {
                let sub3 = hh[2].quanlity * z;
                let taxVal3 = sub3 * hh[2].taxRate / 100;

                if (sub1 + sub2 + sub3 + taxVal1 + taxVal2 + taxVal3 > total) {
                    break;
                }

                for (let u = hh[3].price - hh[3].range; u <= hh[3].price + hh[3].range && !isTimeout; u += step) {
                    let sub4 = hh[3].quanlity * u;
                    let taxVal4 = sub4 * hh[3].taxRate / 100;
                    if (sub1 + sub2 + sub3 + sub4 + taxVal1 + taxVal2 + taxVal3 + taxVal4 > total) {
                        break;
                    }

                    for (let v = hh[4].price - hh[4].range; v <=hh[4].price - hh[4].range && !isTimeout; v += step) {
                        
                        let sub5 = hh[4].quanlity * v;
                        let taxVal5 = sub5 * hh[4].taxRate / 100;

                        let sub = sub1 + sub2 + sub3 + sub4 + sub5;
                        let taxVal = taxVal1 + taxVal2 + taxVal3 + taxVal4 + taxVal5;
                        taxVal = Math.round(taxVal);
                        let calculatedTotal = sub + taxVal;
                        if(calculatedTotal>total){
                            break;
                        }
                        
                        if (calculatedTotal === total) {
                            results.push({x,y,z,u,v});
                        }
                        // if (Date.now() - startTime >= timeout) {
                        //     console.log('time out');
                        //     timeoutMsg(calculatedTotal);
                        //     isTimeout = true;
                        //     break;
                        // }
                        //if(isTimeout) break;
                    }
                }
                
            }
          //  if (isTimeout) break;
        }
       // if (isTimeout) break;
    }
    
    // Trả kết quả về luồng chính
    self.postMessage(results);
};