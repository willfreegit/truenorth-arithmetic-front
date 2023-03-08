const parseNameToCode = (name) =>{
    if(name === 'ADDITION'){
        return 1;
    }
    if(name === 'SUBTRACTION'){
        return 2;
    }
    if(name === 'MULTIPLICATION'){
        return 3;
    }
    if(name === 'DIVISION'){
        return 4;
    }
    if(name === 'SQUARE ROOT'){
        return 5;
    }
    if(name === 'RANDOM STRING'){
        return 6;
    }
    return 0;
}

const parseCodeToName = (code) =>{
    if(code === 1){
        return 'ADDITION';
    }
    if(code === 2){
        return 'SUBTRACTION';
    }
    if(code === 3){
        return 'MULTIPLICATION';
    }
    if(code === 4){
        return 'DIVISION';
    }
    if(code === 5){
        return 'SQUARE ROOT';
    }
    if(code === 6){
        return 'RANDOM STRING';
    }
    return '';
}

const TemporalParse = {
    parseNameToCode,
    parseCodeToName
  }
  
  export default TemporalParse;