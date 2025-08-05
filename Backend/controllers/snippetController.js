const prisma = require("../db");

exports.getAllSnippets = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "Missing code or user info" });
    }

    const snippets = await prisma.codeSnippet.findMany({
      where: { userId: parseInt(userId) },
      orderBy: { createdAt: "asc" },
    });

    res.status(200).json(snippets);
  } catch (err) {
    console.error("Error getting snippets:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getSnippet = async (req, res) => {
  try {
    const { codeId } = req.params;

    if (!codeId) {
      return res.status(400).json({ message: "Missing code info" });
    }

    const snippet = await prisma.codeSnippet.findUnique({
      where: { id: parseInt(codeId) },
    });

    if (!snippet) {
      return res.status(404).json({ message: "Snippet not found" });
    }

    res.status(201).json(snippet);
  } catch (err) {
    console.error("Error getting snippets:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.saveSnippet = async (req, res) => {
  try {
    const { userId } = req.params;
    const { code, codeLang, title, notes } = req.body;

    if (!code || !userId) {
      return res.status(400).json({ message: "Missing code or user info" });
    }

    const snippets = await prisma.codeSnippet.findMany({
      where: { userId: parseInt(userId) },
      orderBy: { createdAt: "asc" },
    });

    if (snippets.length >= 20) {
      await prisma.codeSnippet.delete({
        where: { id: snippets[0].id },
      });
    }

    const newSnippet = await prisma.codeSnippet.create({
      data: {
        userId: parseInt(userId),
        code,
        codeLang,
        title,
        notes,
      },
    });

    res.status(201).json(newSnippet);
  } catch (err) {
    console.error("Error saving snippet:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateSnippet = async (req, res) => {
  try {
    console.log("Request body:", req.body); // 🧪 Add this
    const { codeId } = req.params;
    const { code, codeLang, title, notes, userId } = req.body;

    if (!codeId) {
      return res.status(400).json({ message: "Missing code snippet ID" });
    }

    const editedSnippet = await prisma.codeSnippet.update({
      where: { id: parseInt(codeId) },
      data: {
        userId: parseInt(userId),
        code,
        codeLang,
        title,
        notes,
      },
    });

    res.status(200).json(editedSnippet);
  } catch (err) {
    console.error("Error updating snippet:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteSnippet = async (req, res) => {
  try {
    const { codeId } = req.params;

    if (!codeId) {
      return res.status(400).json({ message: "Missing codeId parameter" });
    }

    const deleted = await prisma.codeSnippet.delete({
      where: {
        id: parseInt(codeId),
      },
    });

    res.status(200).json(deleted);
  } catch (err) {
    console.error("Error deleting snippet:", err);
    res.status(500).json({ message: "Server error" });
  }
};
