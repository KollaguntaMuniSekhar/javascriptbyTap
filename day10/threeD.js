
let ar=[
    
        [
            [50,70],
        
            [65,87]
        ],
    
    
        [
            [90,45],
        
            [80,30]
        ]
    
];
let i,j,k;
for(i=0;i<ar.length;i++){
    for(j=0;j<ar[i].length;j++){
        for(k=0;k<ar[i][j].length;k++){
          console.log(ar[i][j][k]);
        }
    }
}