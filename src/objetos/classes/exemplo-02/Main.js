class Paciente {
  constructor(id, nome, endereco) {
    this.id = id;
    this.nome = nome;
    this.endereco = endereco;
  }

  toString() {
    return this.nome;
  }
}

class Horario {
  constructor(data, hora) {
    this.data = data;
    this.hora = hora;
  }

  toString() {
    return `${this.data} (${this.hora})`;
  }
}

class Agendamento {
  constructor(horario, paciente) {
    this.horario = horario;
    this.paciente = paciente;
  }

  toString() {
    return `${this.horario.toString()} - ${this.paciente.toString()}`;
  }
}

class Clinica {
  constructor() {
    this.pacientes = [];
    this.agendamentos = [];
  }

  cadastrarPaciente(nome, endereco) {
    const proximoId = this.pacientes.length + 1;
    this.pacientes.push(new Paciente(proximoId, nome, endereco));
  }

  agendarConsulta(idPaciente, horario) {
    const paciente = this.pacientes.find((p) => p.id == idPaciente);
    this.agendamentos.push(new Agendamento(paciente, horario));
  }

  exibirPacientes() {
    this.pacientes.forEach((paciente) => {
      console.log(paciente.toString());
    });
  }

  exibirAgendamentos() {
    this.agendamentos.forEach((agendamento) => {
      console.log(agendamento.toString());
    });
  }
}

const pacientes = [];

function executar() {
  const clinica = new Clinica();

  clinica.cadastrarPaciente("Alejandro Olchik", "Rua da Mentoria, 201");
  clinica.cadastrarPaciente("Jucieny Dantas", "Rua da Mentoria, 202");

  clinica.agendarConsulta(1, new Horario("2023-06-21", "15:00"));
  clinica.agendarConsulta(2, new Horario("2023-06-22", "16:25"));

  console.log();
  console.log("Pacientes: ");
  clinica.exibirPacientes();

  console.log();
  console.log("Agendamentos:");
  clinica.exibirAgendamentos();
  console.log();
}

executar();
