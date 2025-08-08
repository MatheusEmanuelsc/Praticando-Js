// 📘 Tutorial Completo sobre Manipulação de Arquivos em JavaScript
// Este tutorial aborda como manipular arquivos em JavaScript, com exemplos para ambientes Node.js e navegadores.
// Vamos explorar leitura, escrita, manipulação de diretórios e tratamento de erros.

/* ============================================================================
1. Manipulação de Arquivos no Node.js
============================================================================ */

// No Node.js, o módulo fs (File System) é usado para manipular arquivos.
// Ele oferece métodos síncronos e assíncronos (promises/callbacks) para leitura, escrita e gerenciamento de arquivos e diretórios.

// 1.1. Configuração Inicial
// Certifique-se de ter o Node.js instalado.
// Crie um projeto com `npm init -y` e um arquivo JavaScript (ex.: app.js).

// 1.2. Importando o Módulo fs
const fs = require('fs').promises; // Usando promises para operações assíncronas
const fsSync = require('fs'); // Para métodos síncronos

// 1.3. Leitura de Arquivos

// Exemplo: Leitura Assíncrona
async function lerArquivo(caminho) {
    try {
        const conteudo = await fs.readFile(caminho, 'utf8');
        console.log('Conteúdo do arquivo:', conteudo);
    } catch (erro) {
        console.error('Erro ao ler o arquivo:', erro.message);
    }
}
lerArquivo('exemplo.txt');

// Exemplo: Leitura Síncrona
try {
    const conteudo = fsSync.readFileSync('exemplo.txt', 'utf8');
    console.log('Conteúdo do arquivo:', conteudo);
} catch (erro) {
    console.error('Erro ao ler o arquivo:', erro.message);
}

// 1.4. Escrita de Arquivos

// Exemplo: Escrita Assíncrona
async function escreverArquivo(caminho, conteudo) {
    try {
        await fs.writeFile(caminho, conteudo);
        console.log('Arquivo escrito com sucesso!');
    } catch (erro) {
        console.error('Erro ao escrever o arquivo:', erro.message);
    }
}
escreverArquivo('saida.txt', 'Olá, mundo!');

// Exemplo: Escrita Síncrona
try {
    fsSync.writeFileSync('saida.txt', 'Olá, mundo!');
    console.log('Arquivo escrito com sucesso!');
} catch (erro) {
    console.error('Erro ao escrever o arquivo:', erro.message);
}

// 1.5. Manipulação de Diretórios

// Exemplo: Criar Diretório
async function criarDiretorio(caminho) {
    try {
        await fs.mkdir(caminho, { recursive: true });
        console.log('Diretório criado com sucesso!');
    } catch (erro) {
        console.error('Erro ao criar diretório:', erro.message);
    }
}
criarDiretorio('novo_diretorio');

// Exemplo: Listar Conteúdo de Diretório
async function listarDiretorio(caminho) {
    try {
        const arquivos = await fs.readdir(caminho);
        console.log('Arquivos no diretório:', arquivos);
    } catch (erro) {
        console.error('Erro ao listar diretório:', erro.message);
    }
}
listarDiretorio('.');

// 1.6. Verificar Existência de Arquivo
async function verificarArquivo(caminho) {
    try {
        await fs.access(caminho);
        console.log('Arquivo existe!');
    } catch (erro) {
        console.log('Arquivo não existe.');
    }
}
verificarArquivo('exemplo.txt');

/* ============================================================================
2. Manipulação de Arquivos no Navegador
============================================================================ */

// No navegador, a manipulação de arquivos é feita com a API File e FileReader,
// geralmente para lidar com arquivos selecionados pelo usuário via <input type="file">.

// 2.1. Lendo Arquivos no Navegador
// Exemplo: HTML com JavaScript (INSERIR EM UM ARQUIVO HTML)
/*
<!DOCTYPE html>
<html>
<head>
    <title>Leitura de Arquivo</title>
</head>
<body>
    <input type="file" id="inputArquivo">
    <p id="saida"></p>
    <script>
        const input = document.getElementById('inputArquivo');
        const saida = document.getElementById('saida');

        input.addEventListener('change', () => {
            const arquivo = input.files[0];
            if (arquivo) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    saida.textContent = e.target.result;
                };
                reader.onerror = (e) => {
                    saida.textContent = 'Erro ao ler o arquivo.';
                };
                reader.readAsText(arquivo); // Lê como texto
            }
        });
    </script>
</body>
</html>
*/

// 2.2. Salvando Arquivos no Navegador
// Exemplo: HTML com JavaScript (INSERIR EM UM ARQUIVO HTML)
/*
<!DOCTYPE html>
<html>
<head>
    <title>Salvar Arquivo</title>
</head>
<body>
    <button onclick="salvarArquivo()">Salvar Arquivo</button>
    <script>
        function salvarArquivo() {
            const conteudo = 'Olá, mundo!';
            const blob = new Blob([conteudo], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'saida.txt';
            a.click();
            URL.revokeObjectURL(url);
        }
    </script>
</body>
</html>
*/

/* ============================================================================
3. Boas Práticas e Tratamento de Erros
============================================================================ */

// ✅ Use Assíncrono Sempre que Possível: Métodos síncronos no Node.js podem bloquear a execução, então prefira promises ou callbacks.
// ✅ Trate Erros: Sempre use try/catch para métodos assíncronos ou verifique erros em callbacks.
// ✅ Valide Entradas: Antes de manipular arquivos, verifique se os caminhos ou arquivos existem.
// ✅ Permissões: No Node.js, certifique-se de que o processo tem permissões para acessar os arquivos/diretórios.

/* ============================================================================
4. Exemplo Prático: Gerenciador de Arquivos Simples
============================================================================ */

const path = require('path');

async function gerenciadorArquivos() {
    const diretorio = 'meus_arquivos';
    const arquivo = path.join(diretorio, 'teste.txt');

    try {
        // Criar diretório
        await fs.mkdir(diretorio, { recursive: true });
        console.log('Diretório criado.');

        // Escrever arquivo
        await fs.writeFile(arquivo, 'Conteúdo de teste');
        console.log('Arquivo escrito.');

        // Ler arquivo
        const conteudo = await fs.readFile(arquivo, 'utf8');
        console.log('Conteúdo lido:', conteudo);

        // Listar diretório
        const arquivos = await fs.readdir(diretorio);
        console.log('Arquivos no diretório:', arquivos);
    } catch (erro) {
        console.error('Erro:', erro.message);
    }
}
gerenciadorArquivos();

/* ============================================================================
5. Limitações e Considerações
============================================================================ */

// Node.js:
// ✅ Tem acesso total ao sistema de arquivos, mas requer permissões adequadas.

// Navegador:
// ⚠️ Limitado a arquivos selecionados pelo usuário ou blobs criados dinamicamente, devido a restrições de segurança.

// Formatos:
// 📄 Para arquivos binários (ex.: imagens), use métodos como readAsArrayBuffer no navegador
// ou opções específicas no Node.js (fs.readFile sem encoding).

/* ============================================================================
6. Conclusão
============================================================================ */

// A manipulação de arquivos em JavaScript varia dependendo do ambiente (Node.js ou navegador).
// 👉 Use o módulo fs para operações no servidor e APIs como FileReader e Blob no navegador.
// ✅ Sempre trate erros e siga boas práticas para garantir robustez.
