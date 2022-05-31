import "../../scss/widget/btn.scss";

const PurchaseBtn = ({ disabled, onClick, className }: { disabled: boolean, onClick: () => void, className?: string }) => (
    <button disabled={disabled} onClick={onClick} className={`ui-btn ${className}`}>Purchase</button>
);

export default PurchaseBtn;