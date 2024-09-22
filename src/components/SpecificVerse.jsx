import { useState } from "react";
import axios from "axios";

function SpecificVerse() {
    const [verseId, setVerseId] = useState("John 3:16-17");
    const [displayText, setDisplayText] = useState("");
    
    const fetchSpecificVerse = async (event) => {
        event.preventDefault();
        try {
			const formattedVerseId = verseId.replace(/ /g, "+");
            const response = await axios.get(
                `https://labs.bible.org/api/?passage=${verseId}`
            );
            console.log("API Response:", response.data);
            setDisplayText(response.data);
        } catch (error) {
            console.log("Error fetching data:", error);
            setDisplayText("Failed to fetch the verse. Please try again.");
        }
    };

    return (
        <>
            <h2>{displayText || "Enter a verse to fetch"}</h2>
            <p>Type a verse (e.g., John 3:16-17) and press "Get Verse".</p>
            <form onSubmit={(event) => fetchSpecificVerse(event)}>
                <input 
                    type="text" 
                    value={verseId} 
                    onChange={(e) => setVerseId(e.target.value)} 
                    placeholder="Enter verse" 
                />
                <input type="submit" value="Get Verse" />
            </form>
        </>
    );
}

export default SpecificVerse;
