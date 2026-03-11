import Product from "./Product";
import React from "react";
function Products() {

    const products = [
        {
            productId: 1,
            name: "AirPods Pro",
            price: 249,
            brand: "Apple",
            description: "Active noise cancellation with adaptive transparency mode and spatial audio for immersive sound.",
            image: "https://www.google.com/imgres?q=apple%20airpods&imgurl=https%3A%2F%2Fstore.storeimages.cdn-apple.com%2F1%2Fas-images.apple.com%2Fis%2Fog-airpods-4-202409%3Fwid%3D1200%26hei%3D630%26fmt%3Djpeg%26qlt%3D90%26.v%3D1724144134014&imgrefurl=https%3A%2F%2Fwww.apple.com%2Fin%2Fshop%2Fbuy-airpods%2Fairpods-4&docid=TsmqM7nyBo1ahM&tbnid=l6GrE957UW-ypM&vet=12ahUKEwiKqvfv7ZaTAxVlXGwGHV9YJ_0QnPAOegQIGxAB..i&w=1200&h=630&hcb=2&ved=2ahUKEwiKqvfv7ZaTAxVlXGwGHV9YJ_0QnPAOegQIGxAB"
        },
        {
            productId: 2,
            name: "Galaxy Watch 6",
            price: 299,
            brand: "Samsung",
            description: "Advanced health monitoring with BioActive sensor, sleep coaching and 40 hour battery life.",
            image: "https://www.google.com/imgres?q=Galaxy%20Watch%206&imgurl=https%3A%2F%2Fimages.samsung.com%2Fhk_en%2Fgalaxy-watch6%2Ffeature%2Fgalaxy-watch6-kv-pc.jpg&imgrefurl=https%3A%2F%2Fwww.samsung.com%2Fhk_en%2Fwatches%2Fgalaxy-watch%2Fgalaxy-watch6-40mm-gold-bluetooth-sm-r930nzeatgy%2F&docid=LOwsmOJPKMPL-M&tbnid=1WVlJM3mnxzjuM&vet=12ahUKEwjbm-OM7paTAxW3XWwGHdePBY8QnPAOegQIGRAB..i&w=1328&h=620&hcb=2&ved=2ahUKEwjbm-OM7paTAxW3XWwGHdePBY8QnPAOegQIGRAB"
        },
        {
            productId: 3,
            name: "MX Master 3S",
            price: 99,
            brand: "Logitech",
            description: "Ultra-fast scrolling, ergonomic design and near-silent clicks for all-day productivity.",
            image: "https://www.google.com/imgres?q=Logitech&imgurl=https%3A%2F%2Fwww.primeabgb.com%2Fwp-content%2Fuploads%2F2025%2F08%2FLogitech-G502-LIGHTSPEED-Wireless-Gaming-Mouse.jpg&imgrefurl=https%3A%2F%2Fwww.primeabgb.com%2Fonline-price-reviews-india%2Flogitech-g502-lightspeed-wireless-gaming-mouse%2F&docid=azIN88WIjl0sFM&tbnid=U16qjmX6OxymNM&vet=12ahUKEwik9LeS7paTAxWGXmwGHV3BGbcQnPAOegQIJRAB..i&w=500&h=500&hcb=2&ved=2ahUKEwik9LeS7paTAxWGXmwGHV3BGbcQnPAOegQIJRAB"
        },
        {
            productId: 4,
            name: "MacBook Air M3",
            price: 1299,
            brand: "Apple",
            description: "Supercharged by M3 chip with 18-hour battery life and a stunning Liquid Retina display.",
            image: "https://www.google.com/imgres?q=macbook%20air%20m3&imgurl=https%3A%2F%2Fwww.apple.com%2Fv%2Fmacbook-air%2Fy%2Fimages%2Foverview%2Fhighlights%2Fstorage__ycmn2gj0yj66_large.jpg&imgrefurl=https%3A%2F%2Fwww.apple.com%2Fin%2Fmacbook-air%2F&docid=wNVq-OviX7cfeM&tbnid=_Dxe-EO5NVfVKM&vet=12ahUKEwjU09yO7paTAxWSTWwGHeNaDMEQnPAOegQIIRAB..i&w=696&h=452&hcb=2&itg=1&ved=2ahUKEwjU09yO7paTAxWSTWwGHeNaDMEQnPAOegQIIRAB"
        },
        {
            productId: 5,
            name: "Sony WH-1000XM5",
            price: 349,
            brand: "Sony",
            description: "Industry-leading noise cancellation with 30-hour battery and crystal clear hands-free calling.",
            image: "https://www.google.com/imgres?q=Sony%20WH-1000XM5&imgurl=https%3A%2F%2Fwww.sony.co.in%2Fimage%2F623af7b9b246c988fc3f3264a4de278c%3Ffmt%3Dpng-alpha%26wid%3D1578%26hei%3D1050%26bgcolor%3DF6F9FF&imgrefurl=https%3A%2F%2Fwww.sony.co.in%2Felectronics%2Fheadband-headphones%2Fwh-1000xm5&docid=BjsLR7adnxEl8M&tbnid=5XnPikbUKztGHM&vet=12ahUKEwjNrsDd7paTAxU7RmwGHad2BmwQnPAOegQIHRAB..i&w=1578&h=1050&hcb=2&ved=2ahUKEwjNrsDd7paTAxU7RmwGHad2BmwQnPAOegQIHRAB"
        },
        {
            productId: 6,
            name: "iPad Mini 6",
            price: 499,
            brand: "Apple",
            description: "Portable powerhouse with A15 Bionic chip, USB-C connectivity and all-day battery life.",
            image: "https://www.google.com/imgres?q=iPad%20Mini%206&imgurl=https%3A%2F%2Fwww.apple.com%2Fnewsroom%2Fimages%2Fproduct%2Fipad%2Fstandard%2FApple_iPad-mini_colors_09142021_big_carousel.jpg.slideshow-large_2x.jpg&imgrefurl=https%3A%2F%2Fwww.apple.com%2Fin%2Fnewsroom%2F2021%2F09%2Fapple-unveils-new-ipad-mini-with-breakthrough-performance-in-stunning-new-design%2F&docid=fbZR6J2D5S1V8M&tbnid=8S58IWxyesSauM&vet=12ahUKEwiKh8_I7paTAxWBQ2cHHbnHO_0QnPAOegQIFxAB..i&w=2548&h=1698&hcb=2&ved=2ahUKEwiKh8_I7paTAxWBQ2cHHbnHO_0QnPAOegQIFxAB"
        },
        {
            productId: 7,
            name: "Mechanical Keyboard K3",
            price: 89,
            brand: "Keychron",
            description: "Compact wireless mechanical keyboard with RGB backlight and multi-device Bluetooth support.",
            image: "https://www.google.com/imgres?q=Mechanical%20Keyboard%20K3%22&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61x3nRatR9L.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FKeychron-Ultra-Slim-Mechanical-Low-Profile-Compatible%2Fdp%2FB08LSJ4RHH&docid=ktmskRk1CZEv7M&tbnid=dGYus_fMjqAiuM&vet=12ahUKEwjVkbP37paTAxW0TGwGHcl-H2IQnPAOegQIGxAB..i&w=2000&h=2000&hcb=2&ved=2ahUKEwjVkbP37paTAxW0TGwGHcl-H2IQnPAOegQIGxAB"
        },
        {
            productId: 8,
            name: "Dell UltraSharp 27\"",
            price: 579,
            brand: "Dell",
            description: "4K IPS display with factory-calibrated color accuracy and USB-C 90W power delivery.",
            image: "https://www.google.com/imgres?q=Dell%20UltraSharp%2027%5C&imgurl=https%3A%2F%2Fi.dell.com%2Fis%2Fimage%2FDellContent%2Fcontent%2Fdam%2Fss2%2Fproduct-images%2Fdell-client-products%2Fperipherals%2Fmonitors%2Fu-series%2Fu2724de%2Fpdp%2Fultrasharp-u2724de-pdp-hero.psd%3Fqlt%3D95%26fit%3Dconstrain%2C1%26hei%3D350%26wid%3D504%26fmt%3Dpng-alpha&imgrefurl=https%3A%2F%2Fwww.dell.com%2Fen-in%2Fshop%2Fdell-ultrasharp-27-thunderbolt-hub-monitor-u2724de%2Fapd%2F210-bkmc%2Fmonitors-monitor-accessories&docid=hP_N7iCf4Q2JgM&tbnid=BHAaXlsEY3onUM&vet=12ahUKEwjXmamM75aTAxVaXGwGHQ3sNhUQnPAOegQIKRAB..i&w=434&h=350&hcb=2&ved=2ahUKEwjXmamM75aTAxVaXGwGHQ3sNhUQnPAOegQIKRAB"
        },
        {
            productId: 9,
            name: "Pixel 8 Pro",
            price: 999,
            brand: "Google",
            description: "Google AI built-in with pro-level camera system, 7 years of updates and real-time call translation.",
            image: "https://www.google.com/imgres?q=pixel%208%20pro&imgurl=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2F5Ay3BFLBgjZiWdqy6dxqng.jpg&imgrefurl=https%3A%2F%2Fwww.tomsguide.com%2Fphones%2Fgoogle-pixel-phones%2Five-been-using-the-pixel-8-pro-for-nearly-6-months-what-i-love-and-hate&docid=cU9h5dt5WMOSEM&tbnid=1jgJpbqlUiE2GM&vet=12ahUKEwio19eV75aTAxXlTGwGHVA3MAMQnPAOegQIZBAB..i&w=5154&h=2899&hcb=2&ved=2ahUKEwio19eV75aTAxXlTGwGHVA3MAMQnPAOegQIZBAB"
        },
        {
            productId: 10,
            name: "Portable SSD T9",
            price: 119,
            brand: "Samsung",
            description: "Blazing-fast 2000MB/s transfer speeds in a compact, shock-resistant portable drive.",
            image: "https://www.google.com/imgres?q=Portable%20SSD%20T9.&imgurl=https%3A%2F%2Fgeekawhat.com%2Fwp-content%2Fuploads%2F2023%2F10%2FSamsung-T9-Portable-SSD-Feature-Image.jpg&imgrefurl=https%3A%2F%2Fgeekawhat.com%2Fsamsung-t9-portable-external-ssd-review%2F&docid=pVnNUMv--LJaRM&tbnid=2v2audEqIKqwxM&vet=12ahUKEwjrp-Wn75aTAxVPd2wGHVX-DG8QnPAOegQIFhAB..i&w=1200&h=675&hcb=2&ved=2ahUKEwjrp-Wn75aTAxVPd2wGHVX-DG8QnPAOegQIFhAB"
        }
    ]

    return (
        <div>
            <h1 className="text-4xl font-extrabold text-amber-300 bg-amber-950 text-center p-5 ">OUR collection </h1>
            <div className="grid-cols-4 bg-grey-300 text-center p-10">
                {products.map((item)=>(
                    <Product
                    key={item.productId }
                    name={item.name}
                    price={item.price}
                    brand={item.brand}
                    description={item.description}
                    image={item.image} />
                ))}
            </div>
        </div>

    )
}
export default Products;
