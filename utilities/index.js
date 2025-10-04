const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const commas = new Intl.NumberFormat("en-US");

function buildVehicleDetail(v) {
  return `
    <section class="vehicle-detail">
      <figure class="vehicle-detail__media">
        <img src="${v.inv_image}" alt="${v.inv_year} ${v.inv_make} ${v.inv_model}" loading="eager">
      </figure>

      <div class="vehicle-detail__info">
        <h2>${v.inv_year} ${v.inv_make} ${v.inv_model}</h2>
        <p><strong>Price:</strong> ${usd.format(Number(v.inv_price))}</p>
        <p><strong>Mileage:</strong> ${commas.format(Number(v.inv_miles))} mi</p>
        <ul>
          <li><strong>Color:</strong> ${v.inv_color}</li>
        </ul>
        <p>${v.inv_description}</p>
      </div>
    </section>
  `;
}

module.exports = { buildVehicleDetail };
