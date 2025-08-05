# Tutorial: Verificando se Array está Contido em Outro

## Resumo Executivo

Este tutorial foca especificamente em verificar **contenção de arrays** - quando queremos saber se todos os elementos de um array estão presentes em outro array. Cobrimos diferentes cenários:

- **Contenção simples** (apenas verificar presença)
- **Contenção ordenada** (respeitando sequência)
- **Contenção com duplicatas** (considerando quantidades)
- **Contenção parcial** (percentual de elementos contidos)

## 1. Contenção Básica - Verificar se Elementos Existem

### 1.1. Método com includes() - Mais simples

```javascript
function isContained(subArray, mainArray) {
    return subArray.every(element => mainArray.includes(element));
}

// Exemplos
const main = [1, 2, 3, 4, 5, 6];
const sub1 = [2, 4, 6];        // Contido
const sub2 = [2, 4, 7];        // NÃO contido (7 não existe)

console.log(isContained(sub1, main)); // true
console.log(isContained(sub2, main)); // false
```

### 1.2. Método com Set - Mais performático

```javascript
function isContainedSet(subArray, mainArray) {
    const mainSet = new Set(mainArray);
    return subArray.every(element => mainSet.has(element));
}

// Melhor performance para arrays grandes
const largeMain = Array.from({length: 10000}, (_, i) => i);
const subToCheck = [100, 500, 1000];

console.log(isContainedSet(subToCheck, largeMain)); // true
```

### 1.3. Método com filter - Retorna detalhes

```javascript
function checkContainment(subArray, mainArray) {
    const contained = subArray.filter(element => mainArray.includes(element));
    const notContained = subArray.filter(element => !mainArray.includes(element));
    
    return {
        isFullyContained: contained.length === subArray.length,
        containedElements: contained,
        notContainedElements: notContained,
        containmentPercentage: (contained.length / subArray.length * 100).toFixed(1)
    };
}

const result = checkContainment([1, 2, 7, 8], [1, 2, 3, 4, 5]);
console.log(result);
// {
//   isFullyContained: false,
//   containedElements: [1, 2],
//   notContainedElements: [7, 8], 
//   containmentPercentage: "50.0"
// }
```

## 2. Contenção Ordenada - Respeitando Sequência

### 2.1. Subsequência contínua (elementos consecutivos)

```javascript
function isContiguousSubarray(subArray, mainArray) {
    if (subArray.length === 0) return true;
    if (subArray.length > mainArray.length) return false;
    
    for (let i = 0; i <= mainArray.length - subArray.length; i++) {
        let match = true;
        
        for (let j = 0; j < subArray.length; j++) {
            if (mainArray[i + j] !== subArray[j]) {
                match = false;
                break;
            }
        }
        
        if (match) return true;
    }
    
    return false;
}

const main = [1, 2, 3, 4, 5, 6];
console.log(isContiguousSubarray([2, 3, 4], main)); // true (consecutivos)
console.log(isContiguousSubarray([2, 4, 6], main)); // false (não consecutivos)
```

### 2.2. Subsequência ordenada (não necessariamente contínua)

```javascript
function isOrderedSubsequence(subArray, mainArray) {
    let mainIndex = 0;
    
    for (let subElement of subArray) {
        let found = false;
        
        // Procura o elemento a partir da posição atual
        for (let i = mainIndex; i < mainArray.length; i++) {
            if (mainArray[i] === subElement) {
                mainIndex = i + 1; // Próxima busca começa depois desta posição
                found = true;
                break;
            }
        }
        
        if (!found) return false;
    }
    
    return true;
}

const main = [1, 2, 3, 4, 5, 6];
console.log(isOrderedSubsequence([1, 3, 5], main)); // true
console.log(isOrderedSubsequence([1, 3, 2], main)); // false (ordem quebrada)
```

### 2.3. Usando indexOf para busca otimizada

```javascript
function isOrderedSubsequenceOptimized(subArray, mainArray) {
    let lastIndex = -1;
    
    for (let element of subArray) {
        const foundIndex = mainArray.indexOf(element, lastIndex + 1);
        
        if (foundIndex === -1) return false;
        
        lastIndex = foundIndex;
    }
    
    return true;
}
```

## 3. Contenção com Duplicatas - Considerando Quantidades

### 3.1. Verificar se há elementos suficientes

```javascript
function isContainedWithDuplicates(subArray, mainArray) {
    // Conta ocorrências no array principal
    const mainCount = {};
    for (let element of mainArray) {
        mainCount[element] = (mainCount[element] || 0) + 1;
    }
    
    // Conta ocorrências necessárias no subarray
    const subCount = {};
    for (let element of subArray) {
        subCount[element] = (subCount[element] || 0) + 1;
    }
    
    // Verifica se há elementos suficientes
    for (let [element, needed] of Object.entries(subCount)) {
        const available = mainCount[element] || 0;
        if (available < needed) return false;
    }
    
    return true;
}

const main = [1, 1, 2, 2, 2, 3, 4];
const sub1 = [1, 2, 2];        // Contido (tem 2 ones, 3 twos)
const sub2 = [1, 1, 1];        // NÃO contido (só tem 2 ones)

console.log(isContainedWithDuplicates(sub1, main)); // true
console.log(isContainedWithDuplicates(sub2, main)); // false
```

