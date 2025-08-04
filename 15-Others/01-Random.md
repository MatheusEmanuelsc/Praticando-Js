# Tutorial: Gerando Valores Aleatórios em JavaScript

## 1. Fundamentos - Math.random()

A função `Math.random()` é a base para gerar valores aleatórios em JavaScript. Ela retorna um número decimal entre 0 (inclusive) e 1 (exclusive).

```javascript
console.log(Math.random()); // Exemplo: 0.7834592847365
```

## 2. Gerando Números Aleatórios

### 2.1. Número decimal entre 0 e um valor máximo

```javascript
function randomDecimal(max) {
    return Math.random() * max;
}

console.log(randomDecimal(10)); // Exemplo: 7.234
console.log(randomDecimal(100)); // Exemplo: 45.678
```

### 2.2. Número inteiro entre 0 e um valor máximo (exclusivo)

```javascript
function randomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(randomInt(10)); // Números de 0 a 9
console.log(randomInt(100)); // Números de 0 a 99
```

### 2.3. Número inteiro entre um mínimo e máximo (inclusivo)

```javascript
function randomIntRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomIntRange(5, 15)); // Números de 5 a 15
console.log(randomIntRange(100, 200)); // Números de 100 a 200
```

### 2.4. Número decimal entre um mínimo e máximo

```javascript
function randomDecimalRange(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(randomDecimalRange(1.5, 3.8)); // Exemplo: 2.734
console.log(randomDecimalRange(10, 50)); // Exemplo: 27.456
```

### 2.5. Exemplos práticos com números

```javascript
// Simulador de dado (1-6)
function rollDice() {
    return randomIntRange(1, 6);
}

// Gerador de idade aleatória
function randomAge(minAge = 18, maxAge = 80) {
    return randomIntRange(minAge, maxAge);
}

// Gerador de preço aleatório
function randomPrice(min = 10, max = 1000) {
    return parseFloat(randomDecimalRange(min, max).toFixed(2));
}

console.log("Dado:", rollDice()); // 1-6
console.log("Idade:", randomAge(25, 65)); // 25-65 anos
console.log("Preço: R$", randomPrice(50, 500)); // R$ 50.00 - 500.00
```

## 3. Gerando Letras Aleatórias

### 3.1. Letra aleatória (maiúscula)

```javascript
function randomUpperCase() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters[Math.floor(Math.random() * letters.length)];
}

console.log(randomUpperCase()); // Exemplo: 'K'
```

### 3.2. Letra aleatória (minúscula)

```javascript
function randomLowerCase() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    return letters[Math.floor(Math.random() * letters.length)];
}

console.log(randomLowerCase()); // Exemplo: 'm'
```

### 3.3. Letra aleatória (maiúscula ou minúscula)

```javascript
function randomLetter() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters[Math.floor(Math.random() * letters.length)];
}

console.log(randomLetter()); // Exemplo: 'Q' ou 'h'
```

### 3.4. Usando códigos ASCII para gerar letras

```javascript
// Letra maiúscula usando ASCII (A=65, Z=90)
function randomUpperCaseASCII() {
    return String.fromCharCode(randomIntRange(65, 90));
}

// Letra minúscula usando ASCII (a=97, z=122)
function randomLowerCaseASCII() {
    return String.fromCharCode(randomIntRange(97, 122));
}

console.log(randomUpperCaseASCII()); // Exemplo: 'F'
console.log(randomLowerCaseASCII()); // Exemplo: 'n'
```

## 4. Gerando Strings Aleatórias

### 4.1. String de letras com tamanho específico

```javascript
function randomString(length, type = 'mixed') {
    let characters = '';
    
    switch(type) {
        case 'upper':
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            break;
        case 'lower':
            characters = 'abcdefghijklmnopqrstuvwxyz';
            break;
        case 'numbers':
            characters = '0123456789';
            break;
        case 'mixed':
        default:
            characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters[Math.floor(Math.random() * characters.length)];
    }
    return result;
}

console.log(randomString(8)); // Exemplo: 'KmPqRtYu'
console.log(randomString(5, 'upper')); // Exemplo: 'ABMQZ'
console.log(randomString(6, 'lower')); // Exemplo: 'hjklop'
```

### 4.2. String alfanumérica

```javascript
function randomAlphanumeric(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
        result += characters[Math.floor(Math.random() * characters.length)];
    }
    return result;
}

console.log(randomAlphanumeric(10)); // Exemplo: 'K8mP2qR9Yu'
```

