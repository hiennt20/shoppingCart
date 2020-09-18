function CartFooter(props) {
  return (
    <section className="container">
      {props.products.length > 0 ? (
        <div>
          <div className="promotion">
            <label htmlFor="promo-code">Have A Promo Code?</label>
            <input type="text" id="promo-code" /> <button type="button" />
          </div>
          <div className="summary">
            <ul>
              <li>
                Subtotal{" "}
                <span>
                  {Intl.NumberFormat("ja-JP", {
                    style: "currency",
                    currency: "JPY",
                  }).format(props.subTotal)}
                </span>
              </li>
              <li>
                Tax{" "}
                <span>
                  {Intl.NumberFormat("ja-JP", {
                    style: "currency",
                    currency: "JPY",
                  }).format(props.tax)}
                </span>
              </li>
              <li className="total">
                Total{" "}
                <span>
                  {Intl.NumberFormat("ja-JP", {
                    style: "currency",
                    currency: "JPY",
                  }).format(props.subTotal + props.tax)}
                </span>
              </li>
            </ul>
          </div>
          <div className="checkout">
            <button type="button">Check Out</button>
          </div>
        </div>
      ) : (
        <div> </div>
      )}
    </section>
  );
}
