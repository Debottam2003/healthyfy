import React from 'react'

function Top() {
return (
    <div>
        <div style={{ display: 'flex', gap: '24px', overflowX: 'auto', padding: '16px 0' }}>
            {[
                { name: 'Italian', img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80' },
                { name: 'Chinese', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80' },
                { name: 'Indian', img: 'https://images.squarespace-cdn.com/content/v1/612d4825ee7c3b7ba3e215b7/1667458982443-N6XGU1PU7335QEMVUP7M/Delicious+food.png' },
                { name: 'Mexican', img: 'https://t3.ftcdn.net/jpg/01/08/74/94/360_F_108749462_n5gFesQla84wyfXTDUEG8zNochvWQXx4.jpg' },
                { name: 'Japanese', img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=200&q=80' },
                { name: 'Thai', img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=200&q=80' },
                { name: 'French', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80' },
                { name: 'American', img: 'https://www.ibnbattutamall.com/uploads/blogs/123.jpg' },
            ].map(cuisine => (
                <div
                    key={cuisine.name}
                    style={{
                        textAlign: 'center',
                        minWidth: 120,
                        background: '#fff',
                        borderRadius: 12,
                        boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                        padding: 12,
                        transition: 'transform 0.2s',
                        border: '1px solid #eee',
                        cursor: 'pointer',
                    }}
                >
                    <img
                        src={cuisine.img}
                        alt={cuisine.name}
                        style={{
                            width: 96,
                            height: 72,
                            borderRadius: 8,
                            objectFit: 'cover',
                            marginBottom: 8,
                            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                        }}
                    />
                    <div style={{ fontWeight: 600, fontSize: 15 }}>{cuisine.name}</div>
                </div>
            ))}
        </div>
    </div>
)
}

export default Top