import { Rating } from "../../styles/felix-ui"
const RatingUI = () => {
    return (
        <div>
            <Rating
                options={{
                    points: 2.5,
                    className: ''
                    // text: true
                }}
            />
        </div>
    )
}

export default RatingUI
