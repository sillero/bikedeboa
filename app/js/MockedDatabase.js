// var BIKE = BIKE || {};

// BIKE.MockedDatabase = {
//   ///////////////////
//   // G L O B A L S //
//   ///////////////////

//   hasDoneInitialMock: false,

//   API_URL: '',

//   ALL_TAGS: ['Iluminado', 'Movimentado', 'Monitorado', 'Fácil acesso', 'Espaçoso', 'Coberto'],

//   allMarkers: [
//     {
//       text: 'Zaffari Supermercados',
//       description: 'Detalhe: coberto',
//       lng: '-51.2226847',
//       lat: '-30.051518600000005',
//     },
//     {
//       title: 'Lupy Lan House',
//       lng: '-51.179981',
//       lat: '-29.963263',
//     },
//     {
//       text: 'Panvel Moinhos',
//       description: 'Na frente da Panvel tem bicicletário e não precisa ser cliente para estacionar ali.',
//       lng: '-51.200999',
//       lat: '-30.0246',
//     },
//     {
//       text: 'Shopping Moinhos de Vento',
//       description: 'Bonitos, mas poderia ter sinalização que é um bicicletário.',
//       lng: '-51.201428',
//       lat: '-30.023906000000004',
//     },
//     {
//       text: 'Shopping Total',
//       description: 'Não parece um bicicletário, mas sim uma decoração: uma grande mola de ferro deitada no chão, não tem sinalização mas é realmente pro ciclista!<br><br>Em frente à loja da Reebok.',
//       lng: '-51.21231800000001',
//       lat: '-30.025956000000004',
//     },
//     {
//       text: 'Redenção',
//       description: 'Perto do parquinho das crianças e do café!',
//       lng: '-51.2178544',
//       lat: '-30.0358392',
//     },
//     {
//       title: 'Jardim Botânico',
//       lng: '-51.180239',
//       lat: '-30.051274',
//     },
//     {
//       text: 'UFRGS - Reitoria 2',
//       description: 'Em frente ao Banco do Brasil',
//       lng: '-51.21955500000001',
//       lat: '-30.033080000000005',
//     },
//     {
//       title: 'UFRGS - Vale',
//       lng: '-51.120006',
//       lat: '-30.071744',
//     },
//     {
//       text: 'PUCRS',
//       description: 'Junto ao estacionamento de motos. Não é coberto.',
//       lng: '-51.172584',
//       lat: '-30.058007999999997',
//     },
//     {
//       text: 'Shopping Iguatemi',
//       description: 'Sem cobertura. Junto às motos.',
//       lng: '-51.1631369',
//       lat: '-30.0244715',
//     },
//     {
//       text: 'Bourbon Country Shopping',
//       description: 'Detalhe: coberto (ao lado das motos)',
//       lng: '-51.162729',
//       lat: '-30.021915',
//     },
//     {
//       text: 'Seleçao Natural',
//       description: 'Bicicletário na calçada com lugar pra duas.',
//       lng: '-51.142559',
//       lat: '-30.042052000000005',
//     },
//     {
//       text: 'SUBWAY Goethe',
//       lng: '-51.192169',
//       lat: '-30.028677999999996',
//     },
//     {
//       text: 'Todo Saúde',
//       lng: '-51.204082',
//       lat: '-30.025526000000003',
//     },
//     {
//       text: 'Bicicletário na Redenção',
//       description: 'Perto dos aparelhos de ginástica',
//       lng: '-51.212618',
//       lat: '-30.037464',
//     },
//     {
//       text: 'Hospital da PUCRS',
//       description: 'Fácil de achar, quase em frente à entrada do hospital!',
//       lng: '-51.175915',
//       lat: '-30.055751',
//     },
//     {
//       text: 'Zaffari',
//       description: 'Pseudo-bicicletário: na verdade é um suporte no chão pra amarrar a coleira do cachorro, mas eu sempre amarro minha bicicleta ali e não tem problema, outros ciclistas fazem o mesmo.',
//       lng: '-51.211009',
//       lat: '-30.032731999999996',
//     },
//     {
//       text: 'Shopping João Pessoa',
//       description: 'Pseudo-bicicletário: as bicicletas são amarradas em suportes no chão, no estacionamento.',
//       lng: '-51.2135198',
//       lat: '-30.045804500000003',
//     },
//     {
//       text: 'Casa de Cultura Mário Quintana',
//       description: 'Na avenida Sete de Setembro, em frente à CCMQ tem bicicletários na calçada.',
//       lng: '-51.234548000000004',
//       lat: '-30.030851000000002',
//     },
//     {
//       text: 'Fundação Iberê Camargo',
//       description: 'Escondidos atrás dos prédios menores, tem bicicletários.',
//       lng: '-51.24444',
//       lat: '-30.077561',
//     },
//     {
//       text: 'Faculdade da Farmácia UFRGS',
//       description: 'Na frente do prédio, fácil de achar.',
//       lng: '-51.205795',
//       lat: '-30.043037',
//     },
//     {
//       text: 'Mercado do Bom Fim',
//       description: 'Suporte no chão para dez bicicletas.',
//       lng: '-51.211052',
//       lat: '-30.036517',
//     },
//     {
//       text: 'Banco de Sangue do Hospital de Clínicas',
//       description: 'Subindo a rampa de acesso, do lado direito da porta de entrada do Banco de Sangue, há um bicicletário fixado na parede para cinco ou seis bicicletas.',
//       lng: '-51.2055591',
//       lat: '-30.0391177',
//     },
//     {
//       text: 'Facin PUCRS',
//       description: 'Ao lado do prédio da informática.<br>detalhe: Não coberto',
//       lng: '-51.178393',
//       lat: '-30.062966',
//     },
//     {
//       title: 'Quadras de Esporte - Redenção',
//       lng: '-51.213179',
//       lat: '-30.036703',
//     },
//     {
//       text: 'CAFF - Centro Administrativo do Estado do RS',
//       description: 'Existem dois bicicletários, um em baixo da rampa, ao lado da sala da segurança, entrando pela Ala Norte cabe 13 Bicicletas. Outra em baixo da rampa de entrada para a Secretaria da Educação, cabe 10 bicicletas.',
//       lng: '-51.230585',
//       lat: '-30.039827',
//     },
//     {
//       text: 'Faculdade de Psicologia UFRGS',
//       description: 'Ao lado esquerdo do edifício, um bicicletário pouco prático, mas grande.',
//       lng: '-51.2073399',
//       lat: '-30.0426281',
//     },
//     {
//       text: 'ADM UFRGS ',
//       description: 'bicicletário dentro da Administração da UFRGS - público',
//       lng: '-51.23174830000001',
//       lat: '-30.037093300000002',
//     },
//     {
//       title: 'Faculdade de Arquitetura UFRGS',
//       lng: '-51.220708',
//       lat: '-30.033266000000005',
//     },
//     {
//       title: 'bicicletário - Rádio UFRGS',
//       lng: '-51.220772',
//       lat: '-30.033154',
//     },
//     {
//       text: 'Zaffari Lima e Silva',
//       description: 'No canto do estacionamento aberto tem barras para estacionar, melhor do que deixar lá na frente na grade!',
//       lng: '-51.2208149',
//       lat: '-30.038615900000003',
//     },
//     {
//       text: 'Lindóia Shopping Center',
//       description: 'No estacionamento, é fácil de achar.',
//       lng: '-51.151983',
//       lat: '-30.009446',
//     },
//     {
//       text: 'ginásio poliesportivo da PUCRS',
//       description: 'dentro ou fora do prédio existem bicicletários. sábado sempre quando vou jogar futebol lá, eu coloco a bike dentro do prédio no bicicletário.',
//       lng: '-51.172503000000006',
//       lat: '-30.055546000000003',
//     },
//     {
//       text: 'Bourbon Ipiranga',
//       description: 'Bicicletário improvisado junto com as vagas para motos, ao lado da entrada do estacionamento inferior pela rua Guilherme Alves.',
//       lng: '-51.18701900000001',
//       lat: '-30.055946000000002',
//     },
//     {
//       text: 'Carrefour Partenon',
//       description: 'Improvisado. Prenda a bike nos trilhos externos onde ficam os carrinhos do supermercado.',
//       lng: '-51.164575000000006',
//       lat: '-30.061443',
//     },
//     {
//       text: 'Estádio Olímpico',
//       description: 'Do lado esquerdo, próximo da entrada dos Arcos e de onde se vai ao Quadro Social.',
//       lng: '-51.214013',
//       lat: '-30.059623',
//     },
//     {
//       text: 'Faculdade de Direito UFRGS',
//       description: 'Em frente à entrada do prédio (pela Sarmento) e do centro acadêmico.',
//       lng: '-51.221652',
//       lat: '-30.033222000000002',
//     },
//     {
//       text: 'Museu da PUCRS',
//       description: 'Aproximandamente 6 vagas, ao lado das cancelas do estacionamento de carros. Não coberto e aparentemente seguro, pois sempre tem funcionários do estacionamento por perto.',
//       lng: '-51.176612',
//       lat: '-30.058979000000004',
//     },
//     {
//       text: 'Zaffari Ipiranga',
//       description: 'Estacionamento p/ Motos e Bicicletas.<br>Descoberto. Ao lado do mercado, na Vicente da Fontoura.<br>É de boa qualidade, robusto. Fica um pouco escondido. <br>Alguns funcionários do mercado fazem seu intervalo no local.<br>Instalado no final de 2013.',
//       lng: '-51.197131',
//       lat: '-30.044984000000003',
//     },
//     {
//       text: 'Maxxi Atacado - Sarandi',
//       description: 'Possui 10 vagas',
//       lng: '-51.115682',
//       lat: '-29.982553',
//     },
//     {
//       text: 'Mercado Público - Largo Glênio Peres',
//       description: 'Bicicletários ficam sob as escadas, nas entradas do Mercado.<br>Também tem os bicicletários dentro do Mercado, embaixo das escadas de ferro, mas tem que erguê-la para encaixar.',
//       lng: '-51.227767',
//       lat: '-30.027693000000003',
//     },
//     {
//       text: 'EPTC - Empresa Pública de Transporte e Circulação',
//       description: 'Bicicletario ao lado do prédio de atendimento.<br>Aberto ao público das 08:30 hs até as 17:00 hs.',
//       lng: '-51.2166526',
//       lat: '-30.0471239',
//     },
//     {
//       title: 'Casa das Bicicletas',
//       lng: '-51.157494',
//       lat: '-30.04067',
//     },
//     {
//       text: 'Paseo Zona Sul',
//       description: 'Bicicletário do Paseo Zona Sul. Próximo a entrada do shopping.<br><br>Além do bicicletário o Paseo oferece empréstimo de bicicletas sem custo, que pode ser encontrado no estacionamento do shopping.',
//       lng: '-51.253892',
//       lat: '-30.104798',
//     },
//     {
//       text: 'TECNOPUC',
//       description: 'Bicicletário coberto ao lado da guarita dos seguranças na Tecnopuc, acesso apenas para funcionários.',
//       lng: '-51.170937',
//       lat: '-30.061508000000003',
//     },
//     {
//       text: 'Café Bonobo',
//       description: 'pode prender nos postes que tem na entrada, ou dentro do estabelecimento se precisar você pode colocar sua bike',
//       lng: '-51.209791',
//       lat: '-30.030421',
//     },
//     {
//       title: 'Escola Estadual Inácio',
//       lng: '-51.227617',
//       lat: '-30.055946000000002',
//     },
//     {
//       text: 'Supermercado Todo Dia',
//       description: 'Detalhe: descoberto',
//       lng: '-51.204529',
//       lat: '-30.130875000000003',
//     },
//     {
//       text: 'Espaço A Casa',
//       description: 'Ao lado do Café Absoluto, dentro do prédio.',
//       lng: '-51.205151',
//       lat: '-30.036796',
//     },
//     {
//       text: 'MARGS',
//       description: 'O único lugar possível de prender a bicicleta é nos mastros das bandeiras!!! Que assim seja então...',
//       lng: '-51.231651',
//       lat: '-30.029235',
//     },
//     {
//       text: 'Centro Municipal de Cultura',
//       description: 'Pequeno bicicletário. Acesso pela lateral do prédio.',
//       lng: '-51.22221',
//       lat: '-30.053717',
//     },
//     {
//       text: 'Tribunal Regional Eleitoral',
//       description: 'Pequeno bicicletário com lugar pra três bicicletas em frente ao prédio. Achei meio inseguro por ele ser fixado no chão com parafusos, mas está em um local visível.',
//       lng: '-51.237906',
//       lat: '-30.034612999999997',
//     },
//     {
//       text: 'Formaggio Pizzinha',
//       description: 'Eles não tem bicicletário, mas reservam um local na entrada para as bicicletas, que são cuidad',
//       lng: '-51.213498',
//       lat: '-30.029532000000003',
//     },
//     {
//       text: 'Estádio Beira-Rio',
//       description: 'Bicicletário dentro do Gigantinho, acesso pelo portão 1',
//       lng: '-51.234269',
//       lat: '-30.064971',
//     },
//     {
//       title: 'Boulevard Strip Center',
//       lng: '-51.144058',
//       lat: '-30.009173000000004',
//     },
//     {
//       text: 'UFCSPA',
//       description: 'Universidade Federal de Ciências da Saúde - Há um bicicletário ao lado da escadaria principal para os estudantes de universidade.',
//       lng: '-51.2206115',
//       lat: '-30.031779799999995',
//     },
//     {
//       text: 'G.N.U.',
//       description: 'Grêmio Nautico União -  Bicletário precário para 3 ou 4 bicicletas a disposição dos sócios do clube. <br>Entrada Nilo Peçanha.',
//       lng: '-51.1843367',
//       lat: '-30.033823600000005',
//     },
//     {
//       text: 'Barra Shopping Sul',
//       description: 'Na Doca 6 tem um bicicletário, geralmente com um segurança do shopping de plantão nas proximidades.',
//       lng: '-51.246028',
//       lat: '-30.083652',
//     },
//     {
//       text: 'Shopping DC Navegantes',
//       description: 'o bicicletário fica ao lado da Praça de Alimentação, fundo do estacionamento.',
//       lng: '-51.20285',
//       lat: '-29.995576',
//     },
//     {
//       text: 'Supermercado Asun',
//       description: 'estacionamento do Supermercado Asun',
//       lng: '-51.103715',
//       lat: '-29.953326000000004',
//     },
//     {
//       text: 'Escola Presidente Kennedy - Poli',
//       description: 'Escola Presidente Kennedy - Poli',
//       lng: '-51.102414',
//       lat: '-29.955938',
//     },
//     {
//       text: 'Calçadão',
//       description: 'bem em frente ao "Shopping" Cachoeirinha/Calçadão são apenas 4 lugares, mas serve!!',
//       lng: '-51.103636',
//       lat: '-29.953704',
//     },
//     {
//       text: 'Conjunto Comercial Canoas',
//       description: 'O bicicletário fica no estacionamento, além do espaço para amarrar a bicicleta há um segurança que entrega um papel identificando o dono e a bicicleta e o horário. Só é possível retirar a bicicleta apresentando esse papel.',
//       lng: '-51.178898',
//       lat: '-29.916164',
//     },
//     {
//       text: 'PROCERGS',
//       description: 'Bicicletário da PROCERGS. 20 bicicletas',
//       lng: '-51.230568',
//       lat: '-30.039118',
//     },
//     {
//       text: 'Colégio Rodrigues Alves',
//       description: 'Colocado à 7 meses, o bicicletário oferece',
//       lng: '-51.093673',
//       lat: '-29.953587',
//     },
//     {
//       text: 'Instiruto Goethe',
//       description: 'Em frente ao instituto.',
//       lng: '-51.206449',
//       lat: '-30.027955000000002',
//     },
//     {
//       title: 'Shopping Jardim Verde',
//       lng: '-51.2185191',
//       lat: '-30.1361473',
//     },
//     {
//       text: 'R.U. Saúde (UFRGS)',
//       description: 'Ao lado da escada que dá acesso ao Restaurante Universitário da Saúde (UFRGS). Várias vagas. E ainda tem as grades disponíveis.',
//       lng: '-51.207514',
//       lat: '-30.041824000000002',
//     },
//     {
//       text: 'Faculdade de Educação - UFRGS',
//       description: 'Ao lado do prédio da Faculdade de Educação (UFRGS), em frente a uma lanchonete e ao espaço Contraponto. Geralmente tem corrente (é só levar o cadeado). Fica na sombra.',
//       lng: '-51.219994',
//       lat: '-30.033263000000005',
//     },
//     {
//       text: 'R. U. Centro - UFRGS',
//       description: 'Em frente ao Restaurante Universitário do Centro (UFRGS), na Casa do Estudante.',
//       lng: '-51.2230358',
//       lat: '-30.032894200000005',
//     },
//     {
//       text: 'Redenção',
//       description: 'Aqui tem mais um bicicletário na Redenção. Fica ao lado de umas barras para exercício físico, na sombra.',
//       lng: '-51.215461',
//       lat: '-30.038351000000002',
//     },
//     {
//       text: 'Comitê Latinoamericano',
//       description: 'Vá de Bici, e toma uma Cordoba bem gelada!<br>http://comitelatinoamericano.blogspot.com/<br><br>Bicicletário com lugar para 5 bicis.',
//       lng: '-51.203671',
//       lat: '-30.023773',
//     },
//     {
//       text: 'Mascavo Sucos e Lanches',
//       description: 'O bar oferece um pátio interno transformado em estacionamento para as bicis.',
//       lng: '-51.2245918',
//       lat: '-30.0425354',
//     },
//     {
//       text: 'Unilasalle',
//       description: 'Perto do "castelinho", tem espaço para umas 6 bicicletas aproximadamente.',
//       lng: '-51.236801',
//       lat: '-29.898252',
//     },
//     {
//       text: 'Agronomia - UFRGS',
//       description: 'Bicicletário na Faculdade de Agronomia - UFRGS',
//       lng: '-51.141014',
//       lat: '-30.07032',
//     },
//     {
//       text: 'Master Fitness  Academia',
//       description: 'Bicicletário na Academia Master Fitness',
//       lng: '-51.227601',
//       lat: '-30.053929000000004',
//     },
//     {
//       text: 'Anexo da Assembleia Legislativa do RS',
//       description: 'Em frente ao Anexo da Assembleia Legislativa, há aquelas estruturas de concreto para contenção de veículos na calçada, onde ficam presas as motocicletas. Como há ganchos de ferro nas estruturas de concreto é possível prender as bicicletas ali.',
//       lng: '-51.2314367',
//       lat: '-30.0332462',
//     },
//     {
//       title: 'Clinica Biológika',
//       lng: '-51.231207',
//       lat: '-30.102488',
//     },
//     {
//       text: 'Unisuper',
//       description: 'pequeno bicicletário',
//       lng: '-51.197759',
//       lat: '-30.012226000000002',
//     },
//     {
//       text: 'Bourbon Assis Brasil',
//       description: 'bicicletário',
//       lng: '-51.183854',
//       lat: '-30.004951000000002',
//     },
//     {
//       text: 'Biciletário Rissul',
//       description: 'São Pedro quase na esquina com a Presidente Roosevelt.',
//       lng: '-51.204019',
//       lat: '-30.009519000000004',
//     },
//     {
//       text: 'Restaurante Prato Verde ',
//       description: '2 Paraciclos de 5 lugares',
//       lng: '-51.211226',
//       lat: '-30.037479',
//     },
//     {
//       text: 'Estação Bicicletas - Chalé da Praça XV',
//       description: 'Era no Mercado, mudou para o Chalé.',
//       lng: '-51.227371',
//       lat: '-30.028315',
//     },
//     {
//       text: 'Bicicletário Theatro São Pedro',
//       description: 'Localizado na calçada, junto ao Theatro São Pedro, na entrada principal do Multipalco.',
//       lng: '-51.230503',
//       lat: '-30.032384',
//     },
//     {
//       text: 'Hospital Mãe de Deus',
//       description: 'Entrando pela Rua Costa, é possível usar o estacionamento de motos para deixar a bici. Há um cano de delimitação de área que pode ser usado para prendê-la.',
//       lng: '-51.228897',
//       lat: '-30.058573999999997',
//     },
//     {
//       text: 'Bicicletário no estacionamento',
//       description: 'O bicicletário não é mais no subsolo.Agora está junto a primeira cancela, logo na entrada. Tem espaço para 4 ou 5 bicicletas.<br><br> <br>Local coberto e sempre com guardas por perto.',
//       lng: '-51.196804',
//       lat: '-30.025482',
//     },
//     {
//       text: 'Grêmio Náutico União',
//       description: 'No 1º e 3º andar - Somente para associados',
//       lng: '-51.198172',
//       lat: '-30.021933',
//     },
//     {
//       text: 'Voltagem Manutenção e Reforma',
//       description: 'Paraciclo ideal, pode acorrentar o quadro da bicicleta e não apenas a roda. O local é vigiado por câmera se segurança e pode ser avistado do interior da loja.',
//       lng: '-51.14300000000001',
//       lat: '-30.006626',
//     },
//     {
//       text: 'Woodoo Lounge',
//       description: 'R. João Alfredo, 577',
//       lng: '-51.224875',
//       lat: '-30.042194',
//     },
//     {
//       text: 'Bar da Lola',
//       description: 'Cabem cerca de 5 bicicletas',
//       lng: '-51.20633900000001',
//       lat: '-30.030664',
//     },
//     {
//       text: 'Colégio Bom Conselho',
//       description: 'Bicicletário para os alunos do colégio',
//       lng: '-51.208327',
//       lat: '-30.027767',
//     },
//     {
//       text: 'Panvel da Marquês do Pombal',
//       description: 'tem um bicicletário tipo U invertido, deve caber umas cinco bicicletas.',
//       lng: '-51.208091',
//       lat: '-30.023439',
//     },
//     {
//       text: 'Justiça do Trabalho da 4ª Região',
//       description: 'Bicicletários abaixo da escadaria de acesso ao prédio.',
//       lng: '-51.227982',
//       lat: '-30.051019000000004',
//     },
//     {
//       text: 'UFRGS - Campus do Vale -  Bloco IV',
//       description: 'Bicicletário do tipo suspenso. 4 lugares. Próximo ao novo RU e da parada de ônibus do bloco IV.',
//       lng: '-51.12012',
//       lat: '-30.067519999999995',
//     },
//     {
//       text: 'UFRGS - Biblioteca Física',
//       description: '5 lugares, bem na frente da porta da biblioteca.',
//       lng: '-51.12012500000001',
//       lat: '-30.073495',
//     },
//     {
//       text: 'Escola Estadual de Ensino Médio Infante Dom Henrique',
//       description: 'Na escola existem meia dúzia de vagas para bicicleta, em frente à quadra de esportes. Bicicletário de encaixar a roda.',
//       lng: '-51.2213995',
//       lat: '-30.059536000000005',
//     },
//     {
//       text: 'Shopping Copacabana Center',
//       description: 'Há um bicicletário muito discreto bem na "ponta" do shopping, junto a Wenceslau Escobar.',
//       lng: '-51.2532',
//       lat: '-30.103738',
//     },
//     {
//       text: 'ESEF - UFRGS',
//       description: 'Há um bicicletário na Escola Superior de Educação Física da UFRGS em frente a lanchonete e próxima à pista de corrida/caminhada.',
//       lng: '-51.181355',
//       lat: '-30.050688999999995',
//     },
//     {
//       text: 'Academia Alternativa',
//       description: 'Bicicletário para aproximadamente 6 bicicletas. Não coberto.',
//       lng: '-51.178436',
//       lat: '-30.059586',
//     },
//     {
//       text: 'Escola Rainha do Brasil',
//       description: 'Tem umas cinco vagas dentro do pátio da escola,para alunos e familiares, ao lado da porta de entrada da secretaria.',
//       lng: '-51.20088100000001',
//       lat: '-30.058063',
//     },
//     {
//       text: 'Justiça Federal',
//       description: 'Bicicletário na entrada da Justiça Federal. Espaço para 3 bicicletas.',
//       lng: '-51.235278',
//       lat: '-30.040018000000003',
//     },
//     {
//       text: 'UFRGS - Informática',
//       description: '5 vagas junto ao instituto de Informática e ao Departamento de Engenharia de Minas.',
//       lng: '-51.121386',
//       lat: '-30.068402',
//     },
//     {
//       text: 'Santander Cultural',
//       description: 'Há um bicicletário na rua, bem na frente do Santander Cultural',
//       lng: '-51.230377',
//       lat: '-30.028926',
//     },
//     {
//       text: 'Biciletário Municipal',
//       description: 'Bicicletário municipal com segurança dedicado a cuidar das bicicletas. Funciona entre 05:00 e 23:40. Mais de 60 vagas.',
//       lng: '-51.149074',
//       lat: '-29.823409',
//     },
//     {
//       text: 'Panvel Cristóvão Colombo',
//       description: 'Bicicletário pequeno na parte que fica na Cristóvão.',
//       lng: '-51.197351',
//       lat: '-30.018018',
//     },
//     {
//       title: 'redenção',
//       lng: '-51.218573',
//       lat: '-30.035017',
//     },
//     {
//       text: 'estacionamento - fundação ibere camargo',
//       description: 'bicicletário fica no estacionamento subterrâneo da fundação ibere camardo',
//       lng: '-51.245406',
//       lat: '-30.077670000000005',
//     },
//     {
//       title: 'Predio da engenharia - UFRGS',
//       lng: '-51.2208153',
//       lat: '-30.032272499999998',
//     },
//     {
//       text: 'Entreato Pub',
//       description: 'Há um bicicletário junto a calçada',
//       lng: '-51.221513',
//       lat: '-30.037101600000003',
//     },
//     {
//       text: 'Porto Alegre Hostel',
//       description: 'Detalhe: descoberto',
//       lng: '-51.210709',
//       lat: '-30.021766',
//     },
//     {
//       text: 'Strip Center Zona Sul',
//       description: 'Bicicletário antigo, mas permite prender a bike pelo quadro + roda. Dentro do estacionamento fica quase em frente ao guiche de pagamento e quase sempre tem guarda na frente.',
//       lng: '-51.254638',
//       lat: '-30.112222',
//     },
//     {
//       text: 'Zaffari da Otto',
//       description: 'Bicicletário novo, dentro do estacionamento coberto. Dá pra prender a bicicleta pelo quadro.',
//       lng: '-51.253071',
//       lat: '-30.110051000000002',
//     },
//     {
//       text: 'Granville',
//       description: 'BIcicletário totalmente antiquado, horizontal na altura do guidon. Quebra um galho por ser dentro de estacionamento fechado com segurança.',
//       lng: '-51.254756',
//       lat: '-30.10581',
//     },
//     {
//       text: 'ESPM',
//       description: 'Uma porcaria, estilo horizontal de colocar a roda,  não eh coberto e fica quase na rua, sem cuidado algum',
//       lng: '-51.207067',
//       lat: '-30.054389999999998',
//     },
//     {
//       text: 'Panvel Tristeza',
//       description: 'Farmácia Panvel. Wenceslau Escobar, esquina Gel. Randon. Possui um pequeno bicicletário.',
//       lng: '-51.25401',
//       lat: '-30.105348',
//     },
//     {
//       text: 'Ánandam Yoga e Cultura',
//       description: 'Tem um bicicletário em frente ao centro de yoga. Aberto a tod*s.',
//       lng: '-51.208493',
//       lat: '-30.035380000000004',
//     },
//     {
//       text: 'Via Sapiens Livraria',
//       description: 'Espaço para 3, no máximo 5 bicicletas.',
//       lng: '-51.22067',
//       lat: '-30.036766',
//     },
//     {
//       text: 'Supermercado Brunetto',
//       description: 'Possue bicicletário, daqueles junto ao chão de preender a roda, para cerca de meia dúzia de bicis. O local tem banco 24horas',
//       lng: '-51.113725',
//       lat: '-30.032469',
//     },
//     {
//       text: 'Gatolândia Cat Shop',
//       lng: '-51.217541',
//       lat: '-30.04328',
//     },
//     {
//       text: 'Confeitaria Barcelona',
//       description: 'Há um bicicletário na grade da confeitaria.',
//       lng: '-51.21157',
//       lat: '-30.033074999999997',
//     },
//     {
//       text: 'Hospital Santa Casa',
//       description: 'À direita na entrada de veículos na Independência, entre o Centro Cultural e o Pavilhão Pereira Filho',
//       lng: '-51.221019',
//       lat: '-30.030125',
//     },
//     {
//       text: 'Bourbon Supermercado',
//       description: 'Ao lado do estacionamento das motos, no canto a direita.',
//       lng: '-51.130795',
//       lat: '-29.693640000000002',
//     },
//     {
//       text: 'Estação Rio dos Sinos',
//       description: 'Na parte interna da estação de trem.',
//       lng: '-51.145065',
//       lat: '-29.748976',
//     },
//     {
//       text: 'Estação Santo Afonso',
//       description: 'Na parte interna da estação.',
//       lng: '-51.140387',
//       lat: '-29.729828',
//     },
//     {
//       text: 'Estação das Industrias',
//       description: 'Na parte interna da estação.',
//       lng: '-51.134835',
//       lat: '-29.715698000000003',
//     },
//     {
//       text: 'M&amp;M Lanches',
//       description: 'Nao tem bicicletario, mas eh tranquilo por nas grades do parquinho',
//       lng: '-51.226138',
//       lat: '-30.034691000000002',
//     },
//     {
//       text: 'Regentag',
//       description: 'Em frente à loja de roupas Regentag, do lado de dentro da cerca.',
//       lng: '-51.212742',
//       lat: '-30.034287999999997',
//     },
//     {
//       text: 'Vulp Bici Café',
//       description: 'Café com loja de acessórios para bicicleta e pequena oficina. Na Miguel Tostes, 845.',
//       lng: '-51.20573000000001',
//       lat: '-30.035811000000002',
//     },
//     {
//       text: 'Saúde no Copo',
//       description: 'Na Fernandes Vieira, quase esquina com Vasco da Gama.',
//       lng: '-51.210918',
//       lat: '-30.031682',
//     },
//     {
//       text: 'Academia Bioativa',
//       description: 'Antes da entrada da academia, ao lado esquerdo da escadaria.',
//       lng: '-51.208525',
//       lat: '-30.032574',
//     },
//     {
//       text: 'Caixa Econômica Federal',
//       description: 'Em frente a Caixa Econômica Federal na Bento.',
//       lng: '-51.127796000000004',
//       lat: '-29.684697000000003',
//     },
//     {
//       text: 'Lojas Lebes',
//       description: 'Em frente as loja Lebes, tem lugar para umas 4 bikes, duas de cada lado.',
//       lng: '-51.135664',
//       lat: '-29.684581',
//     },
//     {
//       text: 'Fundação Liberato',
//       description: 'Dentro da Fundação Liberato, embaixo da primeira rampa de acesso.',
//       lng: '-51.148946',
//       lat: '-29.692784999999997',
//     },
//     {
//       text: 'Taqi',
//       description: 'Bicicletário na parte do estacionamento em frente a entrada da loja. Para prender a roda.',
//       lng: '-51.140049',
//       lat: '-30.006832000000003',
//     },
//     {
//       text: 'Baden Cafés especiais',
//       description: 'O café não tem propriamente um bicicletário, mas recebe bem ciclistas que podem prender as bicis na grade que cerca o estabelecimento.',
//       lng: '-51.210505',
//       lat: '-30.041393',
//     },
//     {
//       text: 'Pasito',
//       description: 'O bar tem uma área nos fundos onde pode ser deixada a bicicleta.',
//       lng: '-51.207619',
//       lat: '-30.046993',
//     },
//     {
//       text: 'Bourbon Wallig',
//       description: 'Fica ao lado da entrada de pedestres da Avenida Grécia',
//       lng: '-51.160616',
//       lat: '-30.012839000000003',
//     },
//     {
//       text: 'Olaria',
//       description: 'No fundo do estacionamento aberto tem um bicicletário solto, tem um parafuso encaixado que é só puxar pra levar a estrutura inteira. Algumas barras também estão enferrujadas, quase quebrando, (fev/14) cuidado!',
//       lng: '-51.219176',
//       lat: '-30.039170000000002',
//     },
//     {
//       text: 'Mercado BIG',
//       description: 'Há bicicletário no estacionamento coberto, junto com as motos. As vagas são do modelo "U invertido" e costuma haver segurança em uma guarita próxima. Indicação de entrada pela Av. Chuí.',
//       lng: '-51.2446438',
//       lat: '-30.0832289',
//     },
//     {
//       text: 'Panvel',
//       description: 'Na frente da farmácia panvel um bicicletário para umas 4 bikes.',
//       lng: '-51.182694',
//       lat: '-30.043189',
//     },
//     {
//       text: 'Farmácia Panvel',
//       description: 'Em frente  a farmácia tem 4 vagas.',
//       lng: '-51.182673',
//       lat: '-30.043190999999997',
//     },
//     {
//       text: 'Cacau Show',
//       description: 'Paraciclo em U da campanha POA BIKES na frente da loja Cacau Show. Protásio, 76.',
//       lng: '-51.207662',
//       lat: '-30.036777',
//     },
//     {
//       text: 'Embaixo do viaduto',
//       description: 'Embaixo do viaduto Dom Pedro I. Junto ao estacionamento da EPTC.',
//       lng: '-51.23045',
//       lat: '-30.059548999999997',
//     },
//     {
//       text: 'Faculdade de Ciências Econômicas',
//       description: 'No estacionamento atrás da Faculdade de Ciências Econômicas, próximo ao bar do térreo.',
//       lng: '-51.222317',
//       lat: '-30.032811',
//     },
//     {
//       text: 'Bicicletário Praia de Belas',
//       description: 'Na quadra ao lado do Shopping onde construíram o novo estacionamento tem um bicicletário na 1º andar. Tem que entrar por onde entra os pedestres e abaixo da escadaria tem o bicicletário.',
//       lng: '-51.227832',
//       lat: '-30.049575',
//     },
//     {
//       text: 'Uma vaga',
//       description: 'Tem um para-ciclo móvel, ele só esta ali durante o horário comercial.',
//       lng: '-51.20543000000001',
//       lat: '-30.03735',
//     },
//     {
//       text: 'Estacionamento FAPA',
//       description: 'Logo passando as cancelas dos carros, em frente ao espaço das motos. Descoberto, para aproximadamente 5 bicicletas.',
//       lng: '-51.122244',
//       lat: '-30.0319936',
//     },
//     {
//       text: 'Colégio Estadual Piratini',
//       description: 'Entre o porteiro e o estacionamento. O bicicletario foi desenvolvido pelos alunos que iam de bice, mas não tinham onde deixar a magrela.',
//       lng: '-51.19179600000001',
//       lat: '-30.02398',
//     },
//     {
//       title: 'Quinta Avenida Center',
//       lng: '-51.2059785',
//       lat: '-30.0284221',
//     },
//     {
//       title: 'Bourbon Assis Brasil',
//       lng: '-51.1847609',
//       lat: '-30.007231',
//     },
//     {
//       text: 'Zaffari Fernando Machado',
//       description: '3 vagas, em formato de U invertido, ao lado da entrada.',
//       lng: '-51.22886720000001',
//       lat: '-30.034872899999996',
//     },
//     {
//       text: 'Brechó Las Gallas',
//       description: 'Bicicletário para roda, com 4 vagas. Descoberto.',
//       lng: '-51.20971620000001',
//       lat: '-30.0316127',
//     },
//     {
//       text: 'Frank Dogs and Burgers',
//       description: 'Paraciclo estilo "U Invertido" na calçada em frente ao restaurante.',
//       lng: '-51.211022400000004',
//       lat: '-30.0353257',
//     },
//     {
//       text: 'Pano pop',
//       description: 'Ao lado do frank burguer',
//       lng: '-51.2110278',
//       lat: '-30.0353861',
//     },
//     {
//       text: 'Usina do Gasômetro',
//       description: 'Bicicletário novo de plastico colorido reforçado.',
//       lng: '-51.2408674',
//       lat: '-30.034019600000004',
//     },
//     {
//       text: 'Centro Municipal de Cultura',
//       description: 'Bicicletário de plastico colorido.',
//       lng: '-51.2190329',
//       lat: '-30.0471593',
//     },
//     {
//       text: 'Hospital Mãe de Deus',
//       description: 'Esse fica na rua, quase na frente da entrada para o túnel de pedestres do hospital.',
//       lng: '-51.2295055',
//       lat: '-30.0585051',
//     },
//     {
//       text: 'Nova Olaria',
//       description: 'Falar com o cuidador do estacionamento, pois o bicicletário do fundo havia sumido. Ele costuma deixar cadear a bike na escada.',
//       lng: '-51.2194794',
//       lat: '-30.039287',
//     },
//     {
//       text: 'Cavanhas de dois andares',
//       description: 'No estacionamento no fundo dá para deixar a bike cadeada na escada.',
//       lng: '-51.2238414',
//       lat: '-30.0360775',
//     },
//     {
//       title: 'Mistura Urbana 1',
//       lng: '-51.2133191',
//       lat: '-30.0343946',
//     },
//     {
//       title: 'Mistura Urbana 2',
//       lng: '-51.2132956',
//       lat: '-30.034407400000003',
//     },
//     {
//       title: 'Farmácia',
//       lng: '-51.1984281',
//       lat: '-30.020029300000004',
//     },
//     {
//       text: 'Quiosque do Kiko',
//       description: 'Bicicletário para várias bikes',
//       lng: '-51.132946',
//       lat: '-30.1903369',
//     },
//     {
//       title: 'Praça',
//       lng: '-51.0065845',
//       lat: '-29.6364342',
//     },
//     {
//       text: 'prédio 1 - ULBRA',
//       description: 'bicicletário ao ar livre com razoável segurança, uma vez que há um portão de acesso com guarita.',
//       lng: '-51.1632228',
//       lat: '-29.8856206',
//     },
//     {
//       text: 'Bicicletário na Escola Parobé',
//       description: 'É só pedir pro porteiro que pode deixar a bike ali, do lado da portaria, espaço para 5 bikes.',
//       lng: '-51.2319303',
//       lat: '-30.037677900000002',
//     },
//     {
//       text: 'Bicicletário SEC',
//       description: 'Bicicletário do lado da rampa de acesso a sec, espaço para 6 bikes.',
//       lng: '-51.2301707',
//       lat: '-30.040473600000002',
//     },
//     {
//       text: 'Paraciclo',
//       description: '3 ou 4 paraciclos em formato de U invertido',
//       lng: '-51.2138548',
//       lat: '-30.034840400000004',
//     },
//     {
//       text: 'Viva Open Mall',
//       description: 'Bicicletário do Viva Open Mall, sem cobertura.',
//       lng: '-51.15788250000001',
//       lat: '-30.0287193',
//     },
//     {
//       title: 'Fabico',
//       lng: '-51.2083845',
//       lat: '-30.0428442',
//     },
//     {
//       text: 'Zaffari Higienópolis',
//       description: 'Prender no estacionamento (tanto subsolo como térreo) nos locais onde guardam os carrinhos.',
//       lng: '-51.1806974',
//       lat: '-30.020168699999996',
//     },
//     {
//       text: 'Hospital Presidente Vargas',
//       description: 'Apresenta três locais para prender a bicicleta em U invertido na rua próximo à parada de ônibus',
//       lng: '-51.2149049',
//       lat: '-30.0293893',
//     },
//     {
//       text: 'bicicletário na calçada',
//       description: 'para duas biciletas, no máximo. Bicicletário feito de madeira plastcia reciclada Braskem.',
//       lng: '-51.191512',
//       lat: '-30.0242804',
//     },
//     {
//       text: 'IPA',
//       description: 'Na entrada da faculdade pela Casemiro Há suportes para bicicletas. Alunos e visitantes podem utilizar, há sempre algum espaço sobrando.',
//       lng: '-51.1973834',
//       lat: '-30.0334333',
//     },
//   ],


