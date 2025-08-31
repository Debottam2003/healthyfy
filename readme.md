# Healthyfy 

# 🍳 AI-Integrated Recipe Website     
[![Version](https://img.shields.io/badge/version-1.0.0-blue)]()  
[![Hosting](https://img.shields.io/badge/contributions-open-green.svg)]() 

A **smart recipe platform** that leverages **AI to generate personalized recipes, suggest meal plans, and provide 7 Nationality, [Indian,Chinese,Italian,Mexican,Japnese,Thai,French] favourite Cuisines based on your Taste**. Built for food enthusiasts, home cooks, and anyone who wants intelligent recipe suggestions with a modern user experience.

---

## 📑 Table of Contents
- [**Features**](#features)  
- [**Tech Stack**](#tech-stack)  
- [**Architecture**](#architecture)    
- [**Recipes**](#recipes)      
- [**Usage**](#usage)
- [**AI Integration**](#ai-integration)     
- [**Challanges**](#Challanges)  
- [**Deployment**](#deployment)   
- [**Contact**](#contact)  

---

## ⭐ Features
✔ **AI-powered Recipe Generator** – **Get personalized recipes based on ingredients or diet preferences**.  
✔ **Meal Planning** – AI-generated weekly meal plans (**Personalized**).  
✔ **Search & Filter** – Search recipes by cuisine,Veg or Non Veg.  
✔ **User Profiles & Favorites** – **Save favorite recipes and track history**.  
✔ **Responsive Design [Future Updates]** – **Mobile and Tablet friendly interface (To be released in upcoming versions**).  

---

## 🛠 Tech Stack
- **Frontend:** React + Vite (with CSS-3 for styling).  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" alt="React" />  **+**
<img src="https://cdn.simpleicons.org/vite/646CFF" width="40" alt="Vite" />   **+**  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" alt="CSS3" />   

- **Backend:** Node.js, Express.js.  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" alt="Node.js" />  **+** <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />   

- **Database:** PostgreSQL [**Supabase Online DB**].  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="40" alt="PostgreSQL" />  

- **AI Integration:**  
**Model -> Gemini-2.0-Flash-Preview-Image-Generation [Imagen 4.0]  
NPM Package -> @google/genai** for recipes and Recipe-Images generations.  
<img src="https://cdn.simpleicons.org/googlegemini/ffffff" width="40" alt="Google Gemini" />   
- **Authentication:** JWT (JSON Web Token).  
<img src="https://jwt.io/img/pic_logo.svg" width="40" alt="JWT" />   

- **DevOps:** GitHub Actions (CI/CD).  
<img src="https://cdn.simpleicons.org/github/FFFFFF" width="40" alt="GitHub" /> 


---

## 🏗 Architecture
**High-level overview:**   
+---------------------+   
|   **React (Vite)UI**  |    
|   **(Frontend)**     |   
+----------+----------+    
           |   
           | REST API (HTTP)   
           v   
+----------+----------+   
|  **Express.js Server** |   
|  **(Backend API)**    |   
+----------+----------+   
           |   
           v   
 Database (PostgreSQL)   


 ---

 ## 🥓 Recipes
**Source :** **All continental recipes and their images are taken from the web for maintaining smooth server rendering.**


---

## 🔖 Usage in Own System

Explain how users can use the application in their system.

## Clone the repository
git clone https://github.com/Debottam2003/healthyfy

## Navigate to project directory
cd healthyfy

## Install dependencies
npm install

## Run development server
npm run dev

Open http://localhost:5173 for frontend (React with Vite).

API runs on http://localhost:3333 for backend (Express).	

# ⚠️ Challenges We've faced 

Prompt Engineering for stateful response.

Handling merge conflicts in collaborative environments.

Managing real-time updates with API calls.

Securing API keys and environment variables.

## 🚀 Deployment

# Frontend: Follow the URL - https://healthyfy-lzod.vercel.app/   

Deployed on **Vercel** using npm run build.   

# Backend: Follow the URL - https://healthyfy-1.onrender.com/healthyfy   

Deployed on **Render** with environment variables configured.   

## Steps: 
**1.Render may get the backend server closed(Temporaily) ,You need to wait for some time to let the backend server start [ Sorry for the inconvinence USER ].**    

**2.After some wait you can hit the Frontend URL....💌**

# 📬 Contact Us

**Name** – **Debottam Kar**.   
<img src="https://cdn.simpleicons.org/github/FFFFFF" width="20" alt="GitHub" /> https://github.com/Debottam2003   
<img src="https://cdn.simpleicons.org/gmail/EA4335" width="20" alt="Gmail" />
debottamkar2003@gmail.com

**Name** – **Shubhranil Karmakar**.   
<img src="https://cdn.simpleicons.org/github/FFFFFF" width="20" alt="GitHub" /> https://github.com/Shubh-2025     
<img src="https://cdn.simpleicons.org/gmail/EA4335" width="20" alt="Gmail" />
samratkarmakarnaihati@gmail.com

**Name** – **Gaganendra Mondal**.   
<img src="https://cdn.simpleicons.org/github/FFFFFF" width="20" alt="GitHub" /> https://github.com/Gaganandra-Mondal   
<img src="https://cdn.simpleicons.org/gmail/EA4335" width="20" alt="Gmail" /> mondalgaganandra@gamil.com
