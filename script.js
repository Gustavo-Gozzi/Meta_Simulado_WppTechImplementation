/* =========================================================
   Simulado – WhatsApp for Business Technical Implementation
   30 questões do Practice Test da Meta Blueprint (traduzidas)
   ========================================================= */

const QUESTOES = [
  {
    id: 1,
    enunciado: "O número de WhatsApp Business de um cliente está configurado para alto volume de envio (1.000 mensagens por segundo). O cliente planeja uma campanha de marketing nas festas de fim de ano e espera uma taxa de resposta de 40% do público-alvo.\n\nQuantos webhooks o servidor do parceiro deve estar preparado para processar nesse cenário?",
    alternativas: [
      { t: "3300", c: false },
      { t: "3400", c: true },
      { t: "400", c: false },
      { t: "4400", c: false }
    ],
    explicacao: "A Meta recomenda dimensionar o servidor para 3x o tráfego de saída + 1x o tráfego de entrada. Cada mensagem enviada gera 3 webhooks de status (sent, delivered e read): 1.000 × 3 = 3.000. As respostas de 40% geram 400 webhooks de mensagem recebida. Total: 3.000 + 400 = 3.400."
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
    explicacao: "Os anúncios Click to WhatsApp geram a divulgação no Facebook e levam o usuário direto para a conversa. O WhatsApp Flows cria os formulários estruturados dentro do chat para coletar nome, telefone e horário. A API de Conversões e a de análise servem para medir resultados, não para coletar dados nem divulgar."
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
    explicacao: "No WhatsApp Flows com endpoint (data channel), os dados preenchidos no formulário são enviados criptografados direto para o endpoint configurado, que pode ser o servidor do banco. Assim o parceiro opera o bot sem ter acesso aos dados sensíveis. Mandar um link tira o usuário do WhatsApp, e certificação não resolve a exigência de não compartilhar os dados."
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
    explicacao: "O servidor deve responder 200 OK imediatamente e processar depois, em fila ou de forma assíncrona. Se a resposta demora ou falha, a Meta reenvia o webhook, gerando duplicidade e atraso. Guardar log dos webhooks ajuda em auditoria e troubleshooting. Não é preciso esperar o app review para desenvolver: dá para usar números e usuários de teste."
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
    explicacao: "No Catálogo do WhatsApp cada combinação precisa existir como um item próprio, porque o catálogo exibido na conversa não oferece a seleção de variantes como uma loja on-line. Como são 2 temperaturas × 3 leites, o resultado é 6 itens. Pegadinha comum: \"1 item com 2 conjuntos de variantes\" parece mais elegante, mas é a resposta errada."
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
    explicacao: "O Cloud API Local Storage permite escolher o país onde o conteúdo das mensagens fica armazenado em repouso (data at rest), atendendo a exigências de residência de dados. As outras opções não controlam onde os dados ficam armazenados."
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
    explicacao: "Na migração, a posse do número é confirmada com um código enviado por SMS ou por ligação de voz para o próprio número. Por isso o número precisa estar acessível, e a verificação em duas etapas precisa estar desativada antes."
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
    explicacao: "Integrações com a WhatsApp Business Platform exigem um app do tipo Business, que dá acesso aos produtos e permissões para gerenciar ativos empresariais (WABA, números, templates)."
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
    explicacao: "Sem verificação, o limite é de 250 conversas iniciadas pela empresa em 24 horas móveis. Responder quem iniciou a conversa não tem limite. Já o limite de 1.000 e o registro de até 20 números exigem verificação (sem ela, são 2 números)."
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
    explicacao: "O revisor precisa ver o fluxo completo e real de cada permissão em uso: o vídeo deve mostrar, passo a passo, onde e como cada permissão solicitada é usada. Imagens estáticas, documentos ou um vídeo genérico não comprovam o uso."
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
    explicacao: "A própria mensagem de rejeição diz o caminho: gravar um novo screencast fiel, mostrando o uso correto de cada permissão, e conferir as instruções de teste. Trocar de horário, criar outro app ou só narrar não corrige o problema."
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
    explicacao: "O número é verificado com um código enviado por SMS ou por ligação de voz, que o cliente digita no fluxo do Embedded Signup."
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
    explicacao: "O Embedded Signup devolve um code de curta duração. O parceiro troca esse code no servidor por um business token (access token). O token não vem pronto na resposta, e os IDs (WABA, número) chegam por outro canal: o evento de sessão do fluxo."
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
    explicacao: "Para criar o anúncio é obrigatório ter uma Página do Facebook vinculada ao número do WhatsApp Business e ter os criativos (imagem, vídeo, texto). A API de Conversões é opcional, para otimizar, e não é preciso consentimento prévio do usuário para segmentar anúncios: o opt-in vale para mensagens iniciadas pela empresa."
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
    explicacao: "O ctwa_clid (ID de clique do anúncio) não é enviado quando o clique vem do Instagram na web ou quando o anúncio já foi removido no momento da mensagem. Usar o WhatsApp Web para conversar não impede o envio, e um anúncio mal configurado nem levaria o usuário à conversa."
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
    explicacao: "Os webhooks da WhatsApp Business Platform são sempre JSON, com object = whatsapp_business_account e as mudanças em entry[].changes[].value. Mensagens recebidas chegam no field \"messages\"."
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
    explicacao: "Cada webhook traz o cabeçalho X-Hub-Signature-256, um HMAC SHA-256 do corpo assinado com o App Secret: validar essa assinatura garante que veio da Meta. Restringir o acesso aos IPs da Meta, atualizados periodicamente, é a segunda camada. O WABA ID no payload pode ser forjado, e a Meta não define uma regra de 10 segundos."
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
    explicacao: "O campo messages entrega as mensagens recebidas (e os status das enviadas). O message_template_status_update avisa mudanças de status do template: aprovado, rejeitado, pausado etc. A mudança de qualidade chega por outro campo, o message_template_quality_update."
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
    explicacao: "Só é possível editar a categoria ou os componentes de um template, e a categoria de um template aprovado não pode mudar. O nome nunca é editável. Header e buttons são componentes, então podem ser editados (até 10 vezes em 30 dias ou 1 vez a cada 24 horas)."
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
    explicacao: "Templates rejeitados podem ser editados sem limite. É preciso ajustar o conteúdo para que ele realmente seja utility (dados de uma transação específica, sem promoção). Com allow_category_change = true, a Meta apenas reclassificaria o template como MARKETING; ela não aprova como utility um conteúdo que não é utility."
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
    explicacao: "Quando um template é excluído, o nome dele fica bloqueado por 30 dias. Dá para criar outro template na hora, desde que use um nome diferente."
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
    explicacao: "O texto mistura confirmação de pedido (utility) com um voucher promocional (marketing). Conteúdo misto é classificado como MARKETING. Como allow_category_change está true, a Meta pode trocar a categoria sozinha em vez de rejeitar, e o template é aprovado como MARKETING."
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
    explicacao: "A mensagem foi aceita e enviada no instante T, então chega o webhook de status sent. Como o TTL (2 minutos) venceu antes de o usuário voltar (3 minutos), a mensagem é descartada sem webhook de falha. O delivered nunca acontece, e o erro 131026 não se aplica aqui."
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
    explicacao: "O template de Oferta por Tempo Limitado é de marketing e mostra a validade, um contador regressivo e o código do cupom. O opt-in para marketing é obrigatório. O TTL configurável é dos templates de utility e autenticação, e usar utility para promoção viola a política de categorias."
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
    explicacao: "A Cloud API não garante a ordem de entrega, e não existe parâmetro de sequência. O único jeito confiável é esperar o webhook delivered da mensagem anterior antes de enviar a próxima. Um atraso fixo reduz o problema, mas não garante a ordem."
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
    explicacao: "Flagged é um alerta de queda de qualidade por feedback negativo ou leitura baixa. A empresa deve analisar o motivo e ajustar o conteúdo, o público ou a frequência antes que o template seja pausado ou desabilitado. Ignorar, escalar ou só esperar não resolvem a causa."
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
    explicacao: "Para comparar duas versões é preciso medir. Indicadores como taxa de leitura, tempo de resposta e abandono em cada etapa mostram qual variação funciona melhor. As outras opções não têm relação com testes A/B."
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
    explicacao: "O código 190 (HTTP 401) indica token expirado. A solução é gerar um novo access token. Para produção, o ideal é usar um token de system user, que não expira como o token de usuário."
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
    explicacao: "Os pré-requisitos da migração são: Business Manager verificado, WABA aprovada, método de pagamento válido e verificação em duas etapas desativada no número. Não há mínimo de mensagens enviadas."
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
    explicacao: "O Direct Support é exclusivo para desenvolvedores enterprise (solution partners e managed partners). Quem não é enterprise usa o Developer Support (tickets e bug reports) e a Comunidade de Desenvolvedores. E-mail ou telefone não são canais oficiais."
  }
];

