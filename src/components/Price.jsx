const Price = ({amount}) => {
    const price = new Intl.NumberFormat('de-DE', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2}).format(amount);

    return <>{price}</>
}

export default Price;