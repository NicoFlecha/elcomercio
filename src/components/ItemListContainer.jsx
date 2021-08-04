const ItemListContainer = ({greeting = 'Hola usuario', children}) => {
    return (
        <>
            <h1>{greeting}</h1>
            <div>
                {children}
            </div>
        </>
    )
    
}

export default ItemListContainer;