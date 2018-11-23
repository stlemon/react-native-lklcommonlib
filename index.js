
import { NativeModules,Platform } from 'react-native';
import moment from 'moment';

// const { RNCommonlib } = NativeModules;
// export default  RNCommonlib;
export function formatDate(date) {
    if(date){
        return moment(date).format('YYYY-MM-DD HH:mm');
    }else{
        return moment().format('YYYY-MM-DD HH:mm');
    }
}


export function formatAmount(amount){
    return amount/100;
}

