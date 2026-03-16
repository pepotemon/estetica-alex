import type { SiteConfig, TabConfig, TabId } from "./types";
import { waLink } from "./content";

export default function Footer({
    site,
    tabs,
    onSwitchTab,
}: {
    site: SiteConfig;
    tabs: TabConfig[];
    onSwitchTab: (id: TabId) => void;
}) {
    return (
        <footer className="footer-lux">
            <div className="footer-inner">
                <div className="footer-brand">
                    <div className="logo">ALEX ESTÉTICA</div>
                    <p>
                        {site.address}
                        <br />
                        {site.locality}
                        <br />
                        <br />
                        Tel.: {site.displayPhone}
                        <br />
                        Lun–Sáb: 9:00–20:00
                    </p>
                </div>

                <div className="footer-links">
                    <h5>Tratamientos</h5>
                    {tabs.map((tab) => (
                        <button key={tab.id} type="button" onClick={() => onSwitchTab(tab.id)}>
                            {tab.introTitle}
                        </button>
                    ))}
                </div>

                <div className="footer-links">
                    <h5>Centro</h5>
                    <a href="/sobre">Sobre Nosotros</a>
                    <a href={waLink("Hola! Quiero información sobre tratamientos.")} target="_blank" rel="noreferrer">
                        WhatsApp
                    </a>
                    <a href={site.mapsUrl} target="_blank" rel="noreferrer">
                        Google Maps
                    </a>
                    <a href="#">Política de privacidad</a>
                    <a href="#">Aviso legal</a>
                </div>
            </div>

            <div className="footer-bottom">
                <span>© {new Date().getFullYear()} Alex Estética · Gran Canaria</span>
                <span>Diseñado con ♥ en Vecindario</span>
            </div>
        </footer>
    );
}