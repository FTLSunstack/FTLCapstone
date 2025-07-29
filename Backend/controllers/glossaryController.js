// json file with all glossary terms
const glossary = require("../data/updatedGlossary.json");
const spanishtoEnglish = require("../data/spanishToEnglish.json");

// Get all terms
exports.getAllTerms = (req, res) => {
  res.json(glossary);
};

// Get one term by slug
exports.getTermByEngSearch = (req, res) => {
  const search = req.params.search.toLowerCase();
  const results = [];

  for (const slug in glossary) {
    if (slug.toLowerCase().includes(search)) {
      results.push({
        slug,
        ...glossary[slug], // spreads { en, es }
      });
    }
  }

  if (results.length === 0) {
    return res.status(404).json({ error: "Term not found" });
  }

  res.json(results);
};

exports.getTermByEspSearch = (req, res) => {
  const search = req.params.search.toLowerCase();
  const results = [];

  for (const esTerm in spanishtoEnglish) {
    if (esTerm.toLowerCase().includes(search)) {
      const term = spanishtoEnglish[esTerm];
      results.push({
        term,
        ...glossary[spanishtoEnglish[esTerm]], // spreads { en, es }
      });
    }
  }

  if (results.length === 0) {
    return res.status(404).json({ error: "Term not found" });
  }

  res.json(results);
};
