const _ = {
    clamp (number,lower,upper){
      if (number < lower){
        return lower;
      }
      if (number > upper){
        return upper;
      }
      return number;
    },
  
    inRange(num, start, end){
      if (!end){
        end = start;
        start = 0;
      }
      if (start > end){
        let temp = end;
        end = start;
        start = temp;
      }
      if (num == end){
        return false;
      }
      if (num == start){
        return true;
      }
      
      if (num < start){
        return false;
      }
      if (num > end){
        return false;
      }
      if (num > start && num < end){
        return true;
      }
    
    },
  
    words(string){
      return string.split(' ');
    },
  
    pad(string, tamanho){
  
      if (tamanho <= string.length){
        return string;
      }
      else{
  
        let usar = tamanho-string.length;
        let esquerda = Math.floor(usar/2);
        let direita = usar-esquerda;
        let nova = ' '.repeat(esquerda)+string+' '.repeat(direita);
        return nova;
    }
    },
  
    has(object,key){
      let hasValue = object[key];
      if (hasValue != undefined){
        return true;
      }return false;
    },
  
    invert(object){
      let invertedObject = {};
      for(let key in object){
        const originalValue = object[key];
        invertedObject = {originalValue : key}
      }
      return invertedObject;
      },
  
  findKey(object, predicate){
    for (let key in object){
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue){
        return key;
      }
    }
    return undefined;
  },
  
  drop(array,n){
    if(!n){
      n = 1;
    }
    let droppedArray = array.slice(n);
    return droppedArray;
  },
  
  dropWhile(array,predicate){
    const cb = (element, index) => {
      return !predicate(element,index,array);
    }
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array,dropNumber);
    return droppedArray;
  },
  
  chunk(array,size = 1){
    let arrayChunks = [];
    for (let i = 0; i < array.length; i+= size){
      let arrayChunk = array.slice(i, i+size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
  }
  
  
  
  module.exports = _;