const nomes = [];
const enderecos = [];
let totalDePacientesCadastradas = 0;

const datasDeConsultas = [];
const horasDeConsultas = [];
const pacientesDeConsultas = [];
let totalDeConsultas = 0;

function cadastrarNovaPaciente(nome, endereco) {
  nomes.push(nome);
  enderecos.push(endereco);
  totalDePacientesCadastradas++;
}

function formatarPacienteParaExibicao(nome, endereco) {
  return `${nome} - ${endereco}`;
}

function exibirPacientes() {
  for (let i = 0; i < totalDePacientesCadastradas; i++) {
    console.log(formatarPacienteParaExibicao(nomes[i], enderecos[i]));
  }
  console.log(`Total de pacientes: ${totalDePacientesCadastradas}`);
}

function agendarConsulta(dia, horario, indicePaciente) {
  datasDeConsultas.push(dia);
  horasDeConsultas.push(horario);
  pacientesDeConsultas.push(indicePaciente);
  totalDeConsultas++;
}

function formatarConsultaParaExibicao(indiceConsulta) {
  const indicePaciente = pacientesDeConsultas[indiceConsulta];
  const nomePaciente = nomes[indicePaciente];
  return `${datasDeConsultas[indiceConsulta]} (${horasDeConsultas[indiceConsulta]}) - ${nomePaciente}`;
}

function exibirConsultasMarcadas() {
  console.log("Consultas Agendadas:");
  console.log();
  for (let i = 0; i < totalDeConsultas; i++) {
    console.log(formatarConsultaParaExibicao(i));
  }
  console.log(`Total de Consultas: ${totalDeConsultas}`);
}

function excluirPaciente(indice) {
  nomes.splice(indice, 1);
  totalDePacientesCadastradas--;
}

function executar() {
  cadastrarNovaPaciente("Alejandro Olchik", "Rua da Mentoria, 201");
  cadastrarNovaPaciente("Jucieny Dantas", "Rua da Mentoria, 202");

  console.log();
  exibirPacientes();
  console.log();
  console.log();

  agendarConsulta("2023-06-20", "15:00", 0);
  agendarConsulta("2023-06-21", "16:45", 1);

  exibirConsultasMarcadas();

  console.log();
  console.log("Excluindo paciente 1");
  console.log();

  excluirPaciente(1);
  cadastrarNovaPaciente("Juliane Martins", "Rua da Mentoria, 203");

  exibirPacientes();
  console.log();
  exibirConsultasMarcadas();
}

executar();
