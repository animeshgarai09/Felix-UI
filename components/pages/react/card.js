import { ProductWrapper, ProductImage, ProductBody, ProductActions, Button } from "@felix-ui"
import { Codeblock } from 'components/utils'
import { MdAdd } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import styles from '@styles/documentation.module.scss'
import Footer from "components/footer"

const CardUI = () => {
    return (
        <>
            <p className={styles.des}>Felix UI comes with easy to use highly customizable card component to showcase product.</p>
            <h4>Import</h4>
            <p>Felix UI exports 4 components for rendering menus:</p>
            <ul>
                <li><code>ProductWrapper</code> : The wrapper component provides context and state.</li>
                <li><code>ProductImage</code> : A component to show product image.Must be a direct child of <code>ProductWrapper</code>.</li>
                <li><code>ProductBody</code> : A component to show product details. Must be a direct child of <code>Menu</code>.</li>
                <li><code>ProductActions</code>: The wrapper component to add any action buttons. Must be a direct child of a <code>ProductBody</code>.</li>
            </ul>
            <Codeblock lang="jsx">
                {`import { ProductWrapper, ProductImage, ProductBody, ProductActions } from "react-felix-ui"`}
            </Codeblock>
            <h4>Usage</h4>
            <div className="grid col-3-even basic responsive-3">
                <ProductWrapper >
                    <ProductImage src="/images/product.jpeg" alt='product' badge={{ text: '30% Off', color: 'yellow' }} />
                    <ProductBody
                        title="Angie’s Boomchickapop Sweet & Salty"
                        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, aliquid quas obcaecati quisquam non ullam numquam et expedita explicabo fugit quibusdam facilis id saepe possimus natus cupiditate porro asperiores dolorem!"
                        category={{
                            name: "Food",
                        }}
                        vendor={{
                            name: "Nestle",
                        }}
                        rating={1.4}
                        currentPrice={250}
                        price={350}
                    >
                        <ProductActions >
                            <Button size="sm" variant="ghost" theme='gray' leftIcon={<AiOutlineHeart />}></Button>
                            <Button size="sm" variant="ghost" leftIcon={<MdAdd />}>Add</Button>
                        </ProductActions>
                    </ProductBody>
                </ProductWrapper>
                <ProductWrapper >
                    <ProductImage src="/images/product.jpeg" alt='product' badge={{ text: '30% Off', color: 'yellow' }} />
                    <ProductBody
                        title="Angie’s Boomchickapop Sweet & Salty"
                        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, aliquid quas obcaecati quisquam non ullam numquam et expedita explicabo fugit quibusdam facilis id saepe possimus natus cupiditate porro asperiores dolorem!"
                        category={{
                            name: "Food",
                        }}
                        vendor={{
                            name: "Nestle",
                        }}
                        rating={1.4}
                        currentPrice={250}
                        price={350}
                    >
                        <ProductActions >
                            <Button size="sm" variant="ghost" theme='gray' leftIcon={<AiOutlineHeart />}></Button>
                            <Button size="sm" variant="ghost" leftIcon={<MdAdd />}>Add</Button>
                        </ProductActions>
                    </ProductBody>
                </ProductWrapper>
                <ProductWrapper >
                    <ProductImage src="/images/product.jpeg" alt='product' badge={{ text: '30% Off', color: 'yellow' }} />
                    <ProductBody
                        title="Angie’s Boomchickapop Sweet & Salty"
                        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, aliquid quas obcaecati quisquam non ullam numquam et expedita explicabo fugit quibusdam facilis id saepe possimus natus cupiditate porro asperiores dolorem!"
                        category={{
                            name: "Food",
                        }}
                        vendor={{
                            name: "Nestle",
                        }}
                        rating={1.4}
                        currentPrice={250}
                        price={350}
                    >
                        <ProductActions >
                            <Button size="sm" variant="ghost" theme='gray' leftIcon={<AiOutlineHeart />}></Button>
                            <Button size="sm" variant="ghost" leftIcon={<MdAdd />}>Add</Button>
                        </ProductActions>
                    </ProductBody>
                </ProductWrapper>
            </div>
            <Codeblock lang="jsx">
                {`<ProductWrapper >
    <ProductImage src="/images/product.jpeg" alt='product' badge={{ text: '30% Off', color: 'yellow' }} />
    <ProductBody
        title="Angie’s Boomchickapop Sweet & Salty"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, aliquid quas obcaecati quisquam non ullam numquam et expedita explicabo fugit quibusdam facilis id saepe possimus natus cupiditate porro asperiores dolorem!"
        category={{
            name: "Food",
        }}
        vendor={{
            name: "Nestle",
        }}
        rating={1.4}
        currentPrice={250}
        price={350}
    >
        <ProductActions >
            <Button size="sm" variant="ghost" theme='gray' leftIcon={<AiOutlineHeart />}></Button>
            <Button size="sm" variant="ghost" leftIcon={<MdAdd />}>Add</Button>
        </ProductActions>
    </ProductBody>
</ProductWrapper>`}
            </Codeblock>
            <h4>Orientation</h4>
            <p>Product card by default shows in vertical style. Style can be changes to <code>horizontal</code> by <code>style</code> prop.</p>
            <div className="grid col-2-even horizontal responsive-2">
                <ProductWrapper style="horizontal">
                    <ProductImage src="/images/product.jpeg" alt='product' badge={{ text: '30% Off', color: 'yellow' }} />
                    <ProductBody
                        title="Angie’s Boomchickapop Sweet & Salty"
                        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, aliquid quas obcaecati quisquam non ullam numquam et expedita explicabo fugit quibusdam facilis id saepe possimus natus cupiditate porro asperiores dolorem!"
                        category={{
                            name: "Food",
                        }}
                        vendor={{
                            name: "Nestle",
                        }}
                        rating={1.4}
                        currentPrice={250}
                        price={350}
                    >
                        <ProductActions >
                            <Button size="sm" variant="ghost" theme='gray' leftIcon={<AiOutlineHeart />}></Button>
                            <Button size="sm" variant="ghost" leftIcon={<MdAdd />}>Add</Button>
                        </ProductActions>
                    </ProductBody>
                </ProductWrapper>
                <ProductWrapper style="horizontal">
                    <ProductImage src="/images/product.jpeg" alt='product' badge={{ text: '30% Off', color: 'yellow' }} />
                    <ProductBody
                        title="Angie’s Boomchickapop Sweet & Salty"
                        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, aliquid quas obcaecati quisquam non ullam numquam et expedita explicabo fugit quibusdam facilis id saepe possimus natus cupiditate porro asperiores dolorem!"
                        category={{
                            name: "Food",
                        }}
                        vendor={{
                            name: "Nestle",
                        }}
                        rating={1.4}
                        currentPrice={250}
                        price={350}
                    >
                        <ProductActions >
                            <Button size="sm" variant="ghost" theme='gray' leftIcon={<AiOutlineHeart />}></Button>
                            <Button size="sm" variant="ghost" leftIcon={<MdAdd />}>Add</Button>
                        </ProductActions>
                    </ProductBody>
                </ProductWrapper>
            </div>
            <Codeblock lang="jsx">
                {`<ProductWrapper style="horizontal"> // Set style of the card
    <ProductImage src="/images/product.jpeg" alt='product' badge={{ text: '30% Off', color: 'yellow' }} />
    <ProductBody
        title="Angie’s Boomchickapop Sweet & Salty"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, aliquid quas obcaecati quisquam non ullam numquam et expedita explicabo fugit quibusdam facilis id saepe possimus natus cupiditate porro asperiores dolorem!"
        category={{
            name: "Food",
        }}
        vendor={{
            name: "Nestle",
        }}
        rating={1.4}
        currentPrice={250}
        price={350}
    >
        <ProductActions >
            <Button size="sm" variant="ghost" theme='gray' leftIcon={<AiOutlineHeart />}></Button>
            <Button size="sm" variant="ghost" leftIcon={<MdAdd />}>Add</Button>
        </ProductActions>
    </ProductBody>
</ProductWrapper>`}
            </Codeblock>
            <Footer currentPage="Card" />

        </>
    )
}

export default CardUI