### 4.3. Gerador de senha com parâmetros customizáveis

```javascript
function generatePassword(options = {}) {
    const {
        length = 8,
        includeUppercase = true,
        includeLowercase = true,
        includeNumbers = true,
        includeSymbols = false,
        excludeSimilar = false
    } = options;
    
    let characters = '';
    
    if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) characters += '0123456789';
    if (includeSymbols) characters += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    // Remove caracteres similares se solicitado
    if (excludeSimilar) {
        characters = characters.replace(/[0O1lI]/g, '');
    }
    
    if (characters === '') {
        throw new Error('Pelo menos um tipo de caractere deve ser incluído');
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    
    return password;
}

// Exemplos de uso
console.log(generatePassword()); // Senha padrão
console.log(generatePassword({ length: 12, includeSymbols: true }));
console.log(generatePassword({ length: 6, includeNumbers: false }));
```

## 5. Funções Utilitárias Avançadas

### 5.1. Escolher item aleatório de um array

```javascript
function randomChoice(array) {
    if (array.length === 0) return undefined;
    return array[Math.floor(Math.random() * array.length)];
}

const cores = ['vermelho', 'azul', 'verde', 'amarelo', 'roxo'];
const nomes = ['Ana', 'João', 'Maria', 'Pedro', 'Carlos'];

console.log(randomChoice(cores)); // Exemplo: 'azul'
console.log(randomChoice(nomes)); // Exemplo: 'Maria'
```

### 5.2. Escolher múltiplos itens aleatórios (sem repetição)

```javascript
function randomSample(array, count) {
    if (count > array.length) count = array.length;
    
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(randomSample(numeros, 3)); // Exemplo: [7, 2, 9]
```

### 5.3. Embaralhar array (algoritmo Fisher-Yates)

```javascript
function shuffleArray(array) {
    const shuffled = [...array];
    
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
}

const cartas = ['A', 'K', 'Q', 'J', '10', '9', '8', '7'];
console.log(shuffleArray(cartas));
```

## 6. Exemplos Práticos Completos

### 6.1. Gerador de dados de usuário fictício

```javascript
function generateFakeUser() {
    const firstNames = ['Ana', 'João', 'Maria', 'Pedro', 'Carlos', 'Lucia', 'Miguel'];
    const lastNames = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Lima', 'Costa'];
    
    return {
        id: randomAlphanumeric(8),
        firstName: randomChoice(firstNames),
        lastName: randomChoice(lastNames),
        age: randomIntRange(18, 65),
        email: randomString(8, 'lower') + '@email.com',
        score: randomDecimalRange(0, 100).toFixed(1)
    };
}

console.log(generateFakeUser());
// Exemplo: {
//   id: 'K8mP2qR9',
//   firstName: 'Ana',
//   lastName: 'Silva',
//   age: 32,
//   email: 'hjklmpqr@email.com',
//   score: '78.4'
// }
```

### 6.2. Gerador de cores hexadecimais aleatórias

```javascript
function randomHexColor() {
    const hexChars = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * 16)];
    }
    
    return color;
}

console.log(randomHexColor()); // Exemplo: '#A3F2B8'
```

## 7. Dicas Importantes

### 7.1. Semente para números pseudo-aleatórios

JavaScript não tem uma função nativa para definir uma semente, mas você pode implementar um gerador simples:

```javascript
class SeededRandom {
    constructor(seed) {
        this.seed = seed % 2147483647;
        if (this.seed <= 0) this.seed += 2147483646;
    }
    
    next() {
        this.seed = this.seed * 16807 % 2147483647;
        return (this.seed - 1) / 2147483646;
    }
    
    randomInt(min, max) {
        return Math.floor(this.next() * (max - min + 1)) + min;
    }
}

const rng = new SeededRandom(12345);
console.log(rng.randomInt(1, 10)); // Sempre o mesmo resultado com a mesma semente
```

### 7.2. Validação de parâmetros

```javascript
function safeRandomInt(min, max) {
    // Validações
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Parâmetros devem ser números');
    }
    
    if (min > max) {
        [min, max] = [max, min]; // Troca os valores
    }
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

## Conclusão

Este tutorial cobriu desde o básico de `Math.random()` até implementações avançadas para diferentes tipos de valores aleatórios. Lembre-se de sempre validar seus parâmetros e considerar os casos extremos em suas implementações.