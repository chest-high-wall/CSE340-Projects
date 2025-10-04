// TEMP: fake a single record so the page renders
async function getInventoryById(id) {
  return {
    inv_id: id,
    inv_make: "Toyota",
    inv_model: "Tacoma",
    inv_year: 2021,
    inv_price: 38995,
    inv_miles: 24875,
    inv_color: "Gray",
    inv_description: "One-owner, clean title, TRD Off-Road.",
    inv_image: "/images/tacoma.jpg",
    inv_thumbnail: "/images/tacoma-tn.jpg",
  };
}
module.exports = { getInventoryById };
