/* =========================================================
   Prova prática oficial (Practice Test da Meta Blueprint)
   30 questões traduzidas, com explicação e links dos cursos
   ========================================================= */

const QUESTOES_PROVA = [
  {
    id: 1,
    enunciado: "O número de WhatsApp Business de um cliente está configurado para alto volume de envio (1.000 mensagens por segundo). O cliente planeja uma campanha de marketing nas festas de fim de ano e espera uma taxa de resposta de 40% do público-alvo.\n\nQuantos webhooks o servidor do parceiro deve estar preparado para processar nesse cenário?",
    alternativas: [
      { t: "3300", c: false },
      { t: "3400", c: true },
      { t: "400", c: false },
      { t: "4400", c: false }
    ],
    explicacao: "No curso de webhooks, a Meta explica que cada mensagem enviada gera pelo menos 2 notificações (sent e delivered, ou failed) e uma terceira (read) quando é lida. Por isso, o servidor deve ser dimensionado para até 3x o volume de saída, além de 1x o volume de mensagens recebidas. Aqui: 1.000 × 3 = 3.000 webhooks de status + 400 respostas (40%) = 3.400 webhooks.",
    fontes: [
      { titulo: "Configurar contas e ativos da WhatsApp Business Platform › Configurar webhooks", url: "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/344614" }
    ]
  },
  {
    id: 2,
    enunciado: "Uma clínica médica quer divulgar no Facebook sua nova forma de agendar consultas pelo WhatsApp. O agendamento acontece dentro da conversa e coleta nome do paciente, telefone e horário da consulta, de forma amigável, por meio de formulários que aparecem na conversa.\n\nCom quais duas funcionalidades o parceiro pode integrar para atingir esse objetivo? (Escolha duas.)",
    alternativas: [
      { t: "Anúncios Click to WhatsApp", c: true },
      { t: "WhatsApp Flows", c: true },
      { t: "API de Conversões", c: false },
      { t: "API de Análise de Conversas (Conversation Analytics API)", c: false }
    ],
    explicacao: "Os anúncios Click to WhatsApp geram a divulgação no Facebook e levam o usuário direto para a conversa. O WhatsApp Flows cria os formulários estruturados dentro do chat para coletar nome, telefone e horário. A API de Conversões e a de análise servem para medir resultados, não para coletar dados nem divulgar.",
    fontes: [
      { titulo: "Usar anúncios de clique para o WhatsApp com a Meta Conversions API › Criar anúncios de clique para o WhatsApp", url: "https://www.facebookblueprint.com/student/collection/612503/path/637550/activity/637539" },
      { titulo: "Criar templates e enviar mensagens com a WhatsApp Business Platform › Categorias de templates de mensagem", url: "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/328687" }
    ]
  },
  {
    id: 3,
    enunciado: "Um banco quer usar o WhatsApp para abrir contas de forma automatizada e procura um parceiro pela capacidade de bot. Os dados necessários para abrir a conta são:\n• Nome\n• Endereço\n• Número do passaporte\n• Faixa salarial\n\nPorém, o time de segurança do banco não se sente confortável em compartilhar esses dados sensíveis dos clientes com a empresa parceira.\n\nQual é o melhor caminho para o parceiro?",
    alternativas: [
      { t: "Coletar essas informações com WhatsApp Flows e configurar o canal de dados (data channel) para o endpoint do banco", c: true },
      { t: "Enviar aos usuários um link de cadastro no site do banco, já que ele é hospedado pelo banco", c: false },
      { t: "Obter certificação ISO / SOC para a plataforma do parceiro para aumentar a confiança", c: false },
      { t: "Informar que isso não é possível, pois os webhooks da Cloud API são configurados no endpoint do parceiro", c: false }
    ],
    explicacao: "No WhatsApp Flows com endpoint (data channel), os dados preenchidos no formulário são enviados criptografados direto para o endpoint configurado, que pode ser o servidor do banco. Assim o parceiro opera o bot sem ter acesso aos dados sensíveis. Mandar um link tira o usuário do WhatsApp, e certificação não resolve a exigência de não compartilhar os dados.",
    fontes: [
      { titulo: "Criar templates e enviar mensagens com a WhatsApp Business Platform › Categorias de templates de mensagem", url: "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/328687" },
      { titulo: "Visão técnica da WhatsApp Business Platform › Componentes técnicos da WhatsApp Business Platform", url: "https://www.facebookblueprint.com/student/collection/612503/path/621018/activity/249501" }
    ]
  },
  {
    id: 4,
    enunciado: "Na integração com a WhatsApp Business Platform, quais duas das opções a seguir são boas práticas ao criar o servidor de webhooks? (Escolha duas.)",
    alternativas: [
      { t: "Sempre responder 200 OK e fazer qualquer processamento de forma assíncrona", c: true },
      { t: "Garantir que o processamento necessário seja concluído antes de responder 200 OK", c: false },
      { t: "Registrar (logar) todos os webhooks recebidos para fins de auditoria", c: true },
      { t: "Começar o desenvolvimento só depois que a revisão do app (app review) for aprovada", c: false }
    ],
    explicacao: "O curso recomenda responder 200 OK o mais rápido possível e processar o payload em segundo plano: um endpoint lento gera fila e reenvios (retries), aumentando ainda mais o volume. Guardar log dos webhooks ajuda na auditoria e no troubleshooting. Não é preciso esperar o App Review para desenvolver: apps do tipo Business recebem standard access automaticamente, o que já permite desenvolver e testar.",
    fontes: [
      { titulo: "Configurar contas e ativos da WhatsApp Business Platform › Configurar webhooks", url: "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/344614" },
      { titulo: "Configurar contas e ativos da WhatsApp Business Platform › Passar no App Review", url: "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/634826" }
    ]
  },
  {
    id: 5,
    enunciado: "Uma cafeteria vende apenas latte gelado e quente, com 3 opções de leite: integral, desnatado e de aveia. Ela quer usar o Catálogo do WhatsApp para mostrar todas as combinações e variações possíveis do latte.\n\nComo o parceiro pode ajudar a configurar isso?",
    alternativas: [
      { t: "1 item (latte) com 2 conjuntos de variantes", c: false },
      { t: "3 itens (latte com leite integral, desnatado e de aveia), cada um com 1 variante (quente ou gelado)", c: false },
      { t: "2 itens (latte quente e gelado), cada um com 1 variante de leite", c: false },
      { t: "6 itens, um para cada variação", c: true }
    ],
    explicacao: "No Catálogo do WhatsApp, cada combinação precisa existir como um item próprio. O curso mostra que os produtos são cadastrados um a um no Meta Commerce Manager (Data Sources > Catalogs) e cada um precisa estar Published para aparecer. Como são 2 temperaturas × 3 leites, o resultado é 6 itens. A pegadinha é \"1 item com 2 conjuntos de variantes\": parece mais elegante, mas está errada.",
    fontes: [
      { titulo: "Configurar contas e ativos da WhatsApp Business Platform › Configurar um app", url: "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/344612" },
      { titulo: "Visão técnica da WhatsApp Business Platform › Componentes técnicos da WhatsApp Business Platform", url: "https://www.facebookblueprint.com/student/collection/612503/path/621018/activity/249501" }
    ]
  },
  {
    id: 6,
    enunciado: "Uma empresa do setor bancário quer enviar notificações transacionais aos clientes pelo WhatsApp. Ela se preocupa com a residência dos dados (data residency) e quer que eles fiquem armazenados no seu país de origem.\n\nO que o parceiro pode implementar para atender a esse requisito?",
    alternativas: [
      { t: "Armazenamento Local da Cloud API (Cloud API Local Storage)", c: true },
      { t: "Canal de dados criptografado do WhatsApp Flows", c: false },
      { t: "WhatsApp Data Controller", c: false },
      { t: "Upload de mídia para o servidor da Meta", c: false }
    ],
    explicacao: "O curso de componentes técnicos explica que o local storage da Cloud API permite escolher o país onde os dados das mensagens ficam armazenados em repouso (data at rest), o que é útil para setores regulados como finanças, governo e saúde. As outras opções não controlam onde os dados ficam guardados.",
    fontes: [
      { titulo: "Visão técnica da WhatsApp Business Platform › Componentes técnicos da WhatsApp Business Platform", url: "https://www.facebookblueprint.com/student/collection/612503/path/621018/activity/249501" }
    ]
  },
  {
    id: 7,
    enunciado: "Quando uma empresa migra um número de telefone de uma conta do WhatsApp Business (WABA) para outra, como ela recebe o código OTP?",
    alternativas: [
      { t: "Por e-mail", c: false },
      { t: "Por SMS ou chamada de voz para o próprio número", c: true },
      { t: "Por um aplicativo autenticador", c: false },
      { t: "Pelo código de verificação em duas etapas na página de configurações do número no WhatsApp Manager", c: false }
    ],
    explicacao: "Na migração, a posse do número é confirmada com um código enviado por SMS ou por ligação de voz para o próprio número. Por isso o número precisa estar acessível, e a verificação em duas etapas precisa estar desativada antes.",
    fontes: [
      { titulo: "Solucionar problemas e prestar suporte técnico na WhatsApp Business Platform › Solucionar outros tipos de problemas", url: "https://www.facebookblueprint.com/student/collection/612503/path/621017/activity/634835" },
      { titulo: "Concluir o onboarding na WhatsApp Business Platform › Fazer o onboarding de clientes na WhatsApp Business Platform", url: "https://www.facebookblueprint.com/student/collection/612503/path/637523/activity/637512" }
    ]
  },
  {
    id: 8,
    enunciado: "Um parceiro está criando um app no painel de desenvolvedores da Meta. Ele quer lançar uma funcionalidade para empresas de e-commerce enviarem atualizações de rastreio aos clientes pelo WhatsApp.\n\nQual tipo de app ele deve selecionar no painel da Meta?",
    alternativas: [
      { t: "Mobile, já que as mensagens são enviadas para dispositivos iOS e Android", c: false },
      { t: "Consumer (Consumidor), já que as mensagens serão enviadas aos usuários finais", c: false },
      { t: "Business (Empresa), pois ele cria e gerencia ativos empresariais", c: true },
      { t: "Gaming (Jogos), já que apps mobile entram na categoria de jogos", c: false }
    ],
    explicacao: "Integrações com a WhatsApp Business Platform exigem um app do tipo Business, que dá acesso aos produtos e permissões para gerenciar ativos empresariais (WABA, números, templates).",
    fontes: [
      { titulo: "Configurar contas e ativos da WhatsApp Business Platform › Configurar um app", url: "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/344612" }
    ]
  },
  {
    id: 9,
    enunciado: "Depois de concluir o Embedded Signup (Cadastro Incorporado), quais duas ações uma empresa NÃO verificada pode realizar? (Escolha duas.)",
    alternativas: [
      { t: "Responder a um número ilimitado de conversas iniciadas pelo cliente (janelas de 24 horas)", c: true },
      { t: "Iniciar conversas com 250 clientes únicos em um período móvel de 24 horas", c: true },
      { t: "Registrar até 20 números de telefone na conta do WhatsApp Business", c: false },
      { t: "Enviar apenas templates pré-aprovados para 1.000 clientes únicos em um período móvel de 24 horas", c: false }
    ],
    explicacao: "Sem verificação, o limite é de 250 conversas iniciadas pela empresa em 24 horas móveis. Responder quem iniciou a conversa não tem limite. Já o limite de 1.000 e o registro de até 20 números exigem verificação (sem ela, são 2 números).",
    fontes: [
      { titulo: "Criar templates e enviar mensagens com a WhatsApp Business Platform › Diretrizes gerais para mensagens", url: "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/328686" },
      { titulo: "Solucionar problemas e prestar suporte técnico na WhatsApp Business Platform › Solucionar outros tipos de problemas", url: "https://www.facebookblueprint.com/student/collection/612503/path/621017/activity/634835" }
    ]
  },
  {
    id: 10,
    enunciado: "Em uma solicitação de revisão do app (app review), o desenvolvedor incluiu um screencast com uma imagem que mostra o resultado final do uso das permissões no app. A Meta negou o pedido.\n\nO que o desenvolvedor deve incluir no screencast para ser aprovado?",
    alternativas: [
      { t: "Um vídeo que mostre de forma interativa as permissões sendo usadas no app", c: true },
      { t: "Um documento que descreva o uso das permissões no app", c: false },
      { t: "Um conjunto de slides com imagens das etapas de uso das permissões", c: false },
      { t: "Um vídeo com uma visão geral da funcionalidade do app", c: false }
    ],
    explicacao: "O revisor precisa ver o fluxo completo e real de cada permissão em uso: o vídeo deve mostrar, passo a passo, onde e como cada permissão solicitada é usada. Imagens estáticas, documentos ou um vídeo genérico não comprovam o uso.",
    fontes: [
      { titulo: "Configurar contas e ativos da WhatsApp Business Platform › Passar no App Review", url: "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/634826" }
    ]
  },
  {
    id: 11,
    enunciado: "Um parceiro enviou o vídeo de demonstração do app para revisão e foi rejeitado com a seguinte justificativa:\n\n\"Durante a revisão, não conseguimos aprovar as permissões ou recursos enviados. Se o seu screencast estiver impreciso, mas você conseguir testar com sucesso cada permissão e recurso solicitados com o Usuário de Teste, grave um novo screencast preciso, envie-o e verifique se as instruções de teste nos Detalhes de Verificação do App estão corretas.\"\n\nO que o parceiro deve fazer na próxima submissão?",
    alternativas: [
      { t: "Enviar a revisão de novo em outro fuso horário, para cair com outro revisor", c: false },
      { t: "Gravar novamente o screencast mostrando o uso correto das permissões solicitadas", c: true },
      { t: "Criar um novo app vinculado à mesma conta empresarial e pedir mais permissões", c: false },
      { t: "Narrar o screencast explicando ao revisor o que acontece nos bastidores", c: false }
    ],
    explicacao: "A própria mensagem de rejeição diz o caminho: gravar um novo screencast fiel, mostrando o uso correto de cada permissão, e conferir as instruções de teste. Trocar de horário, criar outro app ou só narrar não corrige o problema.",
    fontes: [
      { titulo: "Configurar contas e ativos da WhatsApp Business Platform › Passar no App Review", url: "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/634826" }
    ]
  },
  {
    id: 12,
    enunciado: "Como o WhatsApp verifica um número de telefone durante o Embedded Signup?",
    alternativas: [
      { t: "Lendo um QR code", c: false },
      { t: "Enviando um SMS ou uma ligação de voz com um código de verificação", c: true },
      { t: "Enviando um link de verificação por e-mail", c: false },
      { t: "Conectando-se a um serviço de verificação de terceiros", c: false }
    ],
    explicacao: "Um dos requisitos do número comercial, segundo o curso, é conseguir receber uma ligação de voz ou um SMS para a verificação (short codes não são aceitos). No Embedded Signup, o cliente digita o código recebido por SMS ou ligação para confirmar o número.",
    fontes: [
      { titulo: "Visão técnica da WhatsApp Business Platform › Componentes técnicos da WhatsApp Business Platform", url: "https://www.facebookblueprint.com/student/collection/612503/path/621018/activity/249501" },
      { titulo: "Concluir o onboarding na WhatsApp Business Platform › Fazer o onboarding de clientes na WhatsApp Business Platform", url: "https://www.facebookblueprint.com/student/collection/612503/path/637523/activity/637512" }
    ]
  },
  {
    id: 13,
    enunciado: "Um cliente concluiu o fluxo de Embedded Signup e o provedor de soluções recebeu o payload de resposta.\n\nQual destes parâmetros está presente no corpo da resposta?",
    alternativas: [
      { t: "URL", c: false },
      { t: "Code (código)", c: true },
      { t: "Business ID", c: false },
      { t: "Access Token", c: false }
    ],
    explicacao: "Ao concluir o Embedded Signup, o processo devolve um authorization code de curta duração, ligado ao business-scoped user ID do cliente. O parceiro troca esse code por um business integration system user access token numa chamada server-to-server (GET /oauth/access_token). O token não vem pronto na resposta, e os IDs da WABA e do número chegam por outro canal.",
    fontes: [
      { titulo: "Concluir o onboarding na WhatsApp Business Platform › Fazer o onboarding de clientes na WhatsApp Business Platform", url: "https://www.facebookblueprint.com/student/collection/612503/path/637523/activity/637512" },
      { titulo: "Configurar contas e ativos da WhatsApp Business Platform › Gerar access tokens", url: "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/634825" }
    ]
  },
  {
    id: 14,
    enunciado: "Quais são as duas ações obrigatórias para uma empresa criar anúncios Click to WhatsApp? (Escolha duas.)",
    alternativas: [
      { t: "Ter uma Página empresarial vinculada a um número do WhatsApp Business", c: true },
      { t: "Integrar com a API de Conversões para enviar sinais", c: false },
      { t: "Preparar os criativos que serão usados no anúncio", c: true },
      { t: "Obter consentimento do usuário para ser alvo do anúncio Click to WhatsApp", c: false }
    ],
    explicacao: "Para criar anúncios Click to WhatsApp, o curso lista como pré-requisitos a Página do Facebook vinculada ao número do WhatsApp (nas configurações da Página ou via Graph API) e os criativos enviados ao Ads Manager. A Conversions API é uma boa prática para otimizar, não um requisito, e não existe consentimento prévio para ser segmentado por um anúncio.",
    fontes: [
      { titulo: "Usar anúncios de clique para o WhatsApp com a Meta Conversions API › Criar anúncios de clique para o WhatsApp", url: "https://www.facebookblueprint.com/student/collection/612503/path/637550/activity/637539" }
    ]
  },
  {
    id: 15,
    enunciado: "Um usuário clicou em um anúncio Click to WhatsApp no Instagram e foi direcionado ao número da WhatsApp Business Platform do cliente. Quando o usuário inicia a conversa, o cliente percebe que o ctwa_clid não veio no primeiro webhook e, por isso, não consegue direcionar o usuário à experiência correta.\n\nQuais dois motivos explicam melhor esse cenário? (Escolha duas.)",
    alternativas: [
      { t: "O tráfego veio do Instagram na web", c: true },
      { t: "O usuário está conversando pelo WhatsApp Web", c: false },
      { t: "A mensagem foi enviada depois que o conteúdo do anúncio foi removido", c: true },
      { t: "O anúncio estava mal configurado", c: false }
    ],
    explicacao: "O ctwa_clid vem no objeto referral do webhook messages. O curso explica que ele não é enviado quando o clique veio de um post orgânico, quando veio do navegador desktop (o contexto do anúncio só é suportado nos apps do Facebook e do Instagram em Android e iOS) ou quando a pessoa removeu o contexto do anúncio antes de enviar a mensagem. Por isso as corretas são o Instagram na web e o anúncio removido.",
    fontes: [
      { titulo: "Configurar contas e ativos da WhatsApp Business Platform › Configurar webhooks", url: "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/344614" },
      { titulo: "Usar anúncios de clique para o WhatsApp com a Meta Conversions API › Criar anúncios de clique para o WhatsApp", url: "https://www.facebookblueprint.com/student/collection/612503/path/637550/activity/637539" }
    ]
  },
  {
    id: 16,
    enunciado: "Qual destes payloads está no formato válido para receber mensagens no servidor de webhooks quando uma mensagem é enviada a um número da Cloud API?",
    alternativas: [
      { t: "JSON – exemplo: <code>{\"object\": \"whatsapp_business_account\", \"entry\": [{\"id\": \"&lt;WABA_ID&gt;\", \"changes\": [{\"value\": {\"messaging_product\": \"whatsapp\", \"metadata\": {..}, \"contacts\": [..], \"messages\": [..]}, \"field\": \"messages\"}]}]}</code>", c: true },
      { t: "XML – exemplo: <code>&lt;whatsapp_business_account&gt;&lt;entry&gt;&lt;id&gt;WABA_ID&lt;/id&gt;&lt;changes&gt;…&lt;field&gt;messages&lt;/field&gt;&lt;/changes&gt;&lt;/entry&gt;&lt;/whatsapp_business_account&gt;</code>", c: false },
      { t: "CSV – exemplo: <code>\"object\",\"entry\",\"id\",\"changes\",\"value\",\"messaging_product\",…</code>", c: false },
      { t: "Texto puro – exemplo: <code>\"sample message\" recebida de &lt;Número&gt;</code>", c: false }
    ],
    explicacao: "Os webhooks da WhatsApp Business Platform são sempre JSON, com object = whatsapp_business_account e as mudanças em entry[].changes[].value. Mensagens recebidas chegam no field \"messages\".",
    fontes: [
      { titulo: "Configurar contas e ativos da WhatsApp Business Platform › Configurar webhooks", url: "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/344614" }
    ]
  },
  {
    id: 17,
    enunciado: "Quais são as duas medidas de segurança recomendadas para proteger um servidor de webhooks? (Escolha duas.)",
    alternativas: [
      { t: "Validar a assinatura da requisição do webhook usando o App Secret", c: true },
      { t: "Obter periodicamente os endereços IP dos servidores da Meta e atualizar o firewall", c: true },
      { t: "Validar o ID da conta do WhatsApp Business dentro do payload", c: false },
      { t: "Verificar o timestamp e garantir que o envio ocorreu em até 10 segundos", c: false }
    ],
    explicacao: "O curso recomenda validar o payload: cada webhook traz o cabeçalho X-Hub-Signature-256, um hash SHA256 do corpo assinado com o App Secret. Basta calcular o mesmo hash e comparar com o valor depois de sha256=. A segunda camada é aceitar só os IPs dos servidores da Meta, atualizando a lista periodicamente no firewall. O WABA ID no payload pode ser forjado, e a Meta não define nenhuma regra de 10 segundos.",
    fontes: [
      { titulo: "Configurar contas e ativos da WhatsApp Business Platform › Configurar webhooks", url: "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/344614" }
    ]
  },
  {
    id: 18,
    enunciado: "Um parceiro configurou um servidor de webhooks e o inscreveu na WABA do cliente, assinando os campos messages e message_template_status_update.\n\nQuais dois tipos de notificação o servidor vai receber? (Escolha duas.)",
    alternativas: [
      { t: "Quando a empresa recebe mensagens", c: true },
      { t: "Quando um usuário apaga uma mensagem", c: false },
      { t: "Quando o status de um template muda para aprovado", c: true },
      { t: "Quando a classificação de qualidade de um template muda", c: false }
    ],
    explicacao: "O campo messages entrega as mensagens recebidas (e os status das enviadas). O message_template_status_update avisa mudanças de status do template: aprovado, rejeitado, pausado etc. A mudança de qualidade chega por outro campo, o message_template_quality_update.",
    fontes: [
      { titulo: "Configurar contas e ativos da WhatsApp Business Platform › Configurar webhooks", url: "https://www.facebookblueprint.com/student/collection/612503/path/621019/activity/344614" }
    ]
  },
  {
    id: 19,
    enunciado: "Um parceiro criou um template pela WhatsApp Business Management API com o corpo abaixo, e a Meta aprovou o template.\n\nQuais partes desse template podem ser editadas depois da aprovação? (Escolha duas.)",
    codigo: `{
  "name": "seasonal_promotion",
  "language": "en_US",
  "category": "MARKETING",
  "components": [
    { "type": "HEADER", "format": "TEXT", "text": "Our Summer Sale is on!" },
    { "type": "BODY", "text": "Shop now and use code 25OFF to get 25% off of all merchandise." },
    { "type": "FOOTER", "text": "Use the buttons below to manage your marketing subscriptions" },
    { "type": "BUTTONS", "buttons": [
        { "type": "QUICK_REPLY", "text": "Unsubscribe from All" }
    ] }
  ]
}`,
    alternativas: [
      { t: "Categoria", c: false },
      { t: "Header (cabeçalho)", c: true },
      { t: "Nome", c: false },
      { t: "Buttons (botões)", c: true }
    ],
    explicacao: "Só é possível editar a categoria ou os componentes de um template, e a categoria de um template aprovado não pode mudar. O nome nunca é editável. Header e buttons são componentes, então podem ser editados (até 10 vezes em 30 dias ou 1 vez a cada 24 horas).",
    fontes: [
      { titulo: "Criar templates e enviar mensagens com a WhatsApp Business Platform › Gerenciando mensagens de template", url: "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/636530" }
    ]
  },
  {
    id: 20,
    enunciado: "Uma requisição para /{WABA_ID}/message_templates cria um template com o corpo abaixo. A Meta rejeitou o template porque o conteúdo não atende aos requisitos de um template UTILITY.\n\nComo o parceiro pode conseguir a aprovação de um template UTILITY depois disso?",
    codigo: `{
  "name": "<NAME>",
  "category": "UTILITY",
  "allow_category_change": false,
  "language": "<LANGUAGE>",
  "components": [ ... ]
}`,
    alternativas: [
      { t: "Fazer outra requisição com o parâmetro allow_category_change igual a true", c: false },
      { t: "Atualizar manualmente a categoria para UTILITY no WhatsApp Manager", c: false },
      { t: "Atualizar o template com o conteúdo adequado e a categoria desejada", c: true },
      { t: "Abrir um ticket de suporte para escalar a rejeição", c: false }
    ],
    explicacao: "Templates rejeitados podem ser editados sem limite. É preciso ajustar o conteúdo para que ele realmente seja utility (dados de uma transação específica, sem promoção). Com allow_category_change = true, a Meta apenas reclassificaria o template como MARKETING; ela não aprova como utility um conteúdo que não é utility.",
    fontes: [
      { titulo: "Criar templates e enviar mensagens com a WhatsApp Business Platform › Gerenciando mensagens de template", url: "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/636530" },
      { titulo: "Criar templates e enviar mensagens com a WhatsApp Business Platform › Categorias de templates de mensagem", url: "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/328687" }
    ]
  },
  {
    id: 21,
    enunciado: "Um cliente criou um template e o apagou sem querer. Ao tentar recriar o mesmo template, recebe erros.\n\nQual é o motivo dos erros?",
    alternativas: [
      { t: "Depois de apagar um template, não é possível criar nenhum template novo no mesmo dia", c: false },
      { t: "O mesmo nome de template não pode ser reutilizado por 30 dias", c: true },
      { t: "É preciso esperar 7 dias para recriar um template", c: false },
      { t: "O header do template precisa ser atualizado", c: false }
    ],
    explicacao: "Quando um template é excluído, o nome dele fica bloqueado por 30 dias. Dá para criar outro template na hora, desde que use um nome diferente.",
    fontes: [
      { titulo: "Criar templates e enviar mensagens com a WhatsApp Business Platform › Gerenciando mensagens de template", url: "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/636530" }
    ]
  },
  {
    id: 22,
    enunciado: "Um template foi criado via chamada de API. Abaixo está parte do código.\n\nO que vai acontecer com o template quando a chamada for executada?",
    codigo: `{
  "name": "sample_testing_template",
  "category": "UTILITY",
  "allow_category_change": true,
  "language": "en_US",
  "components": [
    {
      "type": "BODY",
      "text": "Thank you for your order, {{1}}! Your confirmation number is {{2}}. As a valued member, please find this {{3}} off voucher for your next purchase! Do click the button below to claim it",
      ...
    },
    {
      "type": "BUTTONS",
      "buttons": [
        { "type": "URL", "text": "Contact Support",
          "url": "https://www.luckyshrub.com/promotions/{{1}}", ... }
      ]
    }
  ]
}`,
    alternativas: [
      { t: "Aprovado como template de MARKETING", c: true },
      { t: "Aprovado como template de UTILITY", c: false },
      { t: "Rejeitado por divergência de categoria", c: false },
      { t: "Rejeitado por falta de exemplo (sample)", c: false }
    ],
    explicacao: "O texto mistura confirmação de pedido (utility) com um voucher promocional (marketing). Conteúdo misto é classificado como MARKETING. Como allow_category_change está true, a Meta reclassifica o template em vez de rejeitar, e ele é aprovado como MARKETING. O curso de analytics mostra que o WhatsApp Manager exibe um aviso com o motivo quando um template enviado como utility é reclassificado como marketing.",
    fontes: [
      { titulo: "Criar templates e enviar mensagens com a WhatsApp Business Platform › Categorias de templates de mensagem", url: "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/328687" },
      { titulo: "Usar analytics de templates na WhatsApp Business Platform › Analytics de templates", url: "https://www.facebookblueprint.com/student/collection/612503/path/638688/activity/637909" }
    ]
  },
  {
    id: 23,
    enunciado: "Um cliente enviou um template de autenticação com Time-to-Live (TTL) de 2 minutos para um usuário no instante T. Nesse momento, o usuário estava sem acesso à internet. Em T + 3 minutos, o usuário voltou a ficar online.\n\nQuais duas opções descrevem o resultado? (Escolha duas.)",
    alternativas: [
      { t: "Será recebido um webhook com o código de erro 131026", c: false },
      { t: "A mensagem é descartada sem webhook de falha", c: true },
      { t: "É recebido um webhook de mensagem enviada (sent)", c: true },
      { t: "É recebido um webhook de mensagem entregue (delivered)", c: false }
    ],
    explicacao: "Pelo curso de categorias, utility e authentication têm time-to-live (TTL) configurável. A mensagem foi aceita e enviada no instante T, então chega o webhook de status sent. Como o TTL de 2 minutos venceu antes de o usuário voltar (3 minutos), a mensagem é descartada sem webhook de falha. O delivered nunca acontece, e o erro 131026 não se aplica aqui.",
    fontes: [
      { titulo: "Criar templates e enviar mensagens com a WhatsApp Business Platform › Categorias de templates de mensagem", url: "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/328687" }
    ]
  },
  {
    id: 24,
    enunciado: "Uma empresa de e-commerce quer usar o WhatsApp para uma promoção relâmpago de 1 hora, com um cupom para os usuários resgatarem no aplicativo.\n\nQuais são duas boas práticas que o parceiro deve seguir? (Escolha duas.)",
    alternativas: [
      { t: "Definir o Time-to-Live (TTL) do template como 1 hora", c: false },
      { t: "Usar um template de Oferta por Tempo Limitado (Limited Time Offer)", c: true },
      { t: "Obter opt-in prévio para mensagens de marketing no WhatsApp", c: true },
      { t: "Usar um template de utility para reduzir o custo", c: false }
    ],
    explicacao: "O template de Oferta por Tempo Limitado é de marketing e mostra a validade, um contador regressivo e o código do cupom. O opt-in é obrigatório para mensagens iniciadas pela empresa, e um opt-in específico para marketing é a boa prática recomendada. O TTL configurável existe só para utility e authentication, e usar utility para promoção viola a política de categorias.",
    fontes: [
      { titulo: "Criar templates e enviar mensagens com a WhatsApp Business Platform › Tipos de mensagem e componentes", url: "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/636532" },
      { titulo: "Criar templates e enviar mensagens com a WhatsApp Business Platform › Diretrizes gerais para mensagens", url: "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/328686" }
    ]
  },
  {
    id: 25,
    enunciado: "Uma empresa envia atualizações de pedido a um cliente e dispara 5 mensagens em sequência pela API, em pouquíssimo tempo.\n\nComo a empresa pode garantir que as mensagens sejam entregues na ordem certa?",
    alternativas: [
      { t: "A API garante a entrega na mesma ordem das chamadas", c: false },
      { t: "Usar o parâmetro de sequência na requisição da Send Message API", c: false },
      { t: "Confirmar o recebimento do status delivered no webhook e só então enviar a próxima mensagem", c: true },
      { t: "Usar uma fila no servidor e enviar as requisições com um pequeno atraso", c: false }
    ],
    explicacao: "A Cloud API não garante a ordem de entrega, e não existe parâmetro de sequência. O único jeito confiável é esperar o webhook delivered da mensagem anterior antes de enviar a próxima. Um atraso fixo reduz o problema, mas não garante a ordem.",
    fontes: [
      { titulo: "Criar templates e enviar mensagens com a WhatsApp Business Platform › Tipos de mensagem e componentes", url: "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/636532" }
    ]
  },
  {
    id: 26,
    enunciado: "Uma empresa assinou o webhook message_template_status_update para acompanhar o status dos seus templates e recebe uma notificação de mudança de status de um deles.\n\nO que a empresa deve fazer se o status do template mudar para Flagged (sinalizado)?",
    alternativas: [
      { t: "Ignorar a notificação e continuar usando o template normalmente", c: false },
      { t: "Analisar o motivo informado e ajustar o template", c: true },
      { t: "Escalar para o suporte da Meta para mudar o status do template", c: false },
      { t: "Parar de usar o template e aguardar novas instruções do WhatsApp", c: false }
    ],
    explicacao: "Flagged é um alerta de queda de qualidade por feedback negativo ou leitura baixa. A empresa deve analisar o motivo e ajustar o conteúdo, o público ou a frequência antes que o template seja pausado (e, depois de 3 pausas, desabilitado). Observação: o curso de qualidade informa que o status Flagged para números de telefone foi descontinuado, mas a prova ainda cobra a resposta acima.",
    fontes: [
      { titulo: "Criar templates e enviar mensagens com a WhatsApp Business Platform › Fundamentos de templates", url: "https://www.facebookblueprint.com/student/collection/612503/path/621015/activity/636531" },
      { titulo: "Solucionar problemas e prestar suporte técnico na WhatsApp Business Platform › Introdução à manutenção da qualidade", url: "https://www.facebookblueprint.com/student/collection/612503/path/621017/activity/457918" }
    ]
  },
  {
    id: 27,
    enunciado: "Um cliente quer fazer testes A/B nos fluxos de mensagens para entender como oferecer uma experiência melhor aos clientes.\n\nQual destes é um requisito de implementação para que o teste dê certo?",
    alternativas: [
      { t: "Linha de crédito pré-aprovada maior, em várias moedas", c: false },
      { t: "Página do Instagram vinculada e com presença estabelecida", c: false },
      { t: "Pelo menos 5 números de telefone aprovados", c: false },
      { t: "Métricas de taxa de leitura e tempo de resposta", c: true }
    ],
    explicacao: "Para comparar duas versões é preciso medir. Indicadores como taxa de leitura, tempo de resposta e abandono em cada etapa mostram qual variação funciona melhor. As outras opções não têm relação com testes A/B.",
    fontes: [
      { titulo: "Solucionar problemas e prestar suporte técnico na WhatsApp Business Platform › Introdução à manutenção da qualidade", url: "https://www.facebookblueprint.com/student/collection/612503/path/621017/activity/457918" }
    ]
  },
  {
    id: 28,
    enunciado: "Um cliente recebeu a resposta abaixo de uma requisição à API.\n\nQual é a solução?",
    codigo: `{
  "error": {
    "message": "401 - Access token has expired",
    "type": "OAuthException",
    "code": 190,
    "details": "Your access token has expired.",
    (...)
  }
}`,
    alternativas: [
      { t: "Passar por um processo de escalonamento do access token", c: false },
      { t: "Mudar o nível do access token", c: false },
      { t: "Estender a validade do access token", c: false },
      { t: "Gerar um novo access token", c: true }
    ],
    explicacao: "O código 190 (HTTP 401) indica token expirado. A solução é gerar um novo access token. Para produção, o ideal é usar um token de system user, que não expira como o token de usuário.",
    fontes: [
      { titulo: "Solucionar problemas e prestar suporte técnico na WhatsApp Business Platform › Solucionar códigos de erro comuns", url: "https://www.facebookblueprint.com/student/collection/612503/path/621017/activity/457919" }
    ]
  },
  {
    id: 29,
    enunciado: "Um cliente quer migrar números de telefone entre contas do WhatsApp Business (WABAs).\n\nQuais dois requisitos ele precisa cumprir? (Escolha duas.)",
    alternativas: [
      { t: "A conta empresarial da Meta (Business Manager) precisa estar verificada", c: true },
      { t: "A verificação em duas etapas do número precisa estar desativada", c: true },
      { t: "O número precisa ter enviado pelo menos 250 mensagens", c: false },
      { t: "O número precisa ser registrado novamente na WABA", c: false }
    ],
    explicacao: "Os pré-requisitos da migração são: Business Manager verificado, WABA aprovada, método de pagamento válido e verificação em duas etapas desativada no número. Não há mínimo de mensagens enviadas.",
    fontes: [
      { titulo: "Solucionar problemas e prestar suporte técnico na WhatsApp Business Platform › Solucionar outros tipos de problemas", url: "https://www.facebookblueprint.com/student/collection/612503/path/621017/activity/634835" }
    ]
  },
  {
    id: 30,
    enunciado: "Uma pequena empresa de e-commerce está com problemas na integração com o WhatsApp e precisa de suporte da Meta. Ela não é provedora de soluções nem parceira gerenciada (managed partner).\n\nQuais são as duas formas mais adequadas de obter suporte? (Escolha duas.)",
    alternativas: [
      { t: "Fórum da Comunidade de Desenvolvedores da Meta", c: true },
      { t: "Meta Direct Support", c: false },
      { t: "Suporte ao desenvolvedor da Meta (Developer Support)", c: true },
      { t: "Enviar e-mail ou ligar para a Meta", c: false }
    ],
    explicacao: "O Direct Support é exclusivo para desenvolvedores enterprise (solution partners e managed partners). Quem não é enterprise usa o Developer Support (tickets e bug reports) e a Comunidade de Desenvolvedores. E-mail ou telefone não são canais oficiais.",
    fontes: [
      { titulo: "Solucionar problemas e prestar suporte técnico na WhatsApp Business Platform › Seguir os processos de escalonamento de suporte", url: "https://www.facebookblueprint.com/student/collection/612503/path/621017/activity/634837" }
    ]
  }
];
