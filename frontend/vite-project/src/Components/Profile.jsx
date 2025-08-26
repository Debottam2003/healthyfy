import React from "react";

function Profile() {
  const likedRecipes = [
    { id: 1, name: "Paneer Tikka", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Masala Dosa", img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Butter Chicken", img: "https://images.unsplash.com/photo-1600628422019-6c3d8e8e8e3b?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Chole Bhature", img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=400&q=80" },
    { id: 5, name: "Idli Sambhar", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
    { id: 6, name: "Rajma Chawal", img: "https://images.unsplash.com/photo-1523987355523-c7b5b0723c6a?auto=format&fit=crop&w=400&q=80" },
    { id: 7, name: "Biryani", img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80" },
    { id: 8, name: "Dal Makhani", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
  ];

  const styles = {
    page: {
      width: "100vw",
      minHeight: "100vh",
      background: "#fafafa",
      fontFamily: "Segoe UI, sans-serif",
      display: "flex",
      flexDirection: "column",
      color: "#222",
      margin: 0,
      padding: 0,
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
      background: "#111",
      color: "#fff",
      border: "none",
      borderRadius: 24,
      padding: "10px 24px",
      fontSize: 16,
      fontWeight: 600,
      cursor: "pointer",
      boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
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
        <div style={styles.username}>USER</div>
        <div style={styles.country}>INDIAN</div>
        <button
          style={styles.logoutBtn}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Log Out
        </button>
      </div>

      {/* Full Screen Grid */}
      <div style={styles.gridWrapper}>
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
      </div>
    </div>
  );
}

export default Profile;