/* =================== Estado =================== */
const LETRAS = ["A", "B", "C", "D", "E", "F"];
let rodada = [];          // questões da rodada atual (com alternativas na ordem exibida)
let respostas = {};       // id -> Set de índices (na ordem original) marcados
let resultadoAtual = [];  // [{q, certa, marcadas:Set}]

const $ = (sel) => document.querySelector(sel);
const telas = { inicio: $("#tela-inicio"), quiz: $("#tela-quiz"), resultado: $("#tela-resultado") };

function mostrarTela(nome) {
  Object.entries(telas).forEach(([k, el]) => (el.hidden = k !== nome));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function embaralhar(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const qtdCorretas = (q) => q.alternativas.filter((a) => a.c).length;

/* =================== Armazenamento (opcional) =================== */
const CHAVE = "simulado_whatsapp_melhor_nota";
function lerMelhorNota() {
  try { return JSON.parse(localStorage.getItem(CHAVE)); } catch (e) { return null; }
}
function salvarMelhorNota(acertos, total) {
  try {
    const atual = lerMelhorNota();
    if (total === QUESTOES.length && (!atual || acertos > atual.acertos)) {
      localStorage.setItem(CHAVE, JSON.stringify({ acertos, total, data: new Date().toLocaleDateString("pt-BR") }));
    }
  } catch (e) { /* sem armazenamento: tudo bem */ }
}
function exibirMelhorNota() {
  const m = lerMelhorNota();
  const el = $("#melhor-nota");
  if (m) {
    el.textContent = `Sua melhor nota no simulado completo: ${m.acertos}/${m.total} (${Math.round((m.acertos / m.total) * 100)}%) em ${m.data}.`;
    el.hidden = false;
  }
}

/* =================== Montagem do quiz =================== */
function iniciar(listaQuestoes) {
  const embaralha = $("#cfg-embaralhar").checked;
  const base = embaralha ? embaralhar(listaQuestoes) : listaQuestoes.slice();
  rodada = base.map((q) => {
    const ordem = q.alternativas.map((_, i) => i);
    return { ...q, ordem: embaralha ? embaralhar(ordem) : ordem };
  });
  respostas = {};
  rodada.forEach((q) => (respostas[q.id] = new Set()));
  renderizarQuiz();
  mostrarTela("quiz");
}

function renderizarQuiz() {
  const form = $("#form-quiz");
  form.innerHTML = "";
  rodada.forEach((q, pos) => {
    const multipla = qtdCorretas(q) > 1;
    const tipo = multipla ? "checkbox" : "radio";
    const div = document.createElement("fieldset");
    div.className = "questao";
    div.dataset.id = q.id;
    div.innerHTML = `
      <legend class="questao__num">Questão ${pos + 1} de ${rodada.length}</legend>
      <p class="questao__enunciado">${escapar(q.enunciado)}</p>
      ${q.codigo ? `<pre>${escapar(q.codigo)}</pre>` : ""}
      <p class="questao__dica">${multipla ? `Selecione ${qtdCorretas(q)} respostas.` : "Selecione 1 resposta."}</p>
      ${q.ordem.map((iOrig, k) => `
        <label class="alternativa">
          <input type="${tipo}" name="q${q.id}" value="${iOrig}">
          <span><strong>${LETRAS[k]})</strong> ${q.alternativas[iOrig].t}</span>
        </label>`).join("")}
    `;
    div.addEventListener("change", (ev) => aoMarcar(ev, q, div));
    form.appendChild(div);
  });
  atualizarProgresso();
}

function aoMarcar(ev, q, div) {
  const input = ev.target;
  const set = respostas[q.id];
  const limite = qtdCorretas(q);
  const idx = Number(input.value);
  if (input.type === "radio") {
    set.clear();
    set.add(idx);
  } else if (input.checked) {
    if (set.size >= limite) {
      input.checked = false;
      alert(`Esta questão aceita apenas ${limite} respostas. Desmarque uma antes de escolher outra.`);
      return;
    }
    set.add(idx);
  } else {
    set.delete(idx);
  }
  div.querySelectorAll(".alternativa").forEach((lab) => {
    lab.classList.toggle("alternativa--marcada", lab.querySelector("input").checked);
  });
  if (respondidaCompleta(q)) div.classList.remove("questao--pendente");
  atualizarProgresso();
}

function respondidaCompleta(q) {
  return respostas[q.id].size === qtdCorretas(q);
}

function atualizarProgresso() {
  const total = rodada.length;
  const feitas = rodada.filter(respondidaCompleta).length;
  $("#progresso").style.width = `${(feitas / total) * 100}%`;
  $("#contador").textContent = `${total} questões nesta rodada`;
  $("#resumo-respondidas").textContent = `${feitas} de ${total} respondidas`;
}

/* =================== Correção =================== */
function finalizar() {
  const pendentes = rodada.filter((q) => !respondidaCompleta(q));
  const cards = [...document.querySelectorAll("#form-quiz .questao")];
  cards.forEach((card) => card.classList.remove("questao--pendente"));
  if (pendentes.length > 0) {
    const idsPendentes = new Set(pendentes.map((q) => String(q.id)));
    const marcados = cards.filter((card) => idsPendentes.has(card.dataset.id));
    marcados.forEach((card) => card.classList.add("questao--pendente"));
    const qtd = marcados.length;
    $("#resumo-respondidas").textContent =
      `Falta${qtd === 1 ? "" : "m"} ${qtd} ${qtd === 1 ? "questão" : "questões"} para responder`;
    marcados[0].scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  resultadoAtual = rodada.map((q) => {
    const marcadas = respostas[q.id];
    const corretas = new Set(q.alternativas.map((a, i) => (a.c ? i : -1)).filter((i) => i >= 0));
    const certa = marcadas.size === corretas.size && [...marcadas].every((i) => corretas.has(i));
    return { q, certa, marcadas };
  });
  const acertos = resultadoAtual.filter((r) => r.certa).length;
  const total = resultadoAtual.length;
  const pct = Math.round((acertos / total) * 100);
  salvarMelhorNota(acertos, total);

  const circulo = $("#nota-circulo");
  circulo.style.background = `conic-gradient(${pct >= 70 ? "var(--verde)" : "var(--vermelho)"} ${pct * 3.6}deg, var(--borda) 0deg)`;
  circulo.classList.toggle("nota-circulo--reprovado", pct < 70);
  $("#nota-percentual").textContent = `${pct}%`;
  $("#nota-titulo").textContent = pct >= 70 ? "Mandou bem!" : "Vale revisar e tentar de novo";
  const erros = total - acertos;
  $("#nota-texto").textContent = `Você acertou ${acertos} de ${total} ${total === 1 ? "questão" : "questões"} (${erros} ${erros === 1 ? "errada" : "erradas"}). Referência usada aqui: 70% de acertos.`;
  $("#btn-refazer-erradas").disabled = acertos === total;

  document.querySelectorAll(".filtro").forEach((b) => b.classList.toggle("filtro--ativo", b.dataset.filtro === "todas"));
  renderizarRevisao("todas");
  mostrarTela("resultado");
}

function renderizarRevisao(filtro) {
  const cont = $("#revisao");
  cont.innerHTML = "";
  resultadoAtual.forEach((r, pos) => {
    if (filtro === "erradas" && r.certa) return;
    if (filtro === "certas" && !r.certa) return;
    const { q } = r;
    const div = document.createElement("article");
    div.className = `questao ${r.certa ? "questao--certa" : "questao--errada"}`;
    div.innerHTML = `
      <div class="questao__num">Questão ${pos + 1}
        <span class="selo ${r.certa ? "selo--certa" : "selo--errada"}">${r.certa ? "Acertou" : "Errou"}</span>
      </div>
      <p class="questao__enunciado">${escapar(q.enunciado)}</p>
      ${q.codigo ? `<pre>${escapar(q.codigo)}</pre>` : ""}
      ${q.ordem.map((iOrig, k) => {
        const alt = q.alternativas[iOrig];
        const marcou = r.marcadas.has(iOrig);
        let cls = "revisao-alt";
        let tag = "";
        if (alt.c) { cls += " revisao-alt--correta"; tag = marcou ? "✔ Correta (você marcou)" : "✔ Correta"; }
        else if (marcou) { cls += " revisao-alt--errada"; tag = "✘ Sua resposta"; }
        return `<div class="${cls}"><strong>${LETRAS[k]})</strong> ${alt.t}${tag ? `<span class="revisao-alt__tag">${tag}</span>` : ""}</div>`;
      }).join("")}
      ${r.marcadas.size === 0 ? `<p class="questao__dica" style="color:var(--vermelho)">Você não respondeu esta questão.</p>` : ""}
      <div class="explicacao"><strong>Explicação:</strong> ${escapar(q.explicacao)}</div>
    `;
    cont.appendChild(div);
  });
  if (!cont.children.length) {
    cont.innerHTML = `<div class="cartao">Nenhuma questão neste filtro.</div>`;
  }
}

function escapar(txt) {
  return txt.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* =================== Eventos =================== */
$("#btn-comecar").addEventListener("click", () => iniciar(QUESTOES));
$("#btn-finalizar").addEventListener("click", finalizar);
$("#btn-refazer").addEventListener("click", () => iniciar(QUESTOES));
$("#btn-refazer-erradas").addEventListener("click", () => {
  const erradas = resultadoAtual.filter((r) => !r.certa).map((r) => QUESTOES.find((q) => q.id === r.q.id));
  if (erradas.length) iniciar(erradas);
});
document.querySelectorAll(".filtro").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filtro").forEach((b) => b.classList.remove("filtro--ativo"));
    btn.classList.add("filtro--ativo");
    renderizarRevisao(btn.dataset.filtro);
  })
);

exibirMelhorNota();
