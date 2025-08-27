import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Profile() {
  const [username, setUsername] = useState("GUEST");
  const [nationality, setNationality] = useState("INTERNATIONAL");
  let navigate = useNavigate();
  useEffect(() => {
    async function getProfileData() {
      try {
        let response = await axios.get(
          "http://localhost:3333/healthyfy/profile",
          {
            withCredentials: true,
          }
        );
        // console.log(response.status);
        // console.log(response.statusText);
        let data = response.data;
        // console.log(data.name, data.nationality);
        setUsername(data.name.toUpperCase());
        setNationality(data.nationality.toUpperCase());
      } catch (error) {
        console.log(error.status === 401);
        navigate("/login");
        
      }
    }

    getProfileData();
  }, []);

  // const likedRecipes = [
  //   {
  //     id: 1,
  //     name: "Paneer Tikka",
  //     img: "https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x375.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Masala Dosa",
  //     img: "https://www.shutterstock.com/image-photo/paper-masala-dosa-south-indian-600nw-1008144772.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Butter Chicken",
  //     img: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400",
  //   },
  //   {
  //     id: 4,
  //     name: "Chole Bhature",
  //     img: "https://cdn.zeptonow.com/production///tr:w-600,ar-100-100,pr-true,f-auto,q-80/web/recipes/chola-bhatura.png",
  //   },
  //   {
  //     id: 5,
  //     name: "Pani Puri",
  //     img: "https://static01.nyt.com/images/2024/01/17/multimedia/ND-Pani-Puri-mflg/ND-Pani-Puri-mflg-mediumSquareAt3X.jpg",
  //   },
  //   {
  //     id: 6,
  //     name: "Marghertita Pizza",
  //     img: "https://www.acouplecooks.com/wp-content/uploads/2022/10/Margherita-Pizza-093.jpg",
  //   },
  //   {
  //     id: 7,
  //     name: "Chicken Biryani",
  //     img: "https://dindugalbiriyani.com/wp-content/uploads/2024/10/Chicken-Biryani-Recipe-1.jpg",
  //   },
  //   {
  //     id: 8,
  //     name: "Dal Makhani",
  //     img: "https://www.cookwithmanali.com/wp-content/uploads/2019/04/Restaurant-Style-Dal-Makhani.jpg",
  //   },
  // ];

  const styles = {
    page: {
      width: "95vw",
      minHeight: "100vh",
      background: "#fafafa",
      fontFamily: "Segoe UI, sans-serif",
      display: "flex",
      flexDirection: "column",
      color: "#222",
      margin: 0,
      padding: "2rem",
      boxSizing: "border-box",
    },
    header: {
      padding: "40px 20px 30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderBottom: "1px solid #eee",
      background: "#fff",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      zIndex: 2,
    },
    avatar: {
      width: 120,
      height: 120,
      borderRadius: "50%",
      border: "4px solid #fff",
      objectFit: "cover",
      marginBottom: 12,
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    username: {
      fontSize: 28,
      fontWeight: 700,
      marginBottom: 4,
    },
    country: {
      fontSize: 16,
      color: "#e53935",
      fontWeight: 600,
      letterSpacing: 2,
      marginBottom: 16,
    },
    logoutBtn: {
      background: "#0f701cff",
      color: "#fff",
      border: "none",
      borderRadius: 24,
      padding: "10px 24px",
      fontSize: 16,
      fontWeight: 600,
      cursor: "pointer",
      boxShadow: "0 3px 10px rgba(8, 153, 22, 0.15)",
      transition: "all 0.2s",
    },
    gridWrapper: {
      flex: 1,
      width: "100vw",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "stretch",
      alignItems: "stretch",
      overflow: "hidden",
    },
    grid: {
      flex: 1,
      width: "100vw",
      height: "100%",
      padding: "30px 20px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "24px",
      boxSizing: "border-box",
    },
    card: {
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      overflow: "hidden",
      transition: "transform 0.2s, box-shadow 0.3s",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      minHeight: 280,
      maxWidth: 320,
      margin: "0 auto",
    },
    img: {
      width: "100%",
      height: 180,
      objectFit: "cover",
      display: "block",
    },
    cardTitle: {
      padding: "16px",
      fontSize: 18,
      fontWeight: 600,
      color: "#333",
      borderTop: "1px solid #eee",
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.page}>
      {/* Profile Header */}
      <div style={styles.header}>
        <img
          style={styles.avatar}
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          alt="User Avatar"
        />
        <div style={styles.username}>{username}</div>
        <div style={styles.country}>{nationality}</div>
        <button
          style={styles.logoutBtn}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Log Out
        </button>
      </div>

      {/* Full Screen Grid */}
      {/* <div style={styles.gridWrapper}>
        <div style={styles.grid}>
          {likedRecipes.map((recipe) => (
            <div
              key={recipe.id}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
              }}
            >
              <img src={recipe.img} alt={recipe.name} style={styles.img} />
              <div style={styles.cardTitle}>{recipe.name}</div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Profile;
