const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

const app = express();
const port = 3000
app.use(cors());
app.use(express.json())

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
const GOOGLE_MAPS_API_BASE_URL = "https://maps.googleapis.com/maps/api/place/"

app.get('/', (req, res) => {
    res.send('Hello, this is your backend!');
  });

app.post('/place_details', async (req, res) => {
    try {
        console.log(req.body)
        const place_name = req.body.destination
        console.log(place_name)
        const response = await fetch(GOOGLE_MAPS_API_BASE_URL + 
        "findplacefromtext/json?inputtype=textquery&input=" + 
        place_name + "&key=" + GOOGLE_API_KEY)

        const id_data = await response.json();
        console.log(id_data)
        const place_id = id_data["candidates"][0]["place_id"]
        console.log(place_id)
        const place_det_res = await fetch(GOOGLE_MAPS_API_BASE_URL + "details/json?place_id=" + place_id +
        "&fields=formatted_address,name,website,price_level,photos&key=" + GOOGLE_API_KEY)
        const place_det_response = await place_det_res.json()

        console.log(place_det_response)

        const place_det_data = place_det_response["result"]
        const photo = GOOGLE_MAPS_API_BASE_URL + "photo?maxwidth=500&photo_reference=" + place_det_data["photos"][0]["photo_reference"] + "&key=" + GOOGLE_API_KEY
        const price_level = place_det_data["price_level"] ? place_det_data["price_level"] : "No price"
        const website = place_det_data["website"] ? place_det_data["website"] : "No website"
        console.log(photo)
        console.log(place_det_data["formatted_address"])
        console.log(place_det_data["name"])
        console.log(price_level)
        console.log(website)

        const { data, error } = await supabase.rpc('create_google_activity', {
            p_address : place_det_data["formatted_address"], 
            p_name : place_det_data["name"], 
            p_photo_reference : photo, 
            p_place_id : place_id, 
            p_price_level : price_level, 
            p_trip_id : "2fd752db-4e0a-4580-946f-068ffdb7197f", 
            p_website : website
        })
        console.log(data)
        res.status(200).json({message: "Successfully created activity", data})

    } catch (error) {
        console.error('Error fetching place ID:', error.message);
        res.status(500).json(error)
    }
    
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