### 3.2. Usando Map para melhor performance

```javascript
function isContainedWithDuplicatesMap(subArray, mainArray) {
    const mainCount = new Map();
    
    // Conta elementos do array principal
    for (let element of mainArray) {
        mainCount.set(element, (mainCount.get(element) || 0) + 1);
    }
    
    const subCount = new Map();
    
    // Conta elementos necessários
    for (let element of subArray) {
        subCount.set(element, (subCount.get(element) || 0) + 1);
    }
    
    // Verifica disponibilidade
    for (let [element, needed] of subCount) {
        const available = mainCount.get(element) || 0;
        if (available < needed) return false;
    }
    
    return true;
}
```

## 4. Contenção de Arrays de Objetos

### 4.1. Por propriedade específica

```javascript
function isContainedByProperty(subArray, mainArray, property) {
    const mainValues = mainArray.map(obj => obj[property]);
    const subValues = subArray.map(obj => obj[property]);
    
    return subValues.every(value => mainValues.includes(value));
}

const users = [
    {id: 1, name: 'Ana'},
    {id: 2, name: 'João'},
    {id: 3, name: 'Maria'}
];

const subset = [
    {id: 1, name: 'Ana'},
    {id: 3, name: 'Maria'}
];

console.log(isContainedByProperty(subset, users, 'id')); // true
```

### 4.2. Comparação profunda de objetos

```javascript
function isContainedDeepObjects(subArray, mainArray) {
    return subArray.every(subObj => {
        return mainArray.some(mainObj => {
            return deepEqual(subObj, mainObj);
        });
    });
}

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
    if (obj1 === null || obj2 === null) return false;
    
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    for (let key of keys1) {
        if (!keys2.includes(key)) return false;
        if (!deepEqual(obj1[key], obj2[key])) return false;
    }
    
    return true;
}
```

## 5. Contenção Parcial e Estatísticas

### 5.1. Análise de contenção completa

```javascript
function analyzeContainment(subArray, mainArray) {
    const mainSet = new Set(mainArray);
    const contained = [];
    const notContained = [];
    
    for (let element of subArray) {
        if (mainSet.has(element)) {
            contained.push(element);
        } else {
            notContained.push(element);
        }
    }
    
    const containmentRate = contained.length / subArray.length;
    
    return {
        isFullyContained: notContained.length === 0,
        isPartiallyContained: contained.length > 0,
        containedElements: contained,
        notContainedElements: notContained,
        containmentRate: containmentRate,
        containmentPercentage: (containmentRate * 100).toFixed(1) + '%',
        totalElements: subArray.length,
        containedCount: contained.length,
        notContainedCount: notContained.length
    };
}

const analysis = analyzeContainment([1, 2, 7, 8, 9], [1, 2, 3, 4, 5]);
console.log(analysis);
```

### 5.2. Contenção com threshold (limite mínimo)

```javascript
function isContainedWithThreshold(subArray, mainArray, threshold = 0.8) {
    const analysis = analyzeContainment(subArray, mainArray);
    return analysis.containmentRate >= threshold;
}

// Considera contido se pelo menos 80% dos elementos estiverem presentes
console.log(isContainedWithThreshold([1, 2, 3, 7], [1, 2, 3, 4, 5], 0.75)); // true
console.log(isContainedWithThreshold([1, 2, 7, 8], [1, 2, 3, 4, 5], 0.75)); // false
```

## 6. Classe Utilitária para Contenção

