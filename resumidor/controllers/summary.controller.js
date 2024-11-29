const { generateSummary } = require("../models/summary.model");

async function summarizeContent(req, res) {
  const { prompt } = req.body;

  if (!prompt || prompt.length === 0) {
    return res.status(400).send("Erro: Prompt inválido ou vazio!");
  }

  try {
    const text = await generateSummary(prompt);
    res.status(200).send({ resumo: text });
  } catch (error) {
    console.error("Erro ao gerar resumo:", error);
    res.status(500).send("Erro interno do servidor ao gerar resumo.");
  }
}

module.exports = { summarizeContent };
