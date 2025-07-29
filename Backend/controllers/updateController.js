const prisma = require("../db");

exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { location, aboutMe, website } = req.body;

    const updatedUser = await prisma.user.update({
      where: {
        userId: parseInt(userId),
      },
      data: {
        location: location || null,
        aboutMe: aboutMe || null,
        website: website || null,
      },
    });

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.error("There was an error: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to update user",
      error: error.message,
    });
  }
};
