export const CommonReducer = (...reducer) => (storeData, action) => {
    for(let i=0; i<reducer.length; i++){
        let newStore = reducer[i](storeData, action);
        if(newStore !== storeData){
            return newStore;
        }
    }
    return storeData;
} 