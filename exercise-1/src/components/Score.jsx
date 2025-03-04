import Statistic from "./Statistic";

export default function Score({courseName, courseResult}){
    const getScore = (score) => {
        return score < 50 ? "warning" : "";
    }
    return (
        
        <div className="scores">
            <h1>{courseName}</h1>

            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {courseResult.map((student, index) => (
                        <tr key={index}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td className={getScore(student.score)}>
                                {student.score}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Statistic courseResult={courseResult}/>
        </div>
        
    );
}