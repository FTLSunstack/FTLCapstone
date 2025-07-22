// json file with all glossary terms
const glossary = require("../data/glossary.json");

// Get all terms
exports.getAllTerms = (req, res) => {
  res.json(glossary);
};

// Get one term by slug
exports.getTermBySearch = (req, res) => {
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
