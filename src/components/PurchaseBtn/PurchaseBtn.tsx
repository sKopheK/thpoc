const PurchaseBtn = ({ disabled, onClick }: { disabled: boolean, onClick: () => void }) => (
    <button disabled={disabled} onClick={onClick}>Purchase</button>
);

export default PurchaseBtn;