//     ///////////////////
//     // M E T H O D S //
//     ///////////////////

//   mockData: function(markersToMock) {
//     console.warn('Mocking data...');

//     let newMarkers = markersToMock;

//     var i=0;
//     newMarkers.forEach(function(m) {
//       m.id = '' + i++;

//       m.isPublic = Math.round(Math.random() * 10 ) > 2 ? true : false;

//       // Number of reviews and checkins
//       m.reviews = Math.floor(Math.random() * 20);
//       m.checkin = Math.floor(Math.random() * 100);

//       // Average rating
//       if (m.reviews > 0) {
//         m.average = (Math.floor(Math.random() * 40) + 10)/10;
//       }

//       // Photo
//       const randomPic = Math.floor(Math.random() * N_MOCK_PICS) + 1;
//       m.photo = 'img/photos/' + randomPic + '.jpg';

//       // Tags
//       m.tags = [];
//       tags.forEach(tagObj => {
//         m.tags.push({
//           name: tagObj.name,
//           count: Math.floor(Math.random() * Math.random() * 20)
//         });
//       });

//       // Structure types
//       var randomStructure = Math.floor(Math.random() * STRUCTURE_CODES.length) + 0;
//       m.structureType = STRUCTURE_CODES[randomStructure];

//       // Will never need to call getPlaceDetails()
//       m._hasDetails = true;
//     });