```javascript
class ArrayContainment {
    // Contenção básica
    static isContained(subArray, mainArray) {
        const mainSet = new Set(mainArray);
        return subArray.every(element => mainSet.has(element));
    }
    
    // Contenção ordenada
    static isOrderedSubsequence(subArray, mainArray) {
        let lastIndex = -1;
        
        for (let element of subArray) {
            const foundIndex = mainArray.indexOf(element, lastIndex + 1);
            if (foundIndex === -1) return false;
            lastIndex = foundIndex;
        }
        
        return true;
    }
    
    // Contenção contígua
    static isContiguousSubarray(subArray, mainArray) {
        if (subArray.length === 0) return true;
        if (subArray.length > mainArray.length) return false;
        
        for (let i = 0; i <= mainArray.length - subArray.length; i++) {
            if (subArray.every((element, index) => 
                mainArray[i + index] === element)) {
                return true;
            }
        }
        
        return false;
    }
    
    // Contenção com duplicatas
    static isContainedWithDuplicates(subArray, mainArray) {
        const mainCount = new Map();
        const subCount = new Map();
        
        for (let element of mainArray) {
            mainCount.set(element, (mainCount.get(element) || 0) + 1);
        }
        
        for (let element of subArray) {
            subCount.set(element, (subCount.get(element) || 0) + 1);
        }
        
        for (let [element, needed] of subCount) {
            if ((mainCount.get(element) || 0) < needed) return false;
        }
        
        return true;
    }
    
    // Análise completa
    static analyze(subArray, mainArray) {
        return analyzeContainment(subArray, mainArray);
    }
    
    // Contenção com threshold
    static isContainedWithThreshold(subArray, mainArray, threshold = 0.8) {
        const analysis = this.analyze(subArray, mainArray);
        return analysis.containmentRate >= threshold;
    }
}

// Exemplos de uso
const main = [1, 2, 3, 4, 5, 6];
const sub = [2, 4, 6];

console.log(ArrayContainment.isContained(sub, main)); // true
console.log(ArrayContainment.isOrderedSubsequence([1, 3, 5], main)); // true
console.log(ArrayContainment.isContiguousSubarray([3, 4, 5], main)); // true
```

## 7. Casos de Uso Práticos

### 7.1. Validação de permissões

```javascript
function hasRequiredPermissions(userPermissions, requiredPermissions) {
    return ArrayContainment.isContained(requiredPermissions, userPermissions);
}

const userPerms = ['read', 'write', 'delete', 'admin'];
const requiredPerms = ['read', 'write'];

console.log(hasRequiredPermissions(userPerms, requiredPerms)); // true
```

### 7.2. Verificação de ingredientes

```javascript
function canMakeRecipe(availableIngredients, recipeIngredients) {
    const result = ArrayContainment.analyzeContainment(
        recipeIngredients, 
        availableIngredients
    );
    
    return {
        canMake: result.isFullyContained,
        missingIngredients: result.notContainedElements,
        availableIngredients: result.containedElements
    };
}

const available = ['tomate', 'cebola', 'alho', 'sal'];
const recipe = ['tomate', 'cebola', 'manjericão'];

console.log(canMakeRecipe(available, recipe));
```

### 7.3. Validação de tags/categorias

```javascript
function validateTags(postTags, allowedTags) {
    const validation = ArrayContainment.analyze(postTags, allowedTags);
    
    return {
        isValid: validation.isFullyContained,
        invalidTags: validation.notContainedElements,
        validTags: validation.containedElements,
        message: validation.isFullyContained 
            ? 'Todas as tags são válidas' 
            : `Tags inválidas: ${validation.notContainedElements.join(', ')}`
    };
}
```

## 8. Performance e Otimizações

### 8.1. Comparação de performance

```javascript
function benchmarkContainment(subArray, mainArray, iterations = 10000) {
    console.time('includes method');
    for (let i = 0; i < iterations; i++) {
        subArray.every(element => mainArray.includes(element));
    }
    console.timeEnd('includes method');
    
    console.time('Set method');
    for (let i = 0; i < iterations; i++) {
        const mainSet = new Set(mainArray);
        subArray.every(element => mainSet.has(element));
    }
    console.timeEnd('Set method');
}

// Para arrays pequenos: includes é mais rápido
// Para arrays grandes: Set é mais rápido
```

### 8.2. Otimização com cache

```javascript
class CachedContainment {
    constructor() {
        this.cache = new Map();
    }
    
    isContained(subArray, mainArray) {
        const key = JSON.stringify({sub: subArray, main: mainArray});
        
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }
        
        const result = ArrayContainment.isContained(subArray, mainArray);
        this.cache.set(key, result);
        
        return result;
    }
    
    clearCache() {
        this.cache.clear();
    }
}
```

## 9. Resumo dos Métodos

| Tipo de Contenção | Método | Quando Usar |
|-------------------|--------|-------------|
| **Básica** | `every() + includes()` | Verificar apenas presença |
| **Ordenada** | `indexOf` sequencial | Ordem importa |
| **Contígua** | Loop com slice | Elementos consecutivos |
| **Com Duplicatas** | Contador Map/Object | Quantidades importam |
| **Parcial** | Análise estatística | Threshold/percentual |
| **Objetos** | Comparação profunda | Arrays complexos |

## Conclusão

A escolha do método depende dos requisitos:

- **Contenção simples**: Use `every() + includes()` ou Set
- **Ordem importa**: Use subsequência ordenada
- **Duplicatas importam**: Use contador de elementos
- **Performance crítica**: Use Set para arrays grandes
- **Análise detalhada**: Use a função de análise completa

Use a classe `ArrayContainment` como utilitário geral para diferentes tipos de verificação de contenção.