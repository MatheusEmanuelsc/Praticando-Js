# Tutorial: Comparando Arrays em JavaScript

## Resumo Executivo

Comparar arrays em JavaScript não é tão simples quanto usar `==` ou `===`, pois arrays são objetos e a comparação direta verifica apenas se são o mesmo objeto na memória. Este tutorial apresenta diferentes métodos para comparar arrays considerando:

- **Igualdade superficial** (elementos primitivos)
- **Igualdade profunda** (arrays aninhados e objetos)
- **Comparação de conteúdo** (ignorando ordem)
- **Comparação de estrutura** (considerando ordem)

## 1. Por que Arrays Não Podem Ser Comparados Diretamente

```javascript
// ❌ Isso NÃO funciona como esperado
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 == arr2);  // false
console.log(arr1 === arr2); // false

// ✅ Só retorna true se for o mesmo objeto
const arr3 = arr1;
console.log(arr1 === arr3); // true (mesmo objeto na memória)
```

## 2. Comparação Superficial (Elementos Primitivos)

### 2.1. Comparação básica com JSON.stringify

```javascript
function compareArraysJSON(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

// Funciona para arrays simples
console.log(compareArraysJSON([1, 2, 3], [1, 2, 3])); // true
console.log(compareArraysJSON([1, 2, 3], [3, 2, 1])); // false (ordem importa)

// ⚠️ Limitações: não funciona bem com undefined, funções, etc.
```

### 2.2. Comparação elemento por elemento

```javascript
function compareArraysShallow(arr1, arr2) {
    // Verifica se ambos são arrays
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return false;
    }
    
    // Verifica se têm o mesmo tamanho
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    // Compara cada elemento
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    
    return true;
}

console.log(compareArraysShallow([1, 2, 3], [1, 2, 3])); // true
console.log(compareArraysShallow(['a', 'b'], ['a', 'b'])); // true
console.log(compareArraysShallow([1, 2], [1, 2, 3])); // false
```

### 2.3. Usando every() - Método funcional

```javascript
function compareArraysEvery(arr1, arr2) {
    return arr1.length === arr2.length && 
           arr1.every((value, index) => value === arr2[index]);
}

console.log(compareArraysEvery([1, 2, 3], [1, 2, 3])); // true
console.log(compareArraysEvery([1, 2, 3], [1, 3, 2])); // false
```

## 3. Comparação Profunda (Arrays Aninhados e Objetos)

### 3.1. Comparação recursiva completa

```javascript
function deepEqual(arr1, arr2) {
    // Casos base
    if (arr1 === arr2) return true;
    
    if (arr1 == null || arr2 == null) return false;
    
    if (arr1.length !== arr2.length) return false;
    
    // Compara cada elemento recursivamente
    for (let i = 0; i < arr1.length; i++) {
        if (!deepEqualValue(arr1[i], arr2[i])) {
            return false;
        }
    }
    
    return true;
}

function deepEqualValue(a, b) {
    // Igualdade estrita
    if (a === b) return true;
    
    // Ambos são arrays
    if (Array.isArray(a) && Array.isArray(b)) {
        return deepEqual(a, b);
    }
    
    // Ambos são objetos (não null)
    if (typeof a === 'object' && typeof b === 'object' && a !== null && b !== null) {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        
        if (keysA.length !== keysB.length) return false;
        
        for (let key of keysA) {
            if (!keysB.includes(key)) return false;
            if (!deepEqualValue(a[key], b[key])) return false;
        }
        
        return true;
    }
    
    return false;
}

// Testando arrays aninhados
const nested1 = [1, [2, 3], {a: 4}];
const nested2 = [1, [2, 3], {a: 4}];
const nested3 = [1, [2, 4], {a: 4}];

console.log(deepEqual(nested1, nested2)); // true
console.log(deepEqual(nested1, nested3)); // false
```

### 3.2. Versão simplificada usando JSON (com limitações)

```javascript
function deepEqualJSON(arr1, arr2) {
    try {
        return JSON.stringify(arr1) === JSON.stringify(arr2);
    } catch (error) {
        return false;
    }
}

// Funciona para estruturas simples
console.log(deepEqualJSON([1, [2, 3]], [1, [2, 3]])); // true

// ⚠️ Não funciona com funções, undefined, Symbol, etc.
```

