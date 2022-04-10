import { ProductWrapper, ProductImage, ProductBody, ProductActions, Button } from "@felix-ui"
import { Codeblock } from 'components/utils'
import { MdAdd } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import styles from '@styles/documentation.module.scss'

const CardUI = () => {
    return (
        <>
            <p className={styles.des}>Felix UI comes with easy to use highly customizable card component for product and profile view.</p>
            <h4>Import</h4>
            <Codeblock lang="jsx">
                {`import { ProductCard } from "@felix-ui"`}
            </Codeblock>

            <ProductWrapper isLoading={true}>
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
                    <ProductActions leftAlign={true} newLine={true}>
                        <Button size="sm" variant="ghost" theme='gray' leftIcon={<AiOutlineHeart />}></Button>
                        <Button size="sm" variant="ghost" leftIcon={<MdAdd />}>Add</Button>
                    </ProductActions>
                </ProductBody>
            </ProductWrapper>
        </>
    )
}

export default CardUI
