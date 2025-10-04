const invModel = require("../models/inventory-model");
const utilities = require("../utilities");

exports.buildByInvId = async (req, res, next) => {
  try {
    const invId = Number(req.params.invId);
    if (!Number.isInteger(invId)) {
      const e = new Error("Invalid vehicle id");
      e.status = 400;
      throw e;
    }

    const v = await invModel.getInventoryById(invId);
    if (!v) {
      const e = new Error("Vehicle not found");
      e.status = 404;
      throw e;
    }

    const detailHTML = utilities.buildVehicleDetail(v);
    const title = `${v.inv_year} ${v.inv_make} ${v.inv_model}`;
    res.render("inventory/detail", { title, detail: detailHTML });
  } catch (err) {
    next(err);
  }
};
