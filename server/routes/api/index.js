const { Router } = require("express");

const router = Router();

router.use("/autor", require("./autor"));
router.use("/", (req, res) => res.json({ message: "end-to-end funciona" }));

module.exports = router;
