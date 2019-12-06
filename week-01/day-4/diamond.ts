'use strict';

  let lineCount: number = 7;
  let out: string = '';
  let star: string = '*';
  let row2: string= '';
    
  for (let i: number = 0; i < lineCount/2; i++) {                 //SORÉPÍTÉS
    out = '';
    for (let j: number = 0; j < lineCount - i; j++) {           // space építés pl1 4-0=4 space az elején stb stb
        out = out + ' '; 
    } 
    for (let k: number = 1; k <= 2 * i + 1; k++) {            // csillagéptés 
            out = out + star;                                   // 0. sor: 2*0+1= 1 csillag 
        }                                                       // 1. sor: 2*1+1= 3 csillag
                                                                // 2. sor: 2*2+1=5
                                                                //3. sor: 2*3+1= 7
        console.log(out);
}

    for (let g: number = 0; g<= lineCount/2 ; g++){
        row2= row2 + '';
        for (let y:number = 0; y<= g +3  ; y++) {     //0. 3 space 5 star // 1. 4 space 3 star 
            row2 = row2 + ' ';                                      // 2. 5 space 1 star
            for (let z: number = 0; z < );z++)
            row2= row2 + star;
        }
        console.log(row2);




    }