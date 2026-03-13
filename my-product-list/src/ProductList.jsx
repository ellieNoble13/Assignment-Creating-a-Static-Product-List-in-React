import React from 'react';

const ProductList = () => {
    const products = [
        { id: 64, name: "Commodore 64", description: "64KB of RAM. The legend returns. Includes BASIC V2.", price: 595.00 },
        { id: 1541, name: "1541 Disk Drive", description: "Fast (enough) loading for all your 5.25 inch floppies.", price: 399.00 },
        { id: 10, name: "1702 Color Monitor", description: "Crisp 320x200 resolution. Perfect for GEOS.", price: 250.00 },
        { id: 1351, name: "1351 Mouse", description: "Two buttons. One ball. Maximum precision for KoalaPad.", price: 49.99 }
    ];

    return (
        <div className="c64-viewport">
            <header className="c64-header">
                <p>**** COMMODORE 64 BASIC V2 ****</p>
                <p>64K RAM SYSTEM  38911 BASIC BYTES FREE</p>
                <p>READY.</p>
                <p className="load-command">LOAD "PRODUCT_LIST",8,1</p>
            </header>

            <div className="product-grid">
                {products.map((p) => (
                    <div key={p.id} className="c64-card">
                        <h2 className="p-name">{p.name}</h2>
                        <p className="p-desc">{p.description}</p>
                        <p className="p-price">${p.price.toFixed(2)}</p>
                        <div className="p-footer">SEARCHING...FOUND</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;