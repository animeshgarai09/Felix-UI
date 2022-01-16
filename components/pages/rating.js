import { Rating } from "../../styles/designComponents/components"
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
