import Score, { IScoreProps } from '../Score';

interface IScoreboardProps {
    scoreList: IScoreProps[];
}


const Scoreboard = ({scoreList}: IScoreboardProps) => {
    
    return <div className="scoreboard">
        {scoreList.map((scoreProps) =>  <Score imgUrl={scoreProps.imgUrl} quantity={scoreProps.quantity}/> )}
       
    </div>
}

export default Scoreboard;