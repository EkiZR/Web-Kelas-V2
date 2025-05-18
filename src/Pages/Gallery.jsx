import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ButtonSend from "../components/ButtonSend"
import ButtonRequest from "../components/ButtonRequest"
import Modal from "@mui/material/Modal"
import { IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useSpring, animated } from "@react-spring/web"

const Carousel = () => {
	// Array manual untuk gambar-gambar
	const [images] = useState([
		"/(1).jpg",
		"/(2).jpg",
		"/(3).jpg",
		"/(4).jpg",
		"/(5).jpg",
		"/(6).jpg",
		"/(7).jpg",
		"/(8).jpg",
		"/(9).jpg",
		"/(10).jpg",
		"/(11).jpg",
		"/(12).jpg",
		"/(13).jpg",
		"/(14).jpg",
		"/(15).jpg",

		
		
		// Tambahkan path gambar sesuai kebutuhan
	])
	
	const [open, setOpen] = useState(false)
	const [selectedImage, setSelectedImage] = useState(null)

	const modalFade = useSpring({
		opacity: open ? 1 : 0,
		config: { duration: 300 },
	})

	const settings = {
		centerMode: true,
		centerPadding: "30px",
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "50px",
					slidesToShow: 1,
					dots: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "70px",
					slidesToShow: 1,
					dots: false,
				},
			},
		],
	}

	const handleImageClick = (imageUrl) => {
		setSelectedImage(imageUrl)
		setOpen(true)
	}

	const handleCloseModal = () => {
		setOpen(false)
		setSelectedImage(null)
	}

	return (
		<>
			<div className="text-white opacity-60 text-base font-semibold mb-4 mx-[10%] mt-10 lg:text-center lg:text-3xl lg:mb-8" id="Gallery">
				Class Gallery
			</div>
			<div id="Carousel" className="overflow-hidden">
				<Slider {...settings}>
					{images.map((imageUrl, index) => (
						<img
							key={index}
							src={imageUrl}
							alt={`Image ${index}`}
							onClick={() => handleImageClick(imageUrl)}
							style={{ cursor: "pointer" }}
						/>
					))}
				</Slider>
			</div>

		{/* 	<div className="flex justify-center items-center gap-6 text-base mt-5 lg:mt-8">
				<ButtonSend />
				<ButtonRequest />
			</div>
 */}
			<Modal
				open={open}
				onClose={handleCloseModal}
				aria-labelledby="image-modal"
				aria-describedby="image-modal-description"
				className="flex justify-center items-center">
				<animated.div
					style={{
						...modalFade,
						maxWidth: "90vw",
						maxHeight: "auto",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						position: "relative",
					}}
					className="p-2 rounded-lg">
					<IconButton
						edge="end"
						color="inherit"
						onClick={handleCloseModal}
						aria-label="close"
						sx={{
							position: "absolute",
							top: "12px",
							right: "23px",
							backgroundColor: "white",
							borderRadius: "50%",
						}}>
						<CloseIcon />
					</IconButton>
					<div className="w-full">
						<img
							src={selectedImage}
							alt="Selected Image"
							style={{ maxWidth: "100%", maxHeight: "100vh" }}
						/>
					</div>
				</animated.div>
			</Modal>
		</>
	)
}

export default Carousel