// 📘 Tutorial Completo sobre Manipulação de Arquivos JSON em JavaScript
// Este tutorial aborda como manipular arquivos JSON em JavaScript, com exemplos para Node.js e navegadores.
// Vamos explorar leitura, escrita, manipulação de dados JSON e tratamento de erros.

/* ============================================================================
1. O que é JSON?
============================================================================ */

// JSON (JavaScript Object Notation) é um formato leve para troca de dados, baseado em objetos JavaScript.
// É amplamente usado para armazenar e transferir dados estruturados.

// Exemplo de JSON:
/*
{
    "nome": "João",
    "idade": 30,
    "cidade": "São Paulo"
}
*/

/* ============================================================================
2. Manipulação de JSON no Node.js
============================================================================ */

// No Node.js, usamos o módulo fs (File System) para ler e escrever arquivos JSON,
// combinado com as funções JSON.parse e JSON.stringify para manipular os dados.

// 2.1. Configuração Inicial
// Certifique-se de ter o Node.js instalado.
// Crie um projeto com `npm init -y` e um arquivo JavaScript (ex.: app.js).

// 2.2. Importando o Módulo fs
const fs = require('fs').promises; // Para operações assíncronas
const path = require('path');

// 2.3. Lendo um Arquivo JSON
async function lerJSON(caminho) {
    try {
        const conteudo = await fs.readFile(caminho, 'utf8');
        const dados = JSON.parse(conteudo);
        console.log('Dados JSON:', dados);
        return dados;
    } catch (erro) {
        console.error('Erro ao ler JSON:', erro.message);
        return null;
    }
}
lerJSON('dados.json');

// Arquivo dados.json de exemplo:
/*
{
    "nome": "Maria",
    "idade": 25,
    "cidade": "Rio de Janeiro"
}
*/

// 2.4. Escrevendo um Arquivo JSON
async function escreverJSON(caminho, dados) {
    try {
        const conteudo = JSON.stringify(dados, null, 2); // null, 2 para formatação legível
        await fs.writeFile(caminho, conteudo);
        console.log('Arquivo JSON escrito com sucesso!');
    } catch (erro) {
        console.error('Erro ao escrever JSON:', erro.message);
    }
}

const novosDados = {
    nome: "Carlos",
    idade: 40,
    cidade: "Belo Horizonte"
};
escreverJSON('saida.json', novosDados);

// 2.5. Manipulando Dados JSON
async function atualizarJSON(caminho) {
    try {
        // Ler o arquivo
        const conteudo = await fs.readFile(caminho, 'utf8');
        const dados = JSON.parse(conteudo);

        // Modificar dados
        dados.idade += 1;
        dados.cidade = "Curitiba";

        // Salvar alterações
        await fs.writeFile(caminho, JSON.stringify(dados, null, 2));
        console.log('JSON atualizado:', dados);
    } catch (erro) {
        console.error('Erro ao atualizar JSON:', erro.message);
    }
}
atualizarJSON('dados.json');

/* ============================================================================
3. Manipulação de JSON no Navegador
============================================================================ */

// No navegador, JSON é manipulado usando JSON.parse e JSON.stringify,
// frequentemente combinado com a API File para ler arquivos selecionados pelo usuário ou fetch para carregar JSON de um servidor.

// 3.1. Lendo JSON no Navegador (HTML com JS embutido)
/*
<!DOCTYPE html>
<html>
<head>
    <title>Leitura de JSON</title>
</head>
<body>
    <input type="file" id="inputJSON" accept=".json">
    <pre id="saida"></pre>
    <script>
        const input = document.getElementById('inputJSON');
        const saida = document.getElementById('saida');

        input.addEventListener('change', () => {
            const arquivo = input.files[0];
            if (arquivo) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const dados = JSON.parse(e.target.result);
                        saida.textContent = JSON.stringify(dados, null, 2);
                    } catch (erro) {
                        saida.textContent = 'Erro ao processar JSON: ' + erro.message;
                    }
                };
                reader.readAsText(arquivo);
            }
        });
    </script>
</body>
</html>
*/

// Exemplo: Carregando JSON com fetch
async function carregarJSON(url) {
    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        console.log('Dados JSON:', dados);
        return dados;
    } catch (erro) {
        console.error('Erro ao carregar JSON:', erro.message);
        return null;
    }
}
carregarJSON('dados.json');

// 3.2. Salvando JSON no Navegador
/*
<!DOCTYPE html>
<html>
<head>
    <title>Salvar JSON</title>
</head>
<body>
    <button onclick="salvarJSON()">Salvar JSON</button>
    <script>
        function salvarJSON() {
            const dados = {
                nome: "Ana",
                idade: 35,
                cidade: "Porto Alegre"
            };
            const conteudo = JSON.stringify(dados, null, 2);
            const blob = new Blob([conteudo], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'saida.json';
            a.click();
            URL.revokeObjectURL(url);
        }
    </script>
</body>
</html>
*/

/* ============================================================================
4. Boas Práticas e Tratamento de Erros
============================================================================ */

// ✅ Valide JSON: Sempre use try/catch com JSON.parse para evitar erros de sintaxe.
// ✅ Formatação Legível: Use JSON.stringify(dados, null, 2) para criar arquivos JSON bem formatados.
// ✅ Permissões no Node.js: Verifique se o processo tem permissões para acessar o sistema de arquivos.
// ⚠️ Tamanho de Arquivo: No navegador, arquivos grandes podem causar lentidão; considere processar em partes.
// ⚠️ Segurança: No navegador, nunca processe JSON de fontes não confiáveis sem validação, para evitar ataques XSS.

/* ============================================================================
5. Exemplo Prático: Gerenciador de Configurações (Node.js)
============================================================================ */

async function gerenciarConfiguracoes(caminho) {
    const arquivo = path.join(caminho, 'config.json');
    const configPadrao = {
        tema: "escuro",
        idioma: "pt-BR",
        notificacoes: true
    };

    try {
        // Verificar se o arquivo existe
        try {
            await fs.access(arquivo);
        } catch {
            // Criar arquivo com configurações padrão
            await fs.writeFile(arquivo, JSON.stringify(configPadrao, null, 2));
            console.log('Arquivo de configuração criado.');
        }

        // Ler configurações
        const conteudo = await fs.readFile(arquivo, 'utf8');
        const config = JSON.parse(conteudo);
        console.log('Configurações atuais:', config);

        // Atualizar configurações
        config.tema = "claro";
        config.notificacoes = false;
        await fs.writeFile(arquivo, JSON.stringify(config, null, 2));
        console.log('Configurações atualizadas:', config);
    } catch (erro) {
        console.error('Erro:', erro.message);
    }
}
gerenciarConfiguracoes('.');

/* ============================================================================
6. Limitações e Considerações
============================================================================ */

// ✅ Node.js: Oferece controle total sobre arquivos JSON, mas exige cuidado com permissões e erros de sistema de arquivos.
// ⚠️ Navegador: Limitado a arquivos selecionados pelo usuário ou acessíveis via HTTP, devido a restrições de segurança.
// ✅ Validação de Schema: Para JSON complexo, considere usar bibliotecas como ajv para validar a estrutura dos dados.
// ⚠️ Desempenho: Arquivos JSON muito grandes podem ser lentos para processar; considere streaming com bibliotecas como JSONStream no Node.js.

/* ============================================================================
7. Conclusão
============================================================================ */

// A manipulação de arquivos JSON em JavaScript é simples com JSON.parse e JSON.stringify,
// combinados com o módulo fs no Node.js ou APIs como FileReader e fetch no navegador.
// ✅ Sempre trate erros e valide os dados para garantir robustez.