//     return newMarkers;
//   },

//   getPlaces: function(successCB, failCB, alwaysCB) {
//     var self = this;

//     setTimeout(function() {
//       if (!self.hasDoneInitialMock) {
//         markers = self.mockData(self.allMarkers);
//         self.hasDoneInitialMock = true;
//       }

//       console.log('Retrieved ' + markers.length + ' places from hardcoded DB.');


//       if (successCB && typeof successCB === 'function') {
//         successCB();
//       }
//       if (failCB && typeof failCB === 'function') {
//         failCB();
//       }
//       if (alwaysCB && typeof alwaysCB === 'function') {
//         alwaysCB();
//       }
//     }, getSimulatedDelay());
//   },

//   sendCheckin: function(placeId, callback) {
//     var thisPlace = markers.find(function(m) { return m.id===placeId; });
//     if (thisPlace) {
//       thisPlace.checkin++;
//     }

//     setTimeout(function() {
//       if (callback && typeof callback === 'function') {
//         callback();
//       }
//     }, getSimulatedDelay());
//   },

//   deleteReview: function(reviewId, callback) {
//     setTimeout(function() {
//       if (callback && typeof callback === 'function') {
//         callback();
//       }
//     }, getSimulatedDelay());
//   },

//   updateReview: function(reviewObj, callback) {
//     setTimeout(function() {
//       if (callback && typeof callback === 'function') {
//         callback();
//       }
//     }, getSimulatedDelay());
//   },

