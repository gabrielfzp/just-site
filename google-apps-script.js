// =============================================================
// Google Apps Script - Formulario de Contato JUST
// Versao 2: usa GmailApp (cota maior) + logging detalhado
// =============================================================

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var nome = data.nome || "";
    var email = data.email || "";
    var empresa = data.empresa || "";
    var telefone = data.telefone || "Nao informado";
    var produto = data.produto || "";
    var projeto = data.projeto || "Nao informado";

    var assunto = "Novo contato pelo site: " + nome + " - " + empresa;

    var corpoHtml = "<div style='font-family: Arial, sans-serif; max-width: 600px;'>"
      + "<h2 style='color: #0f112b; border-bottom: 2px solid #f45546; padding-bottom: 10px;'>Novo contato pelo site</h2>"
      + "<table style='width: 100%; border-collapse: collapse;'>"
      + "<tr><td style='padding: 8px 0; color: #666; width: 140px;'>Nome</td><td style='padding: 8px 0; font-weight: bold;'>" + nome + "</td></tr>"
      + "<tr><td style='padding: 8px 0; color: #666;'>Email</td><td style='padding: 8px 0;'><a href='mailto:" + email + "'>" + email + "</a></td></tr>"
      + "<tr><td style='padding: 8px 0; color: #666;'>Empresa</td><td style='padding: 8px 0; font-weight: bold;'>" + empresa + "</td></tr>"
      + "<tr><td style='padding: 8px 0; color: #666;'>Telefone</td><td style='padding: 8px 0;'>" + telefone + "</td></tr>"
      + "<tr><td style='padding: 8px 0; color: #666;'>Produto</td><td style='padding: 8px 0; color: #f45546; font-weight: bold;'>" + produto + "</td></tr>"
      + "<tr><td style='padding: 8px 0; color: #666; vertical-align: top;'>Projeto</td><td style='padding: 8px 0;'>" + projeto + "</td></tr>"
      + "</table>"
      + "<p style='margin-top: 20px; font-size: 12px; color: #999;'>Enviado automaticamente pelo formulario wearejust.it</p>"
      + "</div>";

    // Log para debug
    Logger.log("Tentando enviar email para: contato@wearejust.it, CC: gabriel.fzp@gmail.com");
    Logger.log("Cota MailApp restante: " + MailApp.getRemainingDailyQuota());

    // Usa GmailApp que tem cota maior no Workspace
    GmailApp.sendEmail(
      "contato@wearejust.it",
      assunto,
      "Novo lead: " + nome + " - " + empresa + " - " + email,
      {
        htmlBody: corpoHtml,
        cc: "gabriel.fzp@gmail.com",
        replyTo: email,
        name: "JUST Site"
      }
    );

    Logger.log("Email enviado com sucesso!");

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("ERRO ao enviar: " + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "JUST contact form endpoint is active." }))
    .setMimeType(ContentService.MimeType.JSON);
}

function verificarCota() {
  Logger.log("Cota MailApp restante: " + MailApp.getRemainingDailyQuota());
}

function testeManual() {
  GmailApp.sendEmail(
    "gabriel.fzp@gmail.com",
    "Teste GmailApp - JUST Site",
    "Se voce recebeu isso, o GmailApp funciona.",
    { name: "JUST Site" }
  );
  Logger.log("Teste enviado!");
}
