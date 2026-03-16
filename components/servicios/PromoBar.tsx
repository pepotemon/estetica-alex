export default function PromoBar({
    promoText,
    displayPhone,
}: {
    promoText: string;
    displayPhone: string;
}) {
    return (
        <div className="promo-bar">
            {promoText}
            <span>·</span>
            Plazas limitadas
            <span>·</span>
            Llámanos al {displayPhone}
        </div>
    );
}