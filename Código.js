const doGet = () => HtmlService.createTemplateFromFile('views/index').evaluate();

const include = (ruta) => HtmlService.createHtmlOutputFromFile(ruta).getContent();
