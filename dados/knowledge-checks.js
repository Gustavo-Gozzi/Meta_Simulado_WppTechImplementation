/* Knowledge checks das lições dos cursos oficiais (traduzidos)
   Arquivo gerado automaticamente a partir dos cursos da Meta Blueprint. */

const QUESTOES_KC = [
  {
    "id": "kc-1",
    "curso": "Componentes técnicos da WhatsApp Business Platform",
    "enunciado": "A Wind & Wool é uma boutique de roupas com e-commerce e várias lojas físicas. Um dos sócios não sabe se a WhatsApp Business Platform é adequada. A empresa está com falta de funcionários, mas quer continuar interagindo com as pessoas e dando informações úteis sobre produtos.\nDe quais formas a empresa poderia usar a WhatsApp Business Platform para se conectar com as pessoas e dar as informações de que precisam? (Escolha 3)",
    "alternativas": [
      {
        "t": "Avisar as pessoas sobre novidades de produtos.",
        "c": true
      },
      {
        "t": "Fornecer informações de envio.",
        "c": true
      },
      {
        "t": "Enviar várias mensagens não solicitadas para um grande número de pessoas.",
        "c": false
      },
      {
        "t": "Responder perguntas frequentes com um chatbot automatizado.",
        "c": true
      }
    ],
    "explicacao": "A plataforma serve para marketing para quem deu opt-in, notificações de utility (como informações de envio) e atendimento automatizado com chatbot, o que ajuda com a falta de pessoal. Mensagens não solicitadas em massa violam as políticas: marketing só pode ir para quem aceitou receber.",
    "fontes": [
      {
        "titulo": "Visão técnica da WhatsApp Business Platform › Componentes técnicos da WhatsApp Business Platform",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621018/activity/249501"
      }
    ]
  },
  {
    "id": "kc-2",
    "curso": "Componentes técnicos da WhatsApp Business Platform",
    "enunciado": "Quais são exemplos de ferramentas que você pode construir ou integrar à WhatsApp Business Platform para engajar clientes? (Escolha 3)",
    "alternativas": [
      {
        "t": "Chatbot automatizado",
        "c": true
      },
      {
        "t": "Sistema de CRM",
        "c": true
      },
      {
        "t": "Anúncio em massa (bulk advertisement)",
        "c": false
      },
      {
        "t": "Interface de chat para atendentes humanos",
        "c": true
      }
    ],
    "explicacao": "A lição cita integrações com chatbots, CRMs, sites, interfaces de atendentes, sistemas de reserva e de estoque. Envio em massa/bulk não é uma ferramenta da plataforma e o uso de bulk messaging fora das ferramentas oficiais pode levar a restrições.",
    "fontes": [
      {
        "titulo": "Visão técnica da WhatsApp Business Platform › Componentes técnicos da WhatsApp Business Platform",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621018/activity/249501"
      }
    ]
  },
  {
    "id": "kc-3",
    "curso": "Fazer o onboarding de clientes na WhatsApp Business Platform",
    "enunciado": "Times técnicos do parceiro e times do cliente têm papéis diferentes na implementação da WhatsApp Business Platform. Qual time é responsável por cada item? (Atividade de arrastar cartões; abaixo, cada alternativa marcada como correta pertence ao time técnico do parceiro, e as demais ao time do cliente.)",
    "alternativas": [
      {
        "t": "Registrar-se no Meta for Developers, configurar ativos de desenvolvedor e acesso à plataforma → time técnico do parceiro",
        "c": true
      },
      {
        "t": "Criar um app para integrar com a WhatsApp Business Platform → time técnico do parceiro",
        "c": true
      },
      {
        "t": "Criar fluxos de chatbot para atender às necessidades do negócio → time técnico do parceiro",
        "c": true
      },
      {
        "t": "Obter opt-ins e configurar preços e formas de pagamento → time técnico do parceiro",
        "c": true
      },
      {
        "t": "Escrever message templates considerando estratégias de deep linking → time técnico do parceiro",
        "c": false
      },
      {
        "t": "Definir pontos de entrada orgânicos e pagos → time técnico do parceiro",
        "c": false
      },
      {
        "t": "Definir como a empresa pode usar a WhatsApp Business Platform → time técnico do parceiro",
        "c": false
      }
    ],
    "explicacao": "Pela tabela da lição, o parceiro cuida de tudo que é técnico: registro de desenvolvedor, app, webhooks, CRM, chatbot, testes e preparação para produção (número, opt-ins, preços e pagamento). O cliente define os casos de uso, os pontos de entrada e escreve os templates. Na atividade, o cartão de opt-ins foi recusado na coluna do cliente e aceito na do parceiro, e o resultado final foi 'Correct'.",
    "fontes": [
      {
        "titulo": "Visão técnica da WhatsApp Business Platform › Fazer o onboarding de clientes na WhatsApp Business Platform",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621018/activity/249502"
      }
    ]
  },
  {
    "id": "kc-4",
    "curso": "Configurar um app",
    "enunciado": "Uma parceira está configurando a WhatsApp Business Platform para a Feroldi's e logo vai enviar uma mensagem de teste. Qual destes passos ela precisa executar para receber um número de telefone de teste?",
    "alternativas": [
      {
        "t": "Criar um app no Facebook.",
        "c": false
      },
      {
        "t": "Associar um business portfolio ao WhatsApp.",
        "c": true
      },
      {
        "t": "Selecionar Business ao informar os detalhes do app.",
        "c": false
      },
      {
        "t": "Selecionar Test phone number ao informar os detalhes do app.",
        "c": false
      }
    ],
    "explicacao": "O número de teste é fornecido quando o business portfolio é associado ao WhatsApp. Escolher o tipo Business só define quais APIs o app pode usar e não gera número de teste (o feedback do quiz diz isso explicitamente); não existe opção 'Test phone number' nos detalhes do app, e só criar o app não basta.",
    "fontes": [
      {
        "titulo": "Configurar contas e ativos da WhatsApp Business Platform › Configurar um app",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/344612"
      }
    ]
  },
  {
    "id": "kc-5",
    "curso": "Configurar webhooks",
    "enunciado": "Um desenvolvedor da Joystick Studios, empresa de games, vai configurar o produto webhooks para receber campos específicos. Qual opção descreve os passos que ele deve executar para receber as notificações HTTP desejadas da WhatsApp Business Platform?",
    "alternativas": [
      {
        "t": "Selecionar Edit e depois escolher os campos no menu suspenso Fields.",
        "c": false
      },
      {
        "t": "Selecionar Manage e depois escolher os campos no menu suspenso Fields.",
        "c": false
      },
      {
        "t": "Selecionar Edit e depois clicar em Subscribe ao lado de cada campo desejado.",
        "c": false
      },
      {
        "t": "Selecionar Manage e depois clicar em Subscribe ao lado de cada campo desejado.",
        "c": true
      }
    ],
    "explicacao": "Depois de verificar e salvar a Callback URL, os campos são gerenciados clicando em Manage e assinando cada campo com o botão Subscribe ao lado dele. Não há botão Edit nesse passo, nem menu suspenso de campos.",
    "fontes": [
      {
        "titulo": "Configurar contas e ativos da WhatsApp Business Platform › Configurar webhooks",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/344614"
      }
    ]
  },
  {
    "id": "kc-6",
    "curso": "Configurar webhooks",
    "enunciado": "Qual é a função principal dos webhooks na WhatsApp Business Platform?",
    "alternativas": [
      {
        "t": "Responder automaticamente às mensagens recebidas.",
        "c": false
      },
      {
        "t": "Enviar notificações HTTP quando eventos específicos ocorrem.",
        "c": true
      },
      {
        "t": "Criptografar as mensagens enviadas no WhatsApp.",
        "c": false
      },
      {
        "t": "Armazenar mensagens para análise de dados.",
        "c": false
      }
    ],
    "explicacao": "Webhook é um callback HTTP disparado por eventos: quando o evento ocorre, a Meta envia uma requisição para a URL configurada. Ele não responde mensagens (isso é a sua aplicação), não criptografa nada e a Meta não armazena os dados enviados — você precisa guardá-los.",
    "fontes": [
      {
        "titulo": "Configurar contas e ativos da WhatsApp Business Platform › Configurar webhooks",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/344614"
      }
    ]
  },
  {
    "id": "kc-7",
    "curso": "Configurar webhooks",
    "enunciado": "O que o seu endpoint precisa ser capaz de processar para configurar corretamente os webhooks da WhatsApp Business Platform?",
    "alternativas": [
      {
        "t": "Apenas requisições GET com payload JSON.",
        "c": false
      },
      {
        "t": "Apenas requisições POST com payload XML.",
        "c": false
      },
      {
        "t": "Tanto verification requests quanto event notifications, usando HTTPS.",
        "c": true
      },
      {
        "t": "Troca de dados criptografados e não criptografados.",
        "c": false
      }
    ],
    "explicacao": "O endpoint recebe dois tipos de requisição HTTPS: a verification request (GET com hub.mode, hub.challenge e hub.verify_token) e as event notifications (POST com JSON). Os payloads são JSON, não XML, e tudo exige HTTPS com certificado válido.",
    "fontes": [
      {
        "titulo": "Configurar contas e ativos da WhatsApp Business Platform › Configurar webhooks",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/344614"
      }
    ]
  },
  {
    "id": "kc-8",
    "curso": "Configurar webhooks",
    "enunciado": "Quais eventos de webhook estão disponíveis na WhatsApp Business Platform? (Escolha 2)",
    "alternativas": [
      {
        "t": "Apenas webhooks de status de mensagens recebidas.",
        "c": false
      },
      {
        "t": "Apenas webhooks de status de mensagens enviadas: sent, delivered e read.",
        "c": false
      },
      {
        "t": "Webhooks tanto de mensagens recebidas quanto de status de mensagens enviadas.",
        "c": true
      },
      {
        "t": "Webhooks de atualização de conta (account update).",
        "c": true
      }
    ],
    "explicacao": "O campo messages cobre mensagens recebidas e status das enviadas (sent, delivered, read), e há campos de conta como account_update. As alternativas com 'apenas' estão erradas porque a plataforma oferece os dois tipos de mensagem e mais eventos de conta.",
    "fontes": [
      {
        "titulo": "Configurar contas e ativos da WhatsApp Business Platform › Configurar webhooks",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/344614"
      }
    ]
  },
  {
    "id": "kc-9",
    "curso": "Gerar access tokens",
    "enunciado": "Como tech provider ou solution partner, como você gera business integration system user access tokens? (Escolha 2)",
    "alternativas": [
      {
        "t": "Implementar o Embedded Signup e trocar o code devolvido quando o cliente conclui o fluxo.",
        "c": true
      },
      {
        "t": "Fazer uma chamada server-to-server ao endpoint GET /oauth/access_token.",
        "c": true
      },
      {
        "t": "Selecionar o app que vai usar o token e gerar o token.",
        "c": false
      }
    ],
    "explicacao": "O fluxo de onboarding (Embedded Signup ou WhatsApp Manager) devolve um code, que é trocado por token numa chamada server-to-server a /oauth/access_token com app ID, app secret e code. 'Selecionar o app e gerar o token' é o passo de system user token no Meta Business Suite, usado por direct developers.",
    "fontes": [
      {
        "titulo": "Configurar contas e ativos da WhatsApp Business Platform › Gerar access tokens",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/634825"
      }
    ]
  },
  {
    "id": "kc-10",
    "curso": "Gerar access tokens",
    "enunciado": "Qual é a finalidade da permissão whatsapp_business_management na Business Management API?",
    "alternativas": [
      {
        "t": "Fazer tudo o que está relacionado a uma WhatsApp Business account.",
        "c": true
      },
      {
        "t": "Configurar a opção de session logging no script do Embedded Signup.",
        "c": false
      },
      {
        "t": "Assinar os webhooks necessários no nível do app.",
        "c": false
      }
    ],
    "explicacao": "A lição diz que whatsapp_business_management é exigida para tudo relacionado à WABA, como gerenciar templates, enviar mensagens e obter informações da conta. Session logging é configuração do onboarding e a assinatura de webhooks é feita no subscribed_apps; nenhuma das duas é a finalidade da permissão.",
    "fontes": [
      {
        "titulo": "Configurar contas e ativos da WhatsApp Business Platform › Gerar access tokens",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/634825"
      }
    ]
  },
  {
    "id": "kc-11",
    "curso": "Passar no App Review",
    "enunciado": "Qual é a finalidade do App Review?",
    "alternativas": [
      {
        "t": "Garantir que os apps estejam em conformidade com as políticas e diretrizes de uso de apps nas tecnologias da Meta.",
        "c": true
      },
      {
        "t": "Dar aos desenvolvedores feedback sobre como melhorar seus apps.",
        "c": false
      },
      {
        "t": "Conceder advanced access a permissões e features para apps business.",
        "c": false
      },
      {
        "t": "Permitir que desenvolvedores peçam permissões além das disponíveis para apps business.",
        "c": false
      }
    ],
    "explicacao": "O App Review verifica se o app usa as tecnologias da Meta de forma aprovada, isto é, conforme as políticas. O advanced access é consequência de passar na revisão, não a finalidade dela; a revisão não é um serviço de feedback e não libera permissões fora das disponíveis para o tipo business.",
    "fontes": [
      {
        "titulo": "Configurar contas e ativos da WhatsApp Business Platform › Passar no App Review",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/634826"
      }
    ]
  },
  {
    "id": "kc-12",
    "curso": "Fazer o onboarding de clientes na WhatsApp Business Platform",
    "enunciado": "Uma empresa já trabalha com o parceiro A para atendimento via chatbot no seu número do WhatsApp Business. Agora ela quer adicionar o parceiro B para gerenciar campanhas de marketing no mesmo número. Qual é a abordagem correta?",
    "alternativas": [
      {
        "t": "Migrar o número da WABA do parceiro A para a WABA do parceiro B.",
        "c": false
      },
      {
        "t": "Criar uma nova WABA e registrar um segundo número para o parceiro B.",
        "c": false
      },
      {
        "t": "Adicionar uma nova integração com business-scoped user ID para o parceiro B no número existente.",
        "c": true
      },
      {
        "t": "Fazer o parceiro A compartilhar seu access token com o parceiro B.",
        "c": false
      }
    ],
    "explicacao": "No modelo de contas atual, um único número suporta várias integrações simultâneas, cada uma identificada por seu próprio business-scoped user ID, com tokens, webhooks e billing independentes. Migrar tiraria o número do parceiro A, um segundo número não é necessário e compartilhar tokens viola o isolamento por integração.",
    "fontes": [
      {
        "titulo": "Concluir o onboarding na WhatsApp Business Platform › Fazer o onboarding de clientes na WhatsApp Business Platform",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/637523/activity/637512"
      }
    ]
  },
  {
    "id": "kc-13",
    "curso": "Fazer o onboarding de clientes na WhatsApp Business Platform",
    "enunciado": "Qual passo um parceiro é obrigado a concluir para integrar o onboarding do WhatsApp Manager?",
    "alternativas": [
      {
        "t": "Carregar o Facebook SDK for JavaScript.",
        "c": true
      },
      {
        "t": "Implementar dados pré-preenchidos e números de telefone pré-verificados.",
        "c": false
      },
      {
        "t": "Obter session logging.",
        "c": false
      },
      {
        "t": "Pular a seleção de número de telefone.",
        "c": false
      }
    ],
    "explicacao": "O fluxo é baseado no Facebook SDK for JavaScript com Facebook Login for Business, então carregar o SDK é obrigatório. Dados pré-preenchidos, números pré-verificados, session logging e pular a seleção de número são recursos opcionais.",
    "fontes": [
      {
        "titulo": "Concluir o onboarding na WhatsApp Business Platform › Fazer o onboarding de clientes na WhatsApp Business Platform",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/637523/activity/637512"
      }
    ]
  },
  {
    "id": "kc-14",
    "curso": "Fazer o onboarding de clientes na WhatsApp Business Platform",
    "enunciado": "Qual é o principal benefício de migrar um número durante o onboarding em comparação com a migração programática?",
    "alternativas": [
      {
        "t": "Permite usar chamadas de API customizadas.",
        "c": false
      },
      {
        "t": "Só pode ser iniciada pelo parceiro, não pelo cliente.",
        "c": false
      },
      {
        "t": "Gera automaticamente todos os ativos necessários e concede a propriedade deles.",
        "c": true
      },
      {
        "t": "Envolve a criação manual de todos os ativos necessários.",
        "c": false
      }
    ],
    "explicacao": "A migração via onboarding cria automaticamente os ativos, dá a propriedade ao cliente, concede acesso ao app do parceiro e exige menos chamadas de API. Além disso, o próprio cliente pode iniciá-la; a criação manual de ativos é característica da migração programática.",
    "fontes": [
      {
        "titulo": "Concluir o onboarding na WhatsApp Business Platform › Fazer o onboarding de clientes na WhatsApp Business Platform",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/637523/activity/637512"
      }
    ]
  },
  {
    "id": "kc-15",
    "curso": "Configurar pagamentos",
    "enunciado": "Como um parceiro pode verificar que sua linha de crédito foi compartilhada com uma WhatsApp Business account?",
    "alternativas": [
      {
        "t": "Obtendo o ID da credit line compartilhada (receiving_credential) e comparando-o com o primary funding ID da WABA.",
        "c": true
      },
      {
        "t": "Conferindo a fatura recebida da Meta.",
        "c": false
      },
      {
        "t": "Entrando em contato diretamente com a empresa para confirmar.",
        "c": false
      },
      {
        "t": "Usando o ID do meio de pagamento da WABA.",
        "c": false
      }
    ],
    "explicacao": "O passo de verificação consiste em consultar receiving_credential{id} no allocation_config_id e primary_funding_id na WABA, e confirmar que os dois IDs são iguais. A fatura ou o contato com o cliente não validam tecnicamente o vínculo, e o primary_funding_id sozinho não prova nada sem a comparação.",
    "fontes": [
      {
        "titulo": "Concluir o onboarding na WhatsApp Business Platform › Configurar pagamentos",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/637523/activity/637513"
      }
    ]
  },
  {
    "id": "kc-16",
    "curso": "Primeiros passos com business portfolios",
    "enunciado": "Qual é a função principal de um business portfolio?",
    "alternativas": [
      {
        "t": "Gerenciar o acesso, a segurança e a integração dos ativos de negócio",
        "c": true
      },
      {
        "t": "Criar, gerenciar e acompanhar o desempenho de campanhas",
        "c": false
      },
      {
        "t": "Selecionar, ordenar e filtrar métricas de campanha",
        "c": false
      },
      {
        "t": "Controlar onde os anúncios são entregues e escolher posicionamentos",
        "c": false
      }
    ],
    "explicacao": "O business portfolio centraliza os ativos de negócio e as pessoas que têm acesso a eles, incluindo integrações e segurança. Criar e acompanhar campanhas, filtrar métricas e escolher posicionamentos são funções do Ads Manager.",
    "fontes": [
      {
        "titulo": "Configurando um business portfolio › Primeiros passos com business portfolios",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/637533/activity/207543"
      }
    ]
  },
  {
    "id": "kc-17",
    "curso": "Primeiros passos com business portfolios",
    "enunciado": "Do que você precisa para criar uma nova conta no Meta Business Suite?",
    "alternativas": [
      {
        "t": "Um perfil pessoal do Facebook",
        "c": true
      },
      {
        "t": "Um domínio verificado",
        "c": false
      },
      {
        "t": "Uma ad account existente",
        "c": false
      },
      {
        "t": "Uma Global Page",
        "c": false
      }
    ],
    "explicacao": "Para criar a conta você usa (ou cria) um perfil pessoal do Facebook para fazer login e, a partir daí, cria o business portfolio. Domínio verificado, ad account e Global Page não são pré-requisitos.",
    "fontes": [
      {
        "titulo": "Configurando um business portfolio › Primeiros passos com business portfolios",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/637533/activity/207543"
      }
    ]
  },
  {
    "id": "kc-18",
    "curso": "Gerenciando usuários e contas em um business portfolio",
    "enunciado": "Quais tipos de usuários você pode adicionar a um business portfolio?",
    "alternativas": [
      {
        "t": "People (pessoas)",
        "c": true
      },
      {
        "t": "Agências",
        "c": false
      },
      {
        "t": "Partners (parceiros)",
        "c": true
      },
      {
        "t": "Anunciantes",
        "c": false
      },
      {
        "t": "System users (usuários de sistema)",
        "c": true
      },
      {
        "t": "Empresas",
        "c": false
      }
    ],
    "explicacao": "Os três tipos de usuários de um business portfolio são People, Partners e System users. Agências e empresas entram como Partners; \"anunciantes\" não é um tipo de usuário.",
    "fontes": [
      {
        "titulo": "Configurando um business portfolio › Gerenciando usuários e contas em um business portfolio",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/637533/activity/207539"
      }
    ]
  },
  {
    "id": "kc-19",
    "curso": "Gerenciando usuários e contas em um business portfolio",
    "enunciado": "Que nível de permissão você atribuiria a cada usuário?\nUsuário 1: precisa ver e gerenciar informações financeiras (transações e faturas) do portfolio.\nUsuário 2: precisa gerenciar settings, pessoas, ferramentas e ativos, além de remover ativos e usuários.\nUsuário 3: precisa gerenciar tudo em duas ad accounts específicas.\nUsuário 4: precisa criar e editar mockups no Creative Hub para uma ad account.",
    "alternativas": [
      {
        "t": "1: Advanced options (Finance access); 2: Full control (portfolio); 3: Partial access (portfolio) + Full control (ad account); 4: Partial access (portfolio e ad account)",
        "c": true
      },
      {
        "t": "1: Full control (portfolio); 2: Advanced options (Finance access); 3: Full control (portfolio); 4: Partial access (portfolio e ad account)",
        "c": false
      },
      {
        "t": "1: Advanced options (Finance access); 2: Full control (portfolio); 3: Full control (portfolio e ad account); 4: Full control (ad account)",
        "c": false
      },
      {
        "t": "1: Partial access (portfolio); 2: Full control (portfolio); 3: Partial access (portfolio e ad account); 4: Advanced options (Temporary access)",
        "c": false
      }
    ],
    "explicacao": "Finance access (em Advanced options) cobre transações e faturas; Full control do portfolio é necessário para gerenciar settings, pessoas e remover ativos/usuários. Quem só trabalha em ad accounts específicas recebe Partial access no portfolio e Full control nessas contas; quem só edita criativos de uma conta precisa apenas de Partial access no portfolio e na conta.",
    "fontes": [
      {
        "titulo": "Configurando um business portfolio › Gerenciando usuários e contas em um business portfolio",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/637533/activity/207539"
      }
    ]
  },
  {
    "id": "kc-20",
    "curso": "Gerenciando segurança e brand safety do business portfolio",
    "enunciado": "Onde, dentro de um business portfolio, você realiza cada ação?\nAção 1: adicionar e verificar domínios para controlar os privilégios de edição do seu conteúdo e links.\nAção 2: exigir two-factor authentication de quem acessa o portfolio.\nAção 3: gerenciar publisher block lists que impedem anúncios em certos sites e apps.\nAção 4: adicionar outro admin com full control e verificar o status de business verification.",
    "alternativas": [
      {
        "t": "1: Brand safety and suitability; 2: Security Center; 3: Brand safety and suitability; 4: Security Center",
        "c": true
      },
      {
        "t": "1: Security Center; 2: Security Center; 3: Brand safety and suitability; 4: Brand safety and suitability",
        "c": false
      },
      {
        "t": "1: Brand safety and suitability; 2: Brand safety and suitability; 3: Security Center; 4: Security Center",
        "c": false
      },
      {
        "t": "1: Security Center; 2: Brand safety and suitability; 3: Security Center; 4: Brand safety and suitability",
        "c": false
      }
    ],
    "explicacao": "Em Brand safety and suitability ficam Domains (verificação de domínio) e Publisher block lists. No Security Center ficam a exigência de 2FA, a adição de outro admin com full control e a consulta ao status de business verification.",
    "fontes": [
      {
        "titulo": "Configurando um business portfolio › Gerenciando segurança e brand safety do business portfolio",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/637533/activity/207540"
      }
    ]
  },
  {
    "id": "kc-21",
    "curso": "Gerenciando segurança e brand safety do business portfolio",
    "enunciado": "O que a two-factor authentication exige?",
    "alternativas": [
      {
        "t": "Verificar o domínio antes de poder anunciar nas tecnologias da Meta.",
        "c": false
      },
      {
        "t": "Adicionar um segundo admin com full control do business portfolio.",
        "c": false
      },
      {
        "t": "Digitar um código de segurança ao fazer login a partir de um dispositivo não reconhecido.",
        "c": true
      },
      {
        "t": "Criar uma publisher block list para controlar onde os anúncios aparecem.",
        "c": false
      }
    ],
    "explicacao": "A 2FA exige digitar um código de segurança ou confirmar a tentativa de login sempre que o acesso vem de um navegador ou dispositivo não reconhecido. Verificação de domínio e block lists são recursos de brand safety, e adicionar outro admin é outra função do Security Center.",
    "fontes": [
      {
        "titulo": "Configurando um business portfolio › Gerenciando segurança e brand safety do business portfolio",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/637533/activity/207540"
      }
    ]
  },
  {
    "id": "kc-22",
    "curso": "Diretrizes gerais para mensagens",
    "enunciado": "O time de atendimento ao cliente vem ajudando um cliente pelo WhatsApp. O time de marketing gostaria de fazer um follow-up com o mesmo cliente. Faz menos de 24 horas desde a conversa do cliente com o atendimento. Que tipos de mensagem o time de marketing pode enviar?",
    "alternativas": [
      {
        "t": "Apenas mensagens free-form",
        "c": false
      },
      {
        "t": "Apenas mensagens de template",
        "c": false
      },
      {
        "t": "Tanto mensagens free-form quanto mensagens de template",
        "c": true
      },
      {
        "t": "Nenhuma mensagem pode ser enviada",
        "c": false
      }
    ],
    "explicacao": "Como o cliente falou com a empresa há menos de 24 horas, a janela de atendimento está aberta, e dentro dela a empresa pode enviar mensagens free-form e de template. A janela vale para a empresa, não para um time específico. Só fora da janela é que ficaria restrito a templates.",
    "fontes": [
      {
        "titulo": "Criar templates e enviar mensagens com a WhatsApp Business Platform › Diretrizes gerais para mensagens",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/328686"
      }
    ]
  },
  {
    "id": "kc-23",
    "curso": "Diretrizes gerais para mensagens",
    "enunciado": "O que é necessário para uma empresa iniciar conversas com clientes no WhatsApp?",
    "alternativas": [
      {
        "t": "As empresas devem oferecer um desconto aos clientes que fizerem opt-in.",
        "c": false
      },
      {
        "t": "Os clientes devem fazer opt-in para receber mensagens.",
        "c": true
      },
      {
        "t": "As empresas podem enviar mensagens sem consentimento do cliente se forem promocionais.",
        "c": false
      },
      {
        "t": "As empresas devem usar automação para responder a todas as solicitações dos clientes nas primeiras 24 horas.",
        "c": false
      }
    ],
    "explicacao": "Conversas iniciadas pela empresa exigem consentimento individual: o cliente precisa fazer opt-in para receber mensagens da empresa no WhatsApp. Não há exigência de desconto, mensagens promocionais não dispensam consentimento e a automação é opcional (com escalonamento para humano).",
    "fontes": [
      {
        "titulo": "Criar templates e enviar mensagens com a WhatsApp Business Platform › Diretrizes gerais para mensagens",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/328686"
      }
    ]
  },
  {
    "id": "kc-24",
    "curso": "Categorias de templates de mensagem",
    "enunciado": "Qual é a principal diferença entre templates de marketing e templates de utility na WhatsApp Business Platform?",
    "alternativas": [
      {
        "t": "Templates de marketing são mais flexíveis, enquanto templates de utility são mais estruturados.",
        "c": true
      },
      {
        "t": "Templates de marketing servem para gerar awareness, enquanto templates de utility servem para gerar vendas.",
        "c": false
      },
      {
        "t": "Templates de marketing podem ser enviados a clientes que não mandaram mensagem à empresa nas últimas 24 horas, enquanto templates de utility não podem.",
        "c": false
      },
      {
        "t": "Templates de marketing devem incluir informações específicas sobre a interação ativa ou em andamento, enquanto templates de utility não têm essa exigência.",
        "c": false
      }
    ],
    "explicacao": "Marketing é a categoria flexível (awareness, vendas, reengajamento etc.), enquanto utility é estruturada e precisa conter dados específicos de uma transação ou interação ativa. Gerar vendas é objetivo de marketing, não de utility; ambas as categorias podem ser enviadas fora da janela de 24 h; e a exigência de informação específica é de utility, não de marketing.",
    "fontes": [
      {
        "titulo": "Criar templates e enviar mensagens com a WhatsApp Business Platform › Categorias de templates de mensagem",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/328687"
      }
    ]
  },
  {
    "id": "kc-25",
    "curso": "Categorias de templates de mensagem",
    "enunciado": "Qual é o principal propósito de usar templates de mensagem no WhatsApp?",
    "alternativas": [
      {
        "t": "Enviar mensagens free-form para qualquer cliente a qualquer momento.",
        "c": false
      },
      {
        "t": "Iniciar conversas com clientes novos e com clientes que não mandaram mensagem nas últimas 24 horas.",
        "c": true
      },
      {
        "t": "Responder a mensagens de clientes dentro de uma janela de 5 minutos.",
        "c": false
      },
      {
        "t": "Substituir a necessidade de atendentes de suporte ao cliente.",
        "c": false
      }
    ],
    "explicacao": "Templates são a forma de abrir conversas fora da janela de 24 horas, ou seja, com clientes novos ou que não falaram com a empresa recentemente. Templates não são free-form, não existe janela de 5 minutos e eles não substituem atendentes.",
    "fontes": [
      {
        "titulo": "Criar templates e enviar mensagens com a WhatsApp Business Platform › Categorias de templates de mensagem",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/328687"
      }
    ]
  },
  {
    "id": "kc-26",
    "curso": "Gerenciando mensagens de template",
    "enunciado": "Qual é o número máximo de vezes que um template de mensagem aprovado pode ser editado em uma janela de 30 dias?",
    "alternativas": [
      {
        "t": "1 vez",
        "c": false
      },
      {
        "t": "5 vezes",
        "c": false
      },
      {
        "t": "10 vezes",
        "c": true
      },
      {
        "t": "Ilimitadas vezes",
        "c": false
      }
    ],
    "explicacao": "Templates aprovados podem ser editados até 10 vezes em 30 dias (ou 1 vez em 24 horas). O limite de 1 vez refere-se ao período de 24 h, e edições ilimitadas só valem para templates rejeitados ou pausados.",
    "fontes": [
      {
        "titulo": "Criar templates e enviar mensagens com a WhatsApp Business Platform › Gerenciando mensagens de template",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/636530"
      }
    ]
  },
  {
    "id": "kc-27",
    "curso": "Gerenciando mensagens de template",
    "enunciado": "Qual é o propósito do WhatsApp Manager em relação aos templates de mensagem?",
    "alternativas": [
      {
        "t": "Criar e gerenciar templates de mensagem para contas comerciais",
        "c": true
      },
      {
        "t": "Enviar e receber mensagens com clientes no WhatsApp",
        "c": false
      },
      {
        "t": "Gerenciar configurações e permissões da conta comercial",
        "c": false
      },
      {
        "t": "Analisar e acompanhar métricas de desempenho dos templates de mensagem",
        "c": false
      }
    ],
    "explicacao": "Em relação a templates, o WhatsApp Manager é onde se cria, edita e exclui templates das contas comerciais (WABAs). Ele não é a ferramenta de troca de mensagens com clientes, e as outras opções descrevem funções diferentes do foco tratado na lição.",
    "fontes": [
      {
        "titulo": "Criar templates e enviar mensagens com a WhatsApp Business Platform › Gerenciando mensagens de template",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/636530"
      }
    ]
  },
  {
    "id": "kc-28",
    "curso": "Fundamentos de templates",
    "enunciado": "Qual é o propósito do template pacing?",
    "alternativas": [
      {
        "t": "Dar tempo para os clientes fornecerem feedback inicial sobre os templates",
        "c": true
      },
      {
        "t": "Aprovar ou rejeitar templates automaticamente com base no conteúdo",
        "c": false
      },
      {
        "t": "Limitar o número de mensagens que podem ser enviadas usando um determinado template",
        "c": false
      },
      {
        "t": "Aumentar a velocidade de entrega das mensagens que usam um determinado template",
        "c": false
      }
    ],
    "explicacao": "O pacing retém temporariamente parte das mensagens de um template para coletar feedback inicial dos clientes; com sinal bom o envio é escalado, com sinal ruim as retidas são descartadas. Aprovação é feita pela revisão, o pacing não é um limite fixo de volume e não acelera a entrega.",
    "fontes": [
      {
        "titulo": "Criar templates e enviar mensagens com a WhatsApp Business Platform › Fundamentos de templates",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/636531"
      }
    ]
  },
  {
    "id": "kc-29",
    "curso": "Fundamentos de templates",
    "enunciado": "O que você deve fazer se o seu template de mensagem for rejeitado durante o processo de revisão?",
    "alternativas": [
      {
        "t": "Editar o template e reenviá-lo para revisão",
        "c": false
      },
      {
        "t": "Recorrer da decisão de rejeição pelo WhatsApp Manager ou pela WhatsApp Business Management API",
        "c": true
      },
      {
        "t": "Ignorar a rejeição e continuar usando o template",
        "c": false
      },
      {
        "t": "Excluir o template e criar um novo",
        "c": false
      }
    ],
    "explicacao": "A lição indica que, em caso de rejeição, você pode fazer um appeal pelo WhatsApp Manager ou pela Business Management API, de preferência adicionando contexto e sample. Templates rejeitados não podem ser enviados, e excluir e recriar não é o caminho recomendado (além de o nome ficar bloqueado por 30 dias).",
    "fontes": [
      {
        "titulo": "Criar templates e enviar mensagens com a WhatsApp Business Platform › Fundamentos de templates",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/636531"
      }
    ]
  },
  {
    "id": "kc-30",
    "curso": "Tipos de mensagem e componentes",
    "enunciado": "O que a propriedade type no payload da mensagem especifica ao enviar uma mensagem usando a WhatsApp Business Platform?",
    "alternativas": [
      {
        "t": "O tipo de mensagem a ser enviada",
        "c": true
      },
      {
        "t": "O número de telefone do destinatário",
        "c": false
      },
      {
        "t": "O template de mensagem a ser usado",
        "c": false
      },
      {
        "t": "O status de entrega da mensagem",
        "c": false
      }
    ],
    "explicacao": "A propriedade type indica o tipo de mensagem (text, image, template etc.), e o payload deve trazer um objeto com o mesmo nome descrevendo o conteúdo. O destinatário vai em to, o template é definido dentro do objeto template e o status de entrega chega pelos webhooks.",
    "fontes": [
      {
        "titulo": "Criar templates e enviar mensagens com a WhatsApp Business Platform › Tipos de mensagem e componentes",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/636532"
      }
    ]
  },
  {
    "id": "kc-31",
    "curso": "Objetos de mensagem",
    "enunciado": "Qual é o propósito do template object na WhatsApp Business Platform?",
    "alternativas": [
      {
        "t": "Enviar uma mensagem com formato pré-definido",
        "c": true
      },
      {
        "t": "Receber uma mensagem de um cliente",
        "c": false
      },
      {
        "t": "Enviar uma mensagem com formato personalizado",
        "c": false
      },
      {
        "t": "Receber uma mensagem do servidor",
        "c": false
      }
    ],
    "explicacao": "O template object serve para enviar templates pré-aprovados, ou seja, mensagens com formato pré-definido e placeholders para conteúdo dinâmico. Ele não é usado para receber mensagens, e um formato livre (custom) corresponde a mensagens free-form como text.",
    "fontes": [
      {
        "titulo": "Criar templates e enviar mensagens com a WhatsApp Business Platform › Objetos de mensagem",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/636533"
      }
    ]
  },
  {
    "id": "kc-32",
    "curso": "Analytics de templates",
    "enunciado": "Um empresário usa a WhatsApp Business Platform para se comunicar com os clientes. Ele quer analisar o desempenho das campanhas de mensagens para otimizar a estratégia de comunicação. Ele tem acesso ao endpoint da conta comercial e pode consultar dados de analytics.\nQual parâmetro de analytics você recomendaria para obter o número de mensagens enviadas e entregues pelos números de telefone da empresa?",
    "alternativas": [
      {
        "t": "phone_numbers",
        "c": true
      },
      {
        "t": "granularity",
        "c": false
      },
      {
        "t": "end",
        "c": false
      },
      {
        "t": "start",
        "c": false
      }
    ],
    "explicacao": "O parâmetro phone_numbers indica para quais números de telefone você quer os dados, incluindo a quantidade de mensagens enviadas e entregues por eles. start e end apenas delimitam o período, e granularity define o agrupamento temporal (por exemplo, por dia); nenhum deles seleciona os números da empresa.",
    "fontes": [
      {
        "titulo": "Usar analytics de templates na WhatsApp Business Platform › Analytics de templates",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/638688/activity/637909"
      }
    ]
  },
  {
    "id": "kc-33",
    "curso": "Analytics de templates",
    "enunciado": "Qual é a finalidade dos analytics na WhatsApp Business Platform?",
    "alternativas": [
      {
        "t": "Enviar mensagens aos clientes.",
        "c": false
      },
      {
        "t": "Receber mensagens dos clientes.",
        "c": false
      },
      {
        "t": "Entender o engajamento dos clientes e otimizar as estratégias de comunicação.",
        "c": true
      },
      {
        "t": "Criar novos templates para campanhas de mensagens.",
        "c": false
      }
    ],
    "explicacao": "Os analytics mostram como os clientes interagem com as mensagens (envios, entregas, leituras, cliques, custos), permitindo ajustar a estratégia de comunicação. Enviar e receber mensagens é papel da Cloud API de mensagens, e criar templates é feito pela gestão de templates, não pelos analytics.",
    "fontes": [
      {
        "titulo": "Usar analytics de templates na WhatsApp Business Platform › Analytics de templates",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/638688/activity/637909"
      }
    ]
  },
  {
    "id": "kc-34",
    "curso": "Introdução à manutenção da qualidade",
    "enunciado": "Qual é o principal fator para determinar a qualidade de templates na WhatsApp Business Platform?",
    "alternativas": [
      {
        "t": "Taxas de leitura (read rates)",
        "c": true
      },
      {
        "t": "Métricas tradicionais, como bloqueios e denúncias",
        "c": false
      },
      {
        "t": "Conteúdo da mensagem",
        "c": false
      },
      {
        "t": "Frequência de webhooks",
        "c": false
      }
    ],
    "explicacao": "A lição diz que a taxa de leitura é o fator-chave da qualidade de templates de marketing. Bloqueios e denúncias também contam, mas como métricas complementares. Conteúdo da mensagem e frequência de webhooks não são apontados como o fator principal.",
    "fontes": [
      {
        "titulo": "Solucionar problemas e prestar suporte técnico na WhatsApp Business Platform › Introdução à manutenção da qualidade",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621017/activity/457918"
      }
    ]
  },
  {
    "id": "kc-35",
    "curso": "Introdução à manutenção da qualidade",
    "enunciado": "Qual é a forma recomendada de monitorar a qualidade do número de telefone na WhatsApp Business Platform?",
    "alternativas": [
      {
        "t": "Webhooks",
        "c": true
      },
      {
        "t": "Business Management API",
        "c": false
      },
      {
        "t": "WhatsApp Manager",
        "c": false
      },
      {
        "t": "Enviar mensagens para si mesmo",
        "c": false
      }
    ],
    "explicacao": "O recomendado é assinar o webhook phone_number_quality_update, que avisa em tempo real e não conta para os limites de API. A Business Management API serve de complemento quando o dado não vem por webhook, e suas chamadas consomem o rate limit. O WhatsApp Manager é uma checagem manual, e enviar mensagens para si mesmo não mede qualidade.",
    "fontes": [
      {
        "titulo": "Solucionar problemas e prestar suporte técnico na WhatsApp Business Platform › Introdução à manutenção da qualidade",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621017/activity/457918"
      }
    ]
  },
  {
    "id": "kc-36",
    "curso": "Solucionar códigos de erro comuns",
    "enunciado": "Qual é o papel principal dos códigos de erro na WhatsApp Business Platform?",
    "alternativas": [
      {
        "t": "Impedir que a aplicação compile",
        "c": false
      },
      {
        "t": "Ajudar parceiros e empresas a entender e resolver problemas durante as interações com a API",
        "c": true
      },
      {
        "t": "Fornecer ao parceiro uma descrição detalhada do erro",
        "c": false
      },
      {
        "t": "Retornar uma resposta síncrona da Graph API",
        "c": false
      }
    ],
    "explicacao": "A lição define os códigos de erro como ferramenta para entender e resolver problemas nas interações com a API. Eles não impedem a compilação: indicam uso incorreto de funcionalidades. A descrição detalhada vem no campo details e a forma síncrona é só um dos canais de entrega, não o propósito.",
    "fontes": [
      {
        "titulo": "Solucionar problemas e prestar suporte técnico na WhatsApp Business Platform › Solucionar códigos de erro comuns",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621017/activity/457919"
      }
    ]
  },
  {
    "id": "kc-37",
    "curso": "Solucionar códigos de erro comuns",
    "enunciado": "Qual é a forma recomendada de tratar erros da Cloud API?",
    "alternativas": [
      {
        "t": "Construir a lógica de tratamento de erros em torno dos valores de code e das propriedades details do payload.",
        "c": true
      },
      {
        "t": "Usar os títulos dos erros na lógica de tratamento.",
        "c": false
      },
      {
        "t": "Monitorar apenas a resposta da Graph API para tratar erros.",
        "c": false
      },
      {
        "t": "Ignorar os códigos de erro e focar nas mensagens de erro.",
        "c": false
      }
    ],
    "explicacao": "code e details são as propriedades que melhor indicam a causa do erro. Títulos serão descontinuados e não devem embasar a lógica. Como erros também chegam de forma assíncrona por webhook, monitorar só a resposta da Graph API é insuficiente.",
    "fontes": [
      {
        "titulo": "Solucionar problemas e prestar suporte técnico na WhatsApp Business Platform › Solucionar códigos de erro comuns",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621017/activity/457919"
      }
    ]
  },
  {
    "id": "kc-38",
    "curso": "Solucionar outros tipos de problemas",
    "enunciado": "O que precisa ser desabilitado antes de iniciar a migração de um número de telefone na WhatsApp Business Platform?",
    "alternativas": [
      {
        "t": "Autenticação de dois fatores",
        "c": true
      },
      {
        "t": "Verificação do número de telefone",
        "c": false
      },
      {
        "t": "Access token debugger",
        "c": false
      },
      {
        "t": "Gerenciamento de templates de mensagem",
        "c": false
      }
    ],
    "explicacao": "A lição aponta a autenticação de dois fatores (two-step verification) habilitada como o principal obstáculo à migração; ela deve ser desligada antes. As demais opções não fazem parte dos requisitos de migração: o debugger é uma ferramenta de diagnóstico e a verificação do número não é desativada.",
    "fontes": [
      {
        "titulo": "Solucionar problemas e prestar suporte técnico na WhatsApp Business Platform › Solucionar outros tipos de problemas",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621017/activity/634835"
      }
    ]
  },
  {
    "id": "kc-39",
    "curso": "Solucionar outros tipos de problemas",
    "enunciado": "Qual é o limite inicial de números de telefone registrados para um business portfolio na WhatsApp Business Platform?",
    "alternativas": [
      {
        "t": "5",
        "c": false
      },
      {
        "t": "10",
        "c": false
      },
      {
        "t": "2",
        "c": true
      },
      {
        "t": "20",
        "c": false
      }
    ],
    "explicacao": "Todo business portfolio começa com 2 números registrados. O limite pode subir para até 20 após a verificação da empresa ou com 1.000+ conversas de alta qualidade em 30 dias. 5 e 10 não aparecem como limites.",
    "fontes": [
      {
        "titulo": "Solucionar problemas e prestar suporte técnico na WhatsApp Business Platform › Solucionar outros tipos de problemas",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621017/activity/634835"
      }
    ]
  },
  {
    "id": "kc-40",
    "curso": "Prestar suporte na verificação da empresa",
    "enunciado": "Qual é o objetivo da verificação da empresa (business verification)?",
    "alternativas": [
      {
        "t": "Aumentar os limites diários de mensagens dos números do WhatsApp Business.",
        "c": false
      },
      {
        "t": "Garantir que a empresa seja uma entidade legal e que a pessoa que a representa esteja autorizada a fazê-lo.",
        "c": true
      },
      {
        "t": "Oferecer suporte ao cliente para empresas que usam a WhatsApp Business Platform.",
        "c": false
      },
      {
        "t": "Promover empresas nas redes sociais.",
        "c": false
      }
    ],
    "explicacao": "O propósito da verificação é confirmar que a empresa é uma entidade legal e que quem a representa tem autorização. O aumento de limites é um benefício que pode vir depois, não o objetivo. Suporte ao cliente e promoção em redes sociais não têm relação com o processo.",
    "fontes": [
      {
        "titulo": "Solucionar problemas e prestar suporte técnico na WhatsApp Business Platform › Prestar suporte na verificação da empresa",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621017/activity/634836"
      }
    ]
  },
  {
    "id": "kc-41",
    "curso": "Prestar suporte na verificação da empresa",
    "enunciado": "Qual é um requisito para que uma empresa seja elegível à verificação da empresa?",
    "alternativas": [
      {
        "t": "Conta do WhatsApp Business",
        "c": false
      },
      {
        "t": "Página do Facebook",
        "c": false
      },
      {
        "t": "Site da empresa",
        "c": false
      },
      {
        "t": "Endereço físico",
        "c": true
      }
    ],
    "explicacao": "A verificação exige documentos com o nome legal e o endereço da empresa, que deve coincidir com o cadastro; documentos sem endereço ou com endereço parcial geram pedido de mais informações. A Meta confirmou como correto o endereço físico. Conta do WhatsApp Business e página do Facebook não são exigidas para a elegibilidade.",
    "fontes": [
      {
        "titulo": "Solucionar problemas e prestar suporte técnico na WhatsApp Business Platform › Prestar suporte na verificação da empresa",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621017/activity/634836"
      }
    ]
  },
  {
    "id": "kc-42",
    "curso": "Seguir os processos de escalonamento de suporte",
    "enunciado": "Imagine que você é um desenvolvedor enterprise com problemas na WhatsApp Business Platform. Você precisa de suporte, mas não sabe a quem recorrer. O que deve fazer para obter suporte para o seu problema?",
    "alternativas": [
      {
        "t": "Entrar em contato com o developer support.",
        "c": false
      },
      {
        "t": "Abrir um ticket no Direct Support.",
        "c": true
      },
      {
        "t": "Fazer uma pergunta na developer community.",
        "c": false
      },
      {
        "t": "Registrar um bug report.",
        "c": false
      }
    ],
    "explicacao": "Desenvolvedores enterprise (solution partners ou managed partners com acordo de suporte) devem abrir ticket no Direct Support, que tem resolução mais rápida. Developer support, developer community e bug report são os caminhos indicados para desenvolvedores não enterprise.",
    "fontes": [
      {
        "titulo": "Solucionar problemas e prestar suporte técnico na WhatsApp Business Platform › Seguir os processos de escalonamento de suporte",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621017/activity/634837"
      }
    ]
  },
  {
    "id": "kc-43",
    "curso": "Seguir os processos de escalonamento de suporte",
    "enunciado": "Qual é o nível de severidade adequado para um ticket sobre um problema que afeta gravemente o ambiente de produção, faz a API parar de funcionar completamente e interrompe as operações da empresa sem alternativas de contorno?",
    "alternativas": [
      {
        "t": "Standard",
        "c": false
      },
      {
        "t": "Urgent",
        "c": false
      },
      {
        "t": "Critical",
        "c": true
      },
      {
        "t": "Mitigated",
        "c": false
      }
    ],
    "explicacao": "Critical é o nível para quando a API não funciona de jeito nenhum e a operação para, sem alternativa. Urgent é quando a maioria dos envios falha e Standard cobre falhas pequenas ou intermitentes. Mitigated se aplica a um ticket já resolvido com pendências.",
    "fontes": [
      {
        "titulo": "Solucionar problemas e prestar suporte técnico na WhatsApp Business Platform › Seguir os processos de escalonamento de suporte",
        "url": "https://www.facebookblueprint.com/student/collection/612503/path/621017/activity/634837"
      }
    ]
  }
];
