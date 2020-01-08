'use strict'



/*Create a Reservation class by implementing all the features as required by the interface.
The booked reservations should look like the output below.
Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.
Also, the DOW is randomly ordered to the bookings from an array.
DOW stands for Day of the Week (MON, TUE, etc.)*/

//codegenerator


class Reservation  {

    codegenerate(){
        let text = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        for (let i:number = 0; i < 8; i++) {
            text  += characters.charAt(Math.floor(Math.random() * characters.length));   
        }
        return text;
    } 
//daygenerator

daygenerate(){
    let days: string[] = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
    let text: string =  days[Math.floor(Math.random() * days.length)];
    return text;
}
    getDowBooking(){
        return this.daygenerate();
    };
    getCodeBooking(){
        return this.codegenerate();
    };

    showbooking(){
        return `Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`
    }
}

let numberOfReservations: number = 10;
let allreservations: string[]= [];

for (let i:number = 0; i <numberOfReservations; i++) {
    let reserve = new Reservation();
    allreservations.push(reserve.showbooking());
}
console.log(allreservations);


/*Booking# 1WBA3OMU for THU
Booking# 0V5OH7VS for WED
Booking# CV6QOAJO for MON
Booking# 03GHEJMV for SAT
Booking# M5JFB32I for THU
Booking# W30PF0E0 for SAT
Booking# S0R70GMN for SAT
Booking# 3E032B3C for WED
Booking# OD27E36J for SAT
Booking# 4MEU0657 for MON*/





