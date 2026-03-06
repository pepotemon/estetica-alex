import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://alexesteticanarias.com/sitemap.xml", // cambia luego al dominio real
    };
}