import "../../scss/widget/btn.scss";

const PurchaseBtn = ({ disabled, onClick }: { disabled: boolean, onClick: () => void }) => (
    <button disabled={disabled} onClick={onClick} className="ui-btn">Purchase</button>
);

export default PurchaseBtn;