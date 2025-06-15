import most_popular_bg_img from "./assets/mostPopular.svg";

function Box({ item, isOpen, handleOpen }) {
  return (
    <div
      className={`box flex ${isOpen ? "expanded" : ""} ${
        item.unit === 2 ? "most_popular_box" : ""
      }`}
    >
      <input
        type="radio"
        name="unit"
        value="1"
        id={`radio-button-${item.unit}`}
        checked={isOpen}
        onChange={() => handleOpen(item.unit)}
      />
      <label htmlFor={`radio-button-${item.unit}`}></label>

      <div className="box_main">
        <div className="unit_price_text">
          <h1 className="flex">
            {item.unit} Unit
            <span className="flex"> {item.DiscountPercentage}% Off</span>
          </h1>
          <p>Standard Price</p>
        </div>

        {isOpen && (
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Size</th>
                <th>Colour</th>
              </tr>
            </thead>
            <tbody>
              {item.points.map((items, i) => (
                <tr key={i}>
                  <td>#{i + 1}</td>
                  <td>
                    <select>
                      {items.size.map((s) => (
                        <option value={s} key={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <select>
                      {items.colour.map((c) => (
                        <option value={c} key={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="discount_amount_text">
        <p>${item.currentPrice}.00 USD</p>
        <p>${item.previousPrice}.00 USD</p>
      </div>

      {item.unit === 2 && (
        <>
          <div className="most_popular flex">MOST POPULAR</div>
          <img src={most_popular_bg_img} alt="" />
        </>
      )}
    </div>
  );
}

export default Box;
