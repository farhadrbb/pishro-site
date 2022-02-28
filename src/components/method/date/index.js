import moment from 'moment-jalaali'
import {convertDigitToEnglish} from '../convertDigitToEnglish';


let digit = (data) => {

    let value =data.toString()
    let length = value.length

    if (length === 1) {
        return ('0' + data)
    }
    return data
}


export const data_m = ()=>{

    var d = new Date(),
    dformat = [
                d.getFullYear(),
                d.getMonth()+1,
                d.getDate(),

             ].join('/')+' '+
             [
               d.getHours(),
               d.getMinutes(),
               d.getSeconds()
             ].join(':');
          
    let arr = dformat.split(" ")
    let date = arr[0].split('/')
    let time = arr[1].split(':')



    if(date.length !== 3 || time.length !== 3){
        return false
    }

    let fulldate =`${date[0]}/${digit(date[1])}/${digit(date[2])} ${digit(time[0]) + ':' + digit(time[1]) + ':' + digit(time[2])}.000000` ;

    return fulldate

}


export const dateMiladi = (value)=>{

    if(!value) return
    
    let dformat = moment( value ,'jYYYY/jM/jD HH:mm').format('YYYY/MM/DD')

    return  convertDigitToEnglish(dformat)
}


export const timeCurrent = ()=>{

    let d = new Date()

    return `${digit(d.getHours())}:${ digit(d.getMinutes())}:${digit(d.getSeconds())+'.000000'}`
}

export const dateMiladiToShamsi = (value)=>{

    if(!value) return
    
    let dformat = moment( value ,'YYYY/M/D HH:mm').format('jYYYY/jMM/jDD')

    return  convertDigitToEnglish(dformat)
}


export const dateConverttShamsiToMiladi = (value) => {

    if (!value) return

    let dformat = moment(value, 'jYYYY/jM/jD HH:mm').format('YYYY/MM/DD')

    return convertDigitToEnglish(dformat)
}