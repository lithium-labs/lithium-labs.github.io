import { createWriteStream } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";


async function generate() {
    const sitemap = new SitemapStream({ hostname: 'https://lithium-labs.github.io' });
    const writeStream = createWriteStream('./public/sitemap.xml');
    sitemap.pipe(writeStream);

    sitemap.write({ url: '/', priority: 1.0 });
    sitemap.write({ url: '/about', priority: 0.8 });

    const products = ["nil", "doomsday"];

    products.forEach(item => {
        sitemap.write({ url: `/product/${item}`, priority: 0.7 });
    });

    sitemap.end();
    await streamToPromise(sitemap);
    console.log('Sitemap created in /public');
}

generate();