import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

function RecipeCard() {
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('https://api.example.com/recipes');
  //     const data = await response.json();
  //     console.log(data);
  //   }
  // },[]);
  return (
    <div className='cards' style={{
      maxWidth: '350px',
      border: '1px solid #000000ff',
      borderRadius: '16px',
      boxShadow: '0 0px 10px gold',
      overflow: 'hidden',
      background: '#000000fc',
      fontFamily: 'cursive',
      color: '#ddddddff',
    }}>
      <img
        src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2024-05-pad-see-ew%2Fpad-see-ew-357"
        alt="Recipe"
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '16px' }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '1.5rem', color: '#ddddddff' }}>Delicious Avocado Toast</h2>
        <p style={{ margin: '0 0 12px 0', color: '#ddddddff' }}>
          Creamy avocado on toasted sourdough, topped with chili flakes and a drizzle of olive oil.
        </p>
        <div>Italian</div><br />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', color: '#ddddddff' }}>
          <span>❤️100 Likes</span>
          <span>🔴 Non Veg </span>
        </div>
        <button
          style={{
            marginTop: '16px',
            width: '100%',
            padding: '10px 0',
            background: 'linear-gradient(90deg, #b01f14ff 0%, #f9c938ff 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
        >
          View Recipe
        </button>
      </div>
    </div>
  )
}

export default RecipeCard