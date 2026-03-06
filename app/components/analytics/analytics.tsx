"use client";

import Script from "next/script";
import React from "react";

const CONSENT_KEY = "ae_cookie_consent_v1";
// ajusta este key al que uses en tu banner (por ejemplo: "cookie-consent" o similar)

export default function Analytics() {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

    const hasGA = !!gaId && gaId !== "G-XXXXXXXXXX";
    const hasPixel = !!pixelId && pixelId !== "123456789012345";

    // ✅ clave: no renderizar nada hasta que el componente monte en el cliente
    const [mounted, setMounted] = React.useState(false);
    const [allowed, setAllowed] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);

        // ✅ Lee consentimiento SOLO en cliente
        try {
            const v = localStorage.getItem(CONSENT_KEY);
            // define tu criterio:
            // - si guardas "all" cuando aceptan → usamos v === "all"
            // - si guardas "true" → usamos v === "true"
            try {
                const parsed = v ? JSON.parse(v) : null;
                setAllowed(parsed?.analytics || parsed?.marketing);
            } catch {
                setAllowed(false);
            }
        } catch {
            setAllowed(false);
        }

        // ✅ opcional: si tu banner dispara un evento cuando aceptan cookies,
        // puedes escuchar y activar sin recargar
        const onConsent = () => {
            try {
                const v2 = localStorage.getItem(CONSENT_KEY);
                setAllowed(v2 === "all" || v2 === "true" || v2 === "accepted");
            } catch { }
        };

        window.addEventListener("ae:consent", onConsent);
        return () => window.removeEventListener("ae:consent", onConsent);
    }, []);

    // ✅ Server y primer render del cliente: ambos null → NO hydration error
    if (!mounted) return null;

    // ✅ Si no hay consentimiento, no cargamos nada
    if (!allowed) return null;

    return (
        <>
            {/* Google Analytics 4 */}
            {hasGA ? (
                <>
                    <Script
                        strategy="afterInteractive"
                        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                    />
                    <Script id="ga4" strategy="afterInteractive">
                        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
                    </Script>
                </>
            ) : null}

            {/* Meta Pixel */}
            {hasPixel ? (
                <>
                    <Script id="meta-pixel" strategy="afterInteractive">
                        {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
            `}
                    </Script>

                    {/* ✅ Noscript OK, pero ya solo aparece DESPUÉS de montar → sin mismatch */}
                    <noscript>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            height="1"
                            width="1"
                            style={{ display: "none" }}
                            src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                            alt=""
                        />
                    </noscript>
                </>
            ) : null}
        </>
    );
}