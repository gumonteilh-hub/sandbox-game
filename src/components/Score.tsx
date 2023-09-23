
export interface IScoreProps {
    imgUrl: string,
    quantity: number
}

const Score = ({imgUrl, quantity} : IScoreProps) => {

    return <div className="scoreCard">
        <img className="scoreIcon" src={imgUrl}/>
        {quantity}
    </div>
}

export default Score;