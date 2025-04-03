const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

async function generateSitemap() {
    const sitemap = new SitemapStream({ hostname: "https://lamborghini-aventador.vercel.app" });

    const pages = [
        { url: "/", changefreq: "monthly", priority: 1.0 },
        { url: "/discoverExcellence", changefreq: "monthly", priority: 0.8 },
        { url: "/legacy", changefreq: "monthly", priority: 0.8 },
        { url: "/conncet", changefreq: "monthly", priority: 0.8}
    ];

    pages.forEach(page => sitemap.write(page));
    sitemap.end();

    const data = await streamToPromise(sitemap);
    createWriteStream("./public/sitemap.xml").write(data);
}

generateSitemap();