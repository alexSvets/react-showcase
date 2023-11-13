export function GoodsItem(props) {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    displayAssets: [{ full_background }],
    price: { finalPrice },
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          onClick={() =>
            addToBasket({
              id,
              name,
              finalPrice,
            })
          }
          className="btn"
        >
          Buy
        </button>{" "}
        <span className="right">{finalPrice} $</span>
      </div>
    </div>
  );
}
