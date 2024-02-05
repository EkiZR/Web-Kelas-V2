import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Slider from "@mui/material/Slider"
import { getFirestore, collection, addDoc } from "firebase/firestore"

const units = ["/Rating/1.png", "/Rating/2.png", "/Rating/3.png", "/Rating/4.png", "/Rating/5.png"]

// Inisialisasi Firestore
const db = getFirestore()

export default function Rating() {
    const [value, setValue] = React.useState(() => {
        // Cek jika ada nilai peringkat terakhir di localStorage
        const lastRating = localStorage.getItem("lastRating")
        return lastRating ? parseFloat(lastRating) : 5.0
    })

    const [remainingRatings, setRemainingRatings] = React.useState(() => {
        // Cek jika ada informasi jumlah rating yang tersisa di localStorage
        const remaining = localStorage.getItem("remainingRatings")
        return remaining ? parseInt(remaining, 10) : 3 // Defaultnya adalah 3 kali rating
    })

    const [isSubmitting, setIsSubmitting] = React.useState(false)

    const handleChange = (event, newValue) => {
        if (typeof newValue === "number" && remainingRatings > 0) {
            setValue(newValue)
        }
    }

    const handleSliderChange = async (event, newValue) => {
        if (typeof newValue === "number" && remainingRatings > 0 && !isSubmitting) {
            setIsSubmitting(true)
            setValue(newValue)

            try {
                const docRef = await addDoc(collection(db, "ratings"), {
                    value: newValue,
                    timestamp: new Date(),
                })
                console.log("Document written with ID: ", docRef.id)

                // Mengurangi sisa rating yang tersisa
                const newRemainingRatings = remainingRatings - 1
                setRemainingRatings(newRemainingRatings)

                // Simpan nilai rating terakhir ke localStorage
                localStorage.setItem("lastRating", newValue.toString())
                // Simpan informasi jumlah rating yang tersisa ke localStorage
                localStorage.setItem("remainingRatings", newRemainingRatings.toString())
            } catch (e) {
                console.error("Error adding document: ", e)
            } finally {
                setIsSubmitting(false)
            }
        }
    }

    const imgIndex = Math.min(Math.floor(value / 2), units.length - 1) // Mengambil indeks terakhir jika melebihi panjang array

    return (
        <Box sx={{ width: 307 }}>
            <Typography id="FixTextPoppins" gutterBottom>
                <div className="flex justify-between text-white relative top-3">
                    <div className="font-bold text-xs">RATE US</div>
                    <div className="font-bold text-xs">{value.toFixed(1)}</div>
                </div>
            </Typography>
            <div className="flex justify-center mb-3">
                <img
                    src={units[imgIndex]}
                    alt={`Rating ${imgIndex + 1}`}
                    className="w-10 h-10"
                    id="ImgRating"
                />
            </div>
            <Slider
                value={value}
                min={0}
                step={0.1}
                max={10}
                color="secondary"
                valueLabelDisplay="off"
                onChange={handleChange}
                onChangeCommitted={handleSliderChange}
                disabled={remainingRatings === 0 || isSubmitting}
                sx={{
                    "& .MuiSlider-thumb": {
                        height: "1.5rem",
                        width: "1.5rem",
                        border: "none",
                        backgroundColor: "white",
                        boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                        "&:hover, &.Mui-focusVisible": {
                            boxShadow: "0 0 15px rgba(255, 255, 255, 1)",
                        },
                    },
                    "& .MuiSlider-valueLabel": {
                        backgroundColor: "transparent",
                    },
                }}
            />
        </Box>
    )
}
