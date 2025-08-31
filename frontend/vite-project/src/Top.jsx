import { useState } from "react";
import axios from "axios";

function Top({ stateChange }) {
  const colors = [
    "#FFB6B9",
    "#FFDAC1",
    "#E2F0CB",
    "#B5EAD7",
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
    try {
      let response = await axios.post(
        "https://healthyfy-1.onrender.com/healthyfy/veg_nonveg",
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

  async function sortCuisine(e, cuisine) {
    try {
      let response = await axios.post(
        "https://healthyfy-1.onrender.com/healthyfy/sortcuisine",
        {
          cuisine,
        },
        { withCredentials: true }
      );
      if (response.status === 200 || response.statusText === "OK") {
        stateChange(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // Cuisine data
  const cuisines = [
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
  ];

  return (
    <div style={{ position: "relative", padding: "0.5rem 0" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          padding: "0.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Veg/Non-Veg Toggle */}
        <div
          onClick={toggle}
          style={{
            textAlign: "center",
            alignContent: "center",
            minWidth: "120px",
            width: "100%",
            maxWidth: "150px",
            backgroundImage: isVeg
              ? "linear-gradient(90deg, rgb(18, 130, 64) 0%, rgba(162, 206, 72, 1) 100%)"
              : "linear-gradient(90deg, rgb(176, 31, 20) 0%, rgb(249, 201, 56) 100%)",
            borderRadius: "12px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
            padding: "12px",
            transition: "transform 0.2s",
            border: "1px solid #eee",
            cursor: "pointer",
            flexShrink: 0,
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <div
            style={{
              fontWeight: 600,
              fontSize: "clamp(14px, 3vw, 15px)",
              color: "white",
              fontFamily: "arial",
            }}
          >
            <h3 style={{ margin: 0 }}>{isVeg ? "ALL VEG" : "NON VEG"}</h3>
          </div>
        </div>

        {/* Cuisine Buttons */}
        {cuisines.map((cuisine, idx) => (
          <div
            key={cuisine.name}
            onClick={(e) => {
              sortCuisine(e, cuisine.name);
            }}
            style={{
              textAlign: "center",
              minWidth: "100px",
              width: "100%",
              maxWidth: "130px",
              background: colors[idx % colors.length],
              borderRadius: "12px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
              padding: "12px",
              transition: "transform 0.2s",
              border: "1px solid #eee",
              cursor: "pointer",
              flexShrink: 0,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src={cuisine.img}
              alt={cuisine.name}
              style={{
                width: "100%",
                height: "72px",
                borderRadius: "8px",
                objectFit: "cover",
                marginBottom: "8px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              }}
            />
            <div
              style={{
                fontWeight: 600,
                fontSize: "clamp(13px, 2.5vw, 15px)",
                wordWrap: "break-word",
              }}
            >
              {cuisine.name}
            </div>
          </div>
        ))}
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .cuisine-container {
            gap: 0.8rem !important;
          }
          
          .cuisine-item {
            min-width: 90px !important;
            max-width: 110px !important;
            padding: 0.8rem !important;
          }
          
          .cuisine-image {
            height: 60px !important;
          }
        }
        
        @media (max-width: 480px) {
          .cuisine-container {
            gap: 0.6rem !important;
            padding: 0.25rem !important;
          }
          
          .cuisine-item {
            min-width: 80px !important;
            max-width: 95px !important;
            padding: 0.6rem !important;
          }
          
          .cuisine-image {
            height: 50px !important;
          }
        }
        
        @media (min-width: 1200px) {
          .cuisine-container {
            gap: 1.5rem !important;
          }
          
          .cuisine-item {
            min-width: 140px !important;
            max-width: 160px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Top;
