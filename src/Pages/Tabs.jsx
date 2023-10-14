import React, { useEffect } from "react"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { useTheme } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import StrukturKelas from "./StrukturKelas"
import Schedule from "./Schedule"
import AOS from "aos"
import "aos/dist/aos.css"

// Fungsi TabPanel adalah komponen React yang digunakan untuk menampilkan konten tab.
function TabPanel(props) {
	// useEffect digunakan untuk inisialisasi AOS ketika komponen pertama kali dimuat.
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])

	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}>
			{value === index && (
				<Box sx={{ p: 0 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
}

// Fungsi a11yProps digunakan untuk memberikan atribut aksesibilitas ke tab.
function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	}
}

// Komponen utama yang akan digunakan untuk menampilkan tab.
export default function FullWidthTabs() {
	const theme = useTheme()
	const [value, setValue] = React.useState(0)

	// handleChange digunakan untuk mengubah nilai tab yang aktif.
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	// handleChangeIndex digunakan untuk mengubah indeks tab yang aktif.
	const handleChangeIndex = (index) => {
		setValue(index)
	}

	return (
		<div className="md:px-[10%]  md:mt-5 mt-8" id="Tabs" data-aos="fade-up" data-aos-duration="800" >
			<div
				className="font-medium text-[1.6rem] md:text-[1.8rem] relative md:top-[2.8rem] top-[2.7rem] text-center text-white"
				id="Glow">
				&
			</div>
			<Box sx={{ width: "100%" }}>
				<AppBar
					position="static"
					sx={{ bgcolor: "transparent", boxShadow: "none" }}
					className="px-[10%]">
					<Tabs
						value={value}
						onChange={handleChange}
						textColor="inherit"
						indicatorColor="inherit"
						variant="scrollable"
						scrollButtons="auto"
						sx={{
							display: "flex",
							justifyContent: "center",
							width: "auto",
							margin: "0 auto",
							"& .MuiTabs-indicator": {
								borderBottom: "2px solid white", 
							},
						}}
						className="font-medium text-white text-2xl text-center mt-16"
						id="Glow">
						<Tab
							label="Structure"
							{...a11yProps(0)}
							sx={{
								fontWeight: "medium",
								color: "white",
								fontSize: ["1.5rem"],
								textTransform: "capitalize",
								fontFamily: '"Poppins", sans-serif',
								padding: "0.5rem",
								marginRight: "0.7rem",
							}}
						
							className="font-medium text-white text-2xl text-center mt-16 "
							id="Glow"
						/>

						<Tab
							label="Schedule"
							{...a11yProps(1)}
							sx={{
								fontWeight: "medium",
								color: "white",
								fontSize: ["1.5rem"],
								textTransform: "capitalize",
								fontFamily: '"Poppins", sans-serif',
								padding: "0.5rem",
								marginLeft: "0.7rem",
							}}
							// className untuk menentukan gaya tab.
							className="font-medium text-white text-2xl text-center mt-16 "
							id="Glow"
						/>
					</Tabs>
				</AppBar>
				<SwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={value}
					onChangeIndex={handleChangeIndex}>
					<TabPanel value={value} index={0} dir={theme.direction}>
						<div>
							<StrukturKelas />
						</div>
					</TabPanel>
					<TabPanel value={value} index={1} dir={theme.direction}>
						<div>
							<Schedule />
						</div>
					</TabPanel>
				</SwipeableViews>
			</Box>
		</div>
	)
}