## 4. Comparação Ignorando Ordem (Conteúdo)

### 4.1. Para arrays simples (sem duplicatas)

```javascript
function arraysHaveSameContent(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    
    return set1.size === set2.size && 
           [...set1].every(item => set2.has(item));
}

console.log(arraysHaveSameContent([1, 2, 3], [3, 1, 2])); // true
console.log(arraysHaveSameContent([1, 2, 3], [1, 2, 4])); // false
```

### 4.2. Para arrays com duplicatas

```javascript
function arraysHaveSameElements(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    
    // Conta ocorrências em cada array
    const count1 = {};
    const count2 = {};
    
    for (let item of arr1) {
        count1[item] = (count1[item] || 0) + 1;
    }
    
    for (let item of arr2) {
        count2[item] = (count2[item] || 0) + 1;
    }
    
    // Compara as contagens
    const keys1 = Object.keys(count1);
    const keys2 = Object.keys(count2);
    
    if (keys1.length !== keys2.length) return false;
    
    for (let key of keys1) {
        if (count1[key] !== count2[key]) return false;
    }
    
    return true;
}

console.log(arraysHaveSameElements([1, 2, 2, 3], [2, 3, 1, 2])); // true
console.log(arraysHaveSameElements([1, 2, 3], [1, 1, 2, 3])); // false
```

## 5. Comparações Especializadas

### 5.1. Verificar se um array contém outro (subarray)

```javascript
function containsSubarray(mainArray, subArray) {
    return subArray.every(item => mainArray.includes(item));
}

function containsSubarrayOrdered(mainArray, subArray) {
    let mainIndex = 0;
    
    for (let subItem of subArray) {
        let found = false;
        
        for (let i = mainIndex; i < mainArray.length; i++) {
            if (mainArray[i] === subItem) {
                mainIndex = i + 1;
                found = true;
                break;
            }
        }
        
        if (!found) return false;
    }
    
    return true;
}

console.log(containsSubarray([1, 2, 3, 4, 5], [2, 4, 5])); // true
console.log(containsSubarrayOrdered([1, 2, 3, 4, 5], [2, 4, 3])); // false
```

### 5.2. Encontrar diferenças entre arrays

```javascript
function findArrayDifferences(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    
    const onlyInFirst = arr1.filter(item => !set2.has(item));
    const onlyInSecond = arr2.filter(item => !set1.has(item));
    const common = arr1.filter(item => set2.has(item));
    
    return {
        onlyInFirst,
        onlyInSecond,
        common,
        areEqual: onlyInFirst.length === 0 && onlyInSecond.length === 0
    };
}

const diff = findArrayDifferences([1, 2, 3, 4], [3, 4, 5, 6]);
console.log(diff);
// {
//   onlyInFirst: [1, 2],
//   onlyInSecond: [5, 6],
//   common: [3, 4],
//   areEqual: false
// }
```

## 6. Comparação de Arrays de Objetos

### 6.1. Por propriedade específica

```javascript
function compareObjectArrays(arr1, arr2, keyProperty) {
    if (arr1.length !== arr2.length) return false;
    
    // Ordena por propriedade para comparar
    const sorted1 = [...arr1].sort((a, b) => 
        String(a[keyProperty]).localeCompare(String(b[keyProperty]))
    );
    const sorted2 = [...arr2].sort((a, b) => 
        String(a[keyProperty]).localeCompare(String(b[keyProperty]))
    );
    
    return sorted1.every((obj, index) => 
        deepEqualValue(obj, sorted2[index])
    );
}

const users1 = [
    {id: 1, name: 'Ana'},
    {id: 2, name: 'João'}
];

const users2 = [
    {id: 2, name: 'João'},
    {id: 1, name: 'Ana'}
];

console.log(compareObjectArrays(users1, users2, 'id')); // true
```

### 6.2. Comparação completa de objetos

```javascript
function compareObjectArraysDeep(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    
    // Converte para JSON strings e ordena
    const json1 = arr1.map(obj => JSON.stringify(obj)).sort();
    const json2 = arr2.map(obj => JSON.stringify(obj)).sort();
    
    return json1.every((str, index) => str === json2[index]);
}
```

## 7. Utilitários e Classe Personalizada

### 7.1. Classe ArrayComparator

