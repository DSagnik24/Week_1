import { useState } from "react";

export default function SoilForm({ onAnalyze }) {
    const [soilData, setSoilData] = useState({
        ph: "",
        nitrogen: "",
        phosphorus: "",
        potassium: "",
        rainfall: ""
    });

    const handleChange = (e) => {
        setSoilData({ ...soilData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAnalyze(soilData);
    };

    return (
        <div className="card shadow p-4">
            <h2 className="text-center text-success mb-3">🌾 Enter Soil Data</h2>
            <form onSubmit={handleSubmit}>
                {["ph", "nitrogen", "phosphorus", "potassium", "rainfall"].map((field) => (
                    <div className="mb-3" key={field}>
                        <label className="form-label text-capitalize">{field}</label>
                        <input
                            type="number"
                            className="form-control"
                            name={field}
                            value={soilData[field]}
                            onChange={handleChange}
                            placeholder={`Enter ${field}`}
                            required
                        />
                    </div>
                ))}
                <button className="btn btn-success w-100">Analyze</button>
            </form>
        </div>
    );
}
