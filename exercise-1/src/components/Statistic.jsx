export default function Statistic({courseResult}){
    const calculateAverage = () => {
        if (courseResult.length === 0) return 0;
        const total = courseResult.reduce((sum, student) => sum + student.score, 0);
        return (total / courseResult.length).toFixed(2);
    };

    // Function to get min and max scores
    const getMinScore = () => Math.min(...courseResult.map(student => student.score));
    const getMaxScore = () => Math.max(...courseResult.map(student => student.score));

    return (
        
        <div className="statistics-panel">            
            <table>
                <thead>
                    <tr>
                        <td>AVERAGE</td>
                        <td>MIN</td>
                        <td>MAX</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{calculateAverage()}</td>
                        <td>{getMinScore()}</td>
                        <td> {getMaxScore()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    )
}