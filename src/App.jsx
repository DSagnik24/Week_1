import { useState } from "react";
import SoilForm from "./components/SoilForm";
import Result from "./components/Result";
import { analyzeSoilAndRecommend } from "./services/geminiService";

export default function App() {
    const [recommendation, setRecommendation] = useState("");

    const handleAnalyze = async (soilData) => {
        setRecommendation("⏳ Analyzing...");
        try {
            const result = await analyzeSoilAndRecommend(soilData);
            setRecommendation(result);
        } catch (err) {
            setRecommendation("❌ Error fetching recommendation");
            console.error(err);
        }
    };

    return (
        <div className="container my-5">
            <h1 className="text-center text-success mb-4 fw-bold">🌾 Agri Analysis App</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <SoilForm onAnalyze={handleAnalyze} />
                    {recommendation && <Result recommendation={recommendation} />}
                </div>
            </div>
        </div>
    );
}
