<h1 align="center">
GoStack BOOTCAMP
</h1>
<h4 align="center">
Plataforma de agendamento e gerenciamento para barbearias
</h4>
<h3>💬 Sobre</h3>
<p>API GoBarber, aplicação que conecta prestadores de serviço (Barbeiros e Cabeleireiros) aos clientes em suas regiões. Aplicação montada durante o bootcamp GoStack aplicando todo o conhecimento adquirido durante a jornada. Neste projeto foi utilizada as melhores práticas na construção do projeto, com o uso das tecnologias TypeScript, Express, TypeORM em cima do Ambiente e execução de javascript, o NodeJS.</p>
<h3>🚀 Tecnologias</h3>
<ul>
	<li><a href="https://www.typescriptlang.org/">TypeScript</a>: Linguagem.</li>
	<li><a href="https://nodejs.org/en/">NodeJs</a>: Ambiente de execução.</li>
	<li><a href="https://expressjs.com/">Express</a>: API Framework.</li>
	<li><a href="https://github.com/auth0/node-jsonwebtoken">JsonWebToken</a>:Autenticação JWT</li>
	<li><a href="https://github.com/expressjs/multer">Multer</a>:Upload de Arquivos</li>
	<li><a href="https://www.postgresql.org/">Postgres</a>:Banco de Dados</li>
	<li><a href="https://typeorm.io/#/">Typeorm</a>:ORM</li>
	<li><a href="https://jestjs.io/">Jest</a>:Testes</li>
	<li><a href="https://github.com/microsoft/tsyringe">tsyringe</a>:Lib de injeção de dependencias. <a href="https://github.com/thenativeweb/uuidv4#readme">uuidv4:</a> uuid.</li>
</ul>
<h3>🔖 Layout</h3>
<p>Uma API Rest, que retorna o conteúdo em JSON que vai ser consumida tanto por um Front-end em <a href="https://reactjs.org/">ReactJS</a> quanto por uma aplicação Mobile Hibrido com <a href="https://reactnative.dev/">React Native</a>.</p>
<h4>Base da Aplicação.</h4>
<pre>
Requisitos funcionais:
  [] 100% de cobertura de testes nos services da aplicação.
  [] Tratamento de exceções global
  <br/>

Requisitos Não Funcionais:
   Framework da API - Express
   Linguagem de Programação - TypeScript
   Banco de dados utilizado na aplicação - Postgres
   ORM - TypeORM
   Lib de testes - Jest
   Utilizar Mailtrap para testar envios de email em ambiente de desenvolvimento
   Utilizar Amazon SES para envios de email em ambiente de Produção.
   Utilizar Eslint, Prettier e EditorConfig para padronizar o código em ambiente de desenvolvimento, com a style guide do AirBnb
</pre>
<h3>Criação de usuário</h3>
<pre>
Requisitos Funcionais:
  [x] Criação de conta com (Nome, Email, Senha);
  [] Envio de email confirmando criação de conta;

Requisitos Não Funcionais:
   Envio de email utilizando lib Nodemailer;

Regras de Negócio:
  [] Não pode ser criado duas contas com o mesmo email;
  [] O usuário deve confirmar a senha ao criar uma conta.
  [] A senha deve ser Hasheada antes de ser gravada no banco de dados;
</pre>
<h3>Autenticação</h3>
<pre>
Requisitos Funcionais:
  [] O usuário deve poder se Autenticar utilizando email e senha;

Requisitos Não Funcionais:
   A autenticação deve ser feita com Json Web Token (JWT);

Regras de Negócio:
  [x] No payload do token deve ser armazenado o ID do usuário;
</pre>
<h3>Recuperação de Senha</h3>
<pre>
Requisitos Funcionais:
  [x] O usuário deve poder recuperar sua senha informando o seu email;
  [x] O usuário de receber um email com instruções de recuperação de senha;
  [x] O usuário deve poder resetar sua senha ;

Requisitos Não Funcionais:
   Envio de email utilizando lib Nodemailer;
   O envio de email deve acontecer em segundo plano (background job);


Regras de Negócio:
  [x] O link enviado por email para resetar a senha, deve expirar em 2h;
  [x] O usuário precisa confirmar a nova senha ao resetar sua senha.
</pre>
<h3>Atualização de Perfil</h3>
<pre>
Requisitos Funcionais:
  [] O usuário deve poder atualizar seu perfil (nome, email, senha, Avatar);

Regras de Negócio:
  [x] O usuário não pode alterar seu email para um email ja em uso na aplicação
  [x] Para atulizar sua senha, o usuário deve informar a senha antiga;
  [x] Para atulizar sua senha, o usuário precisa confirmar a senha;
</pre>
<h3>Painel de usuário (Prestador de serviço)</h3>
<pre>
Requisitos Funcionais:
  [] O prestador deve poder listar os seus agendamentos de um dia especifico;
  [] O prestador deve poder receber uma notificação sempre que houver um novo agendamento;
  [] O prestador deve poder visualizar as notificações não lidas;


Requisitos Não Funcionais:
   Os agendamentos devem ser armazenados em cache.
   As notificações do prestador devem ser armazenadas no MongoDB;
   As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

Regras de Negócio:
  [] A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;
</pre>
<h3>Agendamento de serviço</h3>
<pre>
Requisitos Funcionais:
  [] O usuário deve poder listar todos os prestadores de serviço cadastrados;
  [] O usuário deve poder visualizar os dias de um mês com pelo menos um horário disponível de um prestador;
  [] O usuário deve poder visualizar os horários disponíveis de um dia especifico de um prestador;
  [] O usuário deve poder realizar um novo agendamento com um prestador;
  [] O usuário deve poder listar os agendamentos já marcados;
  [] O usuário deve poder cancelar um agendamento marcado.

Requisitos Não Funcionais:
   A listagem de prestadores devem ser armazenadas em cache.

Regras de Negócio:
  [] Cada agendamento deve durar 1h exatamente;
  [] Os agendamentos devem estar disponíveis entre 8h às 18h sendo o último agendamento iniciado as 17h;
  [] O usuário não pode agendar em um horário já ocupado;
  [] O usuário não pode agendar em um horário que já passou;
  [] O usuário não pode agendar consigo mesmo;
</pre>
<h4>tips/scripts</h4>
<h5>criar migrations:</h5>
<ul>
	<li>Terminal: <pre>yarn typeorm migration:create -n CreateAppointments</pre></li>
	<li>Execugtar migration: <pre>yarn typeorm migration:run</pre></li>
	<li>Rollback desfazer: <pre>yarn typeorm migration:revert</pre></li>
</ul>
<p>Ver quais migrations já foram executadas:</p>
<pre>yarn typeorm migration:show</pre>
<h4>Este projeto também possui a parte frontend que foi desenvolvida em ReactJs e a versão mobile que foi desenvolvida em ReactNative.</h4>

