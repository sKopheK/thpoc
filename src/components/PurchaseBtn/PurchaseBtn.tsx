import stylesButton from '../../scss/widget/button.module.scss';

const PurchaseBtn = (
    {
        disabled,
        onClick,
        className
    }: {
        disabled: boolean,
        onClick: () => void,
        className?: string
    }
) => (
    <button disabled={disabled} onClick={onClick} className={`${stylesButton.base} ${className}`}>Purchase</button>
);

export default PurchaseBtn;