```javascript
class ArrayComparator {
    static shallow(arr1, arr2) {
        return arr1.length === arr2.length && 
               arr1.every((value, index) => value === arr2[index]);
    }
    
    static deep(arr1, arr2) {
        return deepEqual(arr1, arr2);
    }
    
    static sameContent(arr1, arr2) {
        return arraysHaveSameElements(arr1, arr2);
    }
    
    static contains(mainArray, subArray) {
        return subArray.every(item => mainArray.includes(item));
    }
    
    static getDifferences(arr1, arr2) {
        return findArrayDifferences(arr1, arr2);
    }
}

// Uso da classe
console.log(ArrayComparator.shallow([1, 2, 3], [1, 2, 3])); // true
console.log(ArrayComparator.sameContent([1, 2, 3], [3, 1, 2])); // true
```

## 8. Performance e Melhores Práticas

### 8.1. Comparação otimizada para arrays grandes

```javascript
function optimizedArrayCompare(arr1, arr2) {
    // Verificação rápida de tamanho
    if (arr1.length !== arr2.length) return false;
    
    // Para arrays pequenos, comparação direta é mais rápida
    if (arr1.length < 100) {
        return arr1.every((value, index) => value === arr2[index]);
    }
    
    // Para arrays grandes, pode usar Map para otimizar
    const map1 = new Map();
    const map2 = new Map();
    
    for (let i = 0; i < arr1.length; i++) {
        map1.set(i, arr1[i]);
        map2.set(i, arr2[i]);
    }
    
    for (let [key, value] of map1) {
        if (map2.get(key) !== value) return false;
    }
    
    return true;
}
```

### 8.2. Memoização para comparações repetitivas

```javascript
class MemoizedArrayComparator {
    constructor() {
        this.cache = new Map();
    }
    
    compare(arr1, arr2) {
        const key = `${JSON.stringify(arr1)}_${JSON.stringify(arr2)}`;
        
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }
        
        const result = this._deepCompare(arr1, arr2);
        this.cache.set(key, result);
        
        return result;
    }
    
    _deepCompare(arr1, arr2) {
        return deepEqual(arr1, arr2);
    }
    
    clearCache() {
        this.cache.clear();
    }
}
```

## 9. Exemplos Práticos de Uso

### 9.1. Validação de formulários

```javascript
function validateFormArrays(required, provided) {
    const missing = required.filter(field => !provided.includes(field));
    const extra = provided.filter(field => !required.includes(field));
    
    return {
        isValid: missing.length === 0,
        missing,
        extra
    };
}

const requiredFields = ['name', 'email', 'password'];
const providedFields = ['name', 'email', 'age'];

const validation = validateFormArrays(requiredFields, providedFields);
console.log(validation);
// { isValid: false, missing: ['password'], extra: ['age'] }
```

### 9.2. Comparação de listas de compras

```javascript
function compareShoppingLists(list1, list2) {
    const analysis = {
        identical: ArrayComparator.sameContent(list1, list2),
        common: list1.filter(item => list2.includes(item)),
        uniqueToFirst: list1.filter(item => !list2.includes(item)),
        uniqueToSecond: list2.filter(item => !list1.includes(item))
    };
    
    analysis.similarity = (analysis.common.length / 
        Math.max(list1.length, list2.length) * 100).toFixed(1) + '%';
    
    return analysis;
}
```

## 10. Resumo dos Métodos

| Método | Uso | Vantagens | Limitações |
|--------|-----|-----------|------------|
| `JSON.stringify()` | Arrays simples | Rápido, simples | Não funciona com funções, undefined |
| `every()` | Comparação ordenada | Funcional, legível | Apenas superficial |
| Recursivo | Arrays complexos | Completo, flexível | Mais lento |
| `Set` | Ignorar ordem | Eficiente para conteúdo | Não conta duplicatas |
| Contador | Com duplicatas | Preciso | Mais código |

## Conclusão

A escolha do método de comparação depende dos seus requisitos específicos:

- **Performance**: Para arrays grandes, considere otimizações
- **Precisão**: Arrays aninhados requerem comparação profunda
- **Ordem**: Decida se a ordem dos elementos importa
- **Tipos**: Considere os tipos de dados nos arrays

Use as funções e classes fornecidas como base e adapte conforme necessário para seu caso específico.