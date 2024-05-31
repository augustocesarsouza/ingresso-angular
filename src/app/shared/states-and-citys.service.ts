import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatesAndCitysService {
  states = ["Acre", "Alagoas", "Amazonas", "Amapá", "Bahia", "Ceará", "Distrito Federal",
  "Espírito Santo", "Goiás", "Maranhão", "Minas Gerais", "Mato Grosso do Sul", "Mato Grosso", "Pará",
  "Paraiba", "Pernambuco", "Piauí", "Paraná", "Rio de Janeiro", "Rio Grande do Norte", "Rondônia", "Roraima",
  "Rio Grande do Sul", "Santa Catarina", "Sergipe", "São Paulo", "Tocantins"];

  cidades: Record<string, string[]> = {
    'Acre': ["Rio Branco"],
    'Alagoas': ["Arapiraca", "Maceió"],
    'Amazonas': ["Manaus"],
    'Amapá': ["Macapá"],
    'Bahia': ["Camaçari", "Feira de Santana", "Itabuna", "Juazeiro", "Lauro de Freitas", "Salvador", "Serrinha", "Vitória da Conquista"],
    'Ceará': ["Cascavel", "Fortaleza", "Juazeiro do Norte", "Maracanaú"],
    'Distrito Federal': ["Brasília", "Taguatinga"],
    'Espírito Santo': ["Aracruz", "Cariacia", "Linhares", "São Mateus", "Serra", "Vila Velha", "Vitória"],
    'Goiás': ["Aparecida de Goiânia", "Goiânia", "Rio Verde", "Valparaiso"],
    'Maranhão': ["Imperatriz", "São Luís"],
    'Minas Gerais': ["Barbacena", "Belo Horizonte", "Betim", "Cambui", "Contagem", "Ipátinga", "Juiz de Fora", "Poços de Caldas", " Pouso Alegre", "São João Nepomuceno",
    "Uberaba", "Uberlândia", "Varginha"],
    'Mato Grosso do Sul': ["Campo Grande", "Dourados", "Três Lagoas"],
    'Mato Grosso': ["Cuiabá", "SINOP", "Varzea Grande"],
    'Pará': ["Ananindeua", "Belém", "Castanhal", "Marabá", "Santarém"],
    'Paraiba': ["João Pessoa"],
    'Pernambuco': ["Cabo de Santo Agostinho", "Carpina", "Caruaru", "Jaboatão dos Guararapes", "Olinda", "Paulista", "Patrolina", "Recife"],
    'Piauí': ["Teresina"],
    'Paraná': ["Curitiba", "Foz do Iguaçu", "Francisco Beltrão", "Londrina", "Maringá", "Paranaguá", "Pato Branco", "Ponta Grossa", "São José dos Pinhais"],
    'Rio de Janeiro': ["Angra dos Reis", "Barra do Piraí", "Barra Mansa", "Cabo Frio", "Campos dos Goytacazes",
    "Duque de Caxias", "Ingresso", "Itaborai", "Itaperuna", "Mecaé", "Niterói", "Nova Friburgo", "Nova Iguaçu", "Paracambi",
    "Petrópolis", "Resende", "Rio das Ostras", "Rio de Janeiro", "São Gonçalo"],
    'Rio Grande do Norte': ["Natal"],
    'Rondônia': ["Porto Velho"],
    'Roraima': ["Boa Vista"],
    'Rio Grande do Sul': ["Canoas", "Caxias do Sul", "Novo Hamburgo", "Passo Fundo", "Pelotas",
    "Porto Alegre", "Rio Grande", "Santa Maria", "São Leopoldo"],
    'Santa Catarina': ["Balneário Camboriu", "Blumenau", "Canoinhas", "Criciúma", "Florianópolis", "Joinville",
    "Lages", "São José", "Tuburão"],
    'Sergipe': ["Aracaju"],
    'São Paulo': ["Araçatuba", "Araraquara", "Atibaia", "Bariri", "Barretos", "Barueri", "Bauru",
    "Boituva", "Botucatu", "Braganã Paulista", "Campinas", "Caraguatatuba", "Cotia", "Diadema", "Franca",
    "Guararema", "Guararema", "Guarulhos", "Hortolândia", "Itanhaém", "Itapevi", "Itaquecetuba", "Itatiba", "Itu",
    "Jacarei", "Jales", "Jaú", "Jundiai", "Lençõis Paulista", "Limeira", "Marília", "Mauá", "Mogi das Cruzes", "Mogi Guaçu",
    "Osasco", "Ourinhos", "Piracicaba", "Praia Grande", "Presidente Prudente", "Ribeirão Preto", "Salto", "Santa Bárbara Do Oeste", "Santo André",
    "Santos", "São Bernardo do Campo", "São Caetano do Sul", "São Carlos", "São Jose do Rio Preto", "São Jose dos Campos", "São Paulo",
    "São Roque", "Sorocaba", "Sumaré", "Suzano", "Taboão da Serra", "Tatuí", "Taubaté", "Votuporanga"],
    'Tocantins': ["Palmas"],
  };

  constructor() { }

  getStates(): string[] {
    return this.states;
  }

  getCitysKeyValue():  Record<string, string[]> {
    return this.cidades;
  }

  getCityFromKeyValue(key: string): string[]{
    return this.cidades[key];
  }
}
