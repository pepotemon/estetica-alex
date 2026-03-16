import Button from "./Button";
import { waLink, telLink } from "./content";

export default function FinalCTA({
    phone,
    displayPhone,
}: {
    phone: string;
    displayPhone: string;
}) {
    return (
        <section className="cta-final">
            <h2>
                ¿No sabes
                <br />
                <em>por dónde empezar?</em>
            </h2>
            <p>
                Te hacemos una valoración gratuita y sin compromiso para orientarte hacia los
                mejores resultados para ti. Cada persona es diferente.
            </p>

            <div className="cta-btns">
                <Button
                    href={waLink("Hola! Me gustaría una valoración gratuita sin compromiso.")}
                    variant="gold"
                >
                    📲 Valoración gratuita por WhatsApp
                </Button>
                <Button href={telLink()} variant="outline">
                    📞 {displayPhone}
                </Button>
            </div>
        </section>
    );
}