import styles from '@styles/documentation.module.scss'
import Footer from 'components/footer'
const Typography = () => {
    return (
        <>
            <p>Felix UI uses <code>Montserrat</code>, as its default font, which is a free font available at Google Fonts.</p>

            <div className={styles.text_doc_container}>
                <h1>A Visual Type Scale</h1>
                <h2>A Visual Type Scale</h2>
                <h3>A Visual Type Scale</h3>
                <h4>A Visual Type Scale</h4>
                <h5>A Visual Type Scale</h5>
                <h6>A Visual Type Scale</h6>
                <p>A Visual Type Scale</p>
                <label>A Visual Type Scale</label>
            </div>
            <h4>Utility Classes</h4>
            <table>
                <thead>
                    <tr>
                        <th>Class Names</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>.text-primary</code></td>
                        <td>Change font color to Primary - <code>#3bb77e</code></td>
                    </tr>
                    <tr>
                        <td><code>.text-black</code></td>
                        <td>Change font color to Secondary - <code>#2d3748</code></td>
                    </tr>
                    <tr>
                        <td><code>.text-gray</code></td>
                        <td>Change font color to Gray - <code>#626262</code></td>
                    </tr>
                    <tr>
                        <td><code>.text-success</code></td>
                        <td>Change font color to Success - <code>#20a779</code></td>
                    </tr>
                    <tr>
                        <td><code>.text-error</code></td>
                        <td>Change font color to Error - <code>#f8aa1c</code></td>
                    </tr>
                    <tr>
                        <td><code>.text-warning</code></td>
                        <td>Change font color to Warning - <code>#fd4e4e</code></td>
                    </tr>
                    <tr>
                        <td><code>.text-info</code></td>
                        <td>Change font color to Info - <code>#007bc3</code></td>
                    </tr>
                    <tr>
                        <td><code>.text-center</code></td>
                        <td>Used to center text in a block element</td>
                    </tr>
                    <tr>
                        <td><code>.text-w-400</code></td>
                        <td>Used for setting font weight of <code>400</code></td>
                    </tr>
                    <tr>
                        <td><code>.text-w-500</code></td>
                        <td>Used for setting font weight of <code>500</code></td>
                    </tr>
                    <tr>
                        <td><code>.text-w-600</code></td>
                        <td>Used for setting font weight of <code>600</code></td>
                    </tr>
                </tbody>
            </table>

            <Footer currentPage='Typography' />
        </>
    )
}

export default Typography
