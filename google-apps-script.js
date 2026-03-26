// =============================================================
// Google Apps Script - Formulario de Contato JUST
// =============================================================
// COMO USAR:
// 1. Acesse https://script.google.com com a conta Google Workspace da JUST
// 2. Crie um novo projeto (+ Novo Projeto)
// 3. Cole este codigo no editor (substitua o Code.gs padrao)
// 4. Clique em "Implantar" > "Nova implantacao"
// 5. Tipo: "App da Web"
// 6. Executar como: "Eu" (sua conta)
// 7. Quem tem acesso: "Qualquer pessoa"
// 8. Clique em "Implantar" e copie a URL gerada
// 9. Coloque a URL no .env do site: VITE_APPS_SCRIPT_URL=<url_copiada>
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

    var corpo = "Novo lead recebido pelo formulario do site JUST:\n\n"
      + "Nome: " + nome + "\n"
      + "Email: " + email + "\n"
      + "Empresa: " + empresa + "\n"
      + "Telefone: " + telefone + "\n"
      + "Produto de interesse: " + produto + "\n"
      + "Sobre o projeto: " + projeto + "\n\n"
      + "---\n"
      + "Enviado automaticamente pelo formulario wearejust.it";

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

    MailApp.sendEmail({
      to: "contato@wearejust.it",
      subject: assunto,
      body: corpo,
      htmlBody: corpoHtml,
      replyTo: email,
      name: "JUST Site"
    });

    // Opcional: registrar em uma planilha Google Sheets
    // Descomente as linhas abaixo e substitua o ID da planilha
    // var sheet = SpreadsheetApp.openById("SEU_SHEET_ID").getActiveSheet();
    // sheet.appendRow([new Date(), nome, email, empresa, telefone, produto, projeto]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
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
