import { GoodsItem } from "./GoodsItem";

export function GoodsList(props) {
  const { goods = [] } = props;
  if (!goods.length) {
    return <h3> Page not found</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} />
      ))}
    </div>
  );
}
