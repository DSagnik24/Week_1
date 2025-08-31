export default function Result({ recommendation }) {
    return (
        <div className="card mt-4 shadow p-3">
            <h3 className="text-success">🌱 Analysis Result</h3>
            <div className="card-body">
                <pre className="text-dark">{recommendation}</pre>
            </div>
        </div>
    );
}
