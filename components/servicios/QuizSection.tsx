import type { QuizKey } from "./types";

export default function QuizSection({
    id,
    quizData,
    quizKey,
    activeQuiz,
    onSelectQuiz,
    onViewTreatments,
}: {
    id: string;
    quizData: Record<
        QuizKey,
        { icon: string; label: string; text: string; tab: string; link: string }
    >;
    quizKey: QuizKey | null;
    activeQuiz:
    | { icon: string; label: string; text: string; tab: string; link: string }
    | null;
    onSelectQuiz: (key: QuizKey) => void;
    onViewTreatments: () => void;
}) {
    return (
        <section className="quiz-section relative overflow-hidden" id={id}>

            {/* HERO BACKGROUND */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="/images/hero-objetivo.jpg"
                    alt=""
                    className="w-full h-full object-cover blur-[1px] scale-105"
                />

                {/* overlay elegante */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/90" />
            </div>

            <div className="quiz-inner relative z-10">
                <p className="quiz-sub">¿QUÉ QUIERES CONSEGUIR?</p>

                <h2 className="quiz-title">
                    Encuentra tu tratamiento ideal
                </h2>

                <p className="quiz-sub" style={{ marginTop: 6 }}>
                    Selecciona tu objetivo y te orientamos al momento
                </p>

                <div className="quiz-grid">
                    {(Object.keys(quizData) as QuizKey[]).map((key) => {
                        const q = quizData[key];

                        return (
                            <button
                                key={key}
                                className={`quiz-btn ${quizKey === key ? "active" : ""}`}
                                onClick={() => onSelectQuiz(key)}
                                type="button"
                            >
                                <span className="qicon">{q.icon}</span>
                                {q.label}
                            </button>
                        );
                    })}
                </div>

                {activeQuiz ? (
                    <div className="quiz-result" id="objetivo">
                        <p>✦ {activeQuiz.text}</p>

                        <div className="quiz-links">
                            <a
                                href={activeQuiz.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                → Consultar por WhatsApp
                            </a>

                            <button
                                type="button"
                                onClick={onViewTreatments}
                            >
                                → Ver tratamientos
                            </button>
                        </div>
                    </div>
                ) : null}

            </div>
        </section>
    );
}