//   sendReview: function(reviewObj, callback) {
//     var thisPlace = markers.find(function(m) { return m.id===reviewObj.placeId; });
//     if (thisPlace) {
//       thisPlace.reviews++;
//     }

//     setTimeout(function() {
//       if (callback && typeof callback === 'function') {
//         callback();
//       }
//     }, getSimulatedDelay());
//   },

//   sendPlace: function(place, callback) {
//     console.log('Sending new place:');
//     console.log(place);

//     markers.push(place);

//     setTimeout(function() {
//       if (callback && typeof callback === 'function') {
//         callback();
//       }
//     }, getSimulatedDelay());
//   },

//   authenticate: function(isUserLogin, callback) {
//     if (callback && typeof callback === 'function') {
//       callback();
//     }
//   },

//   getAllTags: function(successCB, failCB, alwaysCB) {
//     let i = 0;
//     idToTag = {};
//     tagToId = {};

//     tags = this.ALL_TAGS.map(val => {
//       let id = i++;

//       idToTag[id] = val;
//       tagToId[val] = id;

//       return {
//         id: id,
//         name: val
//       };
//     });


//     if (successCB && typeof successCB === 'function') {
//       successCB();
//     }
//     if (failCB && typeof failCB === 'function') {
//       failCB();
//     }
//     if (alwaysCB && typeof alwaysCB === 'function') {
//       alwaysCB();
//     }
//   }
// };
