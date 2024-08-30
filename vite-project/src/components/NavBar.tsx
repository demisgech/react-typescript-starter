type Props = {
  cartItemsCount: number;
};
export const NavBar = ({ cartItemsCount }: Props) => {
  return (
    <div>
      <h1>
        NavBar:
        <span className="btn-danger badge">{cartItemsCount}</span>
      </h1>
    </div>
  );
};
