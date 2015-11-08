[![Ultima Online Translation Tool](images/projects/ultima-online-translation-tool/ultima-online-translation-tool.png)](images/projects/ultima-online-translation-tool/ultima-online-translation-tool.png)

Essa foi uma ferramenta criada para organizar a tradução comunitária do jogo Ultima Online, realizada no Portal Liberdade UO. O sistema já não está mais ativo, devido a perda de interesse por parte dos poucos jogadores que restaram. Contudo, vou explicar como funcionava, para que sirva de base a ideias parecidas.
 
Ao abrir a página de tradução, era exibido:

- porcentagem da tradução realizada;
- quantidade de tradutores fazendo a tradução naquele momento;
- texto aleatório do cliloc.enu que ainda não tivesse recebido tradução;
- sugestão de tradução, fornecida através da api do google translator;
- área para o usuário escrever sua tradução do texto apresentado;
- campos de login (com a mesma senha para todos), apenas para evitar que spambots utilizassem a ferramenta;
- ista de tradutores, com os nomes codinomes de quem ajudou na tradução e as respectivas quantidades de textos traduzidos.
 
Um banco de dados mysql guardava as informações:

- texto a ser traduzido;
- tradução;
- codinome do tradutor.
 
O usuário também podia consultar o dicionário diretamente daquela página. A busca era realizada no Dicionário Michaelis Online de Inglês. E podia pular para um outro texto, caso não soubesse como traduzir aquele.

No fórum estavam definidas algumas regras e padronizações que garantiam a eficácia do sistema.
 
Havia uma segunda fase prevista, que seria a revisão de todas as traduções. A disposição dos textos na tela seria diferente e também as informações gravadas o banco de dados. Ela não chegou a ser posta em prática.
 
Podem ver que um sistema de tradução é bem fácil de implementar. Se existirem regras/metas bem definidas e participantes ativos, a tradução tem tudo para dar certo, mesmo em um sistema simples como esse.