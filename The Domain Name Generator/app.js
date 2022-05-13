let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extensions= ['.com','.net','.us','.io','.etc']

function domainGen (arreglo1,arreglo2,arreglo3,arreglo4){


 for(l=0;l<arreglo4.length;l++){
for(i=0; i<arreglo1.length; i++){
    for(j=0;j<arreglo2.length;j++){
        for(k=0;k<arreglo3.length;k++){
           

            console.log(arreglo1[i] + arreglo2[j]+arreglo3[k]+arreglo4[l])
    }
}
}
}
}
domainGen(pronoun,adj,noun,extensions)  
