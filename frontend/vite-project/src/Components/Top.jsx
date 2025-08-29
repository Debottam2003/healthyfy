import React, { useState } from "react";
import axios from "axios";

function Top({ stateChange }) {
  const colors = [
    "#FFB6B9",
    "#FFDAC1",
    "#E2F0CB",
    "#B5EAD7",
    "#B6E2D3",
    "#F6DFEB",
    "#C7CEEA",
    "#F9F9C5",
    "#F7C8E0",
    "#B8E0D2",
  ];
  const [isVeg, setIsVeg] = useState(false);
  async function toggle() {
    let currentState = !isVeg;
    setIsVeg(!isVeg);
    // stateChange([
    //   {
    //     rid: 101,
    //     name: "Dummy Data",
    //     imageurl: "https://sherohomefood.in/wp-content/uploads/2021/05/SHF_home-slide-1.jpg",
    //     likes_count: 5,
    //     type: "veg"
    //   },
    // ]);
    try {
      let response = await axios.post(
        "http://localhost:3333/healthyfy/veg_nonveg",
        {
          veg: currentState,
        }
      );
      if (response.statusText === "OK" || response.status === 200) {
        stateChange(response.data);
      }
    } catch (err) {
      console.log(err.message);
      console.log(err.response.data?.message);
    }
  }
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          gap: "24px",
          overflowX: "auto",
          padding: "16px 0",
          marginLeft: "15px",
        }}
      >
        <div
          onClick={toggle}
          style={{
            textAlign: "center",
            alignContent: "center",
            minWidth: 120,
            backgroundImage: isVeg
              ? "linear-gradient(90deg, rgb(18, 130, 64) 0%, rgba(162, 206, 72, 1) 100%"
              : "linear-gradient(90deg, rgb(176, 31, 20) 0%, rgb(249, 201, 56) 100%)",
            borderRadius: 12,
            boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
            padding: 12,
            transition: "transform 0.2s",
            border: "1px solid #eee",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              fontSize: 15,
              color: "white",
              fontFamily: "arial",
            }}
          >
            <h3>{isVeg ? "ALL VEG" : "NON VEG"}</h3>
          </div>
        </div>
        {[
          {
            name: "Italian",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5y7P42qtySGfGwbGH3Ap1Gb2O96qtWvrs93OL4m32bIl8v_EquVMkhgr8Rcq2-qF4rXQ&usqp=CAU",
          },
          {
            name: "Chinese",
            img: "https://i.natgeofe.com/n/075042a0-3420-4045-8024-c04b9017c5b8/chinwest-lake1_16x9.jpeg?w=1200",
          },
          {
            name: "Indian",
            img: "https://static.toiimg.com/photo/88162416/88162416.jpg",
          },
          {
            name: "Mexican",
            img: "https://images.barrons.com/im-90579652?width=700&height=423",
          },
          {
            name: "Japanese",
            img: "https://static.gltjp.com/glt/data/article/21000/20739/20240717_140359_b28ce51c_w1920.webp",
          },
          {
            name: "Thai",
            img: "https://i0.wp.com/travelbycarlavianna.com/wp-content/uploads/2020/02/DSC_0890.jpg?resize=1194%2C1493&ssl=1",
          },
          {
            name: "French",
            img: "https://images.squarespace-cdn.com/content/v1/5980e801d482e93f58785fef/1539916499767-ANCGBEYYWUGHYCUTYI65/PA011343.jpg?format=1500w",
          },
        ].map((cuisine, idx) => (
          <div
            key={cuisine.name}
            style={{
              textAlign: "center",
              minWidth: 120,
              background: colors[idx % colors.length],
              borderRadius: 12,
              boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
              padding: 12,
              transition: "transform 0.2s",
              border: "1px solid #eee",
              cursor: "pointer",
            }}
          >
            <img
              src={cuisine.img}
              alt={cuisine.name}
              style={{
                width: 96,
                height: 72,
                borderRadius: 8,
                objectFit: "cover",
                marginBottom: 8,
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              }}
            />
            <div style={{ fontWeight: 600, fontSize: 15 }}>{cuisine.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Top;
