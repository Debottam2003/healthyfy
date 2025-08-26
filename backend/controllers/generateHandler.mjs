import ai from "../ai.mjs";
import * as fs from "node:fs";
import errorHandler from "../error.mjs";

const generateHandler = async (req, res) => {
    async function main() {

        const dishname = "chicken";
        const contents =
            ` generate an vibrent colorful image of ${dishname} and Give me a detailed step-by-step recipe for ${dishname} in html all text should be in html format and donot add (##, **, \`\` these characters in the text reponse) strict format should be:  
  <body>
  <h1>Paneer Butter Masala</h1>
  <p>A rich and creamy Indian curry made with paneer (Indian cheese), tomatoes, butter, and a blend of aromatic spices.</p>

  <h2>Ingredients:</h2>
  <h3>For the Paneer:</h3>
  <ul>
   <li>200g paneer, cut into cubes</li>
   <li>1/4 teaspoon salt</li>
   <li>1 tablespoon oil</li>
  </ul>

  <h3>For the Gravy:</h3>
  <ul>
   <li>2 tablespoons butter</li>
   <li>1 large onion, finely chopped</li>
   <li>1 tablespoon ginger-garlic paste</li>
   <li>Fresh coriander leaves, for garnish</li>
  </ul>

  <h2>Instructions:</h2>
  <h3>Preparing the Paneer:</h3>
  <ol>
   <li>Heat oil in a non-stick pan over medium heat.</li>
   <li>Lightly sauté the paneer cubes until they are light golden brown on all sides. Be careful not to overcook them.</li>
   <li>Remove the paneer from the pan and set aside.</li>
  </ol>

  <h3>Making the Gravy:</h3>
  <ol>
   <li>In the same pan, add butter and let it melt over medium heat.</li>
   <li>Add the chopped onions and sauté until they are golden brown.</li>
   <li>Serve hot with naan, roti, or rice.</li>
  </ol>
 </body>
 strict donot add: I will generate an HTML recipe for Panta Bhat following the exact format you provided, and then I will create a vibrant and colorful image of Panta Bhat. these type of any lines`;

        // Set responseModalities to include "Image" so the model can generate  an image
        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash-preview-image-generation",
                contents: contents,
                config: {
                    responseModalities: [Modality.TEXT, Modality.IMAGE],
                },
            });
            console.log(response.candidates[0].content.parts);
            let recipeText = "";
            let buffer;
            for (const part of response.candidates[0].content.parts) {
                // Based on the part type, either show the text or save the image
                if (part.text) {
                    recipeText = part.text.replace(/\*/g, '').replace(/#+\s/g, '').replace(/`/g, '');
                    // .replace(/i will generate[\s\S]*$/gi, '');
                    fs.writeFileSync("./recipe.txt", recipeText, "utf-8");
                    console.log(recipeText);
                } else if (part.inlineData) {
                    const imageData = part.inlineData.data;
                    buffer = Buffer.from(imageData, "base64");
                    // console.log(buffer.toString("base64"));
                    fs.writeFileSync(`../public/images/img${Date.now()}.png`, buffer);
                    console.log("Image saved");
                }
            }
            res.json({ recipe: recipeText, image: buffer });
        } catch (error) {
            console.error("Error generating content:", error);
            errorHandler(req, res);
        }
        main();
    }
}
export default generateHandler;