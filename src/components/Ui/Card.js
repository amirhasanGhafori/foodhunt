

const Card = props =>{
    return <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-7 gap-2">
        {props.children}
    </section>
}

export default Card;