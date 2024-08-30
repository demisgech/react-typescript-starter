import { ReactNode } from "react";
import { items } from "../../ts/listGroupItmes";
console.log(items);
interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button className="btn-close" onClick={onClose} />
    </div>
  );
};

export default Alert;
