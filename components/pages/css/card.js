import { ProductCard } from "@felix-ui"
import { Codeblock } from 'components/utils'
const CardUI = () => {
    return (
        <>
            <p className={styles.des}>Felix UI comes with easy to use highly customizable card component for product and profile view.</p>
            <h4>Import</h4>
            <Codeblock lang="jsx">
                {`import { ProductCard } from "@felix-ui"`}
            </Codeblock>
            <ProductCard
                product={{
                    name: "Angie’s Boomchickapop Sweet & Salty",
                    img: "/images/product.jpeg",
                    // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error inventore atque temporibus magnam nobis aliquid doloribus ex, quasi amet placeat consequatur nemo ipsam explicabo. Alias consectetur perspiciatis facilis officia laudantium.",
                    link: "#"
                }}
                category={{
                    name: "Food",
                }}
                vendor={{
                    name: "Nestle",
                }}
                rating={1.3}
                price={250}
                oldPrice={350}
            // type="horizontal"
            />
        </>
    )
}

export default CardUI
