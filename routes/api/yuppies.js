const express = require('express');
const router = express.Router();
const yuppiesCtrl = require('../../controllers/api/yuppies');

router.get("/", yuppiesCtrl.index);
router.post("/", yuppiesCtrl.create);
router.get("/:id", yuppiesCtrl.show);
router.put("/:id", yuppiesCtrl.update);
router.delete("/:id", yuppiesCtrl.delete);

module.exports = router;